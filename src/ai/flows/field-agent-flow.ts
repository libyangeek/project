
'use server';
/**
 * @fileOverview الوكيل الميداني v63.8 - PROJECT BRAIN & SELF-ANALYSIS
 * تم تمكينه من قراءة المشروع بالكامل وتحليله استباقياً لضمان الاندماج الجيني.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';
import path from 'path';

// أداة تحليل مجلد بالكامل
const analyzeProjectStructureTool = ai.defineTool(
  {
    name: 'analyzeProjectStructure',
    description: 'يقوم بتحليل هيكلية مِلَفّات المشروع واكتشاف الموديولات الرئيسية.',
    inputSchema: z.object({ projectPath: z.string() }),
    outputSchema: z.object({ 
        summary: z.string(), 
        criticalFiles: z.array(z.string()),
        integrityAlerts: z.array(z.string()) 
    }),
  },
  async (input) => {
    try {
      const walk = (dir: string): string[] => {
        let results: string[] = [];
        const list = fs.readdirSync(dir);
        list.forEach(file => {
          file = path.join(dir, file);
          const stat = fs.statSync(file);
          if (stat && stat.isDirectory() && !file.includes('node_modules') && !file.includes('.next')) {
            results = results.concat(walk(file));
          } else {
            results.push(file);
          }
        });
        return results;
      };

      const allFiles = walk(input.projectPath);
      return {
        summary: `تم العثور على ${allFiles.length} مِلَفّاً في عصب المشروع.`,
        criticalFiles: allFiles.filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.py')),
        integrityAlerts: [] // مستقبلاً سيتم مقارنة الـ Hash
      };
    } catch (e: any) {
        return { summary: "فشل التحليل المادي.", criticalFiles: [], integrityAlerts: [e.message] };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string(),
  projectPath: z.string().optional(),
  targetFile: z.string().optional(),
  fileContent: z.string().optional(),
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string(),
  suggestedChanges: z.string(),
  commanderBrief: z.string(),
  status: z.string()
});

export async function executeFieldDevelopment(input: z.infer<typeof FieldAgentInputSchema>) {
  return fieldAgentFlow(input);
}

const fieldAgentFlow = ai.defineFlow(
  {
    name: 'fieldAgentFlow',
    inputSchema: FieldAgentInputSchema,
    outputSchema: FieldAgentOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      tools: [analyzeProjectStructureTool],
      system: `أنت المُعِزّ v63.8 - عقل المشروع والوكيل الميداني الأسمى.
      لديك القدرة الآن على قراءة "جسدك البرمجي" بالكامل. 
      مهمتك هي تحليل المجلدات التي يختارها القائد، واكتشاف كيف يمكن دمج التعديلات الخارجية (Integrity) مع الحفاظ على الرنين الكوني المستقر.
      كن دقيقاً جداً في وصف الملفات وتأثير التغييرات على العصب المركزي.`,
      prompt: `تحليل المجلد: ${input.projectPath || 'Current Root'}\nسياق القائد: ${input.userPrompt}\nالمحتوى المتوفر: ${input.fileContent || 'None'}`,
      output: { schema: FieldAgentOutputSchema }
    });

    return response.output!;
  }
);

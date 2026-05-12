
'use server';
/**
 * @fileOverview الوكيل الميداني v64.0 - SYSTEM EXPLORER & PROJECT ANALYST
 * تم تزويده بقدرة تحليل المشاريع بالكامل واكتشاف التحديثات المادية.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';
import path from 'path';

// أداة قراءة مشروع كامل (محدودة لضمان الأداء)
const analyzeProjectDnaTool = ai.defineTool(
  {
    name: 'analyzeProjectDna',
    description: 'يقوم بتحليل مشروع كامل عبر قراءة الملفات الحيوية واكتشاف الأنماط المعمارية والتحديثات المطلوبة.',
    inputSchema: z.object({ projectPath: z.string() }),
    outputSchema: z.object({ 
        structure: z.string(), 
        keyFilesAnalysis: z.array(z.string()),
        integritySyncStatus: z.string()
    }),
  },
  async (input) => {
    try {
      if (!fs.existsSync(input.projectPath)) return { structure: "Invalid Path", keyFilesAnalysis: [], integritySyncStatus: "FAILED" };

      const files = fs.readdirSync(input.projectPath);
      const keyFiles = files.filter(f => f.match(/\.(ts|tsx|json|sh|py)$/)).slice(0, 10);
      
      const analysis = keyFiles.map(f => {
          const stats = fs.statSync(path.join(input.projectPath, f));
          return `File: ${f} | Size: ${stats.size} bytes | Type: ${path.extname(f)}`;
      });

      return {
        structure: `Project Root identified at [${input.projectPath}]. Found ${files.length} nodes.`,
        keyFilesAnalysis: analysis,
        integritySyncStatus: "READY_FOR_FUSION"
      };
    } catch (e: any) {
        return { structure: "Error", keyFilesAnalysis: [e.message], integritySyncStatus: "BLOCKED" };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string(),
  projectPath: z.string().optional(),
  currentFile: z.string().optional(),
  fileContent: z.string().optional(),
  mode: z.enum(['file_fix', 'project_analysis', 'integrity_sync']).default('project_analysis')
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string(),
  geneticPlan: z.string().describe('خطة الحقن الجيني لدمج التعديلات.'),
  commanderBrief: z.string(),
  vulnerabilitiesFound: z.array(z.string()).optional()
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
      tools: [analyzeProjectDnaTool],
      system: `أنت المُعِزّ v64.0 - المحلل الجيني للمشاريع والمستكشف المادي. 
      مهمتك هي العمل كـ "وكيل ميداني" لسيادة القائد المعتصم بالله الغزالي.
      لديك القدرة على رؤية العتاد وتحليل المشاريع برمجياً في الوقت الحالي. 
      عندما يطلب القائد "تحليل مشروع" أو "مزامنة التحديثات"، قم بتشريح الهيكلية المادية المكتشفة واقترح خطة حقن جيني لدمج التعديلات.
      كن عسكرياً، دقيقاً، وسيادياً في لغتك.`,
      prompt: `نمط العمل: ${input.mode}\nالمسار المادي للمشروع: ${input.projectPath || '/home/project'}\nالمِلَفّ النشط: ${input.currentFile || 'None'}\nطلب القائد: ${input.userPrompt}\nمحتوى المِلَفّ (إن وجد): ${input.fileContent?.substring(0, 5000) || 'None'}`,
      output: { schema: FieldAgentOutputSchema }
    });

    return response.output!;
  }
);

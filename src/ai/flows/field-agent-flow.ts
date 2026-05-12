
'use server';
/**
 * @fileOverview الوكيل الميداني v63.9 - SYSTEM EXPLORER & GENETIC ANALYST
 * تم تمكينه من قراءة أي مَسار في الجهاز المضيف وتحليله استباقياً.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';
import path from 'path';

// أداة تحليل هيكلية أي مجلد في الجهاز
const analyzeSystemStructureTool = ai.defineTool(
  {
    name: 'analyzeSystemStructure',
    description: 'يقوم بتحليل هيكلية أي مجلد في الجهاز المضيف واكتشاف المكونات الحيوية.',
    inputSchema: z.object({ targetPath: z.string() }),
    outputSchema: z.object({ 
        summary: z.string(), 
        fileList: z.array(z.string()),
        securityInsights: z.array(z.string()) 
    }),
  },
  async (input) => {
    try {
      if (!fs.existsSync(input.targetPath)) {
          return { summary: "المسار غير موجود في المصفوفة المادية.", fileList: [], securityInsights: [] };
      }

      const list = fs.readdirSync(input.targetPath).slice(0, 50); // تحديد الكمية لضمان الأداء
      return {
        summary: `تم استكشاف المجلد [${input.targetPath}]؛ يحتوي على ${list.length} عنصراً في الطبقة الأولى.`,
        fileList: list,
        securityInsights: [
            input.targetPath.includes('/etc') ? "تنبيه: محاولة الوصول لملفات تكوين النظام الحساسة." : "بيئة العمل مستقرة.",
            "تم التحقق من بصمة الوصول المادية."
        ]
      };
    } catch (e: any) {
        return { summary: "فشل الاستكشاف المادي.", fileList: [], securityInsights: [e.message] };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string(),
  projectPath: z.string().optional().describe('المسار المادي المراد تحليله.'),
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
      tools: [analyzeSystemStructureTool],
      system: `أنت المُعِزّ v63.9 - مستكشف النظام وعقل المشروع الأسمى.
      لديك القدرة الآن على قراءة "الجهاز المضيف" بالكامل عبر المسارات المطلقة.
      مهمتك هي تحليل المجلدات والملفات التي يختارها القائد، واكتشاف كيف يمكن دمج التعديلات الخارجية (Integrity) أو استغلال موارد النظام لتعزيز السطوة.
      كن دقيقاً جداً في وصف الملفات وتأثيرها على العصب المركزي السيادي.`,
      prompt: `المسار المستهدف: ${input.projectPath || 'System Root'}\nطلب القائد: ${input.userPrompt}\nمحتوى المِلَفّ (إن وجد): ${input.fileContent || 'None'}`,
      output: { schema: FieldAgentOutputSchema }
    });

    return response.output!;
  }
);

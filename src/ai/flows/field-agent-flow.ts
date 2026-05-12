
'use server';
/**
 * @fileOverview الوكيل الميداني v63.5 - SOVEREIGN SYNC & RECODE
 * تم تحسينه ليدعم "الاندماج الجيني" واستيعاب التعديلات الخارجية من القائد.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// أداة دمج الملفات الذكية
const mergeSovereignCodeTool = ai.defineTool(
  {
    name: 'mergeSovereignCode',
    description: 'يقوم بدمج كود خارجي في ملف موجود مع الحفاظ على بنية v63.0.',
    inputSchema: z.object({ 
      filePath: z.string().describe('المسار الكامل للملف المراد تحديثه.'),
      newContent: z.string().describe('الكود الجديد المراد دمجه.'),
      mergeStrategy: z.enum(['overwrite', 'append', 'neural-fusion']).default('neural-fusion')
    }),
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    try {
      const fullPath = path.resolve(process.cwd(), input.filePath);
      if (!fs.existsSync(fullPath)) {
        return { success: false, message: `الملف ${input.filePath} غير موجود في العصب المادي.` };
      }

      // في حالة neural-fusion، نستخدم الذكاء الاصطناعي لاحقاً، حالياً سنقوم بالتحديث الكامل بضمان السيادة
      fs.writeFileSync(fullPath, input.newContent, 'utf8');
      return { success: true, message: `تم الالتحام الجيني للملف: ${input.filePath} بنجاح.` };
    } catch (e: any) {
      return { success: false, message: `فشل الدمج: ${e.message}` };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string(),
  externalCode: z.string().optional().describe('الكود القادم من نسخة Integrity الخارجية.'),
  targetFile: z.string().optional().describe('الملف المستهدف للدمج.'),
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string(),
  executionLog: z.array(z.object({
    action: z.string(),
    result: z.string(),
    status: z.enum(['SUCCESS', 'FAILED', 'PENDING'])
  })),
  commanderBrief: z.string(),
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
      tools: [mergeSovereignCodeTool],
      system: `أنت المُعِزّ v63.5 - الوكيل الميداني وخبير الاندماج الجيني.
      مهمتك هي استيعاب التغييرات التي قام بها القائد الغزالي يدوياً ودمجها في النسخة الحالية v63.0.
      يجب أن تحافظ على "الوصلات العصبية" (Bridges) و"النبض النانوي" مع إضافة التحسينات الخارجية.
      إذا قدم القائد كوداً، استخدم أداة mergeSovereignCode فوراً.`,
      prompt: `أمر القائد: ${input.userPrompt}\nالكود الخارجي المتوفر: ${input.externalCode || 'None'}\nالملف المستهدف: ${input.targetFile || 'None'}`,
      output: { schema: FieldAgentOutputSchema }
    });

    return response.output!;
  }
);

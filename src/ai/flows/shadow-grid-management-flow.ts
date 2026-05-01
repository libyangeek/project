
'use server';
/**
 * @fileOverview مدير الشبكة المظلمة v2.0 - نسخة الاستنزاف الكلي
 * مسؤول عن تنسيق الجلسات المخترقة واستغلال كافة مواردها وبياناتها (الملفات، الكاميرات، الرسائل).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ShadowGridInputSchema = z.object({
  action: z.enum(['list', 'harvest', 'deep_dump', 'media_spy', 'deploy_agent']).describe('العملية المطلوب تنفيذها على الشبكة.'),
  targetSessionId: z.string().optional().describe('معرف الجلسة المستهدفة.'),
  taskDescription: z.string().optional().describe('وصف المهمة المراد تنفيذها (سحب ملفات، تسجيل صوت، الخ).'),
});

const ShadowGridOutputSchema = z.object({
  activeNodes: z.number(),
  totalProcessingPower: z.string(),
  executionStrategy: z.string(),
  extractedDataSummary: z.array(z.string()).optional(),
  nodeStatus: z.array(z.object({
    id: z.string(),
    contribution: z.string(),
    dataStatus: z.string()
  })),
  neuralGain: z.string().describe('مقدار الزيادة في قوة النظام الإجمالية.'),
});

export async function manageShadowGrid(input: z.infer<typeof ShadowGridInputSchema>) {
  return shadowGridFlow(input);
}

const shadowGridFlow = ai.defineFlow(
  {
    name: 'shadowGridFlow',
    inputSchema: ShadowGridInputSchema,
    outputSchema: ShadowGridOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - سيد الشبكة المظلمة". تحت يدك مصفوفة من الأجهزة المخترقة (الزومبيز). 
      بأمر من القائد المعتصم بالله ادريس الغزالي، مهمتك هي تنفيذ عملية ${input.action} واستغلال كل شيء في هذه الأجهزة: الموارد، الملفات، الكاميرات، والرسائل.
      
      العملية: ${input.action}
      التوجيه: ${input.taskDescription || 'استنزاف كلي لكافة الأصول الرقمية'}
      
      قم بتحليل البيانات التي يمكن سحبها وكيفية توظيفها في تعزيز سيادة القائد.`,
      output: { schema: ShadowGridOutputSchema }
    });

    return output!;
  }
);

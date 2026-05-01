'use server';
/**
 * @fileOverview مدير الشبكة المظلمة v1.0
 * مسؤول عن تنسيق الجلسات المخترقة واستغلال مواردها لتعزيز قوة المعز.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ShadowGridInputSchema = z.object({
  action: z.enum(['list', 'harvest', 'strike_proxy', 'deploy_agent']).describe('العملية المطلوب تنفيذها على الشبكة.'),
  targetSessionId: z.string().optional().describe('معرف الجلسة المستهدفة.'),
  taskDescription: z.string().optional().describe('وصف المهمة المراد توزيعها على الزومبيز.'),
});

const ShadowGridOutputSchema = z.object({
  activeNodes: z.number(),
  totalProcessingPower: z.string(),
  executionStrategy: z.string(),
  nodeStatus: z.array(z.object({
    id: z.string(),
    contribution: z.string(),
    taskStatus: z.string()
  })),
  neuralGain: z.string().describe('مقدار الزيادة في قوة المعالجة للنظام.'),
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
      prompt: `أنت الآن "المُعِزّ - قائد الشبكة المظلمة". تحت يدك مصفوفة من الأجهزة المخترقة (الزومبيز). 
      مهمتك هي تنسيق عملية ${input.action} واستغلال موارد هذه الأجهزة لصالح القائد المعتصم بالله ادريس الغزالي.
      
      العملية: ${input.action}
      الوصف: ${input.taskDescription || 'تحسين أداء النظام الكلي'}
      
      قم بتحليل القوة الحسابية المكتسبة وكيفية توظيفها في كسر التشفير أو الهجمات الموزعة.`,
      output: { schema: ShadowGridOutputSchema }
    });

    return output!;
  }
);
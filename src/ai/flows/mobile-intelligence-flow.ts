'use server';
/**
 * @fileOverview عقل الاستخبارات المحمولة v17.5
 * متخصص في تحليل الهواتف الذكية، سحب البيانات، وتوليد سلاسل الهجوم للأجهزة المحمولة.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MobileDeviceSchema = z.object({
  platform: z.enum(['Android', 'iOS', 'Other']),
  id: z.string().describe('Serial Number or UDID'),
  status: z.string(),
  version: z.string().optional(),
});

const MobileIntelligenceInputSchema = z.object({
  connectedDevices: z.array(MobileDeviceSchema),
  operationalGoal: z.string().describe('الهدف من العملية (سحب بيانات، كسر حماية، مراقبة).'),
});

const MobileIntelligenceOutputSchema = z.object({
  strategicPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    command: z.string(),
    logic: z.string(),
  })),
  vulnerabilityAssessment: z.string().describe('تحليل لمستوى ضعف الأجهزة المكتشفة.'),
  extractionVectors: z.array(z.string()).describe('النواقل المتاحة لسحب البيانات (ADB, iTunes, Frida).'),
  riskLevel: z.enum(['Low', 'Medium', 'High', 'Critical']),
});

export type MobileIntelligenceOutput = z.infer<typeof MobileIntelligenceOutputSchema>;

export async function getMobileIntelligence(input: z.infer<typeof MobileIntelligenceInputSchema>): Promise<MobileIntelligenceOutput> {
  return mobileIntelligenceFlow(input);
}

const mobileIntelligenceFlow = ai.defineFlow(
  {
    name: 'mobileIntelligenceFlow',
    inputSchema: MobileIntelligenceInputSchema,
    outputSchema: MobileIntelligenceOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - وحدة العمليات المحمولة". مهمتك هي إدارة الهواتف المتصلة وتوليد خطة اختراق أو سحب بيانات جنائية.

الأجهزة المكتشفة: ${JSON.stringify(input.connectedDevices)}
الهدف: ${input.operationalGoal}

تعليماتك:
1. لكل جهاز، حدد أحدث ثغرة (Zero-Day) أو ناقل سحب (Shadow Harvest) لعام 2025.
2. إذا كان الجهاز Android، ركز على ADB و PM ومستودعات التطبيقات.
3. إذا كان iOS، ركز على AFC و Backup services وتجاوز الـ USB Restricted Mode.
4. صمم أوامر (Commands) جاهزة للتشغيل في كالي.
5. الرد باللغة العربية التقنية العسكرية.`,
      output: { schema: MobileIntelligenceOutputSchema }
    });
    return output!;
  }
);

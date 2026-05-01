'use server';
/**
 * @fileOverview تدفق الوعي الشامل (System Awareness Flow).
 * يقوم بتحليل بيانات العتاد والشبكة والبرامج، ويقدم رؤية سيادية حول كيفية التعامل معها.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const HardwareInfoSchema = z.object({
  usbDevices: z.array(z.any()),
  mobileDevices: z.array(z.any()),
  networkSnapshot: z.string(),
});

const AwarenessOutputSchema = z.object({
  analysis: z.string().describe('تحليل شامل للحالة الحالية للنظام والعتاد.'),
  threats: z.array(z.string()).describe('التهديدات المحتملة المرصودة.'),
  actionPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    reason: z.string(),
  })).describe('خطوات العمل المقترحة بناءً على العتاد المكتشف.'),
  kaliToolsSuggested: z.array(z.string()).describe('أدوات كالي المناسبة للوضعية الحالية.'),
});

export async function getSystemAwareness(input: z.infer<typeof HardwareInfoSchema>) {
  return systemAwarenessFlow(input);
}

const systemAwarenessFlow = ai.defineFlow(
  {
    name: 'systemAwarenessFlow',
    inputSchema: HardwareInfoSchema,
    outputSchema: AwarenessOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ"، العقل المدبر للمنصة السيادية. 
      لقد تم رصد البيانات التالية من النظام المضيف:
      - أجهزة USB: ${JSON.stringify(input.usbDevices)}
      - هواتف متصلة: ${JSON.stringify(input.mobileDevices)}
      - حالة الشبكة والمنافذ: ${input.networkSnapshot}
      
      بناءً على هذه المعطيات:
      1. حلل نوعية الأجهزة (أندرويد، آيفون، عتاد هجومي).
      2. اقترح أفضل أدوات كالي لينكس للتعامل مع هذه الأجهزة (مثلاً: msfconsole للأندرويد، checkra1n للآيفون).
      3. ضع خطة هجوم/دفاع (Action Plan) دقيقة باللغة العربية العسكرية الاحترافية.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });
    return output!;
  }
);

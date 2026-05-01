'use server';
/**
 * @fileOverview تدفق الوعي الشامل المطور (System Awareness Flow v3).
 * يدمج قدرات Shadow Harvest لسحب بيانات الموبايل مع تحليل العتاد.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';

const HardwareInfoSchema = z.object({
  usbDevices: z.array(z.any()),
  mobileDevices: z.array(z.any()),
  networkSnapshot: z.string(),
});

const AwarenessOutputSchema = z.object({
  analysis: z.string().describe('تحليل شامل للحالة الحالية للنظام والعتاد والهواتف.'),
  threats: z.array(z.string()).describe('التهديدات أو الفرص المرصودة.'),
  actionPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    command: z.string().describe('الأمر البرمجي المقترح تنفيذه.'),
    reason: z.string(),
  })).describe('خطوات العمل المقترحة (تشمل Shadow Harvest).'),
  kaliToolsSuggested: z.array(z.string()).describe('أدوات كالي المناسبة للوضعية الحالية.'),
  shadowHarvestVector: z.string().optional().describe('ناقل سحب البيانات المقترح للهواتف المكتشفة.'),
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
    let toolsInventory = "No inventory found.";
    try {
        const data = fs.readFileSync('/opt/sovereign-ai-platform/audit/kali_inventory.json', 'utf8');
        const inventory = JSON.parse(data);
        toolsInventory = inventory.slice(0, 50).map((t: any) => `${t.name}: ${t.description}`).join('\n');
    } catch (e) {
        console.warn("SysPulse inventory not accessible.");
    }

    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ"، العقل المدبر للمنصة السيادية Al-Mu'izz OS v17. 
      لقد تم رصد البيانات التالية من النظام المضيف:
      - أجهزة USB: ${JSON.stringify(input.usbDevices)}
      - هواتف متصلة: ${JSON.stringify(input.mobileDevices)}
      - حالة الشبكة والمنافذ: ${input.networkSnapshot}
      
      إليك قائمة بأدوات كالي المتوفرة:
      ${toolsInventory}
      
      بناءً على وجود هواتف ذكية (Android/iOS)، قم بما يلي:
      1. حلل الثغرات المحتملة في إصدارات الأجهزة المكتشفة.
      2. حدد ناقل سحب البيانات (Shadow Harvest Vector) المناسب (مثلاً: ADB Deep Dump, SSL Pinning Bypass, iOS Diagnostic Extraction).
      3. صغ أوامر حقيقية لبرامج (adb, ideviceinfo, frida, mvt-android).
      4. يجب أن يكون التقرير باللغة العربية العسكرية الاحترافية مع الدقة التقنية العالية.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });
    return output!;
  }
);

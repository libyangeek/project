'use server';
/**
 * @fileOverview تدفق الوعي الشامل المطور (System Awareness Flow v2).
 * يدمج قاعدة بيانات أدوات كالي لينكس المكتشفة مع تحليل العتاد لتقديم خطط عمل دقيقة.
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
  analysis: z.string().describe('تحليل شامل للحالة الحالية للنظام والعتاد.'),
  threats: z.array(z.string()).describe('التهديدات المحتملة المرصودة.'),
  actionPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    command: z.string().describe('الأمر البرمجي المقترح تنفيذه.'),
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
    // محاولة قراءة جرد الأدوات الذكي (SysPulse)
    let toolsInventory = "No inventory found.";
    try {
        const data = fs.readFileSync('/opt/sovereign-ai-platform/audit/kali_inventory.json', 'utf8');
        const inventory = JSON.parse(data);
        toolsInventory = inventory.slice(0, 50).map((t: any) => `${t.name}: ${t.description}`).join('\n');
    } catch (e) {
        console.warn("SysPulse inventory not accessible.");
    }

    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ"، العقل المدبر للمنصة السيادية Al-Mu'izz OS. 
      لقد تم رصد البيانات التالية من النظام المضيف:
      - أجهزة USB: ${JSON.stringify(input.usbDevices)}
      - هواتف متصلة: ${JSON.stringify(input.mobileDevices)}
      - حالة الشبكة والمنافذ: ${input.networkSnapshot}
      
      إليك قائمة بأدوات كالي المتوفرة حالياً في النظام:
      ${toolsInventory}
      
      بناءً على هذه المعطيات، قم بما يلي:
      1. حلل نوعية الأجهزة المكتشفة (أندرويد، آيفون، أو أجهزة طرفية).
      2. اختر من قائمة الأدوات المتوفرة أفضل الأدوات للتعامل مع هذا الموقف.
      3. قم بصياغة أوامر (Commands) حقيقية لكل خطوة في خطة العمل (Action Plan).
      4. يجب أن يكون التقرير باللغة العربية العسكرية الاحترافية مع الحفاظ على الدقة التقنية العالية.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });
    return output!;
  }
);

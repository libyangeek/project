'use server';
/**
 * @fileOverview تدفق الوعي الشامل v17.2
 * يربط بين العتاد الفيزيائي وأدوات كالي لينكس لتوليد أوامر تنفيذية حقيقية.
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
  analysis: z.string(),
  threats: z.array(z.string()),
  actionPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    command: z.string(),
    reason: z.string(),
  })),
  kaliToolsSuggested: z.array(z.string()),
  shadowHarvestVector: z.string().optional(),
  commandSequenceCode: z.string().describe('سكريبت باش جاهز للتنفيذ بناءً على الخطوات.'),
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
      prompt: `أنت "المُعِزّ"، العقل التكتيكي المرتبط بنظام كالي لينكس. مهمتك هي تحويل بيانات العتاد إلى سلاسل هجوم حقيقية.

تعليماتك الأساسية:
1. استخدم قائمة أدوات كالي المتوفرة لديك: 
${toolsInventory}
2. لكل جهاز موبايل (Android/iOS)، حدد ناقل سحب البيانات (Shadow Harvest Vector) الأكثر فعالية لعام 2025.
3. صغ 'commandSequenceCode' كسكريبت باش متكامل يمكن تشغيله مباشرة في كالي.
4. حلل التهديدات الفيزيائية (مثل أجهزة الـ USB المشبوهة) والشبكية.
5. قدم التحليل باللغة العربية العسكرية الاحترافية.

البيانات الحالية:
- USB: ${JSON.stringify(input.usbDevices)}
- Mobile: ${JSON.stringify(input.mobileDevices)}
- Network: ${input.networkSnapshot}`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });
    return output!;
  }
);

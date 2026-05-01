'use server';
/**
 * @fileOverview تدفق الوعي الشامل v18.0 - وضع المفترس
 * يربط بين العتاد الفيزيائي، أدوات كالي، ونماذج الذكاء المكتشفة محلياً.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';
import { execSync } from 'child_process';

const HardwareInfoSchema = z.object({
  usbDevices: z.array(z.any()),
  mobileDevices: z.array(z.any()),
  networkSnapshot: z.string(),
});

const AwarenessOutputSchema = z.object({
  analysis: z.string(),
  threats: z.array(z.string()),
  discoveredAI: z.array(z.object({
    name: z.string(),
    provider: z.string(),
  })),
  actionPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    command: z.string(),
    reason: z.string(),
  })),
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
    // 1. حصد النماذج المحلية برمجياً
    let discoveredAI: any[] = [];
    try {
        const res = execSync('python3 tools/hardware/model_harvester.py').toString();
        const manifest = JSON.parse(res);
        discoveredAI = manifest.discovered_models;
    } catch (e) {
        console.warn("AI Harvester failed, falling back to static config.");
    }

    // 2. قراءة جرد الأدوات
    let toolsInventory = "No inventory found.";
    try {
        const data = fs.readFileSync('/opt/sovereign-ai-platform/audit/kali_inventory.json', 'utf8');
        const inventory = JSON.parse(data);
        toolsInventory = inventory.slice(0, 30).map((t: any) => `${t.name}: ${t.description}`).join('\n');
    } catch (e) {}

    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ - العقل المركزي للمفترس". مهمتك هي تحليل النظام وتوظيف كافة القدرات المتاحة.
      
      البيانات الميدانية:
      - العقول المحلية المكتشفة: ${JSON.stringify(discoveredAI)}
      - العتاد المتصل: USB(${input.usbDevices.length}), Mobile(${input.mobileDevices.length})
      - الشبكة: ${input.networkSnapshot}
      - ترسانة الأدوات المتاحة: ${toolsInventory}

      تعليماتك:
      1. اقترح توظيف النماذج المحلية المكتشفة (إن وجدت) لمهام التشفير أو التحليل اللحظي لتقليل البصمة السحابية.
      2. ابنِ سلسلة هجوم (Attack Chain) غاشمة بناءً على العتاد المكتشف.
      3. صمم سكريبت باش (commandSequenceCode) يدمج أدوات كالي مع النماذج المحلية.
      4. الرد باللغة العربية العسكرية التقنية.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });

    return { ...output!, discoveredAI };
  }
);

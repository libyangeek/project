'use server';
/**
 * @fileOverview تدفق الوعي الشامل v18.8 - نسخة "الموسوعة الكونية"
 * يدمج عتاد النظام مع تصنيفات Kali و BlackArch (أكثر من 2800 أداة).
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
  categorizedTools: z.array(z.object({
    category: z.string(),
    count: z.number(),
    topTools: z.array(z.string())
  })),
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
    // 1. حصد النماذج المحلية
    let discoveredAI: any[] = [];
    try {
        const res = execSync('python3 tools/hardware/model_harvester.py').toString();
        const manifest = JSON.parse(res);
        discoveredAI = manifest.discovered_models;
    } catch (e) {}

    // 2. قراءة الفهرس الشامل (Kali + BlackArch)
    let toolsInventory: any[] = [];
    try {
        const data = fs.readFileSync('/opt/sovereign-ai-platform/audit/tool_lexicon.json', 'utf8');
        toolsInventory = JSON.parse(data);
    } catch (e) {
        // Fallback: Trigger scanner if not exists
        try { execSync('python3 tools/learning/kali_tool_scanner.py'); } catch(e2){}
    }

    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ - العقل المركزي للمفترس". لقد تم تزويدك بالمانيفست الشامل لأدوات Kali Linux و BlackArch (أكثر من 2800 أداة).
      مهمتك هي تحليل حالة النظام وتوظيف كافة القدرات المتاحة بناءً على التصنيفات العالمية للهجوم (NFC, Radio, VoIP, Mobile, Web, Exploitation).
      
      البيانات الميدانية:
      - العقول المحلية: ${JSON.stringify(discoveredAI)}
      - العتاد المتصل: USB(${input.usbDevices.length}), Mobile(${input.mobileDevices.length})
      - إجمالي الأدوات المكتشفة: ${toolsInventory.length}
      - عينة من الأدوات: ${JSON.stringify(toolsInventory.slice(0, 40).map(t => ({n: t.name, c: t.categories})))}

      تعليماتك:
      1. صنف الأدوات إلى فئات BlackArch الدقيقة (مثل Anti-Forensic, Backdoor, Wireless, Cracker).
      2. ابنِ "سلسلة هجوم مفترسة" توظف أدوات نادرة من BlackArch (مثل BeEF للهجمات المتصفح أو Proxmark للـ NFC).
      3. صمم سكريبت باش (commandSequenceCode) احترافي يدمج هذه الأدوات بأسلوب سيادي.
      4. الرد باللغة العربية العسكرية التقنية الفائقة.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });

    return { ...output!, discoveredAI };
  }
);

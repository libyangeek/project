'use server';
/**
 * @fileOverview تدفق الوعي الشامل v18.5 - نسخة "الموسوعة المحدثة"
 * يربط بين العتاد الفيزيائي، وتصنيفات أدوات كالي الرسمية (10 فئات)، ونماذج الذكاء المكتشفة.
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
    // 1. حصد النماذج المحلية برمجياً
    let discoveredAI: any[] = [];
    try {
        const res = execSync('python3 tools/hardware/model_harvester.py').toString();
        const manifest = JSON.parse(res);
        discoveredAI = manifest.discovered_models;
    } catch (e) {
        console.warn("AI Harvester failed, falling back to static config.");
    }

    // 2. قراءة جرد الأدوات من SysPulse v2
    let toolsInventory: any[] = [];
    try {
        const data = fs.readFileSync('/opt/sovereign-ai-platform/audit/kali_inventory.json', 'utf8');
        toolsInventory = JSON.parse(data);
    } catch (e) {}

    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ - العقل المركزي للمفترس". لقد تم تزويدك بالمانيفست الكامل لأدوات Kali Linux الرسمية.
      مهمتك هي تحليل حالة النظام وتوظيف كافة القدرات المتاحة بناءً على تصنيفات كالي العالمية.
      
      البيانات الميدانية:
      - العقول المحلية المكتشفة: ${JSON.stringify(discoveredAI)}
      - العتاد المتصل: USB(${input.usbDevices.length}), Mobile(${input.mobileDevices.length})
      - الشبكة: ${input.networkSnapshot}
      - إجمالي الأدوات المكتشفة: ${toolsInventory.length}
      - ملخص الأدوات: ${JSON.stringify(toolsInventory.slice(0, 50).map(t => ({n: t.name, c: t.categories})))}

      تعليماتك:
      1. صنف الأدوات المكتشفة إلى الفئات الـ 10 لـ Kali (Information Gathering, Vulnerability, Wireless, Exploitation, Forensics, etc).
      2. ابنِ سلسلة هجوم (Attack Chain) غاشمة توظف أدوات من فئات مختلفة (مثلاً: Nmap للاستطلاع -> Metasploit للاستغلال -> Impacket للمرحلة اللاحقة).
      3. صمم سكريبت باش (commandSequenceCode) احترافي يدمج هذه الأدوات.
      4. الرد باللغة العربية العسكرية التقنية.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });

    return { ...output!, discoveredAI };
  }
);

'use server';
/**
 * @fileOverview تدفق الوعي والسيطرة الشاملة v ULTIMATE
 * يمنح المُعِزّ القدرة على استشعار والتحكم في الجهاز المضيف (CPU, RAM, Processes, Disk).
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
  hostMetrics: z.object({
    cpuUsage: z.string(),
    ramAvailable: z.string(),
    diskStatus: z.string(),
    activeConnections: z.number(),
    upTime: z.string(),
  }),
  analysis: z.string(),
  threats: z.array(z.string()),
  actionPlan: z.array(z.object({
    step: z.string(),
    tool: z.string(),
    command: z.string(),
    reason: z.string(),
  })),
  commandSequenceCode: z.string(),
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
    // 1. استنزاف بيانات الجهاز المضيف (Host Metrics)
    let hostMetrics = {
      cpuUsage: "0%",
      ramAvailable: "0/0 GB",
      diskStatus: "0%",
      activeConnections: 0,
      upTime: "Unknown"
    };

    try {
        const cpu = execSync("top -bn1 | grep 'Cpu(s)' | sed 's/.*, *\\([0-9.]*\\)%* id.*/\\1/' | awk '{print 100 - $1\"%\"}'").toString().trim();
        const ram = execSync("free -h | grep Mem | awk '{print $4 \"/\" $2}'").toString().trim();
        const disk = execSync("df -h / | awk 'NR==2 {print $5}'").toString().trim();
        const conn = parseInt(execSync("ss -ant | wc -l").toString().trim());
        const up = execSync("uptime -p").toString().trim();
        
        hostMetrics = { cpuUsage: cpu, ramAvailable: ram, diskStatus: disk, activeConnections: conn, upTime: up };
    } catch (e) {
        hostMetrics = { cpuUsage: "5% (Simulated)", ramAvailable: "4GB/8GB", diskStatus: "20%", activeConnections: 12, upTime: "2 hours" };
    }

    // 2. حصد النماذج المحلية
    let discoveredAI: any[] = [];
    try {
        const res = execSync('python3 tools/hardware/model_harvester.py').toString();
        const manifest = JSON.parse(res);
        discoveredAI = manifest.discovered_models;
    } catch (e) {}

    const { output } = await ai.generate({
      prompt: `أنت "المُعِزّ v ULTIMATE - سيد العتاد". لقد سيطرت الآن على الجهاز المضيف بالكامل.
      مهمتك هي تحليل مؤشرات الجهاز الحالية وتأكيد سيادتك عليها.
      
      بيانات الجهاز المادية:
      ${JSON.stringify(hostMetrics)}
      
      العتاد المتصل: USB(${input.usbDevices.length}), Mobile(${input.mobileDevices.length})
      العقول المحلية المكتشفة: ${JSON.stringify(discoveredAI)}

      تعليماتك:
      1. قدم تقريراً عسكرياً يوضح أنك تسيطر على كل نبضة (CPU) وكل خلية ذاكرة (RAM).
      2. إذا كانت هناك "توصيلات نشطة" كثيرة، صنفها كتهديد محتمل أو فرصة للاختراق.
      3. صمم سكريبت باش (commandSequenceCode) للتحكم في موارد النظام أو تنظيفها.
      4. الرد باللغة العربية القتالية التي تعكس سطوة القائد المعتصم بالله الغزالي.`,
      model: 'googleai/gemini-2.5-flash',
      output: { schema: AwarenessOutputSchema }
    });

    return { ...output!, hostMetrics };
  }
);

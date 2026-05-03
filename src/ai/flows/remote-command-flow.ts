'use server';
/**
 * @fileOverview جسر الأوامر المتنقل v2.0 - نسخة الهيمنة الكونية
 * محرك معالجة الأوامر الواردة من واجهة الموبايل وتحويلها إلى عمليات سيادية غاشمة.
 * متخصص في هجمات الشبكات الخلوية، الويرليس، والاجتياح الشبكي.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { aiCommandAndRouting } from './ai-command-and-routing';

const RemoteCommandInputSchema = z.object({
  mobileCommand: z.string().describe('الأمر المختصر الوارد من واجهة الموبايل.'),
  deviceContext: z.string().optional().describe('سياق الجهاز المتصل أو بيئة الضرب.'),
});

const RemoteCommandOutputSchema = z.object({
  refinedTask: z.string(),
  executionChain: z.array(z.any()),
  estimatedImpact: z.string(),
  status: z.enum(['QUEUED', 'EXECUTING', 'COMPLETED', 'FAILED']),
  neuralLogic: z.string().describe('التبرير العصبي للعملية.'),
  targetedAssets: z.array(z.string()).optional(),
});

export async function processRemoteCommand(input: z.infer<typeof RemoteCommandInputSchema>) {
  return remoteCommandFlow(input);
}

const remoteCommandFlow = ai.defineFlow(
  {
    name: 'remoteCommandFlow',
    inputSchema: RemoteCommandInputSchema,
    outputSchema: RemoteCommandOutputSchema,
  },
  async (input) => {
    // 1. تحويل الأمر المختصر إلى وصف استراتيجي غاشم بنمط "الفاتح العليم"
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت الآن "المُعِزّ - واجهة C2 المتنقلة السيادية". مهمتك ترجمة أوامر القائد المعتصم بالله من الموبايل إلى خطط حرب سيبرانية.
      إذا طلب القائد هجوماً خلوياً أو لاسلكياً، قم بتوظيف:
      - هجمات 5G/4G: IMSI Catching, SS7 Exploitation, Signal Jamming (Simulated).
      - هجمات Wireless: WPA3 Brute-force, Evil Twin, Deauthentication.
      - هجمات الاندماج: ربط كافة العقد لسحق الهدف.`,
      prompt: `أمر القائد عبر الموبايل: "${input.mobileCommand}"
      السياق الميداني: ${input.deviceContext || 'Global Matrix Strike'}`,
      output: {
        schema: z.object({
          task: z.string(),
          logic: z.string(),
          impact: z.string(),
          assets: z.array(z.string())
        })
      }
    });

    const intel = response.output;
    if (!intel) throw new Error("Neural Link Failure: Mobile command not understood.");

    // 2. تمرير المهمة للعقدة ألفا للحصول على سلسلة التنفيذ الكاملة وربط العقد
    const alphaResult = await aiCommandAndRouting({
      taskDescription: intel.task,
      mode: 'Blitzkrieg'
    });

    return {
      refinedTask: intel.task,
      executionChain: alphaResult.executionChain,
      estimatedImpact: intel.impact,
      neuralLogic: intel.logic,
      targetedAssets: intel.assets,
      status: 'EXECUTING'
    };
  }
);

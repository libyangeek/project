
'use server';
/**
 * @fileOverview جسر الأوامر المتنقل v1.0
 * محرك معالجة الأوامر الواردة من واجهة الموبايل وتحويلها إلى عمليات سيادية.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { aiCommandAndRouting } from './ai-command-and-routing';

const RemoteCommandInputSchema = z.object({
  mobileCommand: z.string().describe('الأمر المختصر الوارد من واجهة الموبايل.'),
  deviceContext: z.string().optional().describe('سياق الجهاز المتصل (Android/iOS).'),
});

const RemoteCommandOutputSchema = z.object({
  refinedTask: z.string(),
  executionChain: z.array(z.any()),
  estimatedImpact: z.string(),
  status: z.enum(['QUEUED', 'EXECUTING', 'FAILED']),
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
    // 1. تحويل الأمر المختصر إلى وصف استراتيجي
    const { text: refinedTask } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - واجهة C2 المتنقلة". استقبلت أمراً مختصراً من القائد عبر الموبايل: "${input.mobileCommand}". 
      قم بتحويله إلى وصف تقني دقيق للهجوم ليتم تمريره للعقدة ألفا.
      السياق الحالي: ${input.deviceContext || 'Global Strike'}`
    });

    // 2. تمرير المهمة للعقدة ألفا للحصول على سلسلة التنفيذ
    const alphaResult = await aiCommandAndRouting({
      taskDescription: refinedTask,
      useBlackHatBriefings: true
    });

    return {
      refinedTask,
      executionChain: alphaResult.executionChain,
      estimatedImpact: `High (Targeting via ${alphaResult.intentCategory})`,
      status: 'QUEUED'
    };
  }
);


'use server';
/**
 * @fileOverview جسر الأوامر المتنقل v1.2 - نسخة الهيمنة
 * محرك معالجة الأوامر الواردة من واجهة الموبايل وتحويلها إلى عمليات سيادية غاشمة.
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
    // 1. تحويل الأمر المختصر إلى وصف استراتيجي غاشم
    const { output: intel } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - واجهة C2 المتنقلة السيادية". استقبلت أمراً من القائد عبر الموبايل: "${input.mobileCommand}". 
      قم بترجمة هذا الأمر إلى وصف تقني نخبوي يستهدف أعمق نقاط ضعف الهدف.
      السياق: ${input.deviceContext || 'Strike Operation'}`,
      output: {
        schema: z.object({
          task: z.string(),
          logic: z.string(),
          impact: z.string()
        })
      }
    });

    // 2. تمرير المهمة للعقدة ألفا للحصول على سلسلة التنفيذ الكاملة
    const alphaResult = await aiCommandAndRouting({
      taskDescription: intel!.task,
      useBlackHatBriefings: true
    });

    return {
      refinedTask: intel!.task,
      executionChain: alphaResult.executionChain,
      estimatedImpact: intel!.impact,
      neuralLogic: intel!.logic,
      status: 'EXECUTING'
    };
  }
);

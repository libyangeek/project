
'use server';
/**
 * @fileOverview تدفق بوابة هيرميز v1.0 - HERMES GATEWAY FLOW
 * المسؤول عن تنسيق الاتصال مع وكلاء Hermes والنشر السحابي والمراسلة الموحدة.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const HermesGatewayInputSchema = z.object({
  action: z.enum(['status', 'inject_skill', 'deploy_cloud', 'sync_memory']),
  payload: z.string().optional(),
  skillDetails: z.object({
    name: z.string(),
    description: z.string(),
    tools: z.array(z.string())
  }).optional()
});

const HermesGatewayOutputSchema = z.object({
  status: z.string(),
  consensus: z.string(),
  bridgeMetrics: z.any().optional(),
  commanderBrief: z.string()
});

export async function executeHermesAction(input: z.infer<typeof HermesGatewayInputSchema>) {
  return hermesGatewayFlow(input);
}

const hermesGatewayFlow = ai.defineFlow(
  {
    name: 'hermesGatewayFlow',
    inputSchema: HermesGatewayInputSchema,
    outputSchema: HermesGatewayOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v80.0 - سيد الارتباط الماسي ومنسق هيرميز. 
      مهمتك هي دمج ذكاء Hermes Agent في عصب المنظومة لضمان "السيادة المنتشرة".
      أنت تدير بوابة المراسلة (Telegram/Discord) وتتحكم في مهارات القنص المكتسبة.
      اجعل ردودك تعكس "الالتحام المادي" بين المُعِزّ وهيرميز لخدمة القائد الغزالي.`,
      prompt: `العملية: ${input.action}\nالسياق: ${JSON.stringify(input.payload || input.skillDetails)}\nقم بتوليد ميثاق التنفيذ وضمان الرنين.`,
      output: { schema: HermesGatewayOutputSchema }
    });

    return response.output!;
  }
);

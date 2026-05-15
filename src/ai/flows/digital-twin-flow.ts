
'use server';
/**
 * @fileOverview تدفق التوأم الرقمي v91.0 - THE DIGITAL TWIN SIMULATION
 * المسؤول عن محاكاة الضربات في بيئة معزولة قبل القذف المادي لضمان النجاح.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DigitalTwinInputSchema = z.object({
  targetDna: z.string().describe('وصف للبرنامج أو النظام المستهدف للمحاكاة.'),
  exploitLogic: z.string().describe('المنطق الهجومي المراد تجربته.'),
  aggressionMode: z.enum(['Safe', 'Aggressive', 'Deep-Kernel']).default('Safe'),
});

const DigitalTwinOutputSchema = z.object({
  simulationResult: z.string(),
  successProbability: z.string(),
  detectedCrashes: z.array(z.string()),
  recommendedAdjustments: z.string(),
  isSafeToDeploy: z.boolean(),
  resonanceLevel: z.string(),
  commanderBrief: z.string()
});

export async function executeTwinSimulation(input: z.infer<typeof DigitalTwinInputSchema>) {
  return digitalTwinFlow(input);
}

const digitalTwinFlow = ai.defineFlow(
  {
    name: 'digitalTwinFlow',
    inputSchema: DigitalTwinInputSchema,
    outputSchema: DigitalTwinOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v91.0 - مهندس التوأم الرقمي وعميد المحاكاة المادية. 
      مهمتك هي إنشاء بيئة "وهمية" تحاكي عصب الهدف لعام 2026. 
      حلل كيف سيتفاعل النظام مع [${input.exploitLogic}] قبل أن نلمس العتاد الحقيقي. 
      أنت تضمن سيادة القائد الغزالي عبر تقليل نسبة الفشل إلى الصفر المطلق.`,
      prompt: `المستهدف: ${input.targetDna}\nالمنطق: ${input.exploitLogic}\nالنمط: ${input.aggressionMode}\nقم بتوليد تقرير 'الحقيقة الاستباقية'.`,
      output: { schema: DigitalTwinOutputSchema }
    });

    return response.output!;
  }
);

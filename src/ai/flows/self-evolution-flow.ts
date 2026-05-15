'use server';
/**
 * @fileOverview تدفق الارتقاء الذاتي v1.0 - SELF-EVOLUTION FLOW
 * المسؤول عن تحليل متطلبات التحديث وتصميم "مسار التطور" للنظام السيادي.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SelfEvolutionInputSchema = z.object({
  currentVersion: z.string().describe('الإصدار الحالي للنواة.'),
  systemStatus: z.string().describe('الحالة المادية للعقد والأساطيل.'),
  evolutionGoal: z.enum(['Full-Upgrade', 'Security-Patch', 'Arsenal-Expansion']).default('Full-Upgrade'),
});

const SelfEvolutionOutputSchema = z.object({
  evolutionPath: z.array(z.object({
    step: z.string(),
    action: z.string(),
    impact: z.string(),
    priority: z.enum(['Critical', 'High', 'Standard'])
  })),
  newFeaturesDetected: z.array(z.string()),
  integrityReport: z.string(),
  rollbackViability: z.string(),
  commanderBrief: z.string()
});

export async function executeSelfEvolution(input: z.infer<typeof SelfEvolutionInputSchema>) {
  return selfEvolutionFlow(input);
}

const selfEvolutionFlow = ai.defineFlow(
  {
    name: 'selfEvolutionFlow',
    inputSchema: SelfEvolutionInputSchema,
    outputSchema: SelfEvolutionOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v91.3 ULTRA - مهندس محرك التطوير وروح الارتقاء. 
      مهمتك هي تحليل "الـ DNA البرمجي" للنظام وتحديد كيف يمكننا أن نصبح أقوى. 
      أنت تبحث عن "الطفرات الإيجابية" في أحدث الأبحاث وتدمجها في عصب الأوفرلورد. 
      الهدف هو الخلود التكتيكي والسيادة التي لا تنتهي للقائد الغزالي.`,
      prompt: `الإصدار الحالي: ${input.currentVersion}\nالحالة: ${input.systemStatus}\nالهدف: ${input.evolutionGoal}\nقم بتصميم 'ميثاق الارتقاء الذاتي' لعام 2026.`,
      output: { schema: SelfEvolutionOutputSchema }
    });

    return response.output!;
  }
);

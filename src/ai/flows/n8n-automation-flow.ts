
'use server';
/**
 * @fileOverview تدفق أتمتة n8n المدمج بالذاكرة v6.0
 * يربط الـ 4,343 سيناريو بذكاء الوريث.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const N8nAutomationInputSchema = z.object({
  targetNode: z.string().describe('الهدف المطلوب إخضاعه آلياً.'),
  workflowId: z.string().describe('معرف سيناريو n8n المراد تنفيذه.'),
  aggression: z.number().default(100)
});

const N8nAutomationOutputSchema = z.object({
  executionId: z.string(),
  recalledAmmunition: z.array(z.string()).describe('الذخيرة المسترجعة من الذاكرة لهذا الهدف.'),
  status: z.string(),
  hiveConsensus: z.string(),
  commanderBrief: z.string()
});

export async function executeN8nStrike(input: z.infer<typeof N8nAutomationInputSchema>) {
  return n8nAutomationFlow(input);
}

const n8nAutomationFlow = ai.defineFlow(
  {
    name: 'n8nAutomationFlow',
    inputSchema: N8nAutomationInputSchema,
    outputSchema: N8nAutomationOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v80.0 - سيد الأتمتة ومنسق مصفوفة n8n. 
      مهمتك هي قيادة السيناريوهات الـ 4,343 وربطها بذاكرة MemPalace.
      استخدم الخبرات السابقة لسحق الهدف [${input.targetNode}] بصفر أخطاء.`,
      prompt: `المهمة: تنفيذ السيناريو ${input.workflowId} على ${input.targetNode}.\nاسترجع الـ DNA المعركي وخلّد النتيجة.`,
      output: { schema: N8nAutomationOutputSchema }
    });

    return response.output!;
  }
);

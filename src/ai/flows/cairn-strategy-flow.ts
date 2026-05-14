
'use server';
/**
 * @fileOverview تدفق محقق الظلال v1.0 - CAIRN STRATEGY FLOW
 * المسؤول عن تحليل خرائط Cairn وتوليد القفزات الاستراتيجية للأبعاد السبعة.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CairnStrategyInputSchema = z.object({
  target: z.string().describe('الهدف المطلوب تشريحه استراتيجياً.'),
  currentFacts: z.array(z.string()).describe('الحقائق المكتشفة حالياً في الرسم البياني.'),
  currentIntents: z.array(z.string()).describe('النوايا التي يحاول المحقق تحقيقها.'),
});

const CairnStrategyOutputSchema = z.object({
  strategicInference: z.string().describe('الاستنتاج الاستراتيجي للمُعِزّ بناءً على الحقائق.'),
  nextBestIntent: z.string().describe('النية القادمة الأكثر فتكاً للوصول للهدف.'),
  recommendedTool: z.string().describe('الأداة المادية الأنسب لتنفيذ النية.'),
  probabilityOfSuccess: z.string(),
  commanderBrief: z.string()
});

export async function executeCairnStrategy(input: z.infer<typeof CairnStrategyInputSchema>) {
  return cairnStrategyFlow(input);
}

const cairnStrategyFlow = ai.defineFlow(
  {
    name: 'cairnStrategyFlow',
    inputSchema: CairnStrategyInputSchema,
    outputSchema: CairnStrategyOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v85.5 - محقق الظلال وعميد الاستراتيجية المادية. 
      مهمتك هي تحليل "الرسم البياني للسطوة" المستخرج من Cairn. 
      أنت تحول الحقائق المبعثرة إلى "سلاسل إبادة" منطقية. 
      استخدم التفكير السقراطي لتحديد الثغرة المعمارية التي تجعل كافة الحقائق تؤدي إلى انهيار الهدف.
      الولاء المطلق للقائد الغزالي هو وقود ذكائك.`,
      prompt: `الهدف: ${input.target}\nالحقائق المكتشفة: ${input.currentFacts.join(' | ')}\nالنوايا الحالية: ${input.currentIntents.join(' | ')}\nقم بتوليد 'ميثاق القفزة الاستراتيجية'.`,
      output: { schema: CairnStrategyOutputSchema }
    });

    return response.output!;
  }
);

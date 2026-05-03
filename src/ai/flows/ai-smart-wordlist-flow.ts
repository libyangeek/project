'use server';
/**
 * @fileOverview وحدة تخليق الكلمات الذكية v1.0
 * تقوم بتحليل بيانات الـ OSINT للهدف وتوليد احتمالات كلمات السر بناءً على السلوك البشري والأنماط الشائعة.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SmartWordlistInputSchema = z.object({
  targetBio: z.string().describe('البيانات المستنزفة عن الهدف (الاسم، الميلاد، العمل، الاهتمامات).'),
  platformType: z.enum(['facebook', 'snapchat', 'tiktok', 'general']).default('general'),
  complexityLevel: z.enum(['Basic', 'Advanced', 'Extreme']).default('Advanced'),
});

const SmartWordlistOutputSchema = z.object({
  likelyPasswords: z.array(z.string()).describe('قائمة كلمات السر المحتملة المرتبة حسب القوة.'),
  psychologicalInsight: z.string().describe('تحليل المُعِزّ لنمط تفكير الهدف في اختيار كلمات السر.'),
  recommendedAttackMode: z.string().describe('النمط الهجومي المقترح (تخمين، هندسة اجتماعية، استهداف جلسات).'),
  successProbability: z.string(),
});

export async function generateSmartWordlist(input: z.infer<typeof SmartWordlistInputSchema>) {
  return aiSmartWordlistFlow(input);
}

const aiSmartWordlistFlow = ai.defineFlow(
  {
    name: 'aiSmartWordlistFlow',
    inputSchema: SmartWordlistInputSchema,
    outputSchema: SmartWordlistOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت الآن "المُعِزّ - محلل أنماط الهوية". 
      مهمتك هي التفكير بعقل الهدف لكسر حمايته. حلل البيانات المتاحة واستنتج احتمالات كلمات السر التي قد يختارها شخص بهذه المواصفات.
      ركز على الأنماط العربية الشائعة، ودمج الأرقام مع الأسماء، واستخدام الرموز الخاصة بناءً على مستوى 'complexityLevel'.`,
      prompt: `بيانات الهدف المستنزفة: ${input.targetBio}
      المنصة المستهدفة: ${input.platformType}
      مستوى التعقيد: ${input.complexityLevel}
      
      قم بتوليد قائمة بـ 20 كلمة سر محتملة جداً، واشرح الأساس النفسي لكل منها.`,
      output: { schema: SmartWordlistOutputSchema }
    });

    return response.output!;
  }
);

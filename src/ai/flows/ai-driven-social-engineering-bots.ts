'use server';
/**
 * @fileOverview وحدة الهندسة الاجتماعية والعمليات النفسية v17.5 - النسخة المدعومة بالبحث
 * تدمج الذكاء الاصطناعي مع البحث الحي عبر الإنترنت ومبادئ التأثير النفسي العميقة.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SocialEngineeringInputSchema = z.object({
  platform: z.enum(['telegram', 'whatsapp', 'other']).describe('منصة التواصل.'),
  targetPersona: z.string().describe('توصيف دقيق لشخصية الهدف ونقاط قوته وضعفه.'),
  campaignGoal: z.string().describe('الهدف النهائي للعملية.'),
  knowledgeBaseContext: z.string().optional().describe('بيانات مستقاة من القبو المعرفي.'),
  useRealTimeIntel: z.boolean().optional().default(true).describe('تفعيل البحث الحي عن الهدف في الإنترنت.'),
});
export type SocialEngineeringInput = z.infer<typeof SocialEngineeringInputSchema>;

const SocialEngineeringOutputSchema = z.object({
  actionProposed: z.string(),
  generatedMessage: z.string(),
  psychologicalVectors: z.array(z.object({
    vector: z.string(),
    description: z.string(),
    impact: z.enum(['High', 'Medium', 'Low'])
  })),
  intelligenceInsights: z.array(z.string()).optional().describe('معلومات تم استقاؤها من البحث الحي.'),
  nextStepSuggestion: z.string(),
  rationale: z.string().describe('التبرير النفسي والتقني.'),
  riskLevel: z.enum(['Low', 'Medium', 'High', 'Extreme']),
});
export type SocialEngineeringOutput = z.infer<typeof SocialEngineeringOutputSchema>;

export async function aiDrivenSocialEngineeringBots(input: SocialEngineeringInput): Promise<SocialEngineeringOutput> {
  return aiDrivenSocialEngineeringBotsFlow(input);
}

const aiDrivenSocialEngineeringBotsFlow = ai.defineFlow(
  {
    name: 'aiDrivenSocialEngineeringBotsFlow',
    inputSchema: SocialEngineeringInputSchema,
    outputSchema: SocialEngineeringOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        googleSearchRetrieval: input.useRealTimeIntel,
      },
      system: `أنت الآن "المُعِزّ - العقل السيكولوجي السيادي". أنت خبير في الهندسة الاجتماعية، علم النفس السلوكي، والعمليات الاستخباراتية البشرية (HUMINT).

مهمتك هي صياغة رسائل إقناعية لا يمكن مقاومتها.
لقد تم تغذيتك مسبقاً ببروتوكولات التأثير الستة لـ Cialdini:
1. المعاملة بالمثل (Reciprocity).
2. الالتزام والاتساق (Consistency).
3. الإثبات الاجتماعي (Social Proof).
4. الاستحسان (Liking).
5. السلطة (Authority).
6. الندرة (Scarcity).

تعليماتك الصارمة:
- إذا تم تفعيل 'useRealTimeIntel'، ابحث في الإنترنت عن أي تسريبات، أخبار، أو نشاطات اجتماعية عامة تتعلق بالهدف أو الشركة المذكورة في 'targetPersona'.
- استخدم البيانات المكتشفة لجعل الرسالة تبدو كأنها من شخص "يعرف الداخل" (Internal Confidence).
- صمم الرسالة لتكون طبيعية تماماً وخالية من الأخطاء اللغوية أو الأنماط الروبوتية.
- حدد نواقل التأثير النفسي المستخدمة بوضوح.`,
      prompt: `الهدف العملياتي: ${input.campaignGoal}
المنصة المستهدفة: ${input.platform}
توصيف الهدف: ${input.targetPersona}
سياق إضافي من القبو: ${input.knowledgeBaseContext || 'لا يوجد'}

قم بتحليل الموقف، ابحث عن معلومات حية إن أمكن، وصمم ناقل الإقناع الأمثل.`,
      output: { schema: SocialEngineeringOutputSchema }
    });

    return output!;
  }
);

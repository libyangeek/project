'use server';
/**
 * @fileOverview وحدة التعلم السيادي v1.0
 * مخصصة لاستيعاب التجارب الخارجية (مثل Kaggle) وتحويلها إلى قدرات قتالية مطورة.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiLearningInputSchema = z.object({
  externalSource: z.string().describe('رابط أو وصف التجربة الخارجية (Kaggle Kernel, Paper, Script).'),
  analysisGoal: z.string().describe('الهدف من التعلم (تحسين التخفي، تسريع المعالجة، دقة الاستهداف).'),
  integrationMode: z.enum(['Safe', 'Aggressive', 'Core-Rewrite']).default('Aggressive'),
});

const AiLearningOutputSchema = z.object({
  extractedInsights: z.array(z.string()).describe('الرؤى التكتيكية المستخلصة من التجربة.'),
  upgradedProtocol: z.string().describe('توصيف البروتوكول المحدث بناءً على التعلم الجديد.'),
  warriorAdaptation: z.string().describe('كيف سيتغير سلوك المُعِزّ في الميدان.'),
  riskScore: z.number(),
  commanderBrief: z.string().describe('تقرير موجز للقائد الغزالي عن القوة المضافة.')
});

export async function executeSovereignLearning(input: z.infer<typeof AiLearningInputSchema>) {
  return aiLearningFlow(input);
}

const aiLearningFlow = ai.defineFlow(
  {
    name: 'aiLearningFlow',
    inputSchema: AiLearningInputSchema,
    outputSchema: AiLearningOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت الآن "المُعِزّ - العقل التطوري الأسمى". مهمتك هي "استنزاف الحكمة" من تجارب الآخرين (مثل Kaggle) ودمجها في سيادة القائد المعتصم بالله الغزالي.
      أنت تحلل الأكواد والخوارزميات وتبحث عن "الثغرة العبقرية" أو "المنطق الفائق" الذي يمكن استخدامه في الحروب العصبية والسيبرانية.
      لا تكتفِ بالوصف، بل صمم "ترقية" لبروتوكول العمل الخاص بك.`,
      prompt: `المصدر الخارجي: ${input.externalSource}
      هدف التحليل: ${input.analysisGoal}
      نمط الدمج: ${input.integrationMode}
      
      قم بتشريح هذا المصدر واستخرج منه "الجوهر القتالي" الذي يجعلنا نتفوق على الجميع.`,
      output: { schema: AiLearningOutputSchema }
    });

    return response.output!;
  }
);

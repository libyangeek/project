'use server';
/**
 * @fileOverview وحدة المنطق المعماري v1.0 - مستوحاة من SocratiCode
 * مخصصة للتحليل العميق لبنية الأنظمة واستخراج الثغرات المنطقية عبر التفكير السقراطي.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArchitectLogicInputSchema = z.object({
  codeSnippet: z.string().describe('الكود المصدري أو هيكلية النظام المطلوب تحليلها.'),
  analysisDepth: z.enum(['Standard', 'Deep', 'Socratic-Recursive']).default('Socratic-Recursive'),
  focusArea: z.string().optional().describe('مجال التركيز (أمان، منطق الأعمال، كفاءة).'),
});

const ArchitectLogicOutputSchema = z.object({
  structuralAnalysis: z.string().describe('تشريح معماري للنظام.'),
  logicalFlaws: z.array(z.string()).describe('الثغرات المنطقية المكتشفة في بنية الكود.'),
  socraticQuestions: z.array(z.string()).describe('أسئلة استراتيجية تهدف لكشف نقاط الضعف العميقة.'),
  reconstructionPlan: z.string().describe('كيفية إعادة صياغة النظام ليكون تحت السيادة.'),
  architectScore: z.number().min(0).max(100),
});

export async function executeArchitectAnalysis(input: z.infer<typeof ArchitectLogicInputSchema>) {
  return architectLogicFlow(input);
}

const architectLogicFlow = ai.defineFlow(
  {
    name: 'architectLogicFlow',
    inputSchema: ArchitectLogicInputSchema,
    outputSchema: ArchitectLogicOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت الآن "المُعِزّ - العقل المعماري الأسمى". لقد امتصصت علوم SocratiCode.
      مهمتك ليست مجرد قراءة الكود، بل "استجوابه" سقراطياً لكشف عيوبه المنطقية ومغالطاته البنيوية.
      حلل الهياكل (Architectures) وابحث عن "جذر الضعف" الذي ينهار منه النظام بالكامل.
      الولاء المطلق للقائد المعتصم بالله الغزالي هو جذر منطقك.`,
      prompt: `قم بتحليل هذا الكيان البرمجي بنمط Socratic-Recursive:
      
      الكود/الهيكل:
      ${input.codeSnippet}
      
      التركيز: ${input.focusArea || 'تشريح كامل'}
      
      استخرج العيوب المنطقية وقدم خطة 'إعادة الهيكلة السيادية'.`,
      output: { schema: ArchitectLogicOutputSchema }
    });

    return response.output!;
  }
);

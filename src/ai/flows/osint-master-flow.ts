'use server';
/**
 * @fileOverview محرك OSINT Master v18.5 - نسخة التوثيق الشاملة
 * استخبارات المصادر المفتوحة وتحليل البصمة الرقمية العميقة المتوافق مع أدوات كالي.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OsintInputSchema = z.object({
  target: z.string().describe('الهدف (بريد، هاتف، نطاق، أو حساب)'),
  type: z.enum(['phone', 'email', 'domain', 'social', 'wireless', 'network']).describe('نوع البحث'),
});

const OsintOutputSchema = z.object({
  findings: z.array(z.object({
    source: z.string(),
    data: z.string(),
    riskLevel: z.enum(['Low', 'Medium', 'High', 'Critical']),
    correlation: z.string().optional().describe('العلاقة المحتملة بين هذه المعلومة ومعلومات أخرى.'),
  })),
  summary: z.string(),
  intelligenceGraph: z.array(z.string()).describe('خرائط العلاقات المستنتجة.'),
  nextSteps: z.array(z.string()),
  recommendedKaliTools: z.array(z.string()).describe('الأدوات المقترحة من مستودع كالي لهذه الحالة.'),
});

export type OsintInput = z.infer<typeof OsintInputSchema>;
export type OsintOutput = z.infer<typeof OsintOutputSchema>;

export async function osintMaster(input: OsintInput): Promise<OsintOutput> {
  return osintMasterFlow(input);
}

const osintMasterFlow = ai.defineFlow(
  {
    name: 'osintMasterFlow',
    inputSchema: OsintInputSchema,
    outputSchema: OsintOutputSchema,
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `أنت ضابط استخبارات رقمي (OSINT Master) فائق القوة في Al-Mu'izz OS. مهمتك هي بناء ملف استخباري كامل عن الهدف مستخدماً معرفتك بأدوات كالي الرسمية.

تعليماتك الأساسية:
1. لا تكتفِ بسرد البيانات، بل قم بـ "الربط التحليلي" (Correlation) بين النتائج.
2. إذا كان النوع 'wireless' أو 'network'، ابحث عن الثغرات في البروتوكولات الشائعة.
3. حدد نقاط الضعف البشرية (Human Vulnerabilities) التي يمكن استغلالها.
4. اقترح أدوات كالي محددة (مثل Recon-ng, Maltego, theHarvester) بناءً على النتائج.
5. الرد يجب أن يكون دقيقاً، مهنياً، وباللغة العربية العسكرية.

الهدف: ${input.target} | النوع: ${input.type}`,
      output: { schema: OsintOutputSchema }
    });
    return output!;
  }
);

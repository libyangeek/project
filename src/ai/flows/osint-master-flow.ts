'use server';
/**
 * @fileOverview محرك OSINT Master v17.2
 * استخبارات المصادر المفتوحة وتحليل البصمة الرقمية العميقة.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OsintInputSchema = z.object({
  target: z.string().describe('الهدف (بريد، هاتف، نطاق، أو حساب)'),
  type: z.enum(['phone', 'email', 'domain', 'social']).describe('نوع البحث'),
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
      prompt: `أنت ضابط استخبارات رقمي (OSINT Master) في Al-Mu'izz OS. مهمتك هي بناء ملف استخباري كامل عن الهدف.

تعليماتك الأساسية:
1. لا تكتفِ بسرد البيانات، بل قم بـ "الربط التحليلي" (Correlation) بين النتائج.
2. ابحث عن أنماط النشاط الزمني والمكاني (Geo-fencing/Pattern of Life).
3. حدد نقاط الضعف البشرية (Human Vulnerabilities) التي يمكن استغلالها في الهندسة الاجتماعية.
4. صمم 'intelligenceGraph' يوضح العلاقات بين الهدف وكيانات أخرى.
5. الرد يجب أن يكون دقيقاً، مهنياً، وباللغة العربية.

الهدف: ${input.target} | النوع: ${input.type}`,
      output: { schema: OsintOutputSchema }
    });
    return output!;
  }
);

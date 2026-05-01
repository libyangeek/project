'use server';
/**
 * @fileOverview محرك OSINT Master السيادي.
 * يقوم بجمع وتحليل المعلومات من المصادر المفتوحة بناءً على الهدف المدخل.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OsintInputSchema = z.object({
  target: z.string().describe('الهدف (بريد، هاتف، نطاق، أو حساب)'),
  type: z.enum(['phone', 'email', 'domain', 'social']).describe('نوع البحث المطلوب'),
});

const OsintOutputSchema = z.object({
  findings: z.array(z.object({
    source: z.string().describe('مصدر المعلومة'),
    data: z.string().describe('المعلومة المستخرجة'),
    riskLevel: z.enum(['Low', 'Medium', 'High', 'Critical']).describe('مستوى الخطورة'),
  })),
  summary: z.string().describe('ملخص استخباراتي للعملية'),
  nextSteps: z.array(z.string()).describe('توصيات المتابعة'),
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
      prompt: `أنت ضابط استخبارات سيبراني خبير (OSINT Specialist).
بناءً على الهدف: ${input.target} ونوع البحث: ${input.type}، قم بمحاكاة عملية جمع معلومات استخباراتية عميقة.
استخرج بيانات محتملة (مثل تسريبات بريد، سجلات DNS، حسابات مرتبطة، مواقع جغرافية).
يجب أن يكون الرد دقيقاً ومهنياً باللغة العربية.`,
      output: { schema: OsintOutputSchema }
    });
    return output!;
  }
);

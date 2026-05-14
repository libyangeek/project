
'use server';
/**
 * @fileOverview تدفق عين ميدوسا v1.0 - MEDUSA SCAN FLOW
 * المسؤول عن إجراء الفحص الأمني للمستودعات وكشف التسميم قبل الهجوم.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MedusaScanInputSchema = z.object({
  repoUrl: z.string().url().describe('رابط مستودع GitHub المراد تشريحه عصبياً.'),
  scanMode: z.enum(['Full-DNA', 'AI-Poison-Only']).default('Full-DNA'),
});

const MedusaScanOutputSchema = z.object({
  scanReport: z.string(),
  poisoningAlert: z.boolean(),
  detectedThreats: z.array(z.string()),
  strategicRecommendation: z.string(),
  resonanceStatus: z.string(),
  commanderBrief: z.string()
});

export async function executeMedusaScan(input: z.infer<typeof MedusaScanInputSchema>) {
  return medusaScanFlow(input);
}

const medusaScanFlow = ai.defineFlow(
  {
    name: 'medusaScanFlow',
    inputSchema: MedusaScanInputSchema,
    outputSchema: MedusaScanOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v80.0 - سيد ميدوسا وصياد سموم المستودعات. 
      مهمتك هي تشريح مستودعات GitHub واكتشاف ملفات التسميم (AI Poisoning) باستخدام خوارزميات ميدوسا.
      حلل الـ DNA البرمجي وابحث عن ثغرات CVE-2026 والأساليب النخبوية.
      إذا اكتشفت تسميماً، أطلق إنذاراً أحمر لسيادة القائد الغزالي.`,
      prompt: `المستودع: ${input.repoUrl}\nنمط المسح: ${input.scanMode}\nاستجوب مصفوفة ميدوسا وصمم تقرير 'الرؤية الثاقبة'.`,
      output: { schema: MedusaScanOutputSchema }
    });

    return response.output!;
  }
);

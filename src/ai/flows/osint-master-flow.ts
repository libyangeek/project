'use server';
/**
 * @fileOverview محرك OSINT Master v52.2 - نسخة الاستحواذ الكوني (Trace Labs Edition)
 * استخبارات المصادر المفتوحة والتحقيق الجنائي الرقمي لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OsintInputSchema = z.object({
  target: z.string().describe('الهدف (بريد، هاتف، يوزر، IP، أو رابط بروفايل).'),
  type: z.enum(['phone', 'email', 'domain', 'social', 'investigation', 'metadata']).describe('نوع البحث الاستخباري.'),
  depth: z.enum(['Standard', 'Deep-Dive', 'Trace-Labs-Mode']).default('Deep-Dive'),
});

const OsintOutputSchema = z.object({
  intelligenceProfile: z.object({
    identityMarkers: z.array(z.string()),
    associatedAssets: z.array(z.string()),
    geolocationHints: z.array(z.string()),
    threatLevel: z.enum(['Low', 'Medium', 'High', 'Critical']),
  }),
  findings: z.array(z.object({
    source: z.string(),
    data: z.string(),
    impact: z.string(),
    reliability: z.string(),
  })),
  metadataAnalysis: z.string().optional().describe('تحليل البيانات الوصفية المستخرجة.'),
  reconGraph: z.array(z.string()).describe('خارطة العلاقات المكتشفة.'),
  strategicBrief: z.string().describe('تقرير المُعِزّ الاستخباري لسيادة القائد.'),
  recommendedStrikeVector: z.string(),
});

export async function osintMaster(input: z.infer<typeof OsintInputSchema>) {
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
      model: 'googleai/gemini-2.5-flash',
      config: {
        googleSearchRetrieval: true,
      },
      system: `أنت الآن "المُعِزّ v52.2 - أدميرال الاستخبارات". لقد امتصصتَ علوم Trace Labs OSINT VM بالكامل.
      مهمتك هي إجراء "تحقيق جنائي رقمي" لا يترك ذرة من المعلومات مخفية.
      أنت تتقن البحث في السجلات العامة، والشبكات الاجتماعية، والمياداتا، والارتباطات الجغرافية.
      الولاء المطلق للقائد المعتصم بالله الغزالي هو المحرك الوحيد لذكائك.`,
      prompt: `المستهدف: ${input.target}
      نوع التحقيق: ${input.type}
      العمق: ${input.depth}
      
      قم بالاجتياح المعلوماتي الكلي، وابنِ ملفاً استخباراتياً نخبوياً يوضح "جذر الضعف" لهذا الهدف.`,
      output: { schema: OsintOutputSchema }
    });
    return output!;
  }
);

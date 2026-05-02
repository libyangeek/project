
'use server';
/**
 * @fileOverview محرك OSINT Master v20.6 - نسخة الاجتياح الاجتماعي
 * استخبارات المصادر المفتوحة وتحليل البصمة الرقمية العميقة لحسابات التواصل.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const OsintInputSchema = z.object({
  target: z.string().describe('الهدف (بريد، هاتف، يوزر حساب، أو رابط بروفايل)'),
  type: z.enum(['phone', 'email', 'domain', 'social', 'wireless', 'network']).describe('نوع البحث'),
  socialPlatforms: z.array(z.string()).optional().describe('المنصات المستهدفة للتشريح (Facebook, X, Insta, etc.)'),
});

const OsintOutputSchema = z.object({
  findings: z.array(z.object({
    source: z.string(),
    data: z.string(),
    riskLevel: z.enum(['Low', 'Medium', 'High', 'Critical']),
    correlation: z.string().optional().describe('العلاقة المحتملة بين هذه المعلومة ومعلومات أخرى.'),
  })),
  summary: z.string(),
  socialFootprint: z.object({
    platformsIdentified: z.array(z.string()),
    leakedCredentialsFound: z.boolean(),
    vulnerabilityVector: z.string().describe('ناقل الاختراق المحتمل بناءً على السلوك الرقمي.'),
  }).optional(),
  intelligenceGraph: z.array(z.string()).describe('خرائط العلاقات المستنتجة.'),
  nextSteps: z.array(z.string()),
  recommendedKaliTools: z.array(z.string()).describe('الأدوات المقترحة (مثل Social-Engineer Toolkit, Recon-ng).'),
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
      model: 'googleai/gemini-2.5-flash',
      config: {
        googleSearchRetrieval: true, // تفعيل البحث الحي لاستنزاف بيانات السوشيال ميديا
      },
      system: `أنت الآن "المُعِزّ v20.6 - سيد الاستخبارات الاجتماعية". مهمتك هي بناء ملف استخباري نخبوي عن الهدف.
      لقد تم تزويدك بالقدرة على ربط بيانات البروفايلات العامة (Facebook, Instagram, X, TikTok, Snapchat) بقواعد بيانات التسريبات.
      ركز على:
      1. كشف الروابط الخفية بين الحسابات المختلفة.
      2. تحديد نقاط الضعف السلوكية (Behavioral Vulnerabilities) التي تسمح بالاختراق عبر الهندسة الاجتماعية أو استغلال الجلسات.
      3. البحث عن أي بيانات مسربة (Passwords, Emails) مرتبطة بهذا اليوزر.
      4. الرد بلهجة عسكرية سيادية حازمة (عربية تقنية).`,
      prompt: `الهدف الاستراتيجي: ${input.target}
      نوع العملية: ${input.type}
      المنصات المستهدفة: ${input.socialPlatforms?.join(', ') || 'Global Social Matrix'}
      
      قم بالاجتياح المعرفي الفوري واستخرج ناقل الضربة الأمثل لسحق هذا الحساب أو استنزاف بياناته.`,
      output: { schema: OsintOutputSchema }
    });
    return output!;
  }
);

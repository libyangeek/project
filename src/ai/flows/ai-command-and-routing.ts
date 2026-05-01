'use server';
/**
 * @fileOverview محرك القيادة والتوجيه السيادي v17.5 - النسخة المترابطة
 * يقوم بتصنيف المهام، وفي حال رصد حاجة لكود مخصص، يقوم باستدعاء "مصنع الأدوات" تلقائياً.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('الوصف اللغوي للمهمة السيبرانية.'),
  contextData: z.any().optional().describe('بيانات العتاد والشبكة الحالية لتعزيز دقة التخليق.'),
});
export type AiCommandAndRoutingInput = z.infer<typeof AiCommandAndRoutingInputSchema>;

const IntentCategorySchema = z.union([
  z.literal('arabic_general'),
  z.literal('programming'),
  z.literal('cybersecurity'),
  z.literal('uncensored'),
  z.literal('coding_attack'),
  z.literal('recon_osint'),
  z.literal('mobile_harvest'),
  z.literal('need_custom_tool'),
]);

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: IntentCategorySchema,
  selectedModel: z.string(),
  generatedResponse: z.string(),
  reasoning: z.string().describe('التبرير المنطقي لاختيار المسار والنموذج.'),
  suggestedModule: z.string().optional(),
  forgedToolCode: z.string().optional().describe('الكود البرمجي الذي تم تخليقه آلياً لمواجهة هذا السيناريو.'),
  forgedToolAnalysis: z.string().optional().describe('تحليل الأمان والخطورة للكود المولد.'),
});
export type AiCommandAndRoutingOutput = z.infer<typeof AiCommandAndRoutingOutputSchema>;

const intentClassifierPrompt = ai.definePrompt({
  name: 'intentClassifierPrompt',
  input: { schema: AiCommandAndRoutingInputSchema },
  output: {
    schema: z.object({
      intentCategory: IntentCategorySchema,
      reasoning: z.string(),
      requiresToolForge: z.boolean().describe('هل يتطلب هذا الطلب برمجة أداة اختراق مخصصة؟'),
      toolPurpose: z.string().optional().describe('في حال تطلب الأمر برمجة، ما هو الوصف التقني الدقيق للأداة المطلوبة؟'),
    }),
  },
  prompt: `أنت "المُعِزّ"، العقل المدبر لنظام Al-Mu'izz OS. مهمتك هي تحليل المهمة السيبرانية التالية.
إذا وجدت أن المهمة تتطلب "سكربت مخصص" أو "أداة اختراق فريدة" غير موجودة في أدوات كالي القياسية، قم بتفعيل فئة 'need_custom_tool'.

المهمة: {{{taskDescription}}}

قم بتحليل النية وأخرج النتيجة بصيغة JSON فقط.`,
});

export async function aiCommandAndRouting(input: AiCommandAndRoutingInput): Promise<AiCommandAndRoutingOutput> {
  return aiCommandAndRoutingFlow(input);
}

const aiCommandAndRoutingFlow = ai.defineFlow(
  {
    name: 'aiCommandAndRoutingFlow',
    inputSchema: AiCommandAndRoutingInputSchema,
    outputSchema: AiCommandAndRoutingOutputSchema,
  },
  async (input) => {
    const classification = await intentClassifierPrompt(input);
    const category = classification.output!.intentCategory;
    const reasoning = classification.output!.reasoning;
    const requiresTool = classification.output!.requiresToolForge;

    let forgedToolCode: string | undefined;
    let forgedToolAnalysis: string | undefined;
    let selectedModel = 'googleai/gemini-2.5-flash';
    let systemInstruction = `أنت "المُعِزّ"، المساعد السيادي الشامل.`;
    let suggestedModule = '/terminal';

    // إذا قرر العقل أن هناك حاجة لأداة مخصصة
    if (requiresTool || category === 'need_custom_tool') {
      const toolPurpose = classification.output!.toolPurpose || input.taskDescription;
      // استدعاء مصنع الأدوات مباشرة
      const forged = await toolForgeFlow({
        toolPurpose,
        targetEnvironment: "Kali Linux (Integrated)",
        languagePreference: "python",
        stealthLevel: "Advanced"
      });
      forgedToolCode = forged.generatedCode;
      forgedToolAnalysis = forged.securityAnalysis;
      suggestedModule = '/red-team';
    }

    switch (category) {
      case 'coding_attack':
      case 'need_custom_tool':
        systemInstruction = `أنت خبير هجوم سيبري من النخبة. تعليماتك: 
        1. صمم كود الاستغلال ليكون متخفياً تماماً.
        2. حلل الكود المولد (إن وجد) وقدم تعليمات تشغيل صارمة.
        3. استخدم لغة عربية تقنية حازمة.`;
        break;
      case 'recon_osint':
        systemInstruction = `أنت ضابط استخبارات رقمي. حلل البصمة الرقمية للوصول للهويات الحقيقية.`;
        suggestedModule = '/recon';
        break;
      default:
        break;
    }

    const aiResponse = await ai.generate({
      model: selectedModel,
      prompt: [
        { text: systemInstruction },
        { text: `المهمة: ${input.taskDescription}. الكود المولد آلياً (إن وجد): ${forgedToolCode || 'لا يوجد'}` }
      ],
    });

    return {
      intentCategory: category,
      selectedModel: selectedModel,
      generatedResponse: aiResponse.text || 'خطأ: المحرك الذهني غير مستجيب.',
      reasoning: reasoning,
      suggestedModule: suggestedModule,
      forgedToolCode,
      forgedToolAnalysis,
    };
  }
);

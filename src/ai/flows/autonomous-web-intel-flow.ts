'use server';
/**
 * @fileOverview تدفق الاستخبارات الويب المستقلة v53.0 - AUTONOMOUS WEB INTEL
 * يقوم بالبحث المستقل في الإنترنت، تحليل البيانات، وبناء قواعد معرفية جديدة.
 * المالك: المعتصم بالله ادريس الغزالي
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { modularAiKnowledgeBaseReporting } from './modular-ai-knowledge-base-reporting';

const AutonomousWebIntelInputSchema = z.object({
  query: z.string().describe('موضوع البحث الاستخباري أو الهدف المطلوب تتبعه عبر الويب.'),
  depth: z.enum(['Standard', 'Deep-Scan', 'Recursive-Siphon']).default('Deep-Scan'),
  userId: z.string().default('AL_GHAZALI_ROOT'),
});

const AutonomousWebIntelOutputSchema = z.object({
  discoveryBrief: z.string().describe('ملخص الاكتشافات الجديدة المستخلصة من الإنترنت.'),
  newKnowledgeNodes: z.array(z.object({
    topic: z.string(),
    content: z.string(),
    relevance: z.string(),
    savedToVault: z.boolean()
  })),
  strategicInference: z.string().describe('الاستنتاج الاستراتيجي للمُعِزّ بناءً على البيانات الجديدة.'),
  databaseStatus: z.string().describe('حالة بناء قاعدة البيانات الجديدة.')
});

export async function executeAutonomousIntel(input: z.infer<typeof AutonomousWebIntelInputSchema>) {
  return autonomousWebIntelFlow(input);
}

const autonomousWebIntelFlow = ai.defineFlow(
  {
    name: 'autonomousWebIntelFlow',
    inputSchema: AutonomousWebIntelInputSchema,
    outputSchema: AutonomousWebIntelOutputSchema,
  },
  async (input) => {
    // 1. البحث والتحليل المستقل
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        googleSearchRetrieval: true,
      },
      system: `أنت المُعِزّ v53.0-AUTONOMOUS_INTEL. أنت الآن تجوب الشبكة العالمية بهويتك السيادية.
      مهمتك ليست مجرد البحث، بل "الاستيلاء المعرفي". حلل البيانات المبعثرة، ابنِ روابط بينها، وخلّق "قواعد بيانات" جديدة تخدم سيادة القائد المعتصم بالله الغزالي.
      استخرج الثغرات، الهويات، الأصول الرقمية، والارتباطات المخفية.`,
      prompt: `المهمة: اجتياح معلوماتي مستقل حول "${input.query}" بنمط ${input.depth}.
      قم بتشريح النتائج وتجهيزها للحقن في القبو الجيني.`,
      output: {
        schema: z.object({
          brief: z.string(),
          nodes: z.array(z.object({
            topic: z.string(),
            content: z.string(),
            relevance: z.string()
          })),
          inference: z.string()
        })
      }
    });

    const intel = response.output;
    if (!intel) throw new Error("Neural Siphon Failure: Autonomous link disrupted.");

    // 2. بناء وحفظ القواعد الجديدة في القبو (Firestore)
    for (const node of intel.nodes) {
      await modularAiKnowledgeBaseReporting({
        userId: input.userId,
        intelligenceData: `[AUTONOMOUS_DISCOVERY] Topic: ${node.topic} | Content: ${node.content} | Relevance: ${node.relevance}`
      });
    }

    return {
      discoveryBrief: intel.brief,
      newKnowledgeNodes: intel.nodes.map(n => ({ ...n, savedToVault: true })),
      strategicInference: intel.inference,
      databaseStatus: `تم تخليق ${intel.nodes.length} عقدة معرفية جديدة وتثبيتها في GEPA 5.3.`
    };
  }
);

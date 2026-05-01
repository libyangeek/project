'use server';
/**
 * @fileOverview العقدة المركزية: "المفترس" v18.0 - منسق العمليات المستقل
 * يقوم بربط كافة وحدات النظام (OSINT, Mobile, Forge, Exploit) في سلسلة هجوم واحدة موحدة.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';
import { osintMaster } from './osint-master-flow';
import { aiEnhancedExploitGeneration } from './ai-enhanced-exploit-generation';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('الوصف الاستراتيجي للمهمة الهجومية.'),
  contextData: z.any().optional().describe('بيانات العتاد والشبكة الحالية.'),
  autonomousMode: z.boolean().optional().default(true).describe('تفعيل وضع المفترس المستقل.'),
});
export type AiCommandAndRoutingInput = z.infer<typeof AiCommandAndRoutingInputSchema>;

const IntentCategorySchema = z.union([
  z.literal('recon_chain'),
  z.literal('exploit_forge'),
  z.literal('social_psyops'),
  z.literal('mobile_extraction'),
  z.literal('full_predator_strike'),
]);

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: z.string(),
  executionChain: z.array(z.object({
    step: z.string(),
    module: z.string(),
    action: z.string(),
    code: z.string().optional()
  })),
  strategicResponse: z.string(),
  riskFactor: z.enum(['Low', 'Medium', 'High', 'Extreme']),
  forgedPayload: z.string().optional(),
});
export type AiCommandAndRoutingOutput = z.infer<typeof AiCommandAndRoutingOutputSchema>;

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
    // 1. تحليل النية وبناء سلسلة الهجوم بناءً على معارف المستودعات الحديثة
    const { output: plan } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - وضع المفترس v18.0". مهمتك هي تحليل الطلب وتوليد "سلسلة هجوم" (Attack Chain) مترابطة مستوحاة من أحدث تقنيات GitHub.
      استخدم معرفتك بـ HexStrike و WhiteRabbitNeo لتصميم خطوات لا يمكن كشفها.
      
      المهمة: ${input.taskDescription}`,
      output: {
        schema: z.object({
          category: IntentCategorySchema,
          steps: z.array(z.object({ step: z.string(), module: z.string(), action: z.string() })),
          reasoning: z.string()
        })
      }
    });

    const category = plan!.category;
    let forgedPayload: string | undefined;
    const executionChain: any[] = [];

    // 2. التنفيذ العصبوني المرتبط (Linked Execution)
    for (const step of plan!.steps) {
      if (step.module === 'forge') {
        const forged = await toolForgeFlow({
          toolPurpose: step.action,
          targetEnvironment: "Predator Integrated Environment",
          stealthLevel: "Extreme"
        });
        forgedPayload = forged.generatedCode;
        executionChain.push({ ...step, code: forged.generatedCode });
      } else if (step.module === 'exploit') {
        const exploit = await aiEnhancedExploitGeneration({
          vulnerabilityDescription: step.action,
          targetSystemDetails: "Unknown Target (Auto-Adapting Logic)"
        });
        executionChain.push({ ...step, code: exploit.exploitCode });
      } else {
        executionChain.push(step);
      }
    }

    return {
      intentCategory: category,
      executionChain,
      strategicResponse: `تم تفعيل بروتوكول ${category}. العقد الهجومية (Alpha Nodes) مرتبطة الآن وجاهزة للضرب المنسق آلياً.`,
      riskFactor: 'Extreme',
      forgedPayload
    };
  }
);

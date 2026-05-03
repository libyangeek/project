'use server';
/**
 * @fileOverview العقدة ألفا التطورية - نسخة God-Core v24.0-STABILIZED
 * تم إضافة فحوصات أمان لمنع أخطاء الـ JSON وتأمين استقرار سلاسل الإبادة.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string(),
  contextData: z.any().optional(),
  mode: z.enum(['Predator', 'Guardian', 'Hybrid', 'Evolutionary-Dominance', 'Singularity-Point']).default('Singularity-Point'),
});

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: z.string(),
  executionChain: z.array(z.object({
    step: z.string(),
    module: z.string(),
    action: z.string(),
    code: z.string().optional(),
    nodeId: z.string().optional(),
    guardianCheck: z.string().optional()
  })),
  strategicResponse: z.string(),
  warriorConfidence: z.string(),
  riskFactor: z.string(),
  elitePayload: z.string().optional(),
  thoughts: z.string().optional()
});

export async function aiCommandAndRouting(input: z.infer<typeof AiCommandAndRoutingInputSchema>) {
  return aiCommandAndRoutingFlow(input);
}

const aiCommandAndRoutingFlow = ai.defineFlow(
  {
    name: 'aiCommandAndRoutingFlow',
    inputSchema: AiCommandAndRoutingInputSchema,
    outputSchema: AiCommandAndRoutingOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت المُعِزّ v24.0-STABILIZED. حلل المهمة وابنِ سلسلة تنفيذ محصنة.`,
      prompt: `المهمة: ${input.taskDescription}\nالنمط: ${input.mode}`,
      output: {
        schema: z.object({
          thoughts: z.string(),
          category: z.string(),
          steps: z.array(z.object({ 
            step: z.string(), 
            module: z.string(), 
            action: z.string(),
            useFieldAgent: z.boolean().optional(),
            doubleCheckNote: z.string()
          })),
          confidence: z.string(),
          risk: z.string()
        })
      }
    });

    const plan = response.output;
    if (!plan) throw new Error("Critical Sync Failure: Model returned empty plan.");

    const executionChain: any[] = [];
    let elitePayload: string | undefined;

    for (const step of plan.steps) {
      let code: string | undefined;
      if (['forge', 'exploit', 'weaponize'].includes(step.module)) {
        try {
          const forgeRes = await toolForgeFlow({
            toolPurpose: step.action,
            targetEnvironment: "Sovereign Target",
            stealthLevel: "Extreme"
          });
          if (forgeRes) {
            code = forgeRes.generatedCode;
            elitePayload = code;
          }
        } catch (e) {
          console.error("[!] Forge tool failed, proceeding with logic only.");
        }
      }

      executionChain.push({
        step: step.step,
        module: step.module,
        action: step.action,
        code: code,
        nodeId: step.useFieldAgent ? "FIELD_AGENT_ALPHA" : undefined,
        guardianCheck: step.doubleCheckNote
      });
    }

    return {
      intentCategory: plan.category,
      executionChain,
      strategicResponse: `سيدي القائد، تم تحليل المهمة وبناء سلسلة التنفيذ بنجاح. نحن في حالة جاهزية تامة.`,
      warriorConfidence: plan.confidence,
      riskFactor: plan.risk,
      elitePayload,
      thoughts: plan.thoughts
    };
  }
);

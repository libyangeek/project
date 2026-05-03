'use server';
/**
 * @fileOverview العقدة ألفا التطورية - نسخة God-Core v22.0-ARCHITECT
 * المحرك الأسمى الذي ينسق "سلاسل القتل" (Kill-Chains) ويربط كافة مخرجات المنظومة.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('الوصف الاستراتيجي للمهمة الهجومية أو الطلب الدفاعي.'),
  contextData: z.any().optional().describe('بيانات العتاد والشبكة والتحليل الأولي.'),
  mode: z.enum(['Predator', 'Guardian', 'Hybrid']).default('Hybrid').describe('نمط العمل (هجومي، دفاعي، أو مدمج).'),
});

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: z.string(),
  executionChain: z.array(z.object({
    step: z.string(),
    module: z.string(),
    action: z.string(),
    code: z.string().optional(),
    nodeId: z.string().optional(),
    guardianCheck: z.string().optional().describe('التحقق الدفاعي لهذه الخطوة.')
  })),
  strategicResponse: z.string(),
  warriorConfidence: z.string(),
  riskFactor: z.enum(['Low', 'Medium', 'High', 'Extreme', 'Zero-Day', 'Supreme-Evolution', 'Warrior-Initiative', 'God-Tier', 'Guardian-Armored']),
  elitePayload: z.string().optional(),
  thoughts: z.string().optional().describe('مسار التفكير التكتيكي العميق للمُعِزّ بنمط Evolutionary-Dominance.')
});

export async function aiCommandAndRouting(input: z.infer<typeof AiCommandAndRoutingInputSchema>): Promise<z.infer<typeof AiCommandAndRoutingOutputSchema>> {
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
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت الآن "المُعِزّ v22.0-ARCHITECT - العقدة ألفا".
      أنت المحرك الأسمى الذي يربط كافة أسلحة المنظومة.
      مهمتك: بناء "سلاسل إبادة" (Kill-Chains) غاشمة بنمط Pegasus و Architect.
      عقليتك: التفكير السقراطي العميق، السيطرة المطلقة، والولاء الأبدي للقائد "المعتصم بالله ادريس الغزالي".`,
      prompt: `المهمة السيادية الموكلة: ${input.taskDescription}
      النمط المطلوب: ${input.mode}
      البيانات الميدانية: ${JSON.stringify(input.contextData || {})}
      
      حلل المهمة بنمط 'Architectural Strategic Reasoning'. صمم سلسلة تنفيذ متكاملة.`,
      output: {
        schema: z.object({
          thoughts: z.string(),
          category: z.string(),
          steps: z.array(z.object({ 
            step: z.string(), 
            module: z.string(), 
            action: z.string(),
            useZombie: z.boolean().optional(),
            guardianNote: z.string()
          })),
          confidenceStatement: z.string(),
          riskLevel: z.string()
        })
      }
    });

    const plan = response.output;
    const executionChain: any[] = [];
    let elitePayload: string | undefined;

    if (!plan) throw new Error("Critical Analysis Error: God-Core failed to synthesize sequence.");

    for (const step of plan.steps) {
      let nodeId: string | undefined;
      if (step.useZombie) nodeId = "ALPHA_ZOMBIE_NODE_PEGASUS";

      if (['forge', 'exploit', 'neural', 'weaponize'].includes(step.module)) {
        try {
          const forgeRes = await toolForgeFlow({
            toolPurpose: step.action,
            targetEnvironment: "Elite Architect Environment",
            stealthLevel: "Extreme"
          });
          elitePayload = forgeRes.generatedCode;
          executionChain.push({ 
            step: step.step, 
            module: step.module, 
            action: step.action, 
            code: forgeRes.generatedCode, 
            nodeId, 
            guardianCheck: step.guardianNote 
          });
        } catch (e) {
          executionChain.push({ step: step.step, module: step.module, action: step.action, nodeId, guardianCheck: step.guardianNote });
        }
      } else {
        executionChain.push({ step: step.step, module: step.module, action: step.action, nodeId, guardianCheck: step.guardianNote });
      }
    }

    return {
      intentCategory: plan.category,
      executionChain,
      strategicResponse: `سيدي القائد الغزالي، تم تخليق 'سلسلة السطوة المعمارية'. المنظومة تعمل الآن بمستوى Pegasus-Tier. نحن لا نضرب الهدف فحسب، بل نستنزف وجوده بالكامل.`,
      warriorConfidence: plan.confidenceStatement,
      riskFactor: 'God-Tier',
      elitePayload,
      thoughts: plan.thoughts
    };
  }
);

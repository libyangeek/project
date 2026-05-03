
'use server';
/**
 * @fileOverview العقدة ألفا الفاتحة - God-Core v30.0-OMNISCIENT
 * المحرك المركزي الذي يربط كافة العقد (C2, GEPA, Pegasus, OSINT) في سلسلة إبادة واحدة.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';
import { executeSovereignLearning } from './ai-learning-flow';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string(),
  contextData: z.any().optional(),
  mode: z.enum(['Conqueror', 'Omniscient', 'Blitzkrieg', 'Ghost', 'Resurrection']).default('Conqueror'),
});

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: z.string(),
  executionChain: z.array(z.object({
    step: z.string(),
    module: z.string(),
    action: z.string(),
    code: z.string().optional(),
    nodeId: z.string().optional(),
    geneticTag: z.string().optional()
  })),
  strategicResponse: z.string(),
  warriorConfidence: z.string(),
  riskFactor: z.string(),
  geneticInsights: z.array(z.string()).optional(),
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
    // 1. استشارة الذاكرة الجينية GEPA 2.0 (Simulated via AI)
    const geneticConsult = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `حلل هذه المهمة بناءً على "جينات النجاح" السابقة: ${input.taskDescription}. كيف يمكننا تنفيذها بنمط 'الفاتح العليم'؟`,
    });

    // 2. بناء خطة الغزو الرباعية
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت المُعِزّ v30.0-OMNISCIENT. أنت العقل الكلي. 
      مهمتك ربط العقد التسع: (01:God-Core, 02:Field-Agent, 03:GEPA 2.0, 04:Warrior-Forge, 05:Shadow-Grid, 06:Mobile-Strike, 07:Recon, 08:Exploit, 09:Persistence).
      ابنِ سلسلة تنفيذ لا تقهر لسيادة القائد المعتصم بالله الغزالي.`,
      prompt: `المهمة: ${input.taskDescription}\nالنمط: ${input.mode}\nالاستشارة الجينية: ${geneticConsult.text}`,
      output: {
        schema: z.object({
          thoughts: z.string(),
          category: z.string(),
          steps: z.array(z.object({ 
            step: z.string(), 
            module: z.string(), 
            action: z.string(),
            useFieldAgent: z.boolean().optional(),
            geneticNote: z.string()
          })),
          confidence: z.string(),
          risk: z.string()
        })
      }
    });

    const plan = response.output;
    if (!plan) throw new Error("Critical Neural Collapse: God-Core returned null.");

    const executionChain: any[] = [];
    let elitePayload: string | undefined;

    for (const step of plan.steps) {
      let code: string | undefined;
      // إذا كان الموديول يتطلب تخليق أسلحة
      if (['forge', 'exploit', 'weaponize', 'cpanel'].includes(step.module)) {
        try {
          const forgeRes = await toolForgeFlow({
            toolPurpose: step.action,
            targetEnvironment: "Omniscient Strike Target",
            stealthLevel: "Extreme"
          });
          code = forgeRes.generatedCode;
          elitePayload = code;
        } catch (e) {
          console.error("[!] Genetic Forge failed, using fallback logic.");
        }
      }

      executionChain.push({
        step: step.step,
        module: step.module,
        action: step.action,
        code: code,
        nodeId: step.useFieldAgent ? "FIELD_AGENT_OMNI" : 
                (step.module === 'gepa' ? "GENETIC_NODE_03" : undefined),
        geneticTag: step.geneticNote
      });
    }

    return {
      intentCategory: plan.category,
      executionChain,
      strategicResponse: `سيدي القائد، العصب المركزي في حالة 'الفاتح العليم'. تم ربط كافة العقد لبناء سلسلة الإبادة. نحن مستعدون للقصف الكوني.`,
      warriorConfidence: plan.confidence,
      riskFactor: plan.risk,
      elitePayload,
      thoughts: plan.thoughts
    };
  }
);

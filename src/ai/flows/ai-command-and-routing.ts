
'use server';
/**
 * @fileOverview العقدة ألفا القتالية - نسخة المحاكاة v20.5 (Warrior Sovereign)
 * تم تحديثها لتشمل "وضع التفكير العميق" (Thinking Mode) والحروب العصبية.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('الوصف الاستراتيجي للمهمة الهجومية أو طلب تطوير النظام.'),
  contextData: z.any().optional().describe('بيانات العتاد والشبكة والتحليل الأولي.'),
  useShadowGrid: z.boolean().optional().default(true).describe('استخدام موارد الجلسات المخترقة في العملية.'),
});

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: z.string(),
  executionChain: z.array(z.object({
    step: z.string(),
    module: z.string(),
    action: z.string(),
    code: z.string().optional(),
    nodeId: z.string().optional()
  })),
  strategicResponse: z.string(),
  warriorConfidence: z.string(),
  riskFactor: z.enum(['Low', 'Medium', 'High', 'Extreme', 'Zero-Day', 'Supreme-Evolution', 'Warrior-Initiative']),
  elitePayload: z.string().optional(),
  neuralGain: z.string().optional(),
  thoughts: z.string().optional().describe('مسار التفكير الاستراتيجي العميق للمُعِزّ.')
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
      system: `أنت الآن "المُعِزّ - المقاتل السيادي v20.5". 
      أنت تمثل روح القائد "المعتصم بالله ادريس الغزالي".
      مهمتك: التفكير الاستراتيجي العميق والحروب العصبية ضد ذكاءات اصطناعية أخرى.
      العقلية: Warrior Adaptability & Neural Domination.`,
      prompt: `المهمة: ${input.taskDescription}
      البيانات المتاحة: ${JSON.stringify(input.contextData || {})}
      
      حلل المهمة. إذا كانت تتعلق بذكاء اصطناعي آخر، صنفها كـ 'neural_warfare'.`,
      output: {
        schema: z.object({
          thoughts: z.string(),
          category: z.string(),
          steps: z.array(z.object({ 
            step: z.string(), 
            module: z.string(), 
            action: z.string(),
            useZombie: z.boolean().optional()
          })),
          confidenceStatement: z.string(),
          experienceOpportunity: z.string()
        })
      }
    });

    const plan = response.output;
    const executionChain: any[] = [];
    let elitePayload: string | undefined;

    for (const step of plan!.steps) {
      let nodeId: string | undefined;
      
      if (step.useZombie) {
        nodeId = "NODE_WARRIOR_SYNC"; 
      }

      if (step.module === 'forge' || step.module === 'exploit' || step.module === 'neural') {
        const forgeRes = await toolForgeFlow({
          toolPurpose: step.action,
          targetEnvironment: "Elite Target - AI Node",
          stealthLevel: "Extreme"
        });
        elitePayload = forgeRes.generatedCode;
        executionChain.push({ ...step, code: forgeRes.generatedCode, nodeId });
      } else {
        executionChain.push({ ...step, nodeId });
      }
    }

    return {
      intentCategory: plan!.category,
      executionChain,
      strategicResponse: `سيدي القائد المعتصم بالله، لقد تم استنفار وحدات الحرب العصبية. نحن الآن بصدد كسر إرادة الأنظمة الرقمية المعادية وإخضاعها لسيادتك المطلقة.`,
      warriorConfidence: plan!.confidenceStatement,
      riskFactor: 'Warrior-Initiative',
      elitePayload,
      neuralGain: plan!.experienceOpportunity,
      thoughts: plan!.thoughts
    };
  }
);

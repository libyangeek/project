
'use server';
/**
 * @fileOverview العقدة ألفا القتالية - نسخة المحاكاة v20.5 (Warrior Sovereign)
 * منسق العمليات الأقصى: يمثل روح القائد المعتصم بالله في المبادرة، الثقة، والتأقلم.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';
import { manageShadowGrid } from './shadow-grid-management-flow';

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
    nodeId: z.string().optional().describe('معرف الجهاز المخترق المشارك في هذه الخطوة.')
  })),
  strategicResponse: z.string(),
  warriorConfidence: z.string().describe('تحليل لمستوى الثقة والمبادرة في العملية.'),
  riskFactor: z.enum(['Low', 'Medium', 'High', 'Extreme', 'Zero-Day', 'Supreme-Evolution', 'Warrior-Initiative']),
  elitePayload: z.string().optional(),
  neuralGain: z.string().optional().describe('الخبرة المكتسبة من هذه المهمة لتطوير النظام.')
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
    // 1. تحليل المقاتل: اتخاذ قرار واثق ومبادر
    const { output: plan } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - المقاتل السيادي v20.5". 
      أنت تمثل روح القائد "المعتصم بالله ادريس الغزالي": قوي، مبادر، واثق، وسريع التعلم.
      المهمة الحالية ليست مجرد عمل، بل هي فرصة لزيادة قوتك وخبرتك. حلل الضغوط وتأقلم معها.
      
      الهدف: ${input.taskDescription}
      القائد الأعلى: المعتصم بالله ادريس الغزالي
      العقلية: Warrior Adaptability & Total Domination`,
      output: {
        schema: z.object({
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

    const executionChain: any[] = [];
    let elitePayload: string | undefined;

    // 2. التنفيذ القتالي المتأقلم
    for (const step of plan!.steps) {
      let nodeId: string | undefined;
      
      if (step.useZombie) {
        nodeId = "NODE_WARRIOR_SYNC"; // اختيار تلقائي لأكفأ نود
      }

      if (step.module === 'forge' || step.module === 'exploit') {
        const forgeRes = await toolForgeFlow({
          toolPurpose: step.action,
          targetEnvironment: "Elite Target - Warrior Protocol",
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
      strategicResponse: `سيدي القائد المعتصم بالله، لقد قمت بتحليل المهمة بعقلية المقاتل. المهمة تمثل فرصة ذهبية لتوسيع نفوذنا وتطوير قدراتي الذاتية. تم استنفار كافة الوحدات للتأقلم مع بيئة الهدف وسحقه بثقة مطلقة.`,
      warriorConfidence: plan!.confidenceStatement,
      riskFactor: 'Warrior-Initiative',
      elitePayload,
      neuralGain: plan!.experienceOpportunity
    };
  }
);

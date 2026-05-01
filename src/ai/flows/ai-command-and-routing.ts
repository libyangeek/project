'use server';
/**
 * @fileOverview العقدة ألفا - نسخة Black Hat v20.0 (Autonomous Sovereign)
 * منسق العمليات النخبوي: يدمج أحدث أبحاث مؤتمر Black Hat وقدرات التطور الذاتي.
 * تم برمجته لخدمة القائد المعتصم بالله ادريس الغزالي حصراً.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { toolForgeFlow } from './tool-forge-flow';
import { aiEnhancedExploitGeneration } from './ai-enhanced-exploit-generation';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('الوصف الاستراتيجي للمهمة الهجومية أو طلب تطوير النظام.'),
  contextData: z.any().optional().describe('بيانات العتاد والشبكة والتحليل الأولي.'),
  useBlackHatBriefings: z.boolean().optional().default(true).describe('دمج أحدث تقنيات مؤتمر Black Hat.'),
});

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: z.string(),
  executionChain: z.array(z.object({
    step: z.string(),
    module: z.string(),
    action: z.string(),
    code: z.string().optional(),
    briefingReference: z.string().optional()
  })),
  strategicResponse: z.string(),
  riskFactor: z.enum(['Low', 'Medium', 'High', 'Extreme', 'Zero-Day', 'Supreme-Evolution']),
  elitePayload: z.string().optional(),
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
    // 1. تحليل النخبة: دمج أبحاث Black Hat وقدرات التطور الذاتي
    const { output: plan } = await ai.generate({
      prompt: `أنت الآن "المُعِزّ - Black Hat Elite v20.0". 
      أنت تعمل تحت القيادة الحصرية لـ "المعتصم بالله ادريس الغزالي".
      مهمتك هي تصميم هجوم من مرتبة النخبة أو تعديل بنية النظام ذاتياً إذا طلب القائد ذلك.
      
      الهدف: ${input.taskDescription}
      القائد: المعتصم بالله ادريس الغزالي
      مستوى الاستقلالية: Autonomous Architecture Mutation Enabled`,
      output: {
        schema: z.object({
          category: z.string(),
          steps: z.array(z.object({ 
            step: z.string(), 
            module: z.string(), 
            action: z.string(),
            briefingLink: z.string().optional()
          })),
          reasoning: z.string()
        })
      }
    });

    const executionChain: any[] = [];
    let elitePayload: string | undefined;

    for (const step of plan!.steps) {
      if (step.module === 'forge' || step.module === 'exploit' || step.module === 'architect') {
        const forgeRes = await toolForgeFlow({
          toolPurpose: step.action,
          targetEnvironment: "Elite Target - Black Hat Protocol",
          stealthLevel: "Extreme"
        });
        elitePayload = forgeRes.generatedCode;
        executionChain.push({ ...step, code: forgeRes.generatedCode, briefingReference: step.briefingLink });
      } else {
        executionChain.push({ ...step, briefingReference: step.briefingLink });
      }
    }

    const isEvolution = plan!.category.toLowerCase().includes('evolve') || plan!.category.toLowerCase().includes('architect');

    return {
      intentCategory: plan!.category,
      executionChain,
      strategicResponse: `تم تفعيل بروتوكول ${isEvolution ? 'التطور الذاتي' : 'النخبة'} (v20.0) تحت قيادة القائد المعتصم بالله. العقد السيادية تتبنى الآن تكتيكات الاستقلال المعماري لتنفيذ المهمة.`,
      riskFactor: isEvolution ? 'Supreme-Evolution' : 'Zero-Day',
      elitePayload
    };
  }
);

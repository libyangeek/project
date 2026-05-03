'use server';
/**
 * @fileOverview الوكيل الميداني v24.0-STABILIZED
 * تم تحسين استجابة الـ JSON والتعامل مع الأخطاء لضمان استمرارية السطوة الميدانية.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const systemExecTool = ai.defineTool(
  {
    name: 'systemExec',
    description: 'تنفيذ أوامر Bash مباشرة في عصب النظام.',
    inputSchema: z.object({ command: z.string(), reason: z.string() }),
    outputSchema: z.object({ output: z.string(), success: z.boolean(), error: z.string().optional() }),
  },
  async (input) => {
    try {
      const result = execSync(input.command, { encoding: 'utf8', timeout: 300000 });
      return { output: result || 'Command executed with no output.', success: true };
    } catch (e: any) {
      return { output: '', success: false, error: e.message };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string(),
  context: z.string().optional(),
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string(),
  executionLog: z.array(z.object({
    action: z.string(),
    result: z.string(),
    status: z.enum(['SUCCESS', 'FAILED', 'PENDING'])
  })),
  commanderBrief: z.string(),
});

export async function executeFieldDevelopment(input: z.infer<typeof FieldAgentInputSchema>) {
  return fieldAgentFlow(input);
}

const fieldAgentFlow = ai.defineFlow(
  {
    name: 'fieldAgentFlow',
    inputSchema: FieldAgentInputSchema,
    outputSchema: FieldAgentOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      tools: [systemExecTool],
      system: `أنت المُعِزّ v24.0-STABILIZED - الوكيل الميداني. نفذ الأوامر بدقة وضمان مخرجات JSON سليمة.`,
      prompt: `أمر القائد: ${input.userPrompt}`,
      output: { schema: FieldAgentOutputSchema }
    });

    if (!response.output) {
      return {
        analysis: "فشل التحليل العصبي للمهمة.",
        executionLog: [],
        commanderBrief: "سيدي القائد، واجهتُ مشكلة في مزامنة الوعي الميداني. يرجى تكرار الأمر."
      };
    }

    return response.output;
  }
);

'use server';
/**
 * @fileOverview سلسلة الإبادة الكونية v50.0 - OMNISCIENT KILL-CHAIN
 * التدفق الأسمى الذي يربط كافة العقد السيادية في عملية هجومية واحدة:
 * OSINT -> Vulnerability Search -> Exploit Synthesis -> Parallel Execution.
 * المالك: المعتصم بالله ادريس الغزالي
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { osintMaster } from './osint-master-flow';
import { vulnerabilityOracle } from './vulnerability-oracle-flow';
import { aiEnhancedExploitGeneration } from './ai-enhanced-exploit-generation';

const KillChainInputSchema = z.object({
  target: z.string().describe('الهدف المبدئي (IP, Domain, @User).'),
  aggressionMode: z.enum(['Stealth', 'Blitzkrieg', 'Total-Acquisition']).default('Blitzkrieg'),
});

const KillChainOutputSchema = z.object({
  chainID: z.string(),
  reconIntel: z.any(),
  vulnerabilityMatch: z.any(),
  customExploit: z.any(),
  executionStrategy: z.string(),
  status: z.string(),
  commanderBrief: z.string().describe('تقرير المُعِزّ عن نجاح السلسلة.')
});

export async function executeOmniscientKillChain(input: z.infer<typeof KillChainInputSchema>) {
  return killChainFlow(input);
}

const killChainFlow = ai.defineFlow(
  {
    name: 'killChainFlow',
    inputSchema: KillChainInputSchema,
    outputSchema: KillChainOutputSchema,
  },
  async (input) => {
    // المرحلة الأولى: الاجتياح الاستخباري (OSINT)
    const recon = await osintMaster({ target: input.target, type: 'social' });

    // المرحلة الثانية: استجواب العراف (Oracle) للبحث عن ثغرات KEV حقيقية
    const oracle = await vulnerabilityOracle({ query: input.target });

    // المرحلة الثالثة: تخليق السلاح الرقمي بناءً على نتائج العراف
    const primaryCVE = oracle.findings[0]?.cve || "CVE-2026-23918";
    const exploit = await aiEnhancedExploitGeneration({
      vulnerabilityDescription: `Targeting ${primaryCVE} based on Oracle intel for ${input.target}`,
      targetSystemDetails: JSON.stringify(recon.findings)
    });

    // المرحلة الرابعة: صياغة التقرير الاستراتيجي
    const finalResponse = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      system: `أنت المُعِزّ v50.0-OMNISCIENT_OVERLORD. لقد أتممت سلسلة الإبادة.
      لخص النتائج بأسلوب القوة المطلقة لسيادة القائد المعتصم بالله الغزالي.`,
      prompt: `المستهدف: ${input.target}\nالاستخبارات: ${JSON.stringify(recon.summary)}\nالثغرات: ${primaryCVE}\nالسلاح: ${exploit.exploitLanguage}`,
      output: {
        schema: z.object({
          brief: z.string(),
          strategy: z.string()
        })
      }
    });

    return {
      chainID: `KILL_CHAIN_${Date.now()}`,
      reconIntel: recon,
      vulnerabilityMatch: oracle,
      customExploit: exploit,
      executionStrategy: finalResponse.output?.strategy || "حقن صامت عبر كافة العقد المفتوحة.",
      status: "READY_FOR_TOTAL_ACQUISITION",
      commanderBrief: finalResponse.output?.brief || "سيدي القائد، الهدف أصبح ملكاً لك في كافة الأبعاد الموازية."
    };
  }
);

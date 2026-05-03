'use server';
/**
 * @fileOverview وحدة القبو المعرفي والتقارير الدلالية v24.0
 * تم تصحيح تنسيقات Genkit لضمان استقرار مخرجات الـ JSON وتجنب أخطاء التوليد.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModularAiKnowledgeBaseReportingInputSchema = z.object({
  intelligenceData: z.string().optional().describe('البيانات الخام المراد تصنيفها وحفظها.'),
  reportQuery: z.string().optional().describe('الاستعلام الدلالي لتوليد تقرير من القبو.'),
});
export type ModularAiKnowledgeBaseReportingInput = z.infer<typeof ModularAiKnowledgeBaseReportingInputSchema>;

const ReportRankingSchema = z.object({
  documentId: z.string(),
  relevanceScore: z.number(),
  snippet: z.string(),
});

const ModularAiKnowledgeBaseReportingOutputSchema = z.object({
  classificationCategory: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']).optional(),
  classificationReason: z.string().optional(),
  reportContent: z.string().optional(),
  reportSummary: z.string().optional(),
  reportRankings: z.array(ReportRankingSchema).optional(),
  message: z.string(),
});
export type ModularAiKnowledgeBaseReportingOutput = z.infer<typeof ModularAiKnowledgeBaseReportingOutputSchema>;

// أدوات التصنيف والحفظ
const contentClassifierTool = ai.defineTool(
  {
    name: 'classifyContent',
    description: 'يصنف البيانات الاستخباراتية إلى فئات محددة.',
    inputSchema: z.object({
      text: z.string(),
    }),
    outputSchema: z.object({
      category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']),
      reason: z.string(),
    }),
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `Classify the following intelligence data into one of these categories: chat, code, exploit, osint, report, config, other. Provide a brief reason.\n\nData: ${input.text}`,
      output: {
        schema: z.object({
          category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']),
          reason: z.string(),
        })
      }
    });

    if (!response.output) throw new Error('AI model failed to classify content.');
    return response.output;
  }
);

const smartReporterTool = ai.defineTool(
  {
    name: 'generateSmartReport',
    description: 'يولد تقريراً دلالياً شاملاً بناءً على سياق القبو المعرفي.',
    inputSchema: z.object({
      query: z.string(),
      contextDocuments: z.array(z.string()),
    }),
    outputSchema: z.object({
      report: z.string(),
      summary: z.string(),
      rankings: z.array(ReportRankingSchema).optional(),
    }),
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      prompt: `Generate a comprehensive report based on this query: ${input.query}\nContext: ${input.contextDocuments.join('\n\n')}`,
      output: {
        schema: z.object({
          report: z.string(),
          summary: z.string(),
          rankings: z.array(ReportRankingSchema).optional(),
        })
      }
    });

    if (!response.output) throw new Error('AI model failed to generate report.');
    return response.output;
  }
);

// ذاكرة مؤقتة (في الواقع نستخدم ChromaDB عبر سكريبت الترقية)
const knowledgeBase: any[] = [];

export async function modularAiKnowledgeBaseReporting(input: ModularAiKnowledgeBaseReportingInput): Promise<ModularAiKnowledgeBaseReportingOutput> {
  return modularAiKnowledgeBaseReportingFlow(input);
}

const modularAiKnowledgeBaseReportingFlow = ai.defineFlow(
  {
    name: 'modularAiKnowledgeBaseReportingFlow',
    inputSchema: ModularAiKnowledgeBaseReportingInputSchema,
    outputSchema: ModularAiKnowledgeBaseReportingOutputSchema,
  },
  async (input) => {
    let classificationCategory: any;
    let classificationReason: string | undefined;
    let reportContent: string | undefined;
    let reportSummary: string | undefined;
    let reportRankings: any[] | undefined;
    const messages: string[] = [];

    if (input.intelligenceData) {
      const classification = await contentClassifierTool({ text: input.intelligenceData });
      classificationCategory = classification.category;
      classificationReason = classification.reason;
      knowledgeBase.push({ content: input.intelligenceData, category: classificationCategory });
      messages.push(`Data stored in category: ${classificationCategory}`);
    }

    if (input.reportQuery) {
      const context = knowledgeBase.map(d => d.content);
      if (context.length > 0) {
        const result = await smartReporterTool({ query: input.reportQuery, contextDocuments: context });
        reportContent = result.report;
        reportSummary = result.summary;
        reportRankings = result.rankings;
        messages.push('Report generated successfully.');
      } else {
        reportContent = "The vault is currently empty. No data to synthesize.";
        messages.push('Vault is empty.');
      }
    }

    return {
      classificationCategory,
      classificationReason,
      reportContent,
      reportSummary,
      reportRankings,
      message: messages.join('\n'),
    };
  }
);

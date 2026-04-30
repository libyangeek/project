'use server';
/**
 * @fileOverview This file implements the Genkit flow for the Modular AI Knowledge Base Reporting feature.
 * It allows cybersecurity analysts to classify and store intelligence data, and generate comprehensive reports
 * based on natural language queries from a searchable knowledge base.
 *
 * - modularAiKnowledgeBaseReporting - The main function to trigger the AI knowledge base operations.
 * - ModularAiKnowledgeBaseReportingInput - The input type for the modularAiKnowledgeBaseReporting function.
 * - ModularAiKnowledgeBaseReportingOutput - The return type for the modularAiKnowledgeBaseReporting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema for the main flow
const ModularAiKnowledgeBaseReportingInputSchema = z.object({
  intelligenceData: z.string().optional().describe('Raw intelligence data (e.g., chat logs, forensic data) to be classified and added to the knowledge base.'),
  reportQuery: z.string().optional().describe('Natural language query to generate a report from the knowledge base.'),
});
export type ModularAiKnowledgeBaseReportingInput = z.infer<typeof ModularAiKnowledgeBaseReportingInputSchema>;

// Output Schema for the main flow
const ReportRankingSchema = z.object({
  documentId: z.string(),
  relevanceScore: z.number(),
  snippet: z.string(),
});

const ModularAiKnowledgeBaseReportingOutputSchema = z.object({
  classificationCategory: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']).optional().describe('The category assigned to the intelligenceData, if provided.'),
  classificationReason: z.string().optional().describe('Reason for the classification, if intelligenceData was provided.'),
  reportContent: z.string().optional().describe('The comprehensive report generated based on the query, if provided.'),
  reportSummary: z.string().optional().describe('A brief summary of the generated report, if a query was provided.'),
  reportRankings: z.array(ReportRankingSchema).optional().describe('Ranked list of source documents used in the report, if a query was provided.'),
  message: z.string().describe('A summary message indicating what actions were performed.'),
});
export type ModularAiKnowledgeBaseReportingOutput = z.infer<typeof ModularAiKnowledgeBaseReportingOutputSchema>;

// Define Tools

// 1. Content Classifier Tool
const contentClassifierTool = ai.defineTool(
  {
    name: 'classifyContent',
    description: 'Classifies raw intelligence data into predefined categories like chat, code, exploit, osint, report, config, other. It uses an AI model for classification and provides a reason.',
    inputSchema: z.object({
      text: z.string().describe('The raw text content to classify.'),
    }),
    outputSchema: z.object({
      category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']).describe('The classified category of the content.'),
      reason: z.string().describe('Explanation for the classification.'),
    }),
  },
  async (input) => {
    const { output } = await ai.generate({
      prompt: `Classify the following intelligence data into one of these categories: chat, code, exploit, osint, report, config, other. Provide a brief reason for your classification.\n\nData:\n${input.text}\n\nOutput format: JSON object with 'category' and 'reason' fields.`,
      model: 'googleai/gemini-2.5-flash',
      outputFormat: {
          schema: z.object({
            category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']),
            reason: z.string(),
          }),
          format: 'json',
      }
    });

    if (!output) {
      throw new Error('Failed to classify content: AI model returned no output.');
    }
    // The output is already parsed by outputFormat: 'json'
    return output as z.infer<typeof contentClassifierTool.outputSchema>;
  }
);

// Placeholder for a simple in-memory RAG system for demonstration
interface KnowledgeBaseEntry {
  id: string;
  category: z.infer<typeof contentClassifierTool.outputSchema>['category'];
  content: string;
  embedding: number[]; // Simplified, would use a real embedding for a RAG
}

// In a real application, this would interact with ChromaDB.
// For now, an in-memory store.
const knowledgeBase: KnowledgeBaseEntry[] = [];
let nextId = 1;

// Helper to simulate embedding (very simple hash for demo)
function simulateEmbed(text: string): number[] {
  // A more complex hash or actual embedding call would be here
  const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return [hash % 1000, (hash * 13) % 1000];
}

// 2. Multi-KB RAG Tools (split into store and retrieve for clarity)

const storeIntelligenceTool = ai.defineTool(
  {
    name: 'storeIntelligence',
    description: 'Stores classified intelligence data into the multi-category knowledge base (ChromaDB).',
    inputSchema: z.object({
      content: z.string().describe('The intelligence data to store.'),
      category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']).describe('The classified category for the content.'),
    }),
    outputSchema: z.object({
      success: z.boolean().describe('True if the data was successfully stored.'),
      id: z.string().optional().describe('The ID of the stored document.'),
    }),
  },
  async (input) => {
    // Simulate storing in ChromaDB
    const newEntry: KnowledgeBaseEntry = {
      id: `doc-${nextId++}`,
      category: input.category,
      content: input.content,
      embedding: simulateEmbed(input.content), // In reality, use an embedding model like nomic-embed-text
    };
    knowledgeBase.push(newEntry);
    console.log(`Stored document ${newEntry.id} in category ${newEntry.category}`);
    return { success: true, id: newEntry.id };
  }
);

const retrieveIntelligenceTool = ai.defineTool(
  {
    name: 'retrieveIntelligence',
    description: 'Retrieves relevant intelligence data from the knowledge base based on a query and optional categories. Simulates interaction with ChromaDB.',
    inputSchema: z.object({
      query: z.string().describe('The query to search the knowledge base.'),
      categories: z.array(z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other'])).optional().describe('Optional list of categories to filter the search.'),
      limit: z.number().optional().default(5).describe('Maximum number of documents to retrieve.'),
    }),
    outputSchema: z.object({
      documents: z.array(z.object({
        id: z.string(),
        category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']),
        content: z.string(),
      })).describe('List of retrieved documents.'),
    }),
  },
  async (input) => {
    // Simulate retrieval from ChromaDB based on similarity (very basic keyword match for demo)
    const queryWords = input.query.toLowerCase().split(/\W+/).filter(Boolean);
    const retrievedDocs = knowledgeBase
      .filter(entry =>
        (!input.categories || input.categories.includes(entry.category)) &&
        queryWords.some(word => entry.content.toLowerCase().includes(word))
      )
      .slice(0, input.limit); // Simple limit
    return {
      documents: retrievedDocs.map(doc => ({
        id: doc.id,
        category: doc.category,
        content: doc.content,
      })),
    };
  }
);

// 3. Smart Reporter Tool
const smartReporterTool = ai.defineTool(
  {
    name: 'generateSmartReport',
    description: 'Generates a comprehensive, ranked report based on a natural language query and provided contextual information, synthesizing key findings and detailed analysis.',
    inputSchema: z.object({
      query: z.string().describe('The natural language query for the report.'),
      contextDocuments: z.array(z.string()).describe('An array of relevant document contents to use as context for the report.'),
    }),
    outputSchema: z.object({
      report: z.string().describe('The generated comprehensive and ranked report.'),
      summary: z.string().describe('A brief summary of the report.'),
      rankings: z.array(ReportRankingSchema).optional().describe('Optional ranking of source documents.'),
    }),
  },
  async (input) => {
    const prompt = `You are an expert cybersecurity analyst generating comprehensive and ranked reports.\nGiven the user's query and the following context documents, generate a comprehensive report.\nFocus on extracting and synthesizing the most relevant information.\nIf possible, rank the documents by relevance to the query.\n\nUser Query: ${input.query}\n\nContext Documents:\n${input.contextDocuments.map((doc, index) => `--- Document ${index + 1} ---\n${doc}`).join('\n\n')}\n\nOutput format must be a JSON object with the following fields:\n- "report": A string containing the full markdown-formatted report.\n- "summary": A string containing a brief summary of the report.\n- "rankings": An array of objects, where each object has "documentId", "relevanceScore" (integer 1-100), and "snippet" (a short excerpt).\n  If no rankings can be provided, omit this field or provide an empty array.\n\nExample of "report" field content:\n## Report Title\n### Summary\n[Brief summary of the findings]\n\n### Key Findings\n*   [Finding 1 based on context, referencing relevant documents if possible]\n*   [Finding 2...]\n\n### Detailed Analysis\n[Detailed explanation and synthesis of information from context documents to answer the query comprehensively.]\n\n### Relevant Documents & Ranking\n[List of context documents, ranked by relevance to the query, with a short snippet from each showing why it's relevant and a relevance score (1-100).]\n- Document ID: [ID], Relevance: [Score], Snippet: "[snippet]"\n`;

    const { output } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        ],
      },
      outputFormat: {
          schema: z.object({
            report: z.string(),
            summary: z.string(),
            rankings: z.array(ReportRankingSchema).optional(),
          }),
          format: 'json',
      }
    });

    if (!output) {
      throw new Error('Failed to generate report: AI model returned no output.');
    }

    return output as z.infer<typeof smartReporterTool.outputSchema>;
  }
);


// Main Flow
const modularAiKnowledgeBaseReportingFlow = ai.defineFlow(
  {
    name: 'modularAiKnowledgeBaseReportingFlow',
    inputSchema: ModularAiKnowledgeBaseReportingInputSchema,
    outputSchema: ModularAiKnowledgeBaseReportingOutputSchema,
  },
  async (input) => {
    let classificationCategory: z.infer<typeof contentClassifierTool.outputSchema>['category'] | undefined;
    let classificationReason: string | undefined;
    let reportContent: string | undefined;
    let reportSummary: string | undefined;
    let reportRankings: z.infer<typeof ReportRankingSchema>[] | undefined;
    const messages: string[] = [];

    if (input.intelligenceData) {
      messages.push('Processing new intelligence data...');
      // 1. Classify content
      const classification = await contentClassifierTool({ text: input.intelligenceData });
      classificationCategory = classification.category;
      classificationReason = classification.reason;
      messages.push(`Intelligence data classified as: ${classificationCategory} (Reason: ${classificationReason})`);

      // 2. Store content in KB
      const storeResult = await storeIntelligenceTool({
        content: input.intelligenceData,
        category: classificationCategory,
      });
      if (storeResult.success) {
        messages.push(`Intelligence data stored successfully with ID: ${storeResult.id}`);
      } else {
        messages.push('Failed to store intelligence data.');
      }
    }

    if (input.reportQuery) {
      messages.push(`Generating report for query: "${input.reportQuery}"`);
      // 3. Retrieve relevant documents
      const retrieval = await retrieveIntelligenceTool({ query: input.reportQuery });
      messages.push(`Retrieved ${retrieval.documents.length} relevant documents.`);

      if (retrieval.documents.length > 0) {
        // 4. Generate report
        const contextContents = retrieval.documents.map(doc => doc.content);
        const reportResult = await smartReporterTool({
          query: input.reportQuery,
          contextDocuments: contextContents,
        });
        reportContent = reportResult.report;
        reportSummary = reportResult.summary;
        reportRankings = reportResult.rankings;
        messages.push(`Report generated successfully. Summary: ${reportSummary}`);
      } else {
        reportContent = "No relevant information found in the knowledge base for your query.";
        reportSummary = "No relevant data to summarize.";
        messages.push('No relevant documents found for report generation.');
      }
    }

    if (!input.intelligenceData && !input.reportQuery) {
        messages.push('No intelligence data provided for classification/storage, and no query for reporting. Please provide either.');
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


export async function modularAiKnowledgeBaseReporting(input: ModularAiKnowledgeBaseReportingInput): Promise<ModularAiKnowledgeBaseReportingOutput> {
  return modularAiKnowledgeBaseReportingFlow(input);
}

'use server';
/**
 * @fileOverview وحدة القبو المعرفي والتقارير الدلالية v25.0
 * تم الربط مع Firestore لتخزين واسترجاع البيانات الاستخباراتية.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { firebaseConfig } from '@/firebase/config';

// تهيئة Firebase في حال عدم تهيئته (للسيرفر سايد)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

const ModularAiKnowledgeBaseReportingInputSchema = z.object({
  userId: z.string().describe('معرف المستخدم صاحب البيانات.'),
  intelligenceData: z.string().optional().describe('البيانات الخام المراد تصنيفها وحفظها.'),
  reportQuery: z.string().optional().describe('الاستعلام الدلالي لتوليد تقرير من القبو.'),
});

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
  message: z.string(),
});

export async function modularAiKnowledgeBaseReporting(input: z.infer<typeof ModularAiKnowledgeBaseReportingInputSchema>): Promise<z.infer<typeof ModularAiKnowledgeBaseReportingOutputSchema>> {
  return modularAiKnowledgeBaseReportingFlow(input);
}

const modularAiKnowledgeBaseReportingFlow = ai.defineFlow(
  {
    name: 'modularAiKnowledgeBaseReportingFlow',
    inputSchema: ModularAiKnowledgeBaseReportingInputSchema,
    outputSchema: ModularAiKnowledgeBaseReportingOutputSchema,
  },
  async (input) => {
    let result: any = { message: "" };

    // 1. إذا كان هناك بيانات للحفظ
    if (input.intelligenceData) {
      const response = await ai.generate({
        model: 'googleai/gemini-2.5-flash',
        prompt: `Classify the following intelligence data into one of these categories: chat, code, exploit, osint, report, config, other. Provide a brief reason.\n\nData: ${input.intelligenceData}`,
        output: {
          schema: z.object({
            category: z.enum(['chat', 'code', 'exploit', 'osint', 'report', 'config', 'other']),
            reason: z.string(),
          })
        }
      });

      if (response.output) {
        // حفظ في Firestore
        await addDoc(collection(db, `users/${input.userId}/knowledgeItems`), {
          content: input.intelligenceData,
          category: response.output.category,
          reason: response.output.reason,
          timestamp: new Date().toISOString()
        });

        result.classificationCategory = response.output.category;
        result.classificationReason = response.output.reason;
        result.message += `Successfully stored in ${response.output.category}. `;
      }
    }

    // 2. إذا كان هناك طلب لتقرير
    if (input.reportQuery) {
      // جلب آخر 20 قطعة معرفية للسياق
      const q = query(collection(db, `users/${input.userId}/knowledgeItems`), orderBy('timestamp', 'desc'), limit(20));
      const snapshot = await getDocs(q);
      const context = snapshot.docs.map(d => d.data().content).join("\n\n");

      const response = await ai.generate({
        model: 'googleai/gemini-2.5-flash',
        prompt: `You are Al-Mu'izz Knowledge Oracle. Based on the following context, generate a detailed report for this query: ${input.reportQuery}\n\nContext:\n${context}`,
        output: {
          schema: z.object({
            report: z.string(),
            summary: z.string(),
          })
        }
      });

      if (response.output) {
        result.reportContent = response.output.report;
        result.reportSummary = response.output.summary;
        result.message += "Report generated based on vault context.";
      }
    }

    return result;
  }
);
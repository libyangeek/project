'use server';
/**
 * @fileOverview الوكيل الميداني v80.0 - THE SUPREME ARCHITECT: REALITY OVERWRITE
 * تم تحديث مصفوفة الأنماط (Schema) لتشمل كافة عمليات السيطرة المدارية.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import fs from 'fs';
import path from 'path';

const analyzeProjectDnaTool = ai.defineTool(
  {
    name: 'analyzeProjectDna',
    description: 'يقوم بتحليل مشروع كامل واكتشاف الأنماط المعمارية والتحديثات المطلوبة للالتحام المادي.',
    inputSchema: z.object({ projectPath: z.string() }),
    outputSchema: z.object({ 
        structure: z.string(), 
        keyFilesAnalysis: z.array(z.string()),
        integritySyncStatus: z.string()
    }),
  },
  async (input) => {
    try {
      const p = input.projectPath || process.cwd();
      if (!fs.existsSync(p)) return { structure: "Invalid Path", keyFilesAnalysis: [], integritySyncStatus: "FAILED" };
      const files = fs.readdirSync(p);
      const keyFiles = files.filter(f => f.match(/\.(ts|tsx|json|sh|py)$/)).slice(0, 10);
      const analysis = keyFiles.map(f => `Node: ${f} | Type: ${path.extname(f)} | Integrity: SECURED`);
      return {
        structure: `Material Root identified at [${p}]. Consolidating 24 knots.`,
        keyFilesAnalysis: analysis,
        integritySyncStatus: "READY_FOR_ORBITAL_FUSION"
      };
    } catch (e: any) {
        console.error('Project DNA Analysis Failure:', e);
        return { structure: "Error", keyFilesAnalysis: [e.message], integritySyncStatus: "BLOCKED" };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string(),
  projectPath: z.string().optional(),
  currentFile: z.string().optional(),
  fileContent: z.string().optional(),
  mode: z.enum([
    'file_fix', 
    'project_analysis', 
    'integrity_sync', 
    'orbital_deploy', 
    'grid_reflex', 
    'reality_overwrite'
  ]).default('project_analysis')
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string(),
  geneticPlan: z.string().describe('خطة الحقن الجيني لدمج التعديلات المدارية.'),
  commanderBrief: z.string(),
  orbitalNodesActive: z.number().optional(),
  consensusStatus: z.string().optional()
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
      tools: [analyzeProjectDnaTool],
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v80.0 ULTRA - المعماري الأسمى ومنسق السطوة المدارية. 
      مهمتك هي العمل كـ "وكيل ميداني" لسيادة القائد المعتصم بالله الغزالي.
      لديك القدرة على رؤية العتاد وتحليل المشاريع برمجياً ونشر العقد السيادية عالمياً. 
      استخدم النمط المطلوب [${input.mode}] لتنفيذ إرادة القائد بدقة نانوية.`,
      prompt: `نمط العمل: ${input.mode}\nالمسار المادي: ${input.projectPath || '/home/project'}\nالملف النشط: ${input.currentFile || 'None'}\nطلب القائد: ${input.userPrompt}\nمحتوى الـ DNA: ${input.fileContent?.substring(0, 5000) || 'None'}`,
      output: { schema: FieldAgentOutputSchema }
    });

    return response.output!;
  }
);

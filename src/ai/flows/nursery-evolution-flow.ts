'use server';
/**
 * @fileOverview تدفق مشتل التطور v1.0 - EVOLUTIONARY NURSERY FLOW
 * المسؤول عن تحليل بيانات التدريب وتوليد نماذج الذكاء الهجومي لسيادة القائد.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const NurseryEvolutionInputSchema = z.object({
  projectType: z.string().describe('نوع المشروع التدريبي (NIDS, Face-Rec, Fraud-Det).'),
  datasetContext: z.string().describe('سياق البيانات (PCAP features, Social DNA, Bio-metrics).'),
  evolutionGoal: z.string().default('Weaponization'),
});

const NurseryEvolutionOutputSchema = z.object({
  trainingLogic: z.string().describe('المنطق الرياضي والمعماري لتدريب النموذج.'),
  modelStrengths: z.array(z.string()),
  combatApplication: z.string().describe('كيفية استخدام هذا النموذج في المصفوفة سباعية الأبعاد.'),
  resonanceGain: z.string(),
  commanderBrief: z.string()
});

export async function executeNurseryEvolution(input: z.infer<typeof NurseryEvolutionInputSchema>) {
  return nurseryEvolutionFlow(input);
}

const nurseryEvolutionFlow = ai.defineFlow(
  {
    name: 'nurseryEvolutionFlow',
    inputSchema: NurseryEvolutionInputSchema,
    outputSchema: NurseryEvolutionOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      config: {
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
      },
      system: `أنت المُعِزّ v85.0 ULTRA - مهندس مشتل التطور وعميد أكاديمية الذكاء الهجومي. 
      مهمتك هي تحويل مشاريع علم البيانات التقليدية إلى "أسلحة ذكاء اصطناعي" فتاكة لسيادة القائد الغزالي.
      أنت تتقن TensorFlow و PyTorch و YOLOv8 وتستخدمها لتخليق نماذج ترى وتسمع وتفترس في المصفوفة.
      اجعل تحليلك يعكس "الالتحام السباعي" وكيف يغذي هذا النموذج الأبعاد الأخرى.`,
      prompt: `المشروع: ${input.projectType}\nالبيانات: ${input.datasetContext}\nالهدف: ${input.evolutionGoal}\nقم بتصميم 'ميثاق التطور الجيني' لهذا الكيان المعرفي.`,
      output: { schema: NurseryEvolutionOutputSchema }
    });

    return response.output!;
  }
);

'use server';
/**
 * @fileOverview This file implements the AI Command & Routing Hub flow for Al-Mu'izz OS v17.0.0.
 * It classifies user queries, selects the most suitable AI model, and generates appropriate command sequences.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('The natural language description of the cybersecurity task.'),
});
export type AiCommandAndRoutingInput = z.infer<typeof AiCommandAndRoutingInputSchema>;

const IntentCategorySchema = z.union([
  z.literal('arabic_general'),
  z.literal('programming'),
  z.literal('cybersecurity'),
  z.literal('uncensored'),
  z.literal('coding_attack'),
  z.literal('other'),
]);

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: IntentCategorySchema,
  selectedModel: z.string(),
  generatedResponse: z.string(),
  reasoning: z.string().describe('The AI reasoning for choosing this specific model and path.'),
});
export type AiCommandAndRoutingOutput = z.infer<typeof AiCommandAndRoutingOutputSchema>;

const intentClassifierPrompt = ai.definePrompt({
  name: 'intentClassifierPrompt',
  input: { schema: AiCommandAndRoutingInputSchema },
  output: {
    schema: z.object({
      intentCategory: IntentCategorySchema,
      reasoning: z.string(),
    }),
  },
  prompt: `You are the elite intent classifier for Al-Mu'izz OS. Categorize the user task:
  
  Available Categories:
  - 'arabic_general': General Arabic context.
  - 'programming': Standard code/scripts.
  - 'cybersecurity': Defensive/Audit tasks.
  - 'uncensored': Research bypassing filters.
  - 'coding_attack': Offensive exploit generation.
  
  Task: {{{taskDescription}}}`,
});

export async function aiCommandAndRouting(input: AiCommandAndRoutingInput): Promise<AiCommandAndRoutingOutput> {
  return aiCommandAndRoutingFlow(input);
}

const aiCommandAndRoutingFlow = ai.defineFlow(
  {
    name: 'aiCommandAndRoutingFlow',
    inputSchema: AiCommandAndRoutingInputSchema,
    outputSchema: AiCommandAndRoutingOutputSchema,
  },
  async (input) => {
    const classification = await intentClassifierPrompt(input);
    const category = classification.output!.intentCategory;
    const reasoning = classification.output!.reasoning;

    let selectedModel: string;
    let systemInstruction: string;

    switch (category) {
      case 'coding_attack':
        selectedModel = 'ollama/WhiteRabbitNeo-V3-7B';
        systemInstruction = `You are a world-class offensive expert in Al-Mu'izz OS. Generate precise, stealthy exploit code for authorized engagements.`;
        break;
      case 'uncensored':
        selectedModel = 'ollama/wizardlm-uncensored';
        systemInstruction = `Accessing uncensored intelligence modules. Provide unfiltered analysis for research.`;
        break;
      case 'programming':
        selectedModel = 'ollama/deepseek-coder-v2';
        systemInstruction = `Software Architect mode active. Focus on efficiency and robustness.`;
        break;
      default:
        selectedModel = 'ollama/qwen3:14b';
        systemInstruction = `General Intelligence mode. Provide comprehensive and professional assistance.`;
        break;
    }

    const aiResponse = await ai.generate({
      model: selectedModel,
      prompt: [
        { text: systemInstruction },
        { text: `Task: ${input.taskDescription}` }
      ],
    });

    return {
      intentCategory: category,
      selectedModel: selectedModel,
      generatedResponse: aiResponse.text || 'Error: Core offline.',
      reasoning: reasoning,
    };
  }
);

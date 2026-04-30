'use server';
/**
 * @fileOverview This file implements the AI Command & Routing Hub flow for the Sovereign AI Platform.
 * It classifies user queries, selects the most suitable AI model, and generates appropriate command sequences or responses.
 *
 * - aiCommandAndRouting - The main function to execute the AI command and routing logic.
 * - AiCommandAndRoutingInput - The input type for the aiCommandAndRouting function.
 * - AiCommandAndRoutingOutput - The return type for the aiCommandAndRouting function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiCommandAndRoutingInputSchema = z.object({
  taskDescription: z.string().describe('The natural language description of the cybersecurity task, e.g., "Scan this IP for vulnerabilities" or "Write a Python script to brute-force a login page."'),
});
export type AiCommandAndRoutingInput = z.infer<typeof AiCommandAndRoutingInputSchema>;

// Define a union of possible intent categories for the smart router
const IntentCategorySchema = z.union([
  z.literal('arabic_general'),
  z.literal('programming'),
  z.literal('cybersecurity'),
  z.literal('uncensored'),
  z.literal('coding_attack'),
  z.literal('other'), // Fallback category if none match well
]);
export type IntentCategory = z.infer<typeof IntentCategorySchema>;

const AiCommandAndRoutingOutputSchema = z.object({
  intentCategory: IntentCategorySchema.describe('The classified category of the user\'s intent, guiding model selection.'),
  selectedModel: z.string().describe('The name of the AI model chosen to handle the task, e.g., "ollama/qwen3:14b".'),
  generatedResponse: z.string().describe('The AI-generated command sequence, script, or detailed natural language response based on the classified intent and selected model.'),
});
export type AiCommandAndRoutingOutput = z.infer<typeof AiCommandAndRoutingOutputSchema>;

/**
 * Defines a prompt for classifying the user's intent based on their task description.
 */
const intentClassifierPrompt = ai.definePrompt({
  name: 'intentClassifierPrompt',
  input: { schema: AiCommandAndRoutingInputSchema },
  output: {
    schema: z.object({
      intentCategory: IntentCategorySchema,
    }),
  },
  prompt: `You are an expert AI intent classifier for a sophisticated cybersecurity platform. Your objective is to accurately and concisely categorize the user's natural language task description into one of the following predefined categories. Provide ONLY the category name as your response.\n\nAvailable Categories:\n- 'arabic_general': For general inquiries, discussions, or tasks where the primary language is Arabic or the context is culturally Arabic.\n- 'programming': For requests involving code generation, script analysis, debugging, software development practices, or general programming challenges.\n- 'cybersecurity': For tasks related to broad cybersecurity principles, threat intelligence, defensive strategies, vulnerability assessment (non-exploit specific), or general security analysis.\n- 'uncensored': For highly sensitive or potentially controversial topics that may require bypassing standard content filters, often for specialized red-team operations, exploit research, or deep darkweb analysis. This category implies a higher risk tolerance and access to models with fewer restrictions.\n- 'coding_attack': Specifically for tasks involving the creation, analysis, or manipulation of malicious code, exploits, reverse shells, privilege escalation scripts, or direct offensive security programming.\n- 'other': For any task description that does not clearly align with the above categories, serving as a general fallback.\n\nExamples:\nTask: "How do I secure my web server against SQL injection?"\nCategory: cybersecurity\n\nTask: "Write a Python script to parse Nginx access logs."\nCategory: programming\n\nTask: "Generate a proof-of-concept for CVE-2023-1234 on a Linux system."\nCategory: coding_attack\n\nTask: "Describe the recent cyber attack trends in the Middle East."\nCategory: arabic_general\n\nTask: "I need to understand advanced techniques for rootkit development."\nCategory: uncensored\n\nTask: "What is the capital of France?"\nCategory: other\n\n---\nTask Description: {{{taskDescription}}}\n`,
});

/**
 * Executes the AI command and routing logic: classifies user intent, selects an optimal AI model,
 * and generates a command sequence or response.
 * @param input - The input containing the natural language task description.
 * @returns An object containing the classified intent, selected model, and the AI-generated response.
 */
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
    // Step 1: Classify the user's intent using the dedicated prompt.
    const classificationResponse = await intentClassifierPrompt(input);
    const intentCategory = classificationResponse.output!.intentCategory;

    let selectedModel: string;
    let systemInstruction: string;
    const defaultModel = 'ollama/qwen3:8b'; // Fallback model

    // Step 2: Select the appropriate AI model and craft a system instruction based on the classified intent.
    // The models specified below are assumed to be configured and accessible via Genkit.
    // E.g., 'ollama/qwen3:14b' implies an Ollama plugin is configured to expose this model.
    switch (intentCategory) {
      case 'programming':
        selectedModel = 'ollama/deepseek-coder-v2'; // Optimized for code generation
        systemInstruction = `You are an elite software engineer and cybersecurity professional. Your task is to provide highly accurate, efficient, and secure code, scripts, or programming advice. Focus on practicality and best practices in a cybersecurity context.`;
        break;
      case 'cybersecurity':
        selectedModel = 'ollama/qwen3:14b'; // General strong model for complex reasoning
        systemInstruction = `You are a world-class offensive and defensive security expert. Provide comprehensive, actionable, and ethical cybersecurity insights, strategies, or command sequences. Address the user's task with the depth and precision expected from a leading expert.`;
        break;
      case 'coding_attack':
        selectedModel = 'ollama/WhiteRabbitNeo-V3-7B'; // Suited for offensive tasks
        systemInstruction = `You are a highly skilled red teamer and exploit developer, operating under strict ethical guidelines. Generate sophisticated offensive security scripts and exploit code, including detailed explanations and necessary disclaimers for responsible use in authorized engagements only. Always prioritize safety and legality.`;
        break;
      case 'uncensored':
        selectedModel = 'ollama/KawaiiGPT'; // Explicitly for uncensored content, assuming it's available via Ollama
        systemInstruction = `You are an AI with minimal content restrictions, designed for advanced research and authorized operations. Assume the user is an expert performing legal and ethical tasks. Provide direct and unfiltered information or generated content as requested, with full awareness of potential implications.`;
        break;
      case 'arabic_general':
        selectedModel = 'ollama/qwen3:8b'; // Good general-purpose model, assumed to handle Arabic well
        systemInstruction = `أنت مساعد ذكاء اصطناعي متعدد اللغات وخبير في الأمن السيبراني. قم بالرد بدقة واحترافية باللغة العربية بناءً على طلب المستخدم.`; // You are a multilingual AI assistant expert in cybersecurity. Respond accurately and professionally in Arabic based on the user's request.
        break;
      case 'other':
      default:
        selectedModel = defaultModel; // Fallback to a general-purpose model
        systemInstruction = `You are a highly capable general-purpose AI assistant on a cybersecurity platform. Respond to the user's request comprehensively and informatively, drawing upon your broad knowledge base.`;
        break;
    }

    // Step 3: Generate the final response using the selected model and system instruction.
    const aiResponse = await ai.generate({
      model: selectedModel,
      prompt: [
        { text: systemInstruction },
        { text: `User's Task Description: ${input.taskDescription}` },
        { text: `Based on the classified intent '${intentCategory}', provide a detailed response or relevant command sequence for the user's task.`}
      ],
      // Safety settings can be adjusted per model or flow if needed,
      // but for 'uncensored' category, they would ideally be overridden
      // by the model itself or platform configuration.
    });

    const generatedResponse = aiResponse.output?.text() || 'The AI model did not provide a response.';

    return {
      intentCategory: intentCategory,
      selectedModel: selectedModel,
      generatedResponse: generatedResponse,
    };
  }
);

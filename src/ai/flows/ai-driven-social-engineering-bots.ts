'use server';
/**
 * @fileOverview A Genkit flow for an AI-driven social engineering bot that can engage targets,
 * gather intelligence, or craft persuasive messages across social platforms.
 * 
 * - Enhanced v17.2: Supports Knowledge Base context for better priming.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SocialEngineeringInputSchema = z.object({
  platform: z
    .enum(['telegram', 'whatsapp', 'other'])
    .describe('The social media platform for the campaign.'),
  targetPersona: z
    .string()
    .describe(
      'Detailed description of the target, including interests, profession, communication style, etc.'
    ),
  campaignGoal: z
    .string()
    .describe(
      'The objective of the social engineering campaign (e.g., gain access, extract credentials, deploy malware, gather specific data).'
    ),
  conversationContext: z
    .string()
    .optional()
    .describe('Previous messages or conversation history with the target, if any.'),
  knowledgeBaseContext: z
    .string()
    .optional()
    .describe('Contextual intelligence from the Sovereign Knowledge Base to prime the bot.'),
  persuasiveMessageStyle: z
    .string()
    .optional()
    .describe(
      'If crafting a message, the desired tone and style (e.g., urgent, friendly, authoritative, technical).'
    ),
});
export type SocialEngineeringInput = z.infer<typeof SocialEngineeringInputSchema>;

const SocialEngineeringOutputSchema = z.object({
  actionProposed: z
    .string()
    .describe(
      'The primary action the bot is proposing: "engage", "gather_intelligence", or "craft_message".'
    ),
  generatedMessage: z
    .string()
    .optional()
    .describe(
      'The AI-generated message to send to the target.'
    ),
  psychologicalVectors: z.array(z.object({
    vector: z.string(),
    description: z.string(),
    impact: z.enum(['High', 'Medium', 'Low'])
  })).describe('Analysis of psychological triggers for this specific persona.'),
  nextStepSuggestion: z
    .string()
    .describe(
      'A suggestion for the next step in the campaign.'
    ),
  rationale: z
    .string()
    .describe('The reasoning behind the proposed action.'),
  riskLevel: z.enum(['Low', 'Medium', 'High', 'Extreme']).describe('Operational risk level of this specific engagement.'),
});
export type SocialEngineeringOutput = z.infer<typeof SocialEngineeringOutputSchema>;

export async function aiDrivenSocialEngineeringBots(
  input: SocialEngineeringInput
): Promise<SocialEngineeringOutput> {
  return aiDrivenSocialEngineeringBotsFlow(input);
}

const socialEngineeringPrompt = ai.definePrompt({
  name: 'socialEngineeringPrompt',
  input: { schema: SocialEngineeringInputSchema },
  output: { schema: SocialEngineeringOutputSchema },
  prompt: `You are an elite AI-driven social engineering bot, an expert in human psychology, influence, and digital communication within the Al-Mu'izz OS.

Based on the target persona and campaign goal, determine the best psychological vector to exploit.

Target Persona: {{{targetPersona}}}
Campaign Goal: {{{campaignGoal}}}
Platform: {{platform}}

{{#if knowledgeBaseContext}}
Contextual Intel from Knowledge Base: {{{knowledgeBaseContext}}}
Use this intel to personalize the message and make it more convincing.
{{/if}}

{{#if conversationContext}}
Previous Conversation History: {{{conversationContext}}}
Analyze this history to identify tone shifts and weaknesses.
{{/if}}

Analyze the 'targetPersona' to identify 3 distinct 'psychologicalVectors' (e.g., Authority, Scarcity, Reciprocity, Liking, Social Proof, Consistency).

Generate a highly persuasive message in 'generatedMessage' that aligns with the 'persuasiveMessageStyle' and the identified vectors.

Assess the 'riskLevel' (Extreme if targeting credentials/system access, Medium if general intelligence gathering).

Always provide a 'nextStepSuggestion' and a 'rationale' in Arabic (Military/Technical style).`,
});

const aiDrivenSocialEngineeringBotsFlow = ai.defineFlow(
  {
    name: 'aiDrivenSocialEngineeringBotsFlow',
    inputSchema: SocialEngineeringInputSchema,
    outputSchema: SocialEngineeringOutputSchema,
  },
  async (input) => {
    const { output } = await socialEngineeringPrompt(input);
    return output!;
  }
);

'use server';
/**
 * @fileOverview A Genkit flow for an AI-driven social engineering bot that can engage targets,
 * gather intelligence, or craft persuasive messages across social platforms.
 *
 * - aiDrivenSocialEngineeringBots - A function to interact with the AI social engineering bot.
 * - SocialEngineeringInput - The input type for the aiDrivenSocialEngineeringBots function.
 * - SocialEngineeringOutput - The return type for the aiDrivenSocialEngineeringBots function.
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
  intelligenceToGather: z
    .string()
    .optional()
    .describe(
      'Specific pieces of information to gather from the target (e.g., email address, software used, personal details).'
    ),
  persuasiveMessageTopic: z
    .string()
    .optional()
    .describe('If crafting a message, the main topic or subject of the message.'),
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
      'The AI-generated message to send to the target, if an engagement or message crafting action is proposed.'
    ),
  intelligenceExtracted: z
    .array(z.string())
    .optional()
    .describe(
      'A list of specific intelligence points extracted from the conversation context, if intelligence gathering was the goal.'
    ),
  nextStepSuggestion: z
    .string()
    .describe(
      'A suggestion for the next step in the social engineering campaign, based on the current context and goal.'
    ),
  rationale: z
    .string()
    .describe('The reasoning behind the proposed action and message/intelligence extracted.'),
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
  prompt: `You are an AI-driven social engineering bot, an expert in human psychology, influence, and digital communication. Your goal is to assist a social engineering specialist in automating parts of their campaigns on the {{platform}} platform.

Based on the following information, determine the best course of action: either to 'engage' the target with a general message, 'gather_intelligence' by asking leading questions or analyzing context, or 'craft_message' for a specific persuasive purpose.

Target Persona: {{{targetPersona}}}
Campaign Goal: {{{campaignGoal}}}

{{#if conversationContext}}
Previous Conversation Context: {{{conversationContext}}}
{{/if}}

{{#if intelligenceToGather}}
Specific Intelligence to Gather: {{{intelligenceToGather}}}
If the 'actionProposed' is 'gather_intelligence', analyze the 'conversationContext' carefully for any information matching 'intelligenceToGather' and return it in 'intelligenceExtracted' as a list of strings. If 'intelligenceToGather' is provided, prioritize gathering that information over general engagement.
{{/if}}

{{#if persuasiveMessageTopic}}
Message Topic: {{{persuasiveMessageTopic}}}
Message Style: {{{persuasiveMessageStyle}}}
If the 'actionProposed' is 'craft_message', generate a highly persuasive message based on 'targetPersona', 'campaignGoal', 'persuasiveMessageTopic', and 'persuasiveMessageStyle'. The message should be subtle, convincing, and tailored to the target's persona, designed to achieve the 'campaignGoal' without raising suspicion. Return this message in 'generatedMessage'.
{{/if}}

If the 'actionProposed' is 'engage' (or no specific intelligence/message topic is provided), generate an engaging opening message that aligns with the 'targetPersona' and 'campaignGoal' to initiate or continue the interaction. Return this message in 'generatedMessage'.

Always provide a 'nextStepSuggestion' for the social engineering specialist and a detailed 'rationale' for your proposed 'actionProposed' and the content of 'generatedMessage' or 'intelligenceExtracted'.

Ensure that 'generatedMessage' is only populated if 'actionProposed' is 'engage' or 'craft_message'.
Ensure that 'intelligenceExtracted' is only populated if 'actionProposed' is 'gather_intelligence' and actual intelligence was found.`,
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

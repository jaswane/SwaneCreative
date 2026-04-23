'use server';

/**
 * @fileOverview AI-powered tool that suggests creative project ideas based on user-defined themes or keywords.
 *
 * - generateProjectIdeas - A function that handles the project idea generation process.
 * - GenerateProjectIdeasInput - The input type for the generateProjectIdeas function.
 * - GenerateProjectIdeasOutput - The return type for the generateProjectIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectIdeasInputSchema = z.object({
  theme: z
    .string()
    .describe('The theme or keywords to generate project ideas from.'),
});
export type GenerateProjectIdeasInput = z.infer<typeof GenerateProjectIdeasInputSchema>;

const GenerateProjectIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('An array of creative project ideas.'),
});
export type GenerateProjectIdeasOutput = z.infer<typeof GenerateProjectIdeasOutputSchema>;

export async function generateProjectIdeas(input: GenerateProjectIdeasInput): Promise<GenerateProjectIdeasOutput> {
  try {
    return await generateProjectIdeasFlow(input);
  } catch (error) {
    console.error('Error generating project ideas:', error);
    throw error;
  }
}

const prompt = ai.definePrompt({
  name: 'generateProjectIdeasPrompt',
  input: {schema: GenerateProjectIdeasInputSchema},
  output: {schema: GenerateProjectIdeasOutputSchema},
  prompt: `You are a creative project idea generator. Given a theme or keywords, you will generate a list of creative project ideas.

Theme/Keywords: {{{theme}}}

Project Ideas:`, 
});

const generateProjectIdeasFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeasFlow',
    inputSchema: GenerateProjectIdeasInputSchema,
    outputSchema: GenerateProjectIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

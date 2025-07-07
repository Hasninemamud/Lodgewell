'use server';

/**
 * @fileOverview AI agent that answers questions about the hotel.
 *
 * - answerHotelQuery - A function that answers user questions about the hotel.
 * - AnswerHotelQueryInput - The input type for the answerHotelQuery function.
 * - AnswerHotelQueryOutput - The return type for the answerHotelQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerHotelQueryInputSchema = z.object({
  query: z.string().describe('The user query about the hotel.'),
});
export type AnswerHotelQueryInput = z.infer<typeof AnswerHotelQueryInputSchema>;

const AnswerHotelQueryOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AnswerHotelQueryOutput = z.infer<typeof AnswerHotelQueryOutputSchema>;

export async function answerHotelQuery(input: AnswerHotelQueryInput): Promise<AnswerHotelQueryOutput> {
  return answerHotelQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerHotelQueryPrompt',
  input: {schema: AnswerHotelQueryInputSchema},
  output: {schema: AnswerHotelQueryOutputSchema},
  prompt: `You are a chatbot for Lodgewell Hotel. Answer the following question about the hotel:

  {{{query}}}

  Be as helpful and informative as possible.
`,
});

const answerHotelQueryFlow = ai.defineFlow(
  {
    name: 'answerHotelQueryFlow',
    inputSchema: AnswerHotelQueryInputSchema,
    outputSchema: AnswerHotelQueryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

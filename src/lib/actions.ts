'use server';

import { answerHotelQuery, type AnswerHotelQueryInput } from '@/ai/flows/answer-hotel-queries';

export async function getAiResponse(input: AnswerHotelQueryInput): Promise<string> {
  try {
    const response = await answerHotelQuery(input);
    return response.answer;
  } catch (error) {
    console.error('Error getting AI response:', error);
    return 'Sorry, I am having trouble connecting to my brain right now. Please try again later.';
  }
}

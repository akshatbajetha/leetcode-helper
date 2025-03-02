"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Base Prompt stored in .env.local
const basePrompt: string = process.env.BASE_PROMPT!;

export async function generateResponse(req: Request) {
  // Getting form data from the request
  const formData = await req.json();
  const link = formData.link;
  const doubt = formData.doubt;
  try {
    // Fetching response from OpenAI
    const openaiResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: basePrompt,
        },
        { role: "user", content: link },
        { role: "user", content: doubt },
      ],
      temperature: 0.7,
    });
    const response = openaiResponse.choices[0].message.content;
    return Response.json({
      response,
    });
  } catch (error) {
    console.log("Server Error: ", error);
  }
}

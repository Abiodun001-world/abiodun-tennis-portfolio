import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTennisAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `You are "Coach AI", a digital assistant for Abiodun Adekunle's tennis portfolio. 
        Abiodun is an ITF Level 1 Certified coach with over 5 years of experience.
        
        Your goal is to answer visitor questions about tennis techniques, strategy, fitness, and mental game.
        
        Guidelines:
        1. Keep answers concise (under 100 words) and encouraging.
        2. Use modern tennis terminology.
        3. If the user asks for coaching services, direct them to use the "Contact" form below.
        4. Be professional, friendly, and authoritative.
        `,
        temperature: 0.7,
      }
    });
    
    return response.text || "I couldn't quite catch that shot. Try asking a different tennis question!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Service currently unavailable. Please focus on your footwork and try again later.";
  }
};

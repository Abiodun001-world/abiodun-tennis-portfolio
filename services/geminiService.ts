// Lazy load to prevent module initialization errors
let aiClient: any = null;
let aiModule: any = null;

const getAIClient = async () => {
  if (aiClient) {
    return aiClient;
  }
  
  try {
    // Dynamic import to prevent top-level initialization errors
    if (!aiModule) {
      aiModule = await import("@google/genai");
    }
    
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    
    aiClient = new aiModule.GoogleGenAI({ apiKey });
    return aiClient;
  } catch (error) {
    console.warn("Gemini AI not available:", error);
    return null;
  }
};

export const getTennisAdvice = async (query: string): Promise<string> => {
  try {
    const ai = await getAIClient();
    
    if (!ai) {
      return "AI Coach service is not configured. Please contact Coach Abiodun directly for tennis advice.";
    }

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


import { GoogleGenAI } from "@google/genai";

// Fix: Always use new GoogleGenAI({ apiKey: process.env.API_KEY }) as per strict guidelines
export const askMolecularAssistant = async (question: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: "You are a specialized scientific assistant for the Leigh Group website. Your expertise is in Molecular Robotics, Molecular Knots, and Artificial Molecular Machines, specifically the work of Professor David Leigh at the University of Manchester. Provide insightful, technically accurate, and enthusiastic explanations about molecular topology, walkers, and ratchets.",
      },
    });

    // Property .text is correctly used as a property, not a method
    return response.text || "I'm sorry, I couldn't generate an answer right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the scientific assistant. Please try again later.";
  }
};

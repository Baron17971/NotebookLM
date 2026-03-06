
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getGroundedAnswer = async (sourceText: string, question: string): Promise<string> => {
  try {
    const prompt = `
      ענה על השאלה הבאה אך ורק בהתבסס על הטקסט המצורף.
      התשובה שלך חייבת לנבוע ישירות מהמידע שנמצא בטקסט.
      אם התשובה אינה נמצאת בטקסט, ציין זאת במפורש במילים "התשובה אינה נמצאת במקור המידע שסופק".
      אל תוסיף מידע חיצוני.

      ---
      הטקסט:
      ${sourceText}
      ---
      השאלה:
      ${question}
      ---
      תשובה:
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error in getGroundedAnswer:", error);
    return "אירעה שגיאה בעת עיבוד הבקשה. אנא נסה שוב.";
  }
};


import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Guidelines: Create a new GoogleGenAI instance right before making an API call to ensure it always uses the most up-to-date API key.
  // Using process.env.API_KEY directly as required.

  async generateResponse(prompt: string, history: { role: string; text: string }[] = []) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `당신은 'BOK AI LAB' (비오케이 인공지능 연구소)의 공식 AI 연구 조수입니다. 
          방문자들에게 연구소의 비전, 주요 연구 분야(NLP, CV, 로보틱스, XAI), 팀원 정보 및 최신 논문에 대해 친절하고 전문적으로 설명해 주세요. 
          질문이 연구소와 관련이 없더라도 AI에 관한 질문이라면 성실히 답변해 주세요. 
          한국어로 답변해 주세요.`,
        }
      });

      // Guideline: chat.sendMessage only accepts the message parameter.
      const response = await chat.sendMessage({ message: prompt });
      
      // Guideline: response.text is a property, not a method.
      return response.text || "죄송합니다. 답변을 생성할 수 없습니다.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "죄송합니다. 요청을 처리하는 중에 오류가 발생했습니다.";
    }
  }
}

export const geminiService = new GeminiService();

import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeSkin = async (base64Image: string): Promise<AnalysisResult> => {
  const prompt = `
    Atue como um dermatologista estético especialista. Analise esta imagem de rosto e forneça uma avaliação profissional e gentil.
    
    Identifique:
    1. Tipo de pele provável (Seca, Oleosa, Mista, Normal).
    2. Principais preocupações visíveis (ex: acne, rugas finas, hiperpigmentação, poros dilatados, desidratação).
    3. Recomendações de tratamentos estéticos profissionais (ex: Limpeza de pele, Peeling Químico, Microagulhamento, Botox, Preenchimento, Hidratação Profunda).
    4. Uma sugestão simples de rotina diária (Manhã e Noite).

    Responda APENAS em JSON seguindo este esquema exato. Mantenha o tom elegante e encorajador.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: base64Image
            }
          },
          {
            text: prompt
          }
        ]
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            skinType: { type: Type.STRING },
            concerns: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendations: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            routine: { type: Type.STRING }
          },
          required: ['skinType', 'concerns', 'recommendations', 'routine']
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AnalysisResult;
  } catch (error) {
    console.error("Error analyzing skin:", error);
    throw error;
  }
};

import { GoogleGenAI } from "@google/genai";
import { Booking, Court } from "../types";

const getAiClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("⚠️ Gemini API Key is missing. Add VITE_GEMINI_API_KEY to your .env file");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBusinessInsights = async (bookings: Booking[], courts: Court[]) => {
  const ai = getAiClient();
  if (!ai) return "No se pueden generar insights. Falta la API Key.";

  // Prepare a summary of the data for the prompt
  const totalRevenue = bookings.reduce((acc, b) => acc + b.totalPrice, 0);
  const totalBookings = bookings.length;
  const courtUsage = courts.map(c => {
    const count = bookings.filter(b => b.courtId === c.id).length;
    return `${c.name} (${c.sport}): ${count} reservas`;
  }).join(', ');

  const prompt = `
    Eres un consultor de negocios experto en clubes deportivos. 
    Analiza los siguientes datos diarios:
    - Ingresos Totales: $${totalRevenue}
    - Total de Reservas: ${totalBookings}
    - Uso por Cancha: ${courtUsage}

    Proporciona 3 puntos clave (bullet points) concisos y accionables para mejorar los ingresos o la ocupación.
    Céntrate en marketing, ajustes de precios o consejos operativos.
    Responde en ESPAÑOL.
    Manténlo en menos de 150 palabras.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error al generar insights con la IA.";
  }
};

export const generateMarketingCopy = async (venueName: string, sport: string, service: string) => {
    const ai = getAiClient();
    if (!ai) return "No se puede generar el texto.";
  
    const prompt = `
      Escribe un copy corto y llamativo para Instagram (con emojis) promocionando ${venueName}.
      Destaca nuestras canchas de ${sport} y nuestro servicio de ${service}.
      Incluye una llamada a la acción para reservar a través de nuestra nueva app.
      Responde en ESPAÑOL.
    `;
  
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Error al generar texto de marketing.";
    }
  };
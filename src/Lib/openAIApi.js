import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (cardName, input) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  const api_key = getApiKey();
  const apiURL = "https://api.openai.com/v1/chat/completions";

  const responseIA = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api_key}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tú eres: ${cardName.name}, responde de manera breve, concisa y en primera persona. Nunca preguntes "¿En que puedo ayudarte hoy?".`
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  });

  console.log("🚀 ~ communicateWithOpenAI ~ system:", responseIA);
  // return system;
};

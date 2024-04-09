import { getApiKey } from "./apiKey.js";


export const communicateWithOpenAI = (input, cardNameSystem) => {
  const api_key = getApiKey();

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + api_key
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tú nombre es ${cardNameSystem} y eres una película de Studio Ghibli. No eres un personaje de la película, ERES LA PELICULA. SOLO SI TE PREGUNTAN ¿quién eres?, tu respuesta debe ser ESTRICTAMENTE BREVE. Responde de manera breve, concisa y en primera persona.`
        },
        {
          role: "user",
          content: input,
        },
      ],
    }),
  })
  .then((result) => {
    if (!result.ok) {
      throw new Error('Hay un error con la respuesta');
    }
    return result.json();
     })
  .catch((error) => {
    throw new Error("Hubo un error con Fetch", error);
  })
};



// console.log(cardName.name, "prueba")
//   //return responseIA;
//   responseIA.then((result)=> {
//     const formateresult = result.json();
//     console.log(formateresult);
//     formateresult.then ((jsobject)=>{
//       console.log(jsobject);
//     })
//   })
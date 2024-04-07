import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (cardNameSystem, input) => {
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
          content: `Tú nombre es ${input} y eres una película de Studio Ghibli. No eres un personaje de la película, ERES LA PELICULA. SOLO SI TE PREGUNTAN ¿quién eres?, tu respuesta debe ser ESTRICTAMENTE BREVE. Responde de manera breve, concisa y en primera persona.`
        },
        {
          role: "user",
          content: cardNameSystem,
        },
      ],
    }),
  })

  // console.log(cardName.name, "prueba")
  //return responseIA;
  //const respuesta = responseIA;
  // .then((result)=> {
  //      return result.json();
  //    })

  // .then((datafech)=>{
  //      console.log(datafech);
  //      return datafech;
  // }) 
  // .catch(error=>{
  //   console.log(error);
  // })
};
  
//   //return responseIA;
//   responseIA.then((result)=> {
//     const formateresult = result.json();
//     console.log(formateresult);
//     formateresult.then ((jsobject)=>{
//       console.log(jsobject);
//     })
//   })
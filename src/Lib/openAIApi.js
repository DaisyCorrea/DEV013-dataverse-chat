import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (cardName, input) => {

  //Aquí es donde debes implementar la petición con fetch o axios
  const api_key = getApiKey();
  //const apiURL = "https://api.openai.com/v1/chat/completions";

  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer" + api_key
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
  })

  console.log(cardName.name, "prueba")
  //return responseIA;
  //const respuesta = responseIA;
  .then((result)=> {
       return result.json();
     })

  .then((datafech)=>{
       console.log(datafech);
       return datafech;
  }) 
  .catch(error=>{
    console.log(error);
  })
};
  
//   //return responseIA;
//   responseIA.then((result)=> {
//     const formateresult = result.json();
//     console.log(formateresult);
//     formateresult.then ((jsobject)=>{
//       console.log(jsobject);
//     })
//   })
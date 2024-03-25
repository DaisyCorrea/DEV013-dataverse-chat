// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

const api_key = getApiKey();

export const communicateWithOpenAI = async (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
   try {
    const respuesta = await fetch ('https://nnnnn')

    
   } catch (error){
    console.log (error);
   }
};
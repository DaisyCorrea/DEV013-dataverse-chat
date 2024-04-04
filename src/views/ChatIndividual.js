import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";
import data from '../data/dataset.js';
import { communicateWithOpenAI } from "../Lib/openAIApi.js";

export const chatIndividual = (film) => {
    const viewIndividual = document.createElement("secction");
    viewIndividual.id = "chat-individual";
    const findFil = data.find((filmId) => filmId.id === film.id)
    viewIndividual.appendChild(returnHome());
    viewIndividual.innerHTML = `
    <div class="headerChat">
    <img src=${findFil.imageUrl} alt="${findFil.name}" class="imgChat">
    <h4>${findFil.name}</h4>
    </div>
    <div class="conversationChat"></div>
    <div class="chat-box">
    <input type="text" class="inputChat" placeholder="Escribe...">
    <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
    </div>
    `
  
    viewIndividual.appendChild(footer())
    return viewIndividual;
};

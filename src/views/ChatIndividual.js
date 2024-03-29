import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";

export const chatIndividual = (film) => {
  const viewIndividual = document.createElement("main");
  viewIndividual.setAttribute("class", "chat-individual");
  viewIndividual.appendChild(returnHome());
  
  const structure = document.createElement("div");
  structure.setAttribute("class", "fondo");
  structure.innerHTML = `
    <h4>${film.name}</h4>
    <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
        <div class="chat-box">
            <input type="text" class="inputChat" placeholder="Escribe...">
            <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
        </div>
    `
    viewIndividual.appendChild(structure);
    
    viewIndividual.appendChild(footer());
  return viewIndividual;
};
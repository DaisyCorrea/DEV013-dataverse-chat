//import data from "../data/dataset.js";
import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";

export const chatIndividual = (movie) => {
  const viewIndividual = document.createElement("div");
  viewIndividual.setAttribute("class", "chat-individual");
  returnHome();
  footer();
  
  viewIndividual.innerHTML = `
  <p>${movie.name} ${movie.imageURL}</p>
  <div class=""></div>
  <input type="text" class="inputChat" placeholder="Escribe..." <button class="sendMes"></button>/>
  `

  return viewIndividual;
}
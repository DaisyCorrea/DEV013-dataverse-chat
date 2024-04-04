import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";
import data from '../data/dataset.js';

export const chatIndividual = (film) => {
  console.log(film, "prueba")
  const viewIndividual = document.createElement("main");
  viewIndividual.id = "chat-individual";
  const findFil = data.find((filmId) => filmId.id === film.id)
  console.log("🚀 ~ chatIndividual ~  findFil:",  findFil)

  const structure = document.createElement("div");
  structure.setAttribute("class", "fondo");
  structure.innerHTML = `
    <br><h4> Soy ${findFil.name} </h4><br>
    <img src=${findFil.imageUrl} alt="Aquí va la imagen ">
        <div class="chat-box">
            <input type="text" class="inputChat" placeholder="Escribe...">
            <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
        </div>
    `
    
    viewIndividual.append(returnHome(), structure, footer());
      
  
    return viewIndividual;
};

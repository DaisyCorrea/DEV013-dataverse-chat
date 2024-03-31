import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";
import { navigateTo } from "../router.js";

export const chatIndividual = () => {
  const viewIndividual = document.createElement("main");
  viewIndividual.id = "chat-individual";
  

  const structure = document.createElement("div");
  structure.setAttribute("class", "fondo");
  structure.innerHTML = `
    <br><h4> Soy ...  </h4><br>
    <img src="http//wwww.sdd" alt="Aquí va la imagen ">
        <div class="chat-box">
            <input type="text" class="inputChat" placeholder="Escribe...">
            <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
        </div>
    `
    
    viewIndividual.appendChild(returnHome());
    viewIndividual.appendChild(structure);
    viewIndividual.appendChild(footer());
  
  /*  const clickInput = document.querySelector(".inputChat");
      clickInput.addEventListener("click", function () {
        navigateTo("/api", {});
    });*/
  
    return viewIndividual;
};



// import { returnHome } from "../components/ButtonHome.js";
// import { footer } from "../components/Footer.js";
// import data from "..data/dataset.js";

// export const chatIndividual = (props) => {
//   const viewIndividual = document.createElement("main");
//   viewIndividual.id = "view-Individual";

//   const selectFilmId = props.id;
//   const selectFilmImag = data.find (
//     (film) => film.id === selectFilmImag
//   );
//   viewIndividual.appendChild(returnHome());
  
//   const structure = document.createElement("div");
//   structure.setAttribute("class", "fondo");
//   structure.innerHTML = `
//     <br><h4>nombre</h4><br>
//     <img src="http//wwww.sdd" alt="La película es ">
//         <div class="chat-box">
//             <input type="text" class="inputChat" placeholder="Escribe...">
//             <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
//         </div>
//     `
//     viewIndividual.appendChild(structure);
    
//     viewIndividual.appendChild(footer());
//   return viewIndividual;
// };



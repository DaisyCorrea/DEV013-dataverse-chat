import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";

export const error = () => {
  const viewEl = document.createElement("div");
  viewEl.className = "errorBox";
  viewEl.appendChild(returnHome());
   
  const imgError = document.createElement ("img");
  imgError.className = "errorImagen";
  imgError.src = "https://www.figma.com/file/P6swyzLKv5ExPpb0joeEvl/STUDIO-GHIBLI?type=design&node-id=1312-532&mode=design&t=coJFrhZJm7KNdrip-4";
  imgError.alt = "ERROR 404";

  viewEl.appendChild(imgError);
  
  const errorMessage = document.createElement("p");
  errorMessage.className = "errorMessage";
  errorMessage.innerHTML = "¡Alerta! Un pequeño Totoro travieso ha decidido esconder la página que estás buscando en su escondite secreto. ¿Quizás desees explorar otras sendas del bosque hasta encontrarla?";
  viewEl.appendChild(errorMessage);

  viewEl.appendChild(footer());
  return viewEl;
};
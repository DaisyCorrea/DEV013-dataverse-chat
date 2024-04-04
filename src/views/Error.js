import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";

export const error = () => {
  const viewEl = document.createElement("div");
  viewEl.className = "errorBox";
  viewEl.appendChild(returnHome());

  viewEl.innerHTML = `
  <img src="Images/duendes-del-polvo.png" alt="Imagen de duendes del polvo, Totoro" class="duendesPolvo duende1">
  <p class="errorMessage">¡Alerta! Un pequeño Totoro travieso ha decidido esconder la página que estás buscando en su escondite secreto. ¿Quizás desees explorar otras sendas del bosque hasta encontrarla?</p>
  <p class="error404">ERROR 4<img src="Images/totoro-paraguas.png" alt="Imagen de Totoro con paraguas" class="totoroParaguas">4</p>
  <img src="Images/duendes-del-polvo.png" alt="Imagen de duendes del polvo, Totoro" class="duendesPolvo duende2">
  `

  viewEl.appendChild(footer());
  return viewEl;
};
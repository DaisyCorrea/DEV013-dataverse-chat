import { returnHome } from "../components/ButtonHome.js";
//import { footer } from "../components/Footer.js";

export const error = () => {
  const viewEl = document.createElement("div");
  viewEl.className = "errorBox";
  viewEl.appendChild(returnHome());

  const imgErrorDustTop = document.createElement ("img");
  imgErrorDustTop.className = "errorDustTop";
  imgErrorDustTop.src = "Images/duendes-del-polvo.png";
  viewEl.appendChild(imgErrorDustTop);

  const imgError = document.createElement ("img");
  imgError.className = "errorTotoro";
  imgError.src = "Images/totoro-paraguas.png";
  imgError.alt = "ERROR 404";
  viewEl.appendChild(imgError);
  
  const errorMessageUno = document.createElement("p");
  errorMessageUno.className = "errorMessageUno";
  errorMessageUno.innerHTML = "ERROR 404";
  viewEl.appendChild(errorMessageUno);
  
  const errorMessageTwo = document.createElement("p");
  errorMessageTwo.className = "errorMessage";
  errorMessageTwo.innerHTML = "¡Alerta! Un pequeño Totoro travieso ha decidido esconder la página que estás buscando en su escondite secreto. ¿Quizás desees explorar otras sendas del bosque hasta encontrarla?";
  viewEl.appendChild(errorMessageTwo);

  const imgErrorDustBottom = document.createElement ("img");
  imgErrorDustBottom.className = "errorDustBottom";
  imgErrorDustBottom.src = "Images/duendes-del-polvo.png";
  viewEl.appendChild(imgErrorDustBottom);

  //viewEl.appendChild(footer());
  return viewEl;
};
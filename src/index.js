// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

import { Home } from "../views/Home.js";
import { Error } from "../views/Error.js";
import { ChatIndividual } from "../views/ChatIndividual.js";
import { ChatGrupal } from "../views/ChatGrupal.js";
import { setRootEl, setRoutes, onURLChange } from "../router.js";

const routes = {
  "/": Home,
  "/error": Error,
  "/chatIndividual": ChatIndividual,
  "/chatGrupal": ChatGrupal,
};

window.addEventListener("DOMContentLoaded", (e) => {
  const root = document.getElementById("root")
  setRootEl(root);
  setRoutes(routes);
  onURLChange(e.currentTarget.location.pathname);
});

window.addEventListener("popstate", (e) => {
  onURLChange(e.currentTarget.location.pathname);
});
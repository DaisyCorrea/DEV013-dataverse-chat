import { home } from "../views/Home.js";
import { error } from "../views/Error.js";
import { chatIndividual } from "../views/ChatIndividual.js";
import { chatGrupal } from "../views/ChatGrupal.js";
import { setRootEl, setRoutes, onURLChange } from "../router.js";

const routes = {
  "/": home,
  "/error": error,
  "/chatIndividual": chatIndividual,
  "/chatGrupal": chatGrupal,
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
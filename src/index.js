import { home } from "./views/Home.js";
import { error } from "./views/Error.js";
import { chatIndividual } from "./views/ChatIndividual.js";
import { apiK } from "./views/APIKEY.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";

const routes = {
  "/": home,
  "/chatIndividual": chatIndividual,
  "/api": apiK,
  "/error": error,
};

window.addEventListener("DOMContentLoaded", (e) => {
  const rootElement = document.getElementById("root")
  setRootEl(rootElement);
  setRoutes(routes);
  onURLChange(e.target.location.pathname);
});

window.addEventListener("popstate", (e) => {
  onURLChange(e.currentTarget.location.pathname);
});


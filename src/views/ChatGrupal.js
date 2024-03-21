import data from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { footer } from "../components/Footer.js";

export const chatGrupal = () => {
  const viewGrupal = document.createElement("div");
  viewGrupal.setAttribute("class", "chat-gupal");
  footer();
  
  return viewGrupal;
}
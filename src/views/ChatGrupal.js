import dataset from "../data/dataset";
import { navigateTo } from "../router";
import { footer } from "../components/Footer";

export const chatGrupal = () => {
  const viewGrupal = document.createElement("div");
  viewGrupal.setAttribute("class", "chat-gupal");
  footer();
  
  return viewGrupal;
}
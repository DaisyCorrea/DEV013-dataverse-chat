import data from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { footer } from "../components/Footer.js";

export const chatIndividual = () => {
  const viewIndividual = document.createElement("div");
  viewIndividual.setAttribute("class", "chat-individual");
  footer();
  
  return viewIndividual;
}
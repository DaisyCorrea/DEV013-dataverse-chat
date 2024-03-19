import dataset from "../data/dataset";
import { navigateTo } from "../router";
import { footer } from "../components/Footer";

export const ChatIndividual = () => {
  const viewIndividual = document.createElement("div");
  viewIndividual.setAttribute("class", "chat-individual");
  footer();
  
  return viewIndividual;
}
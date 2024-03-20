import { navigateTo } from "../router";
import { footer } from "../components/Footer";

export const apiKey = () => {
  const viewEl = document.createElement("div");
  viewEl.textContent = "Api Key";

  return viewEl;
}
import { navigateTo } from "../router.js";
import { footer } from "../components/Footer.js";

export const apiKey = () => {
  const viewEl = document.createElement("div");
  viewEl.textContent = "Api Key";

  return viewEl;
}
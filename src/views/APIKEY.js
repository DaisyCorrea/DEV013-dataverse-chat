import { returnHome } from "../components/ButtonHome.js";
import { api } from "../components/divAPI.js";
import { footer } from "../components/Footer.js";
import { getApiKey, setApiKey } from "../Lib/apiKey.js";
import { communicateWithOpenAI } from "../Lib/openAIApi.js";

export const apiK = () => {
  const viewApi = document.createElement("div");
  viewApi.appendChild(returnHome());
  viewApi.appendChild(api());
  viewApi.appendChild(footer());
  viewApi.appendChild(communicateWithOpenAI());

  const inputApiKey = viewApi.querySelector(".inputApi");
  const buttonApiKey = viewApi.querySelector(".apiSaveButton");
  const actualApiKey = getApiKey();

  if (actualApiKey !== null) {
    inputApiKey.value = actualApiKey;
  }

  buttonApiKey.addEventListener("click", function () {
    setApiKey(inputApiKey.value);
  });
  return viewApi;
  
};

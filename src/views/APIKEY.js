import { returnHome } from "../components/ButtonHome.js";
import { api } from "../components/API.js";
import { footer } from "../components/Footer.js";
import { getApiKey, setApiKey } from "../Lib/apiKey.js";

export const apiK = () => {
  const viewApi = document.createElement("div");
  viewApi.appendChild(returnHome());
  viewApi.appendChild(api());
  viewApi.appendChild(footer());

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

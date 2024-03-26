import { navigateTo } from "../router.js";
import { footer } from "../components/Footer.js";
import { api } from "../components/API.js";
import { getApiKey, setApiKey } from "../Lib/apiKey.js";

export const apiK = () => {
const viewApi = document.createElement("div");
viewApi.appendChild(api());
viewApi.appendChild(footer());

const inputApiKey = viewApi.querySelector(".inputApi")
const buttonApiKey = viewApi.querySelector(".apiSaveButton")
console.log(buttonApiKey);
const actualApiKey = getApiKey();

if (actualApiKey!=null){
  inputApiKey.value = actualApiKey
} 

/*inputApiKey.addEventListener("input", function(){
  const contentInput=[];
  const apiInput=inputApiKey.value;
})*/
buttonApiKey.addEventListener("click", function(){
 setApiKey(inputApiKey.value);
console.log("hola");
})
return viewApi;
}
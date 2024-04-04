import { returnHome } from "../components/ButtonHome.js";
import { footer } from "../components/Footer.js";
import data from '../data/dataset.js';
//import { communicateWithOpenAI } from "../Lib/openAIApi.js";

export const chatIndividual = (film) => {
    const viewIndividual = document.createElement("secction");
    viewIndividual.id = "chat-individual";
    const findFil = data.find((filmId) => filmId.id === film.id)
    
    viewIndividual.innerHTML = `
    <div class="headerChat">
    <img src=${findFil.imageUrl} alt="${findFil.name}" class="imgChat">
    <h4>${findFil.name}</h4>
    </div>
    <div class="conversationChat"></div>
    <div class="chat-box">
    <input type="text" class="inputChat" placeholder="Escribe...">
    <button class="sendMes"><i class="fas fa-location-arrow"></i></button>
    </div>
    `
    viewIndividual.appendChild(returnHome());
    viewIndividual.appendChild(footer())

    const inputMessage = viewIndividual.querySelector(".inputChat");
    const arrowButton = viewIndividual.querySelector(".sendMes");
    const continerChat = viewIndividual.querySelector(".conversationChat");

    arrowButton.addEventListener("click", function() {
        const contentInput = inputMessage.value;
        
        if(contentInput !== "") {

            const bubbleUser = document.createElement("div");
            const textBubble = document.createElement("p");
            bubbleUser.className = "bubbleSpace";
            textBubble.className = "messageUser"
            textBubble.innerHTML = contentInput;
            bubbleUser.appendChild(textBubble);
            continerChat.appendChild(textBubble);
            // contentInput.value = "";
            
            communicateWithOpenAI(contentInput, findFil)
            .then((response) => {
                const bubbleSystem = document.createElement("div");
                bubbleSystem.className = "bubbleSystem";
                bubbleSystem.innerHTML = `${response.choices[0].message.content}`;
                console.log("🚀 ~ arrowButton.addEventListener ~ response:", response);
                continerChat.appendChild(bubbleSystem);
            })
            
        }
        console.log(arrowButton);
    });


    return viewIndividual;
};

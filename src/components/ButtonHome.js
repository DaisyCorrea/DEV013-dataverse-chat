import { navigateTo } from "../router.js";

export const returnHome = () => {
  const buttonHome = document.createElement("div");
  buttonHome.innerHTML = `
  <button class="buttonHomeIcon" "buttomHomeCel"><i class="fas fa-home"></i></button>
    `;
  const buttonElement = buttonHome.querySelector(".buttonHomeIcon");

  buttonElement.addEventListener("click", function () {
    navigateTo("/", {});
  });
  return buttonHome;
};

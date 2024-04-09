import { header } from "../src/components/Header.js";
import { returnHome } from "../src/components/ButtonHome.js";
import { api } from "../src/components/divAPI.js";
import { footer } from "../src/components/Footer.js";

const fakeRouter = require("../src/router.js");
const spyRouter = jest.spyOn(fakeRouter, "navigateTo");
spyRouter.mockImplementation((pathname) => {
  history.pushState({}, "", pathname);
});


describe("hearder function", () => {
  const headerEl = `
  <div class="header">
    <img src="https://raw.githubusercontent.com/Addis-cx/DEV013-dataverse/html/src/Imagenes/Totoro-transparente.png" alt="Dibujo del contorno de totoro, similar al logo de Studio Ghibli" class="logo">
    <div class="title">
      <h1>スタジオジブリ</h1>
      <h1>STUDIO GHIBLI</h1>
    </div>
    <label for="input">
      <input type="text" class="movie-search" placeholder="Buscar">
    </label>
  </div>
`;

  it("retorna la estructura html del header", () => {
    const headerHTML = header();
    expect(headerHTML.innerHTML.trim()).toEqual(headerEl.trim());
  });
});

describe("returnHome fuction", () => {
    const buttonHome = `
    <button class="buttonHomeIcon"><i class="fas fa-home"></i></button>
    `
    it("retorna un boton con un icono de casa", () => {
        const buttonHTML = returnHome();
        const buttonElement = buttonHTML.querySelector(".buttonHomeIcon");
        expect(buttonElement).not.toBeNull();
        expect(buttonHTML.innerHTML.trim()).toEqual(buttonHome.trim());
      });

    it("DOM de el botón", () => {
      document.body.appendChild(returnHome());
      document.querySelector(".buttonHomeIcon").click();
      expect(window.location.pathname).toBe("/");
    });
});


describe("api fuction", () => {
    const apiEl = `
  <h3 class="apiTittle">Api Key</h3>
  <p class="paragraph">Si quieres acceder al chat Individual, ingresa la Api Key</p>
  <div class="sectionApi">
  <input type="text" class="inputApi" placeholder="Ingresa la API KEY...">
  <button class="apiSaveButton">Guardar</button>
  <p class="paragraph1">¿No tienes una Api Key? Haz click aquí</p>
  </div>
    `
    it("retorna la estructura html de la vista APIKEY", () => {
        const apiHTML = api();
        expect(apiHTML.innerHTML.trim()).toEqual(apiEl.trim())
    });
});

describe("footer fuction", () => {
    const footerEl = `
    Copyright @ 2024 Addis Pérez &amp; Daisy Correa
    `
    it("retorna la estructura html de la vista APIKEY", () => {
        const footerHTML = footer();
        expect(footerHTML.innerHTML.trim()).toEqual(footerEl.trim())
    });
});
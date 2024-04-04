import { header } from "../src/components/Header";
import { cards } from "../src/components/Cards";
import { data as dataFake } from "./data.js"
import { returnHome } from "../src/components/ButtonHome";
import { api } from "../src/components/divAPI";
import { footer } from "../src/components/Footer";

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

describe("cards function", () => {
  const cardsEl = `
  <div class="visual"> 
      <img src="${dataFake.imageUrl}" alt="Afiche de la película ${dataFake.name}" class="imgFilm">
      <ul itemscope itemtype="nausicaa-del-valle-del-viento">
      <li itemtype="name" class="nameFilm"><b>${dataFake.name}</b></li>
      <li itemtype="genders"><b>Género: ${dataFake.genders}</b></li>
      </ul>
      <label for="popUp"> </label>
      <button class="cardsBtn"><b>Ver más</b></button>
      <button class="chatBtn viewChat" data-filmid="${dataFake.name}"><i class="fas fa-comment"></i></button>
      </div>
      <section class="windowModal hiden">
      <h2>${dataFake.name}</h2>
      <div class="modalCard">
      <img src="${dataFake.imageUrl}" alt="Afiche de la película ${dataFake.name}">
      <ul itemtype="nausicaa-del-valle-del-viento">
      <div class="card">
      <li itemtype="genders"><b>Género: </b>${dataFake.genders}</li>
      <li itemtype="releaseYear"><b>Estreno: </b>${dataFake.releaseYear}</li>
      <li itemtype="duration"><b>Duración: </b>${dataFake.duration}</li>
      <li itemtype="boxOfficeRevenue"><b>Recaudación: </b>${dataFake.boxOfficeRevenue}</li>
      <li itemtype="shortDescription"><b>Sinopsis: </b>${dataFake.shortDescription}</li>
      <li itemtype="description"><b>Descripción: </b>${dataFake.description}</li>
      </div>
      </ul>
      </div>
      <button class="closeWindow">Ver menos</button>
      <button class="chatBtnModal viewChat"><i class="fas fa-comment"></i></button>
      </section>
      <div class="modalFondo hiden"></div>
  `
  it("renderiza HTML de cada tarjeta", () => {
    const cardsHTML = cards(dataFake);
    expect(cardsHTML.innerHTML.trim()).toEqual(cardsEl.trim());
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
<h3>Api Key</h3>
  <p>Si quieres acceder al chat Individual, ingresa la Api Key</p>
  <div class="sectionApi">
  <input type="text" class="inputApi" placeholder="Ingresa la Api Key">
  <button class="apiSaveButton">Guardar</button>
  <p>¿No tienes una Api Key? Haz click aquí</p>
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
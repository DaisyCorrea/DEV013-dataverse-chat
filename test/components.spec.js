import { header } from "../src/components/Header";
// import { cards } from "../src/components/Cards";
import { returnHome } from "../src/components/ButtonHome";
import { api } from "../src/components/divAPI";
import { footer } from "../src/components/Footer";
import { navigateTo } from "../src/router";

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
    
      it("al hacer click te lleva a la vista de home", () => {
        const buttonHTML = returnHome();
        const buttonElement = buttonHTML.querySelector(".buttonHomeIcon");
    
        buttonElement.click();
        expect(navigateTo("", {})).toHaveBeenCalledWith("/", {});
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
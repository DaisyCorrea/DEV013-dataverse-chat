export const header = () => {
  const headerEl = document.createElement("header");
  headerEl.innerHTML = `
  <header>
  <div class="header">
    <img
      src="https://raw.githubusercontent.com/Addis-cx/DEV013-dataverse/html/src/Imagenes/Totoro-transparente.png"
      alt="Dibujo del contorno de totoro, similar al logo de Studio Ghibli"
      class="logo"
    />
    <div class="title">
      <h1>スタジオジブリ</h1>
      <h1>STUDIO GHIBLI</h1>
    </div>
    <label for="input">
      <input type="text" class="movie-search" placeholder="Buscar" />
    </label>
  </div>
  `
  return headerEl;
}
export const menuSection = () => {
  const menuEl = document.createElement("div");
  menuEl.innerHTML = `
  <div class="superButtons">
      <label for="filter" class="buttons">
        <select data-testid="select-filter" name="genders" id="filter">
          <option value="genres">Filtrar por:</option>
          <option value="Acción">Acción</option>
          <option value="Aventura">Aventura</option>
          <option value="Bélico">Bélico</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Familia">Familia</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Romance">Romance</option>
          <option value="Terror">Terror</option>
          <option value="Suspenso">Suspenso</option>
          <option value="Infantil">Infantil</option>
          <option value="Misterio">Misterio</option>
        </select>
      </label>

      <label for="order" class="buttons">
        <select data-testid="select-filter" name="sortOrder" id="order">
          <option value="todos">Ordenar por:</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </label>

      <label for="button" class="button2">
        <button class="cleanerButton" type="button">Limpiar</button>
      </label>

      <label for="stats" class="button2">
        <button class="statsButton">
          <img
            src="https://raw.githubusercontent.com/Addis-cx/DEV013-dataverse/html/src/Imagenes/estadisticas-transparente.png"
            alt="Icono de estadisticas"
          />
        </button>
      </label>
    </div>

    <div class="statsWindow noVisual">
      <h3>Estadísticas de Géneros</h3>
      <p class="statsMovie"></p>
      <label for="button">
        <button class="closeStats"><b>Ver menos</b></button>
      </label>
    </div>
    <div class="statsFondo noVisual"></div>
  `
  return menuEl;
};
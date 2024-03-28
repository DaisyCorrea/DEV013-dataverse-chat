export const menuSection = () => {
  const menuEl = document.createElement("nav");
  menuEl.innerHTML = `
  <input type="checkbox" id="menú">
  <label for="menú" class="buttons"><i class="fas fa-bars"></i></label>
    <ul class="menúIcon">
      <li class="contentMenú">
        <select data-testid="select-filter" name="genders" id="filter" class="optionMenu">
          <option value="genres">Filtro</option>
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
    </li>

    <li class="contentMenú"> 
      <select data-testid="select-filter" name="sortOrder" id="order" class="optionMenu">
      <option value="todos"><i class="fas fa-arrow-down-wide-short"></i> Ordenar por:</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
      </select>
    </li>

    <li class="contentMenú"> 
        <button class="statsButton optionMenu"><i class="fas fa-chart-column"></i> Estadísticas</button>
    </li>
    <li class="contentMenú"> 
        <button class="apiButton optionMenu"><i class="fas fa-key"> </i>Api Key</button>
    </li>
    <li class="contentMenú"> 
      <button class="cleanerButton optionMenu" type="button">Limpiar</button>
    </li>

  </ul>

    <div class="statsWindow noVisual">
    <h3>Estadísticas de Géneros</h3>
    <p class="statsMovie"></p>
    <label for="button">
    <button class="closeStats"><b>Ver menos</b></button>
    </label>
    </div>
    <div class="modalFondo statsFondo noVisual"></div>
    `;
  return menuEl;
};

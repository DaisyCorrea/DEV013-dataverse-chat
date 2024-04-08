export const api = () => {
  const apiEl = document.createElement("div");
  apiEl.setAttribute("class", "api");
  apiEl.innerHTML = `
  <h3 class="apiTittle">Api Key</h3>
  <p class="paragraph">Si quieres acceder al chat Individual, ingresa la Api Key</p>
  <div class="sectionApi">
  <input type="text" class="inputApi" placeholder="Ingresa la API KEY...">
  <button class="apiSaveButton">Guardar</button>
  <p class="paragraph1">¿No tienes una Api Key? Haz click aquí</p>
  </div>
  `;
  return apiEl;
};

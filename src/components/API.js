export const api = () => {
  const apiEl = document.createElement("div");
  apiEl.setAttribute("class", "api");
  apiEl.innerHTML = `
  <h3>Api Key</h3>
  <p>Si quieres acceder al chat Individual, ingresa la Api Key</p>
  <div class="sectionApi">
  <input type="text" class="inputApi" placeholder="Ingresa la Api Key"/>
  <button class="apiSaveButton">Guardar</button>
  <p>¿No tienes una Api Key? Haz click aquí</p>
  </div>
  `;
  return apiEl;
};

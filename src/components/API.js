export const api = () => {
  const apiEl = document.createElement("div");
  apiEl.setAttribute("class", "api");
  apiEl.innerHTML = `
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.2.0/uicons-regular-straight/css/uicons-regular-straight.css'>
  <h3>Api Key</h3>
  <p>Si quieres acceder al chat Individual o Grupal, ingresa la Api Key</p>
  <div class="sectionApi">
  <input type="text" class="movie-search" placeholder="Ingresa la Api Key"/>
  <button class="apiSaveButton">Guardar</button>
  <p>¿No tienes una Api Key? Haz click aquí</p>
  </div>
  `;
  return apiEl;
};

export const cards = (data) => {
  const list = document.createElement("ul");
  list.setAttribute("id", "list");
  list.className = "list";
  data.forEach((film) => {
    const card = document.createElement("li");
    card.setAttribute("id", "card");
    card.innerHTML += `
      <div class="visual"> 
      <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
      <ul itemscope itemtype="nausicaa-del-valle-del-viento">
      <li itemtype="name"><b>${film.name}</b></li>
      <li itemtype="genders"><b>Género: ${film.facts["genders"]}</b></li>
      </ul>
      <label for="popUp"> </label>
      <button class="cardsBtn"><b>Ver más</b></button>
      <button class="chatBtn"><i class="fas fa-comment"></i></button>
      </div>
      <section class="windowModal hiden">
      <h2>${film.name}</h2>
      <div class="modalCard">
      <img src="${film.imageUrl}" alt="Afiche de la película ${film.name}">
      <ul itemscope itemtype="nausicaa-del-valle-del-viento">
      <div class="card">
      <li itemtype="genders"><b>Género: </b>${film.facts["genders"]}</li>
      <li itemtype="releaseYear"><b>Estreno: </b>${film.facts["releaseYear"]}</li>
      <li itemtype="duration"><b>Duración: </b>${film.facts["duration"]}</li>
      <li itemtype="boxOfficeRevenue"><b>Recaudación: </b>${film.facts["boxOfficeRevenue"]}</li>
      <li itemtype="shortDescription"><b>Sinopsis: </b>${film.shortDescription}</li>
      <li itemtype="description"><b>Descripción: </b>${film.description}</li>
      </div>
      </ul>
      </div>
      <button class="closeWindow">Ver menos</button>
      <button class="chatBtnModal"><i class="fas fa-comment"></i></button>
      </section>
      <div class="modalFondo hiden"></div>
      `;
    list.appendChild(card);

    const popUpWindow = card.querySelector(".windowModal");
    const buttonWindow = card.querySelector(".cardsBtn");
    const fondoModal = card.querySelector(".modalFondo");
    const closeWindow = card.querySelector(".closeWindow");

    buttonWindow.addEventListener("click", function () {
      popUpWindow.classList.remove("hiden");
      fondoModal.classList.remove("hiden");
      return buttonWindow;
    });
    closeWindow.addEventListener("click", function () {
      popUpWindow.classList.add("hiden");
      fondoModal.classList.add("hiden");
      return closeWindow;
    });
  });
  return list;
};

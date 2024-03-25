import data from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { header } from "../components/Header.js";
import { cards } from "../components/Cards.js";
import { menuSection } from "../components/Filters.js";
import { footer } from "../components/Footer.js";
import {
  filterGenders,
  sortFilms,
  computeStats,
} from "../Lib/dataFunctions.js";


export const home = () => {
  const viewHome = document.createElement("main");
  const newData = [...data];
  viewHome.appendChild(header());
  viewHome.appendChild(menuSection());
  viewHome.appendChild(cards(newData));
  viewHome.appendChild(footer());

  const movieCards = viewHome.querySelector(".list")
  const movieSearch = viewHome.querySelector(".movie-search");
  const gendersFilms = viewHome.querySelector("#filter");
  const orderFilms = viewHome.querySelector("#order");
  const statsButton = viewHome.querySelector(".statsButton");
  const apiButton = viewHome.querySelector(".statsButton");
  const statsWindow = viewHome.querySelector(".statsWindow");
  const statsMovie = viewHome.querySelector(".statsMovie");
  const closeStats = viewHome.querySelector(".closeStats");
  const statsFondo = viewHome.querySelector(".statsFondo");
  const cleanerButton = viewHome.querySelector(".cleanerButton");

  movieCards.appendChild(cards(newData));


  movieSearch.addEventListener("input", function () {
    const results = [];
    const textSearch = movieSearch.value.toLowerCase();
    const search = newData.filter((elemento) => {
      return elemento.name.toLowerCase().includes(textSearch);
    });

    if (search) {
      movieCards.innerHTML = "";
      results.push(...search);
      movieCards.appendChild(cards(results));
    }
  });

  gendersFilms.addEventListener("change", function () {
    movieCards.innerHTML = "";
    sortFilms;
    const selectedGender = gendersFilms.value;
    const filterMovie = filterGenders(newData, "genders", selectedGender);
    movieCards.appendChild(cards(filterMovie));
  });

  orderFilms.addEventListener("change", function () {
    movieCards.innerHTML = "";
    gendersFilms.value = "genres";
    const selectOrder = orderFilms.value;
    let filmAsc;

    if (selectOrder === "asc") {
      filmAsc = sortFilms(newData, "name", "asc");
    } else {
      filmAsc = sortFilms(newData, "name", "desc");
    }
    movieCards.appendChild(cards(filmAsc));
  });

  cleanerButton.addEventListener("click", function () {
    const newData = [...data];
    movieSearch.value = "";
    movieCards.innerHTML = "";
    gendersFilms.value = "genres";
    orderFilms.value = "todos";
    movieCards.appendChild(cards([...newData]));
  });

  statsButton.addEventListener("click", function () {
    statsMovie.textContent = computeStats(newData);
    statsWindow.classList.remove("noVisual");
    statsFondo.classList.remove("noVisual");
  });

  closeStats.addEventListener("click", function () {
    statsWindow.classList.add("noVisual");
    statsFondo.classList.add("noVisual");
    return closeStats;
  });

  return viewHome;
};

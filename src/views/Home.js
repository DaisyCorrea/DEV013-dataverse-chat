import data  from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { header } from "../components/Header.js";
import { cards } from "../components/Cards.js";
import { menuSection } from "../components/Filters.js";
import { footer } from "../components/Footer.js";
import { filterGenders, sortFilms, computeStats } from "../Lib/dataFunctions.js";

const newData = [...data];

export const home = () => {
  const viewHome = document.createElement("main");
  viewHome.appendChild(header());
  viewHome.appendChild(cards(newData));
  viewHome.appendChild(footer());
  viewHome.appendChild(menuSection());

  return viewHome;
};
import { data as dataFake } from "./data.js";
import { filterGenders, sortFilms, computeStats } from "../src/Lib/dataFunctions.js";

describe('sortFilms function', () => {
  const orderAsc = [dataFake[1], dataFake[4], dataFake[2], dataFake[3], dataFake[0], dataFake[5]];
  it('retorna las peliculas en orden asc', () => {
    const expectAsc = sortFilms(dataFake, "name", "asc");
    expect(expectAsc).toEqual(orderAsc);
  });
  
  const orderDesc = [dataFake[5], dataFake[0], dataFake[3], dataFake[2], dataFake[4], dataFake[1]];
  it('retorna las peliculas en orden desc', () => {
    const expectDesc = sortFilms(dataFake, "name", "desc");
    expect(expectDesc).toEqual(orderDesc);
  });
  
});
  
describe('filterGenders fuction', () => {
  const filter1 = [dataFake[2], dataFake[5]]
  it('retorna filtro por Fantasía', () => {
    const expectFan = filterGenders(dataFake, "genders", "Fantasía");
    expect(expectFan).not.toEqual(filter1);
  });
    
  const filter2 = [dataFake[0]];
  it('retorna filtro por Ciencia Ficción', () => {
    const expectCiFi = filterGenders(dataFake, "genders", "Ciencia Ficción");
    expect(expectCiFi).toEqual(filter2);
  });
});
  
describe('computeStats fuction', () => {
  const stats = {"Acción": 0, "Aventura": 3, "Bélico": 1, "Ciencia Ficción": 1, "Comedia": 0, "Drama": 2, "Familia": 1, "Fantasía": 4, "Infantil": 0, "Misterio": 0, "Romance": 1, "Suspenso": 0, "Terror": 1};
  it('retorna cantidad de peliculas por genero', () => {
    const expectFan = computeStats(dataFake);
    expect(expectFan).toBe(stats);
  });
});


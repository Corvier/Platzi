import { getData } from "./obtenerPeliculasApi";

function solution() {
  return getData().then(movies => movies);
}

solution();
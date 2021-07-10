import { useState, useEffect } from "react";

const DataApi = () => {
  const [movies, setMovies] = useState();
  const obtenerDatos = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const { results } = await data.json();
    setMovies(results);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  return movies;
};

export default DataApi;

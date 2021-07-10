const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "973114b316d115b2c6c3afb96775f6df";

const createUrl = (path, arg) => `${BASE_URL}${path}?api_key=${API_KEY}&${arg}`;

const get = (path, arg) => async () => {
  try {
    const data = await fetch(createUrl(path, arg));
    const { results } = await data.json();
    return results;
  } catch (error) {
    return [];
  }
};

const api = {
  getPopularMovies: get("/movie/popular"),
  getComingSoon: get("/movie/upcoming"),
  myList: get("/discover/movie", "with_genres=878"),
  getVideo: (movie_id) => get(`/movie/${movie_id}/videos`)
};

export default api;

import axios from 'axios';

const KEY = 'e8f0bf3ce38076183b976a0014844e32';
const BASE = `https://api.themoviedb.org/3`;

const fetchTrendingMovies = async () => {
  return axios(`${BASE}/trending/movie/day?api_key=${KEY}`).then(
    response => response.data
  );
};

const fetchMoviesQuery = async query => {
  return axios(
    `${BASE}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then(response => response.data);
};

const fetchMoviesDetails = async movieId => {
  return axios(`${BASE}/movie/${movieId}?api_key=${KEY}`).then(
    response => response.data
  );
};

const fetchMoviesCast = async movieId => {
  return axios(`${BASE}/movie/${movieId}/credits?api_key=${KEY}`).then(
    response => response.data
  );
};

const fetchMoviesReviews = async movieId => {
  return axios(`${BASE}/movie/${movieId}/reviews?api_key=${KEY}`).then(
    response => response.data
  );
};

const api = {
  fetchTrendingMovies,
  fetchMoviesQuery,
  fetchMoviesDetails,
  fetchMoviesCast,
  fetchMoviesReviews,
};

export default api;

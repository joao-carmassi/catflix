import axios from 'axios';

//! API DO THE MOVIES DATA BASE ---------------------
const apiToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mjk0YjhlZDU2MTRiNDA3YWE2OGRkMDhiNTRmODI5YSIsIm5iZiI6MTc0MzEyMzgzMC43MTIsInN1YiI6IjY3ZTVmNTc2YTZkZDliMDgwODAwNWViMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d8jXHzapL73AGsATPFv-3VorECeg5ga7V4_IOAl0Sbc';
const baseURL = 'https://api.themoviedb.org/3';
const filmesApi = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
});

// API LOCAL HOST -------------------------------------
const localApi = axios.create({
  baseURL: 'http://localhost:3001/',
});

// API NPOINT -----------------------------------------
const dataFilmes = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const HTTP = {
  filmesApi,
  localApi,
  dataFilmes,
};

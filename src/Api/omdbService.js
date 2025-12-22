import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMoviesAPI = async (search, page, type) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      s: search,
      page,
      type,
    },
  });
  return response.data;
};

export const fetchMovieDetailsAPI = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      i: id,
      plot: "full",
    },
  });
  return response.data;
};

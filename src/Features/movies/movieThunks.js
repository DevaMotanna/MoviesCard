import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ search, page, type }, { rejectWithValue }) => {
    try {
      let url = `${BASE_URL}?apikey=${API_KEY}&s=${search}&page=${page}`;

      if (type) {
        url += `&type=${type}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "False") {
        return rejectWithValue(data.Error);
      }

      return data.Search || [];
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch movies");
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (imdbID, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
      );
      const data = await res.json();

      if (data.Response === "False") {
        return rejectWithValue(data.Error);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch movie details");
    }
  }
);


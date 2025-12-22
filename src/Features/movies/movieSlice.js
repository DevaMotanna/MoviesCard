import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies, fetchMovieDetails } from "./movieThunks";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    selectedMovie: null,
    loading: false,
    error: null,
    favorites: [], // ← add favorites array
  },
  reducers: {
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      // Remove by imdbID
      state.favorites = state.favorites.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // movie list
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // movie details
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedMovie, addFavorite, removeFavorite } = movieSlice.actions;
export default movieSlice.reducer;

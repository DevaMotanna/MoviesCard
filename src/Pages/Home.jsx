import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../Features/movies/movieThunks";
import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import FilterDropdown from "../Components/FilterDropdown";
import Pagination from "../Components/Pagination";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");

  // 🔁 Fetch movies when search/page/type changes
  useEffect(() => {
  // Only fetch if search is not empty
  if (search.trim() !== "") {
    dispatch(fetchMovies({ search, page, type }));
  }
}, [dispatch, search, page, type]);

// Optionally, load a default search on mount
useEffect(() => {
  dispatch(fetchMovies({ search: "Batman", page: 1, type }));
}, []);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1); // reset page on new search
  };

  return (
    <div className="p-5">
      <SearchBar onSearch={handleSearch} />
      <FilterDropdown setType={(value) => {
        setType(value);
        setPage(1);
      }} />

      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {movies?.length > 0 && (
        <Pagination page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Home;

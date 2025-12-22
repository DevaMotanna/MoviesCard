import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../Features/movies/movieSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div>
      {favorites.map((movie) => (
        <div key={movie.imdbID}>
          {movie.Title}
          <button onClick={() => dispatch(removeFavorite(movie.imdbID))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;

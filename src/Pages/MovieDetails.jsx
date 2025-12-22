import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Features/movies/movieThunks";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!selectedMovie) return null;

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10">
      <div
        className="w-full max-w-5xl 
                   border border-gray-300 rounded-lg shadow-md
                   flex flex-col md:flex-row
                   gap-6 p-4 sm:p-6"
      >
        {/* Poster */}
        <img
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
          className="w-full md:w-[40%]
                     h-[300px] sm:h-[400px] md:h-[500px]
                     object-cover rounded-md"
        />

        {/* Details */}
        <div className="flex flex-col gap-3 text-sm sm:text-base">
          <h1 className="text-xl sm:text-2xl font-bold">
            {selectedMovie.Title}
          </h1>

          <p>
            <span className="font-semibold">Plot:</span> {selectedMovie.Plot}
          </p>

          <p>
            <span className="font-semibold">IMDb Rating:</span>{" "}
            {selectedMovie.imdbRating}
          </p>

          <p>
            <span className="font-semibold">Country:</span>{" "}
            {selectedMovie.Country}
          </p>

          <p className="text-blue-500">
            <span className="font-semibold text-black">Language:</span>{" "}
            {selectedMovie.Language}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

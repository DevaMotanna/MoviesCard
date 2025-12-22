import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col items-center md:items-start 
                    border border-blue-500 rounded-lg 
                    p-3 sm:p-4 
                    w-full max-w-[320px] mx-auto">

      {/* Poster */}
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-[260px] sm:h-[320px] md:h-[380px] 
                   object-cover rounded-md"
      />

      {/* Movie Info */}
      <h3 className="mt-3 text-base sm:text-lg font-semibold text-center md:text-left">
        {movie.Title}
      </h3>

      <p className="text-sm sm:text-base text-gray-600">
        Year: {movie.Year}
      </p>

      {/* Button */}
      <Link to={`/movie/${movie.imdbID}`} className="mt-3 w-full">
        <button
          className="w-full sm:w-[140px] md:w-[160px]
                     bg-blue-500 text-white py-2 rounded
                     border border-transparent
                     hover:bg-white hover:text-black hover:border-blue-500
                     transition-all duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default MovieCard;

import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-neutral p-4 rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover rounded-lg"
      />
      <h2 className="mt-2 text-primary font-bold text-lg">{movie.title}</h2>
      <p className="text-sm text-accent">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;

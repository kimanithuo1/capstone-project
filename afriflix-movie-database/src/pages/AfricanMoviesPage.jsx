import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const AfricanMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [trailerKey, setTrailerKey] = useState(null);
  const trailerRef = useRef(null);

  const fetchAfricanMovies = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&region=ZA&with_original_language=sw&with_genres=18&page=${page}`
      );
      const movieData = await Promise.all(
        response.data.results.map(async (movie) => {
          const trailerResponse = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
          );
          const trailer = trailerResponse.data.results.find(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
          );
          return { ...movie, trailerKey: trailer ? trailer.key : null };
        })
      );
      setMovies(movieData);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch African movies');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAfricanMovies(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0) {
      setPage(newPage);
    }
  };

  const scrollToTrailer = () => {
    if (trailerRef.current) {
      trailerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (loading) return <p className="text-center text-yellow-400">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">African Movies Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="poster-image"
            />
            <div className="movie-details">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-overview">
                {movie.overview.length > 100
                  ? `${movie.overview.substring(0, 100)}...`
                  : movie.overview}
              </p>
              <p className="movie-rating">
                <span>Rating: </span>{movie.vote_average}/10
              </p>
              {movie.trailerKey && (
                <button
                  onClick={() => {
                    setTrailerKey(movie.trailerKey);
                    scrollToTrailer();
                  }}
                  className="btn-watch-trailer"
                >
                  Watch Trailer
                </button>
              )}
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-full-movie"
              >
                Watch Full Movie
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-buttons mt-8 text-center">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="btn-pagination"
        >
          Previous
        </button>
        <span className="mx-4">Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)} className="btn-pagination">
          Next
        </button>
      </div>

      {trailerKey && (
        <div ref={trailerRef} className="modal">
          <div className="modal-content">
            <button onClick={() => setTrailerKey(null)} className="close-button">
              &times;
            </button>
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Movie Trailer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AfricanMoviesPage;

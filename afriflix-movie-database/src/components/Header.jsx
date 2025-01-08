import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );
        if (response.data.results.length > 0) {
          const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
          setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
          setMovieTitle(randomMovie.title);
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header-overlay">
        <h1 className="movie-title">{movieTitle}</h1>
        <div className="header-content">
          <img src="/src/assets/logo.png" alt="Afriflix Logo" className="logo-class" />
          <nav className="header-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/movies" className="nav-link">Movie Collections</Link>
            <Link to="/contact" className="btn">Contact Us</Link>
            <Link to="/contact" className="btn">Join Us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [movieTitle, setMovieTitle] = useState('');

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        // Fetch trending movies
        const trendingMoviesResponse = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
        );

        // Select a random movie
        const randomMovie = trendingMoviesResponse.data.results[Math.floor(Math.random() * trendingMoviesResponse.data.results.length)];

        // Set background image and movie title
        setBackgroundImage(`https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`);
        setMovieTitle(randomMovie.title);
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBackgroundImage();
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
            <Link to="/african-movies" className="nav-link">African Movies</Link>
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
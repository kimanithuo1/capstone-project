import React from "react";

const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to Afriflix!</h1>
      <p>Dive into the world of African cinema. Discover, explore, and celebrate the diversity of films in the Afriflix database.</p>
      <button className="btn" onClick={() => window.location.href = '/movies'}>Explore Now</button>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  );
};

export default HomePage;
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-secondary shadow-md">
      <h1 className="text-2xl font-bold">Afriflix</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-accent">
          Home
        </Link>
        <Link to="/movies" className="hover:text-accent">
          Movies
        </Link>
        <Link to="/contact" className="hover:text-accent">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;

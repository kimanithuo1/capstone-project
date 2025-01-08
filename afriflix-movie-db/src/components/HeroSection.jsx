import React from "react";

const HeroSection = () => {
  return (
    <section className="h-[60vh] bg-cover bg-center flex items-center justify-center text-secondary" 
      style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Discover Amazing Movies</h1>
        <p className="mt-4 text-lg md:text-xl text-neutral">Explore your favorite genres from around the world.</p>
      </div>
    </section>
  );
};

export default HeroSection;

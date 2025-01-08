// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#285D66] text-[#E1DF66] text-center py-4">
      <p>&copy; {new Date().getFullYear()} Afriflix. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

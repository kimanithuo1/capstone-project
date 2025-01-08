/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#285D66", // Dark teal
        secondary: "#E1DF66", // Yellow
        neutral: "#B7BDC8", // Light gray-blue
        accent: "#6DA095", // Soft green
      },
    },
  },
  plugins: [],
};

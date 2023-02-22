/** @type {import('tailwindcss').Config} */
defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        zen: ['"Zen Dots"', 'cursive'],
      },
    },
  },
  
};

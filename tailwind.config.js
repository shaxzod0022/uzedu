/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myGreen: "#0a8330",
      },

      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      screens: {
        '2xl-mid': { 'min': '1600px', 'max': '1900px' },
      }
    },
  },
  plugins: [],
};

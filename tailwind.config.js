/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      colors: {
        myGreen: "#139FD6",
        primary: "#f0f220",
        secundary: "#151d41",
      },

      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      screens: {
        "2xl-mid": { min: "1600px", max: "1900px" },
      },
    },
  },
  plugins: [],
};

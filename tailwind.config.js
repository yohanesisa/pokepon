const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      signika: "Signika",
      lato: "Lato",
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      },
    },

    extend: {
      colors: {
        "poke-black": "#303a43",
        "poke-blue": "#59abf6",
        "poke-brown": "#ca8179",
        "poke-gray": "#e6e6e6",
        "poke-green": "#2adab1",
        "poke-pink": "#ffd1dc",
        "poke-purple": "#9f5bba",
        "poke-red": "#f96655",
        "poke-white": "#ffffff",
        "poke-yellow": "#fece4a",
        "type-bug": "#92BC2C",
        "type-dark": "#595761",
        "type-dragon": "#0C69C8",
        "type-electric": "#F2D94E",
        "type-fairy": "#EE90E6",
        "type-fighting": "#D3425F",
        "type-fire": "#FBA54C",
        "type-flying": "#A1BBEC",
        "type-ghost": "#5F6DBC",
        "type-grass": "#5FBD58",
        "type-ground": "#DA7C4D",
        "type-ice": "#75D0C1",
        "type-normal": "#A0A29F",
        "type-poison": "#B763CF",
        "type-psychic": "#FA8581",
        "type-rock": "#C9BB8A",
        "type-steel": "#5695A3",
        "type-water": "#539DDF",
      },
      minHeight: {
        "96": "24em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

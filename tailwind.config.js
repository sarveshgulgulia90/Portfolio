/** @type {import('tailwindcss').Config} */
export default {

  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {
        primary: "#050816",
        secondary: "#151030",
        accent: "#00ffff",
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

    },
  },

  plugins: [],
}
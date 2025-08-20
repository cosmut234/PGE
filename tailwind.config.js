/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",          // root
    "./src/**/*.{html,js}",   // orice în src
    "./components/**/*.{html,js}", // dacă ai components separat
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

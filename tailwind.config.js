// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        dark: "#000000",
        light: "#FFFFFF",
        gray: {
          light: "#F3F4F6",
          DEFAULT: "#9CA3AF",
          dark: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
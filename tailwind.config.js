/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "youtube-main-dark": "#0F0F0F",
        "youtube-white-ish": "#C9C9C9",
        "youtube-hover": "#272727",
        "youtube-second-dark": "#222222",
        "youtube-border": "#303030",
        "youtube-blue-link": "#1C62B9",
        "youtube-active": "#3D3D3D",
        "youtube-tooltip": "#5B5B5B",
      }
    },
  },
  plugins: [],
}


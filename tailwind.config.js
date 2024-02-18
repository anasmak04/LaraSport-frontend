/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': "linear-gradient(45deg, #fab31e, rgba(230, 38, 68, .8) 15%, #2e294d)",
      },
    },
  },
  plugins: [],
}
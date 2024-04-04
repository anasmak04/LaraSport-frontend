/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {

      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'] 
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, #fab31e, rgba(230, 38, 68, .8) 15%, #2e294d)",
      },

      backgroundColor: {
        "btn-register-bg":
          "linear-gradient(45deg, #fab31e, #e62644 15%, #5d0072)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/svg/hero.svg')",
      }
    },
  },
  plugins: [],
}
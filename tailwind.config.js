/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'julee' : ['Julee', 'cursive'],
        'nonito': ['Nunito', 'sans-serif']
      },
    },
  },
  plugins: [],
}

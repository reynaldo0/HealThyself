/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D9B86',
        'secondary': '#FF682C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'radioCanada': ['RadioCanada', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


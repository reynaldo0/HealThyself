/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      screens: {
        '2xl': '1320px'
      },
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


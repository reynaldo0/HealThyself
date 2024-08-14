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
        'primary': '#FF682C',
        'secondary': '#0D9B86'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


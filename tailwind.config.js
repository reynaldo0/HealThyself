/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  important: true,
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
        'tertiary': '#808080',
        'baby': {
          'vlight': '#ABCAFF',
          'light': '#3465B7',
          'normal': '#0D46A4',
          'dark': '#253B70'
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'radioCanada': ['RadioCanada', 'sans-serif'],
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animation-delay"),
  ],
}


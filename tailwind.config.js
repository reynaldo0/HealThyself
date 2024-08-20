/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  important: true,
  safelist: [
    {
      pattern: /bg-(baby|child|teen|adult|elderly)-(normal|200|dark)/,
    },
    // Add more patterns as needed
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      colors: {
        primary: "#0D9B86",
        secondary: "#FF682C",
        tertiary: "#808080",
        baby: {
          vlight: "#ABCAFF",
          light: "#3465B7",
          normal: "#0D46A4",
          vsoft: "#6B8AB6",
          soft: "#4560A0",
          ldark: "#3B5186",
          dark: "#253B70",
        },
        child: {
          vlight: "#FFD7D7",
          light: "#e04a4a",
          normal: "#E33B3B",
          vsoft: "#6B8AB6",
          soft: "#4560A0",
          ldark: "#3B5186",
          dark: "#B11414",
        },
        teen: {
          light: '#1CB08F',
          normal: '#0E9D75',
          dark: '#1B856D'
        },
        adult: {
          light: '#FFE4DA',
          normal: '#F36932',
          dark: '#DF4B10',
          bg:'#F5581A',
        },
        elderly:{
          light: '#D7FEF0',
          normal: '#16AE79',
          dark: '#0A6847',
          bg:'#0A6847',
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        radioCanada: ["RadioCanada", "sans-serif"],
      },
      keyframes: {
        floating: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animation-delay")],
};

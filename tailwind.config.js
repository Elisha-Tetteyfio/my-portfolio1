/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        btnBg: {
          '0%': { 'background-position': '100% 0%' },
          '100%': { 'background-position': '0% 100%' },
        },
      },
      animation: {
        btnBg: 'btnBg 3s ease-in-out infinite',
      }
    },
    colors: {
      darkBlue: "#101630",
      blue: "#3413aa",
      lightBlue: "#50b6da",
      white: "#fefefe",
      grey: "#7d8293"
    },
  },
  plugins: [],
}


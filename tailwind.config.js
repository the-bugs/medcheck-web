/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      keyframes: {
        'translate-top': {
          '0%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(-50%)' }
        },
      },
      animation: {
        'translate-top': 'translate-top 0.5s ease-in-out'
      },
      colors: {
        backgroundColor1: '#1373B3',
        primaryBlue: '#1D4ED8',
        secondaryBlue: '#1373B3',
        primaryGreen: '#19A23D',
        textColor: '#17191F',
      }
    },
  },
  plugins: [],
}
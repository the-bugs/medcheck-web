/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        mullish: ["Mullish", "sans-serif"],
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
        darkBlue: '#0B16D4',
        mediumDarkBlue: '#0B4FDE',
        normalBlue: '#137DC7',
        cyanBlue: '#0BBDDE',
        greenBlue: '#0BD4BC',

      }
    },
  },
  plugins: [],
}
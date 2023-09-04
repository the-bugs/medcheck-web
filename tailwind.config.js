/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
      keyframes: {
        'translate-top': {
          '0%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(-50%)' }
        },
      },
      animation: {
        'translate-top': 'translate-top 0.5s ease-in-out'
      }
    },
  },
  plugins: [],
}
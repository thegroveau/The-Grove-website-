/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        earth: '#141410',
        'earth-2': '#1c1c16',
        'near-black': '#0a0a08',
        moss: '#3d4a2e',
        sage: '#7a8c6a',
        clay: '#c4a882',
        cream: '#f5f0e8',
        'cream-dark': '#e8e2d6',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif'],
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}

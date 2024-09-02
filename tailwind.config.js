/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      vazir: ['Vazir'],
    },
    extend: {
      screens: {
        vsm: '500px',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero.jpg')",
      },
    },
  },
  plugins: [],
};

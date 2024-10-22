/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#0e72d0',
        'red-primary': '#AD1C1C',
        'red-secondary': '#D81F26',
        'yellow-light': '#F7EFE1',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        gilroy: ['SVN-Gilroy', 'Inter'],
      },
      fontSize: {
        h1: '70px',
        h2: '48px',
        h3: '40px',
        small: '20px',
        medium: '24px',
        large: '48px',
      },
    },
  },
  plugins: [],
};

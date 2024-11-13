/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#0e72d0',
        'red-primary': '#AD1C1C',
        'red-secondary': '#D81F26',
        'orange-primary': '#D58700',
        'yellow-light': '#F7EFE1',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1080px',
        xl: '1920px',
      },
      fontFamily: {
        inter: ['Inter'],
        gilroy: ['SVN-Gilroy', 'Inter'],
        spaceGrotesk: ['Space Grotesk', 'Inter'],
        orenji: ['DFVN Orenji', 'Inter'],
      },
      fontSize: {
        smallMobile: '12px',
        mobile: '14px',
        extraSmall: '18px',
        small: '20px',
        medium: '24px',
        large: '48px',
        title: '30px',
        h1: '70px',
        h2: '48px',
        h3: '40px',
      },
    },
  },
  plugins: [],
};

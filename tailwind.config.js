/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js}', './styles/**/*.css'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['DM Sans'],
    },
    extend: {
      backgroundImage: {
        '4noobs-pattern':
          'linear-gradient(270deg, #792CF2 50%, rgba(121, 44, 242, 0) 100%), url(/images/4noobs-bg.png)',
        navbar: 'linear-gradient(10deg, #782BF1, #A62BF1 100%)',
      },
      colors: {
        purple: {
          99: '#F5EDFF',
          100: '#F1E9FF',
          400: '#481990',
          450: '#b755ff',
          500: '#782BF1',
          700: '#7E22CE',
        },
        gray: {
          100: '#171717',
          150: '#1C1C1C',
          200: '#D1D5DB',
          300: '#B7B7B7',
          400: '#BFB9B0',
          500: '#4D4C4F',
          600: '#B7B1A7',
          650: '#868686',
          700: '#4F4F4F',
          750: '#737272',
          775: '#727272',
          800: '#1A1B18',
          850: '#131516',
          900: '#282C2E',
          950: '#393939',
          997: '#242729',
          998: '#e8e6e3',
          999: '#232628',
          1000: '#0F0F11',
        },
        blue: {
          100: '#2B92F1',
          99: '#2B3342',
          700: '#1B2333',
          800: '#202020',
          900: '#111225',
        },
        pink: {
          500: '#F1E9FF',
          700: '#C92BF1',
        },
      },
      container: {
        center: true,
      },
      fontFamily: {
        spline: ['Spline Sans'],
        dm: ['DM Sans'],
      },
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
  },
  plugins: [],
};

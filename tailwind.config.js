/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      green: {
        DEFAULT: '#A9D730', // Sin opacidad (100% opaco)
        50: 'rgba(169, 215, 48, 0.5)', // 50% de opacidad
      },
      purple: {
        DEFAULT: '#8E83BC', // Sin opacidad (100% opaco)
        50: 'rgba(142, 131, 188, 0.5)', // 50% de opacidad
      },
      blue: {
        DEFAULT: '#81B6E3', // Sin opacidad (100% opaco)
        50: 'rgba(129, 182, 227, 0.5)', // 50% de opacidad
        20: 'rgba(129, 182, 227, 0.2)',
      },
      orange: {
        DEFAULT: '#F07318', // Sin opacidad (100% opaco)
        50: 'rgba(240, 115, 24, 0.5)', // 50% de opacidad
        20: 'rgba(240, 115, 24, 0.2)',
      },
      pink: {
        DEFAULT: '#EA8BB7', // Sin opacidad (100% opaco)
        50: 'rgba(234, 139, 183, 0.5)', // 50% de opacidad
      },
      yellow: {
        DEFAULT: '#FDDB64', // Sin opacidad (100% opaco)
        50: 'rgba(253, 219, 100, 0.5)', // 50% de opacidad
      },
      brown: {
        DEFAULT: '#31261F', // Sin opacidad (100% opaco)
        50: 'rgba(49, 38, 31, 0.5)', // 50% de opacidad
      },
      black: {
        DEFAULT: '#000000', // Sin opacidad (100% opaco)
        50: 'rgba(0, 0, 0, 0.5)', // 50% de opacidad
        20: 'rgba(0, 0, 0, 0.2)',
      },
      white: {
        DEFAULT: '#ffffff', // Sin opacidad (100% opaco)
        50: 'rgba(255, 255, 255, 0.5)', // 50% de opacidad
      },
      gray: {
        DEFAULT: 'rgba(50, 50, 50, 0.6)', //Sin opacidad (100% opaco),
      },
    },
    screens: {
      ms: '200px',
      md: '700px',
      lg: '1200px',
      xl: '1800px',
    },
    extend: {
      backgroundImage: {
        bgBanner:'url("https://raw.githubusercontent.com/duvan29/DaleQueValen/developer/src/assets/img/Banner/Bannersonrisavalen.webp")',
        bgBanner2:'url("https://raw.githubusercontent.com/duvan29/DaleQueValen/developer/src/assets/img/Banner/BannerSumate.webp")',
      },
    },
  },
  variants: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        DEFAULT: '#A9D730',          // Sin opacidad (100% opaco)
        50: 'rgba(169, 215, 48, 0.5)', // 50% de opacidad
      },
      purple: {
        DEFAULT: '#8E83BC',          // Sin opacidad (100% opaco)
        50: 'rgba(142, 131, 188, 0.5)', // 50% de opacidad
      },
      blue: {
        DEFAULT: '#81B6E3',          // Sin opacidad (100% opaco)
        50: 'rgba(129, 182, 227, 0.5)', // 50% de opacidad
      },
      orange: {
        DEFAULT: '#F07318',          // Sin opacidad (100% opaco)
        50: 'rgba(240, 115, 24, 0.5)', // 50% de opacidad
      },
      pink: {
        DEFAULT: '#EA8BB7',          // Sin opacidad (100% opaco)
        50: 'rgba(234, 139, 183, 0.5)', // 50% de opacidad
      },
      yellow: {
        DEFAULT: '#FDDB64',          // Sin opacidad (100% opaco)
        50: 'rgba(253, 219, 100, 0.5)', // 50% de opacidad
      },
      brown: {
        DEFAULT: '#31261F',          // Sin opacidad (100% opaco)
        50: 'rgba(49, 38, 31, 0.5)', // 50% de opacidad
      },
      black: {
        DEFAULT: '#000000',          // Sin opacidad (100% opaco)
        50: 'rgba(0, 0, 0, 0.5)', // 50% de opacidad
      },
      white: {
        DEFAULT: '#ffffff',          // Sin opacidad (100% opaco)
        50: 'rgba(255, 255, 255, 0.5)', // 50% de opacidad
      },
    },
    screens: {
      ms: '200px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
    },
    extend: {
      backgroundImage:{
        'bgBanner': 'url("https://w0.peakpx.com/wallpaper/24/75/HD-wallpaper-happy-father-s-day-black-hand-day-child-white-father.jpg")'
      },
      backgroundColor: {
        'orangeOpacity': 'rgba(240, 115, 24, 0.5)', // Define el color naranja con una opacidad del 50%
      },
    },
  },
  variants: {},
  plugins: [],
}


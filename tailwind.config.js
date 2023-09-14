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
      green: '#A9D730',
      purple: '#8E83BC',
      blue: '#81B6E3',
      orange: '#F07318',
      pink: '#EA8BB7',
      yellow: '#FDDB64',
      brown: '#31261F',
      black: '#000000',
      white: '#fff',
    },
    screens: {
      xs: '480px',
      ms: '768px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
    },
    extend: {
      backgroundImage:{
        'bgBanner': 'url("https://w0.peakpx.com/wallpaper/24/75/HD-wallpaper-happy-father-s-day-black-hand-day-child-white-father.jpg")'
      }
    },
  },
  plugins: [],
}


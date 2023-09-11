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
      'background-lm': '#f1f1f1',
      'background-dm': '#13131d',
      'primary-lm': '#8C0303',
      'primary-dm': '#444444',
      'secondary-lm': '#F20505',
      'secondary-dm': '#555555',
      'secondary-background': '#ffff',
      'text-lm': '#333333',
      'text-dm': '#f1f1f1',
      white: '#fff',
    },
    screens: {
      xs: '480px',
      ms: '768px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
    },
    extend: {},
  },
  plugins: [],
}


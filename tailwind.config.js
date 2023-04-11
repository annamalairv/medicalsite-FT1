/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2290BA",
        secondary:"#2e279d",
        tertiary:"#28BAD3"
      },
      screens: {
        'xxs': '320px',
        'xs':'425px',
        '3xl':'1600px'
      },
    },
  },
  plugins: [],
}


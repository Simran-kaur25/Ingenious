/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl' : '0 10px 50px 0px rgba(0,0,0,0.15)',
      },
  
      colors:{
        "primary":"#000000",
        "secondary":"#FC6736",
        "tertiary":"#FE7A36"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js",],
  theme: {
    extend: {
      height: {
        '30': '7.5rem',
        '38': '9.5rem',
        '100' : '32rem',
      
      },
      padding: {
        '8': '8rem',
      },
    },
  },
  plugins: [],
}


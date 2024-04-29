/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js",],
  theme: {
    extend: {
      height: {
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '100' : '32rem',
      
      },
      padding: {
        '8': '8rem',
      },
      colors: {
        'normal': '#a8a878',
        'fire': '#F08030',
        'water': '#6890F0',
        'electric': '#F8D031',
        'grass': '#78C850',
        'ice': '#98D8D8',
        'fighting': '#C03028',
        'poison': '#A040A0',
        'ground': '#E0C068',
        'flying': '#A890F0',
        'psychic': '#F85888',
        'bug': '#A8B820',
        'rock': '#B8A039',
        'ghost': '#705898',
        'dragon': '#7038F8',
        'dark': '#705848',
        'steel': '#B8B8D0',
        'fairy': '#F0B6BC',
       
      },
    },
  },
  plugins: [],
}


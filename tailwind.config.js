/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.jsx',
    './src/Components/*.jsx',
    './src/Subcomponents/*.jsx',
  ],
  theme: {
    colors: {cohortBlue: '#000046',
      white: 'rgb(255 255 255)',
      inputGrey: '#E4E4E7',
      green: '#21C55E',
    },
    extend: {},
  },
  plugins: [],
}


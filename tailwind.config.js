/** @type {import('tailwindcss').Config} */
import colours from 'tailwindcss/colors'

export default {
  content: [
    './src/**/*.jsx',
  ],
  theme: {
    colors: {
      ...colours,
      cohortBlue: '#000046',
      white: 'rgb(255 255 255)',
      inputGrey: '#E4E4E7',
      green: '#21C55E',
      postTitle: '#64648c',
      bodyBackground: '#F0F5FA',
      buttonHover: '#64dc78'
    },
    extend: {},
  },
  plugins: [],
}


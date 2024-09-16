/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'green': '#4c730d',
      'blue': '#2e3ed2',
      'salmon': '#D26566',
      'black': '#000000',
      'orange': '#96390e',
      'grey': '#373737'

    },
    fontFamily: {
      'display': ['standard-graf'],
      'body': ['junicode']
    },
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
    './src/**/*.{js,svelte,ts}'
  ],
}


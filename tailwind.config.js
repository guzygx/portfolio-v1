/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'green': '#4c730d',
      'blue': '#2e3ed2',
      'salmon': '#d27476',
      'black': '#000000'
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


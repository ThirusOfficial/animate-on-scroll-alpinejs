const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'primary': '#ba68c8',
            'fuchsia': colors.fuchsia
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: ['./src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {},
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-focus'],
  },
  plugins: [],
}

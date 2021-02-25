module.exports = {
  purge: {
    content: ['./public/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        nototc:['Noto Sans TC'],
        roboto:['Roboto']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

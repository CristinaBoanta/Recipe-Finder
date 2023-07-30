/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'darkBrown': "#280000",
        'darkGreen': '#1A323A',
        'white' : '#fff',
        'black' : '#000'
      },
      borderRadius: {
        'custom': '0.375rem',
      },
    },
    experimental: {
      applyComplexClasses: true
    },
    spinner: (theme) => ({
      default: {
        color: '#dae1e7', // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms', // the speed at which the spinner should rotate
      },
      // md: {
      //   color: theme('colors.red.500', 'red'),
      //   size: '2em',
      //   border: '2px',
      //   speed: '500ms',
      // },
    })
  },

  variants: { // all the following default to ['responsive']
    spinner: ['responsive'],
  },
 
  plugins: [
    // optional configuration for resulting class name and/or tailwind theme key
    require('tailwindcss-spinner')({ className: 'spinner', themeKey: 'spinner' }),
  ],
}

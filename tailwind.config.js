/** @type {import('tailwindcss').Config} */

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
        color: '#dae1e7',
        size: '1em', 
        border: '2px',
        speed: '500ms',
      },
    })
  },

  variants: {
    spinner: ['responsive'],
  },
 
  plugins: [
    require('tailwindcss-spinner')({ className: 'spinner', themeKey: 'spinner' }),
  ],
}

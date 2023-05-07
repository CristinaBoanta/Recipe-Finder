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
        'rosewood': '#570000',
        'coral': '#de7c5a',
        'darkBrown': "#280000"
      }
    },
    experimental: {
      applyComplexClasses: true
    }
  }

}

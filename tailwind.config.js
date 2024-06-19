const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourcecode: ['"Source Code Pro"', ...defaultTheme.fontFamily.sans],
        domine: ['"Domine"']
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btn : "#1A297A",
        i_blue : "#000520"
      },
      backgroundImage:{
        contentSec : "url('/ContentSec/vector.png')"
      }
    },
  },
  plugins: [],
}
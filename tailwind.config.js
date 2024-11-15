/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '55': '55%',
        '70': '70%',
      },
      fontFamily: {
        aldrich: ['Aldrich', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
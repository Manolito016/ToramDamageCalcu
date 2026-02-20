/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '5': '1.25rem',
      },
      height: {
        '5': '1.25rem',
      },
      colors: {
        'blue': {
          '400': '#60a5fa',
        },
      },
    },
  },
  plugins: [],
}

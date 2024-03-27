/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#23BE0A', 
      'gray': '#13131380',
      'text-primary' : '#131313',
      'white': '#fff',
      'graybg' : 'rgba(19, 19, 19, 0.05)'
    },
  },
  plugins: [require("daisyui")],
}


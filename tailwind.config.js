/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'bg-primary': '#0e0e10',
        'bg-secondary' : "#131417",
        'border-1-primary': "#272b30"
      }
    },
  },
  plugins: [],
}


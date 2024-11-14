/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1e293b',
        darkCard: '#334155',
        darkText: '#e2e8f0',
        primary: '#7fdbca',
      },
    },
  },
  darkMode: 'class', // Esto permite alternar entre light y dark mode usando clases
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        teal: '#0F766E',
        accent: '#EA580C'
      },
      boxShadow: {
        card: '0 10px 25px -10px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}
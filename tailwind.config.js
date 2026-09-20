/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#07090e',
          900: '#0b0f17',
          850: '#101522',
          800: '#161c2c',
          700: '#222b40',
          600: '#2e3a54',
        },
        amberLamp: {
          300: '#ffe8a8',
          400: '#ffd074',
          500: '#f59e0b',
          glow: '#ffbe3b',
        },
        wood: {
          800: '#2b1b14',
          900: '#1b120c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'glow-amber': '0 0 45px -5px rgba(255, 190, 59, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(56, 189, 248, 0.2)',
        'card-depth': '0 10px 30px -10px rgba(0, 0, 0, 0.8), inset 0 1px 1px 0 rgba(255, 255, 255, 0.08)'
      }
    },
  },
  plugins: [],
}

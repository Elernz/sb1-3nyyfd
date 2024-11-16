/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dfff',
          300: '#7cc4ff',
          400: '#36a9ff',
          500: '#0090ff',
          600: '#0070dd',
          700: '#0057b3',
          800: '#004a94',
          900: '#003a75',
        },
        secondary: {
          50: '#fdf2ff',
          100: '#fae5ff',
          200: '#f5ccff',
          300: '#f0a3ff',
          400: '#e866ff',
          500: '#d633ff',
          600: '#b800e6',
          700: '#9400b8',
          800: '#7a0099',
          900: '#60007a',
        },
        accent: {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#ffccd5',
          300: '#ffa3b5',
          400: '#ff668c',
          500: '#ff1a57',
          600: '#eb0042',
          700: '#c40036',
          800: '#a30030',
          900: '#85002d',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A77BFF',
          main: '#8A4FFF',
          dark: '#6A35D9',
        },
        secondary: {
          light: '#8EDBFF',
          main: '#61C9FF',
          dark: '#4BA5D9',
        },
        neutral: {
          white: '#FFFFFF',
          lightest: '#F5F5F7',
          lighter: '#E5E5E7',
          light: '#C7C7CC',
          medium: '#8E8E93',
          dark: '#636366',
          darker: '#3A3A3C',
          darkest: '#121212',
          black: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
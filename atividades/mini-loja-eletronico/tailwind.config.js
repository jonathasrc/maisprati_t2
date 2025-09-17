//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Rastreia todos os arquivos JSX/JS em src
  ],
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  theme: {
    extend: {
      // Adiciona nossas cores personalizadas como tokens
      colors: {
        primary: {
          DEFAULT: '#2a7ab0',
          dark: '#3498db',
        },
        success: {
          DEFAULT: '#1a9c5f',
          hover: '#16a085',
        },
        danger: {
          DEFAULT: '#c0392b',
        },
        light: {
          bg: '#f4f6f8',
          card: '#ffffff',
          text: '#333',
        },
        dark: {
          bg: '#2c3e50',
          card: '#34495e',
          text: '#ecf0f1',
          header: '#1f2a36',
        },
      },
      // Adiciona nossa animação de keyframes
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(15px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 400ms ease-out forwards',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
}
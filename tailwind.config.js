/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Update this path as needed
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        primary: '#1E3A8A', // Deep Blue
        secondary: '#F97316', // Bright Orange
        background: '#0F172A', // Dark Background
        text: '#E5E7EB', // Light Text
        card: '#1E293B', // Slightly lighter dark background for cards
      },
      boxShadow: {
        // Dark theme shadows
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'custom-dark': '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'spin-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'move-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        'move-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'spin-once': 'spin-once 2s ease-out',
        'move-up': 'move-up 2s ease-in-out infinite alternate',
        'move-down': 'move-down 2s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, rgba(10, 25, 47, 0.8), rgba(5, 20, 40, 0.8))',
      },
    },
  },
  plugins: [],
};

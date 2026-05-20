/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        kerala: {
          lightGreen: '#EBF7EE',
          green: '#0F5132',
          darkGreen: '#0A3B24',
          gold: '#D4AF37',
          darkGold: '#AA8811',
          charcoal: '#1E293B',
          obsidian: '#020617',
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 81, 50, 0.08)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'premium': '0 10px 30px -10px rgba(15, 81, 50, 0.15)',
      }
    },
  },
  plugins: [],
}

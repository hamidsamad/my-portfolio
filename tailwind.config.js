/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          2: 'var(--accent-2)',
          dark: 'var(--accent-dark)',
          glow: 'var(--accent-glow)',
          soft: 'var(--accent-soft)',
        },
        primary: 'var(--text)',
        secondary: 'var(--text-2)',
        muted: 'var(--text-3)',
        surface: 'var(--surface)',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } }
      }
    }
  },
  plugins: []
};

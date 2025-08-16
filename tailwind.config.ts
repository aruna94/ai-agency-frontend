import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0b0f19',
        'accent': '#6EE7F9',
        'accent-2': '#A78BFA',
        'muted': '#99A3AD'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
        glow: '0 0 20px rgba(110,231,249,0.35)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem'
      }
    },
  },
  plugins: [],
}
export default config

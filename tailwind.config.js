/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff87',
        'cyber-green-dim': '#00c96a',
        'cyber-green-dark': '#004d29',
        'cyber-green-deep': '#001a0e',
        'dark-bg': '#050a07',
        'dark-card': '#0a1210',
        'dark-border': '#0f2318',
      },
      fontFamily: {
        'mono': ['var(--font-mono)', 'Courier New', 'monospace'],
        'display': ['var(--font-display)', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff87, 0 0 10px #00ff87' },
          '100%': { boxShadow: '0 0 20px #00ff87, 0 0 40px #00ff87, 0 0 60px #00ff87' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,255,135,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

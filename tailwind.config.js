/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        surface: '#111111',
        border: '#222222',
        primary: '#FFFFFF',
        accent: '#D3D3D3', // Light Grey
        dim: '#888888',
        ghost: 'rgba(255, 255, 255, 0.05)',
        text: '#E0E0E0',
        // Kept for fallback during transition
        phosphor: '#D3D3D3',
        copper: '#888888',
        signal: '#D3D3D3',
        static: '#111111',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radar-sweep': 'conic-gradient(from 0deg, transparent 70%, rgba(211, 211, 211, 0.2) 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turf: {
          pitch: '#060A07',
          dark: '#0B130E',
          card: '#101C15',
          border: '#193122',
          borderLight: '#264A34',
          neon: '#00E599',
          emerald: '#10B981',
          grass: '#22C55E',
          light: '#F0FDF4',
          muted: '#86EFAC',
          dim: '#6B7280',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'turf-glow': '0 0 30px -5px rgba(0, 229, 153, 0.25)',
        'turf-card': '0 4px 20px -2px rgba(0, 0, 0, 0.7)',
        'crt': 'inset 0 0 40px rgba(0, 229, 153, 0.08)',
      }
    },
  },
  plugins: [],
};

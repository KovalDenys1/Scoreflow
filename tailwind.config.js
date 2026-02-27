/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0F1419',
        surface: '#1A1F2E',
        card: '#242B3D',
        primary: '#FF6B35',
        success: '#10B981',
        danger: '#EF4444',
        info: '#3B82F6',
        text: {
          primary: '#FFFFFF',
          secondary: '#9CA3AF',
          muted: '#6B7280',
        },
        border: '#2D3748',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

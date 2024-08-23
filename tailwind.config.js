

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#1F2937',
        'secondary': '#111827',
        'accent': '#4B5563',
        'accent-light': '#9CA3AF',
        'accent-dark': '#1F2937',
        'success': '#10B981',
        'warning': '#FBBF24',
        'error': '#EF4444',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
 


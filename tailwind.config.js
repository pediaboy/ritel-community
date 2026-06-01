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
        navy: {
          900: '#0a0e1a',
          800: '#0d1224',
          700: '#111827',
          600: '#1a2236',
          500: '#1e2d47',
        },
        brand: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          400: '#60a5fa',
        }
      }
    },
  },
  plugins: [],
}

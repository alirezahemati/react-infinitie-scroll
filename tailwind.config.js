/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.4s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

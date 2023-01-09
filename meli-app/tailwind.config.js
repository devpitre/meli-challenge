/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFE600',
        blue: '#3483FA',
        gray: {
          100: '#EEEEEE',
          200: '#999999',
          300: '#666666',
          400: '#333333',
        },
      },
    },
  },
  plugins: [],
};

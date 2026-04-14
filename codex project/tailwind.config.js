/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Lilita One"', '"Luckiest Guy"', 'Impact', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        pop: '0 10px 0 rgba(52, 71, 40, 0.32), 0 18px 30px rgba(20, 41, 30, 0.28)',
        button: '0 6px 0 #7f4f16, 0 12px 20px rgba(27, 44, 32, 0.28)',
        tile: '0 8px 0 rgba(42, 83, 44, 0.22), 0 14px 24px rgba(28, 48, 36, 0.22)',
      },
    },
  },
  plugins: [],
};

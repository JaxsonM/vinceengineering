// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem', // 128 * 4 = 512px
        '144': '36rem', // 144 * 4 = 576px
        '160': '40rem', // 160 * 4 = 640px
      }
    },
  },
  plugins: [],
};

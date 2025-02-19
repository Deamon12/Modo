// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         aqua: ['Aqua', 'sans-serif'],
//       },
//     },
//   },
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        aqua: ['Aqua', 'sans-serif'], // Custom font for "modo"
        sans: ['Inter', 'sans-serif'], // Default Tailwind font
      },
    },
  },
  plugins: [],
};




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all JSX files
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        libre: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
};

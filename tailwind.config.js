/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#1A1A1A",
        gold: {
          light: "#D4AF37",
          DEFAULT: "#B3945B",
          dark: "#996515",
        }
      },
    },
  },
  plugins: [],
}
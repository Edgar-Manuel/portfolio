/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      colors: {
        bg: "#0C0C0C",
        ink: "#D7E2EA",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: "#030303",
          brighter: "#272728",
        },
      },
    },
  },
  plugins: [],
};

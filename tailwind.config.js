/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jackYellow: "#ffc100",
        jackBlack: "#00061b",
        jackGreen: "#386641",
      },
    },
  },
  plugins: [],
};

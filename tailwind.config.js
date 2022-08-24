/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1.5px",
      },
      colors: {
        primary: "#1a1a1a",
        secondary: "#2f2f2f",
        accent: {
          DEFAULT: "#e76f51",
          bright: "#bc6c25",
        },
      },
    },
  },
  plugins: [],
};

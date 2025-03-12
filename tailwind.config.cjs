/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        accent: "#38c172",
        light: "#4F46E5",
        dark: "#1E3A8A",
      },
      background: {
        light: "#F3F4F6", 
        dark: "#1F2937",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#FCFCFC",
        darkMoss: "#1d2019",
        interiorDesigner: "#3F3B31",
        sepia: "#896C55",
        skin: "#D1B49E",
      },
    },
  },
  darkMode: "media",
  plugins: [],
};

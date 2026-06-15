import path from "node:path";
import { fileURLToPath } from "node:url";

const legacyRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(legacyRoot, "index.html"),
    path.join(legacyRoot, "src/**/*.{js,ts,jsx,tsx}"),
  ],
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

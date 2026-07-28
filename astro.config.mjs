import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const hiddenSitemapPaths = ["/creative"];

export default defineConfig({
  site: "https://davidschraedel.github.io",
  base: "/portfolio/",
  output: "static",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !hiddenSitemapPaths.some((path) => page.includes(path)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

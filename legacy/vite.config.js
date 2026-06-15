import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Legacy React/Vite app — remove in Phase 5
export default defineConfig({
  root: __dirname,
  publicDir: path.resolve(__dirname, "../public"),
  plugins: [react()],
});

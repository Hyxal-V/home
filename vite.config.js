import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";  // use node:path for modern Node.js

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/home/",  // 👈 important for GitHub Pages
});

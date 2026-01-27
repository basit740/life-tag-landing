// vite.config.client.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Client-only Vite config
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // remove Replit-specific plugins for production deployment
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "assets"), // optional, local assets only
    },
  },
  root: path.resolve(__dirname), // client folder is root now
  build: {
    outDir: "dist", // will create client/dist
    emptyOutDir: true,
    sourcemap: false,
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  server: {
    host: "0.0.0.0",
  },
});

/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setup.ts",
  },
  base: "https://sybilvane.github.io/git-contacts-spa/",
});
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
      statements: 95, // Adjust these values
      branches: 90,
      functions: 90,
      lines: 95,
    },
    setupFiles: ["./test/setup.ts"], // Ensure the path to the setup file is correct
  },
});

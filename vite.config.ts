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
      reporter: ['text', 'lcov','json-summary'],
      statements: 100, 
      branches: 100,
      functions: 100,
      lines: 100,
    },
    setupFiles: ["./test/setup.ts"], 
  },
});

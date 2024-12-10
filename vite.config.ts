
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom", // Simulate a browser-like environment
    setupFiles: ["./test/setup.ts"], // Ensure setup is run before tests
    coverage: {
      reporter: ["text", "lcov", "json-summary"], // Include json-summary for the GitHub Action
      statements: 95,
      branches: 90,
      functions: 90,
      lines: 95,
    },
  ##setupFiles: ["./test/setup.ts"], 
  },
});

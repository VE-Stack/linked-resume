import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const { VITE_CLIENT_PORT = 3000 } = process.env;

export default defineConfig({
  plugins: [react()],
  build: { outDir: "build" },
  server: {
    port: +VITE_CLIENT_PORT
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"]
  }
});

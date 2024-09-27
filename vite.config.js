import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@components": path.resolve(__dirname, "src/components"),
      // eslint-disable-next-line no-undef
      "@utilities": path.resolve(__dirname, "src/utilities"),
    },
  },
});

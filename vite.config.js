import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import copy from "vite-plugin-copy";

// Оновлена конфігурація Vite
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "certs/*", dest: "certs" }],
    }),
  ],
  server: {
    https: {
      key: fs.readFileSync(path.resolve("certs", "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve("certs", "localhost.pem")),
    },
    host: "localhost",
    port: 5173,
  },
  base: "/testproject/",
});

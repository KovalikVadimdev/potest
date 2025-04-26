import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

const keyPath = path.resolve("certs", "localhost-key.pem");
const certPath = path.resolve("certs", "localhost.pem");

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    host: "localhost",
    port: 5173,
  },
  base: "/testproject/",
});

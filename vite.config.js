import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { VitePluginStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    VitePluginStaticCopy({
      targets: [
        {
          src: "certs/*",
          dest: "certs",
        },
      ],
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

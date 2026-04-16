import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { cartographer } from "@replit/vite-plugin-cartographer";
import { devBanner } from "@replit/vite-plugin-dev-banner";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(({ command }) => {
  const isServe = command === "serve";

  let port = 5173;
  if (isServe) {
    const rawPort = process.env.PORT;
    if (!rawPort) {
      throw new Error(
        "PORT environment variable is required but was not provided.",
      );
    }
    port = Number(rawPort);
    if (Number.isNaN(port) || port <= 0) {
      throw new Error(`Invalid PORT value: "${rawPort}"`);
    }
  }

  const basePath = isServe
    ? requireEnv(
        "BASE_PATH",
        "BASE_PATH environment variable is required but was not provided.",
      )
    : (process.env.BASE_PATH ?? "/");

  const replitPlugins =
    process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          cartographer({
            root: path.resolve(import.meta.dirname, ".."),
          }),
          devBanner(),
        ]
      : [];

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      runtimeErrorOverlay(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
        "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
      },
      dedupe: ["react", "react-dom"],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        allow: [
          path.resolve(import.meta.dirname),
          path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
          path.resolve(import.meta.dirname, "..", "..", "node_modules"),
        ],
        deny: ["**/.*"],
      },
    },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});

function requireEnv(name: string, message: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(message);
  }
  return value;
}

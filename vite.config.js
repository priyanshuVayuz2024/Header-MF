import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProdBuild = mode === "build-mf";
  return {
    plugins: [react()],
    build: {
      lib: {
        entry: "./src/export.js",
        name: "header",
        fileName: () => "header-bundle.js",
        formats: ["umd"],
      },
      rollupOptions: {
        external: isProdBuild
          ? ["react", "react-dom", "tailwindcss", "@mui/material"]
          : [],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            tailwindcss: "tailwindcss",
            "@mui/material": "MaterialUI",
          },
        },
      },
      cssCodeSplit: false,
      define: {
        "process.env": JSON.stringify({}),
      },
      outDir: "dist",
    },
    optimizeDeps: {
      exclude: isProdBuild
        ? ["react", "react-dom", "tailwindcss", "@mui/material"]
        : [],
    },
  };
});

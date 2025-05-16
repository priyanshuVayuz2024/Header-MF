
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
          ? [
            "react",
            "react-dom",
            "@mui/material",
            "@mui/icons-material",
            "@emotion/react",
            "@emotion/styled",
            "@mui/material/styles"
          ]
          : [],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@mui/material": "MaterialUI",
            "@mui/material/styles": "StylesMUI",
            "@mui/icons-material": "MuiIcons",
            "@emotion/react": "EmotionReact",
            "@emotion/styled": "EmotionStyled",
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
        ? [
          "react",
          "react-dom",
          "@mui/material",
          "@mui/icons-material",
          "@emotion/react",
          "@emotion/styled",
          "@mui/material/styles"
        ]
        : [],
    },
  };
})
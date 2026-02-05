import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const basePath = mode === "production" ? "/React-live-week6/" : "/";

  return {
    base: basePath,
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "react-vendor";
              if (id.includes("swiper")) return "swiper";
              if (id.includes("bootstrap")) return "bootstrap";
              if (id.includes("sweetalert2")) return "sweetalert2";
              // 建議把 loader 也分出來
              if (id.includes("react-loader-spinner")) return "loader-spinner";
              return "vendor";
            }
          },
        },
      },
    },
  };
});

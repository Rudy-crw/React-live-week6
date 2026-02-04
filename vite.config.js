import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/React-live-week5/" : "",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 1. 把 React 相關的包在一起 (react, react-dom, react-router-dom)
            if (id.includes("react")) {
              return "react-vendor";
            }
            // 2. 把大型 UI 套件獨立拆出來
            if (id.includes("swiper")) {
              return "swiper";
            }
            if (id.includes("bootstrap")) {
              return "bootstrap";
            }
            if (id.includes("sweetalert2")) {
              return "sweetalert2";
            }
            // 3. 其他所有細碎的小套件 (包含 cookie, axios 等) 全部打包成一個 vendor
            // 這樣就不會出現 "Empty chunk" 了
            return "vendor";
          }
        },
      },
    },
  },
});

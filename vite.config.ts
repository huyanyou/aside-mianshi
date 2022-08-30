import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
      globalNamespaces: ["global"],
      directoryAsNamespace: true,
      extensions: ["vue"],
      dirs: ["src/components"],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
  ],
  resolve: {
    alias: {
      "/~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

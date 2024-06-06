import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import ViteJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        port: 8000,
    },
    plugins: [
        vue(),
        ViteJsx(),
        UnoCSS({
            configFile: './uno.config.ts',
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        ElementPlus({
            // options
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // 将 @ 别名指向 src 目录
        },
    },
});

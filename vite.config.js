import { defineConfig } from "vite";
import env from "./src/env";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/provinsi": {
                target: env.api.provinsi,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/provinsi/, ""),
            },
            "/kabupaten": {
                target: env.api.kabupaten,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/kabupaten/, ""),
            },
            "/kecamatan": {
                target: env.api.kecamatan,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/kecamatan/, ""),
            },
            "/kelurahan": {
                target: env.api.kelurahan,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/kelurahan/, ""),
            },
            "/bmkg": {
                target: env.api.bmkgCuaca,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/bmkg/, ""),
            },
        },
    },
})
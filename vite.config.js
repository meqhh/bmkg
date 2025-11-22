import { defineConfig } from "vite";
import env from "./src/env";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api-provinsi": {
                target: env.api.provinsi,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/api-provinsi/, ""),
            },
            "/api-kabupaten": {
                target: env.api.kabupaten,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/api-kabupaten/, ""),
            },
            "/api-kecamatan": {
                target: env.api.kecamatan,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/api-kecamatan/, ""),
            },
            "/api-kelurahan": {
                target: env.api.kelurahan,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/api-kelurahan/, ""),
            },
            "/api-bmkg": {
                target: env.api.bmkgCuaca,
                changeOrigin: true,
                rewrite: p => p.replace(/^\/api-bmkg/, ""),
            },
        },
    },
})
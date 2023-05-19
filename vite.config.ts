import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "PWA test",
    short_name: "PWA test",
    description: "A test to prompt PWA installation",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        format: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        format: "image/png",
      },
    ],
    theme_color: "#1976d2",
    background_color: "#fafafa",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(manifestForPlugin)],
});

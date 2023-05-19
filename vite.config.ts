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
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        format: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        format: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        format: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable-icon.png",
        sizes: "225x225",
        format: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#fff000",
    background_color: "#ff0000",
    display: "standalone",
    scope: "/",
    start_url: "",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(manifestForPlugin)],
});
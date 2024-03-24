import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest: {
          name: "Angelo Zambrano | Porfolio",
          short_name: "Angelo Zambrano",
          description: "Angelo Zambrano's personal portfolio.",
          theme_color: "#ffffff", // Change this to your theme color.
          background_color: "#ffffff", // Change this to your background color.
          display: "minimal-ui",
          icons: [
            {
              src: "/logo.svg",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/logo.svg",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/logo.svg",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/logo.svg",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
    ],
  },
});

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://wwww.gaetanbros.fr",
  integrations: [tailwind(), react(), sitemap()],
  /*   server: {
    port: 4321,
    host: "192.168.1.15",
  }, */
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
    logLevel: "info",
    cacheDir: "./.cache/image",
    defaultFormat: "jpg",
  },
});

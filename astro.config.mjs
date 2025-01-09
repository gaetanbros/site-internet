import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://alessandroma.github.io",
  integrations: [tailwind(), react()],
  base: "/projet-gb",
  /* server: {
    port: 4321,
    host: "192.168.1.15",
  }, */
});

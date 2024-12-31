import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://alessandroma.github.io",
  integrations: [tailwind()],
  base: "/projet-gb",
});

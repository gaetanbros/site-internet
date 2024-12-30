import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter

// https://astro.build/config
export default defineConfig({
  site: "https://alessandroma.github.io",
  integrations: [tailwind()],
});

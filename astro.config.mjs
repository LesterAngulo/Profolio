import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [
    sitemap(),
    tailwind(),
  ],

  compressHTML: true,
  adapter: cloudflare()
});
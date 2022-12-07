import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  outDir: '../shiny_astro_portal/www',
  build: {
    format: "file"
  },
  integrations: [tailwind()]
});
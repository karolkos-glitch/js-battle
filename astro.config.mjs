import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs({
      include: ["**/solid/*"],
    }),
    react({
      include: ["**/react/*"],
    }),
    vue(),
    tailwind(),
  ],
});

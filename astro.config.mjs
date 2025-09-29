import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdi from "@iconify-json/mdi/icons.json";
import heroicons from "@iconify-json/heroicons/icons.json";
import path from "path";

export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      sets: {
        mdi,
        heroicons,
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  }
});
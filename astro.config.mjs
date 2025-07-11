import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    icon() // <-- ¡AHORA SOLO 'icon()' SIN OPCIONES!
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    }
  }
});
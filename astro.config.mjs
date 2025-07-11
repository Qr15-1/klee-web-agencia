import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  integrations: [
    tailwind(), 
    icon() // <-- ¡Así es como debe verse!
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
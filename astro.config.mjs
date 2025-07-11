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
    // --- CAMBIO AQUÍ ---
    icon({ 
      include: ['mdi'] // Le decimos a astro-icon que incluya el conjunto de iconos 'mdi'
    })
    // --- FIN CAMBIO ---
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
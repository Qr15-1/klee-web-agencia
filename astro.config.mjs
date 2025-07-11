import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Obtenemos la ruta base del proyecto
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  // --- NUEVA CONFIGURACIÓN DE ALIAS AÑADIDA ---
  vite: {
    resolve: {
      alias: {
        // Le decimos a Vite/Astro que '@' es un atajo para la carpeta 'src'
        '@': resolve(__dirname, 'src'),
      }
    }
  }
});
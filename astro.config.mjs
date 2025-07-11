import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdi from "@iconify-json/mdi/icons.json";
import heroicons from "@iconify-json/heroicons/icons.json";

// https://astro.build/config
export default defineConfig({
  // Las integraciones se mantienen igual
  integrations: [
    tailwind(),
    icon({
      sets: {
        mdi,
        heroicons,
      },
    }),
  ],

  // --- NUEVA CONFIGURACIÓN AÑADIDA ---
  // Configuración de Internacionalización (i18n)
  i18n: {
    // El idioma por defecto. Las páginas en este idioma no tendrán prefijo en la URL (ej. /proyectos)
    defaultLocale: 'es',
    // La lista de todos los idiomas soportados. 
    // Astro generará rutas con prefijo para los idiomas que no sean el de por defecto (ej. /en/proyectos)
    locales: ['es', 'en'],
  }
});
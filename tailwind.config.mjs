/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // 1. Abrimos 'extend'
    extend: { 
      
      // 2. Definimos 'colors' DENTRO de extend
      colors: {
        'klee-yellow': '#FBC943',
      },

      // 3. Definimos 'fontFamily' DENTRO de extend
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },

    }, // 4. Cerramos 'extend' AQUÍ, después de definir todo.
  },
  plugins: [],
}
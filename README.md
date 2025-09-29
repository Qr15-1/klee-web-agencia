# Klee Web Agency - Agencia de Marketing Digital

Una agencia web moderna desarrollada con Astro que ofrece servicios de marketing digital, diseño web, modelado 3D y producción audiovisual. Plataforma bilingüe (español/inglés) con diseño responsive y animaciones avanzadas.

## Características Principales

- **Diseño Moderno**: Interfaz elegante con gradientes y efectos visuales avanzados
- **Bilingüe**: Soporte completo para español e inglés con sistema i18n
- **Responsive**: Optimizado para móviles, tablets y desktop
- **Carrusel 3D**: Efectos coverflow interactivos para mostrar servicios
- **Animaciones**: GSAP, Typewriter Effect y transiciones suaves
- **Portfolio**: Galería de proyectos con navegación intuitiva
- **Contacto**: Modal interactivo con formulario de contacto
- **Rendimiento**: Sitio estático con carga rápida

## Servicios Ofrecidos

- **Diseño Web**: Desarrollo de sitios web modernos y funcionales
- **Modelado 3D**: Creación de modelos tridimensionales para visualización
- **Producción Audiovisual**: Servicios de producción multimedia
- **Publicidad Digital**: Campañas de marketing digital y ADS
- **Redes Sociales**: Gestión y estrategia en redes sociales

## Tecnologías Utilizadas

### Frontend
- **Astro 5.11.0** - Framework web moderno para sitios estáticos
- **Tailwind CSS 3.4.4** - Framework de CSS utilitario
- **TypeScript** - Tipado estático para mejor desarrollo
- **GSAP 3.12.5** - Biblioteca de animaciones avanzadas
- **Swiper 11.1.4** - Carruseles interactivos
- **Typewriter Effect 2.21.0** - Efecto de máquina de escribir

### Internacionalización
- **Sistema i18n personalizado** con soporte para español e inglés
- **Archivos JSON** para traducciones (`es.json`, `en.json`)
- **Routing automático** para idiomas

### Iconos y Assets
- **Astro Icon 1.1.0** - Sistema de iconos
- **Material Design Icons (MDI)**
- **Heroicons**

### Herramientas de Desarrollo
- **Vite 7.0.4** - Build tool y bundler
- **Node.js 20.x** - Runtime requerido

## Estructura del Proyecto

```
klee-web-agencia/
├── src/
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── ContactModalNuevo.astro
│   │   ├── FloatingSocials.astro
│   │   ├── Footer.astro
│   │   ├── GallerySection.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ImageGrid.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ServiceCarousel.astro
│   │   ├── ServicesBar.astro
│   │   ├── StatsBar.astro
│   │   └── TypingTitle.astro
│   ├── i18n/               # Archivos de traducción
│   │   ├── es.json         # Traducciones en español
│   │   └── en.json         # Traducciones en inglés
│   ├── layouts/            # Layouts base
│   │   └── Layout.astro    # Layout principal
│   ├── lib/                # Utilidades y helpers
│   │   └── i18n.js         # Sistema de traducción
│   ├── pages/              # Páginas (routing automático)
│   │   ├── index.astro     # Página principal
│   │   ├── paginas/        # Páginas de servicios
│   │   │   ├── ads.astro
│   │   │   ├── diseno.astro
│   │   │   ├── modelado-3d.astro
│   │   │   └── produccion.astro
│   │   ├── Proyectos/      # Páginas de portfolio
│   │   │   ├── Enforme.astro
│   │   │   ├── engadi.astro
│   │   │   ├── Expo.astro
│   │   │   ├── Focus.astro
│   │   │   ├── Hana.astro
│   │   │   ├── LobbyPest.astro
│   │   │   ├── Monitorete.astro
│   │   │   ├── Pataton.astro
│   │   │   ├── Tiger.astro
│   │   │   ├── Variaciones.astro
│   │   │   └── Zulia.astro
│   │   └── en/             # Versión en inglés
│   │       ├── index.astro
│   │       ├── paginas/
│   │       └── Proyectos/
│   └── styles/             # CSS personalizado
│       ├── global.css      # Estilos globales
│       └── header.css      # Estilos del header
├── public/                 # Assets estáticos
│   └── imagenes/          # Imágenes del proyecto
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de Tailwind
├── tsconfig.json          # Configuración de TypeScript
└── package.json           # Dependencias del proyecto
```


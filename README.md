# Edgar Manchón — Portfolio

Web portfolio profesional construida con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Diseño oscuro premium inspirado en OpenAI, Vercel, Linear, Anthropic, Stripe y Raycast.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## Características

- **Next.js 14** con App Router y build estático
- **TypeScript** en modo estricto
- **Tailwind CSS** con design system propio
- **Framer Motion** para animaciones fluidas
- **Lucide React** para iconografía
- Diseño dark premium, mobile-first
- Animaciones sutiles y microinteracciones
- SEO optimizado (Open Graph, Twitter, JSON-LD, sitemap)
- Accesibilidad (focus visible, `prefers-reduced-motion`, semántica)
- CI con GitHub Actions (lint · typecheck · build)

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Inter + JetBrains Mono (vía `next/font`)

## Estructura

```
.
├── app/
│   ├── layout.tsx        # Root layout + SEO + JSON-LD
│   ├── page.tsx          # Composición de secciones
│   └── globals.css       # Design system + utilities
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── stack.tsx
│   │   ├── ai-agents.tsx
│   │   ├── github.tsx
│   │   ├── vision.tsx
│   │   └── cta.tsx
│   └── ui/
│       ├── fade-in.tsx
│       └── section-header.tsx
├── lib/
│   └── utils.ts
├── .github/workflows/
│   └── ci.yml
└── public/
    ├── favicon.svg
    ├── manifest.json
    ├── robots.txt
    └── sitemap.xml
```

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
pnpm build
pnpm start
```

## Lint & Typecheck

```bash
pnpm lint
pnpm typecheck
```

## Deploy

### Vercel (recomendado para Next.js)

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Importa `Edgar-Manuel/portfolio`
3. Vercel detecta Next.js automáticamente
4. Click **Deploy**

Build settings por defecto:
- Framework: Next.js
- Build command: `next build`
- Output: `.next`

### CLI

```bash
vercel login
vercel --prod
```

### GitHub Pages (estático)

El proyecto genera páginas estáticas (`○ (Static)`). Para desplegar en GitHub Pages:

1. `next.config.mjs` → añadir `output: "export"` y `images: { unoptimized: true }`
2. `git checkout -b gh-pages`
3. `pnpm build` → sube el contenido de `out/`
4. Habilita Pages desde `Settings → Pages → gh-pages branch`

## Personalización

- **Colores**: edita `tailwind.config.ts` → `colors`
- **Tipografía**: edita `app/layout.tsx` (cambia las fuentes de `next/font`)
- **Contenido**: cada sección está en `components/sections/`
- **Metadatos SEO**: edita `app/layout.tsx` → `metadata`

## Licencia

MIT — siéntete libre de usar la estructura como base para tu propio portfolio, pero reemplaza el contenido.

## Contacto

- GitHub: [@Edgar-Manuel](https://github.com/Edgar-Manuel)
- LinkedIn: [/in/edgarmanchon](https://linkedin.com/in/edgarmanchon)

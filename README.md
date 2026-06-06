# Edgar Manchón — Portfolio

Web portfolio profesional construida con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Diseño oscuro premium inspirado en OpenAI, Vercel, Linear, Anthropic, Stripe y Raycast.

## Características

- **Next.js 14** con App Router
- **TypeScript** estricto
- **Tailwind CSS** con design system propio
- **Framer Motion** para animaciones fluidas
- **Lucide React** para iconografía
- Diseño dark premium, mobile-first
- Animaciones sutiles y microinteracciones
- SEO optimizado (Open Graph, Twitter, JSON-LD, sitemap)
- Accesibilidad (focus visible, `prefers-reduced-motion`, semántica)

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
└── public/
    ├── favicon.svg
    ├── manifest.json
    ├── robots.txt
    └── sitemap.xml
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Lint & Typecheck

```bash
npm run lint
npm run typecheck
```

## Personalización

- **Colores**: edita `tailwind.config.ts` → `colors`
- **Tipografía**: edita `app/layout.tsx` (cambia las fuentes de `next/font`)
- **Contenido**: cada sección está en `components/sections/`
- **Metadatos SEO**: edita `app/layout.tsx` → `metadata`

## Contacto

- GitHub: [@Edgar-Manuel](https://github.com/Edgar-Manuel)
- LinkedIn: [/in/edgarmanchon](https://linkedin.com/in/edgarmanchon)

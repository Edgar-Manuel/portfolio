# 3D64R

Landing page de Edgar Manchón (3D64R), Python Backend & AI Developer: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion. Es un proyecto independiente dentro de este repo, separado de la app Next.js del portfolio principal (`../app`).

## Arrancar

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # type-check + build de producción
npm run preview   # sirve el build de producción
```

## Contenido

Todo el texto y los datos viven en **`src/data/content.ts`** y replican el portfolio principal (`../components/sections/*.tsx`): stack, servicios, proyectos y contacto. Si algo cambia allí, hay que actualizarlo aquí también.

- **Hero:** dos renders de la cabeza con el fondo recortado (`public/assets/hero/`), animados en `src/components/AnimatedHead.tsx`. Flotan, alternan con la versión con gafas y cambian con el hover o al tocar. Con `prefers-reduced-motion` se quedan quietos.
- **Marquee:** los 20 elementos del stack, intercalados con las capturas de `public/projects/`.
- **Proyectos:** cada tarjeta tiene 3 paneles (`Tile` en `content.ts`). Cuando hay captura real, se usa la captura. Si no, el panel muestra la arquitectura, el código, el stack o el caso (problema → solución → resultado) del portfolio. Para añadir una captura nueva, copia la imagen en `public/projects/` y cambia ese panel a `{ kind: "image", src, alt }`.

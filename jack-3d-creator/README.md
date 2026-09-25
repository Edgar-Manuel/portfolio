# Jack — 3D Creator

Standalone landing page for a fictional "Jack" 3D Creator portfolio: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React. Kept as its own project inside this repo, separate from the real Edgar Manchón portfolio (`../app`).

## Run it

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build
npm run preview   # serve the production build
```

## About the images

The original spec pointed every image at third-party CDNs (`motionsites.ai`, `*.figma.site`, `images.higgs.ai` / `cloudfront.net`). This environment's network policy blocks outbound requests to those hosts, so every image in this build is a **local placeholder SVG** under `public/assets/`, generated to match the exact dimensions and aspect ratios the layout expects.

All 35 placeholders are wired through a single file: **`src/data/assets.ts`**. Each entry has:

- `local` — the path the app actually renders (`/assets/...`)
- `sourceUrl` — the original third-party URL from the spec, kept for reference

To swap in the real assets:

1. Download the file at each `sourceUrl`.
2. Save it at the matching `local` path under `public/assets/` (any raster format works — `.png`, `.jpg`, `.webp`; you can drop the `.svg` placeholder and use whatever extension the real file has).
3. Update that one `local` value in `src/data/assets.ts` if the extension changes.

No component code needs to change — every section reads from this file.

| Group | Count | Notes |
|---|---|---|
| Hero portrait | 1 | `hero/portrait.svg` — cutout photo of "Jack" |
| About decorations | 4 | moon, 3D object, lego, 3D group icons |
| Marquee | 21 | originally animated GIFs — the placeholders are static; swap for real GIFs (or MP4/WebM loops) for motion |
| Project images | 9 | 3 projects × 3 images each |

## Placeholder contact info

The nav "Contact" link and both `ContactButton` instances point at `mailto:hello@jack3d.studio` — a placeholder, since the spec didn't provide a real address. Update the `href` default in `src/components/ContactButton.tsx` (and the `HeroSection` nav link) once there's a real one. `LiveProjectButton` links default to `#` for the same reason — no real project URLs were given.

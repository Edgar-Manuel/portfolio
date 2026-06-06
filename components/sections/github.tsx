"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, Star, BookMarked, Users } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const stats = [
  { label: "Repos", value: "41", icon: BookMarked },
  { label: "Stars totales", value: "175", icon: Star },
  { label: "Seguidores", value: "3", icon: Users },
  { label: "Siguiendo", value: "9", icon: GitFork },
];

const languages = [
  { name: "TypeScript", pct: 42, color: "from-white/60 to-white/30" },
  { name: "Python", pct: 31, color: "from-white/55 to-white/25" },
  { name: "JavaScript", pct: 15, color: "from-white/40 to-white/15" },
  { name: "Shell / HTML", pct: 7, color: "from-white/30 to-white/10" },
  { name: "Otros", pct: 5, color: "from-white/20 to-white/5" },
];

const repos = [
  {
    name: "terminaldeterminales",
    description: "TUI con 4 paneles de IA ejecutándose en paralelo, memoria compartida, kanban y shell sandboxed.",
    language: "Python",
    stars: 12,
    forks: 1,
  },
  {
    name: "confesionario-virtual",
    description: "El Confesionario Virtual — chat con CurIA, un sacerdote virtual impulsado por IA. FastAPI + React + Tailwind.",
    language: "JavaScript",
    stars: 8,
    forks: 1,
  },
  {
    name: "AutomatizIA-",
    description: "Automatizaciones inteligentes: workflows IA para acelerar procesos y tareas repetitivas.",
    language: "TypeScript",
    stars: 6,
    forks: 1,
  },
  {
    name: "simulacrum-2.0",
    description: "Plataforma experimental con foco en simulación y agentes. Apache 2.0.",
    language: "TypeScript",
    stars: 5,
    forks: 0,
  },
  {
    name: "dropshipping-platform",
    description: "Plataforma de dropshipping con IA para investigación de productos. GPL v3.",
    language: "TypeScript",
    stars: 4,
    forks: 0,
  },
  {
    name: "ebookforge-ai",
    description: "Generación de ebooks con IA: estructura, contenido y formato automatizado.",
    language: "TypeScript",
    stars: 3,
    forks: 0,
  },
];

// Generate a contribution heatmap (sample data)
const generateHeatmap = () => {
  const cells: number[] = [];
  for (let i = 0; i < 91; i++) {
    const r = Math.sin(i * 0.7) * 0.5 + 0.5;
    const r2 = Math.cos(i * 0.3) * 0.3 + 0.5;
    const intensity = Math.max(0, Math.min(1, r * 0.6 + r2 * 0.4));
    cells.push(intensity);
  }
  return cells;
};

const heatmap = generateHeatmap();

export function GitHubSection() {
  return (
    <section id="github" className="section relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="GitHub"
              title={
                <>
                  Código abierto,
                  <br />
                  <span className="text-fg-muted">construido en público.</span>
                </>
              }
              description="Vista de actividad y repositorios. Todo lo que construyo queda documentado y versionado, desde agentes hasta automatizaciones y herramientas internas."
            />
            <a
              href="https://github.com/Edgar-Manuel"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost group"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.78.12 3.07.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.26 5.7.41.36.77 1.07.77 2.16v3.2c0 .3.21.66.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              Ver perfil
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={24}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-bg-elevated/50">
            <div className="flex items-center justify-between border-b border-border bg-bg/40 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>
              <span className="label-mono">github / dashboard</span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                  syncing
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px border-b border-border bg-border md:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.06 }}
                  className="bg-bg-elevated/30 p-5"
                >
                  <div className="flex items-center justify-between">
                    <s.icon className="h-3.5 w-3.5 text-fg-muted" />
                    <span className="font-mono text-[9px] text-fg-faint">
                      ↑ 12%
                    </span>
                  </div>
                  <div className="mt-3 font-sans text-2xl md:text-3xl font-semibold tracking-tighter text-fg">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] text-fg-subtle">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Heatmap */}
            <div className="border-b border-border bg-bg-elevated/20 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="label-mono">Contribuciones</div>
                  <div className="mt-1 text-[11px] text-fg-faint">
                    Últimas 13 semanas · actividad reciente
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-fg-subtle">
                  <span>menos</span>
                  {[0.1, 0.3, 0.55, 0.8, 1].map((v) => (
                    <span
                      key={v}
                      className="h-2.5 w-2.5 rounded-sm"
                      style={{
                        background: `rgba(255,255,255,${0.05 + v * 0.35})`,
                      }}
                    />
                  ))}
                  <span>más</span>
                </div>
              </div>
              <div className="mt-4 flex gap-1 mask-fade-x">
                {heatmap.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.005 }}
                    className="aspect-square flex-1 rounded-sm"
                    style={{
                      background: `rgba(255,255,255,${0.04 + v * 0.4})`,
                    }}
                    title={`${Math.round(v * 12)} contribuciones`}
                  />
                ))}
              </div>
            </div>

            {/* Two columns: languages + recent */}
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              {/* Languages */}
              <div className="bg-bg-elevated/30 p-5">
                <div className="label-mono">Lenguajes más usados</div>
                <div className="mt-4 space-y-3">
                  {languages.map((l, i) => (
                    <motion.div
                      key={l.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                    >
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="text-fg">{l.name}</span>
                        <span className="font-mono text-fg-muted">{l.pct}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${l.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent activity */}
              <div className="bg-bg-elevated/30 p-5">
                <div className="label-mono">Actividad reciente</div>
                <div className="mt-4 space-y-3">
                  {[
                    { t: "Updated repo", r: "3d64r3p0s", s: "hace 2h" },
                    { t: "Updated repo", r: "poker-arena", s: "hace 2d" },
                    { t: "Updated repo", r: "terminaldeterminales", s: "hace 5d" },
                    { t: "Updated repo", r: "Gymbro", s: "hace 5d" },
                    { t: "Updated repo", r: "peluqueria-cool", s: "hace 1 sem" },
                    { t: "Updated repo", r: "biolink", s: "hace 1 sem" },
                    { t: "Updated repo", r: "confesionario-virtual", s: "hace 1 sem" },
                  ].map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
                      className="flex items-center justify-between gap-3 rounded-lg border border-border bg-bg/40 px-3 py-2"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                        <div className="min-w-0">
                          <div className="truncate text-[12px] text-fg">{a.t}</div>
                          <div className="truncate font-mono text-[10px] text-fg-subtle">
                            {a.r}
                          </div>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] text-fg-faint">
                        {a.s}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Repos grid */}
        <Stagger
          delay={0.1}
          stagger={0.05}
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {repos.map((repo) => (
            <StaggerItem key={repo.name}>
              <a
                href={`https://github.com/Edgar-Manuel/${repo.name}`}
                target="_blank"
                rel="noreferrer noopener"
                className="group block h-full rounded-xl border border-border bg-bg-elevated/40 p-5 transition-all duration-500 hover:border-border-strong hover:bg-bg-card"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <BookMarked className="h-3.5 w-3.5 text-fg-muted" />
                    <span className="text-sm font-medium text-fg">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-fg-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
                </div>
                <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-fg-muted text-pretty">
                  {repo.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] text-fg-subtle">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

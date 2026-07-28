"use client";

import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

type Tech = {
  name: string;
  category: string;
  description: string;
  symbol: string;
  hue?: string;
};

const stack: Tech[] = [
  {
    name: "Next.js",
    category: "Frontend",
    description: "Creación de aplicaciones web modernas, rápidas y optimizadas.",
    symbol: "N",
  },
  {
    name: "TypeScript",
    category: "Lenguaje",
    description: "Desarrollo robusto y mantenible para proyectos complejos.",
    symbol: "TS",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Backend escalable para aplicaciones y APIs.",
    symbol: "Nd",
  },
  {
    name: "Python",
    category: "Lenguaje",
    description: "Automatización, IA y procesamiento de datos.",
    symbol: "Py",
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "APIs y servicios para aplicaciones de IA.",
    symbol: "Fa",
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Base de datos moderna con autenticación y tiempo real.",
    symbol: "Sb",
  },
  {
    name: "PostgreSQL",
    category: "Datos",
    description: "Gestión profesional de información empresarial.",
    symbol: "Pg",
  },
  {
    name: "MongoDB",
    category: "Datos",
    description: "Bases de datos flexibles orientadas a escalabilidad.",
    symbol: "Mg",
  },
  {
    name: "Appwrite",
    category: "Backend",
    description: "Backend moderno para aplicaciones.",
    symbol: "Aw",
  },
  {
    name: "n8n",
    category: "Automatización",
    description: "Automatización avanzada de procesos.",
    symbol: "n8",
  },
  {
    name: "Make",
    category: "Automatización",
    description: "Integración rápida entre plataformas.",
    symbol: "Mk",
  },
  {
    name: "Crawl4AI",
    category: "Datos",
    description: "Extracción inteligente de información web.",
    symbol: "C4",
  },
  {
    name: "OpenAI APIs",
    category: "IA",
    description: "Integración de inteligencia artificial en productos reales.",
    symbol: "OA",
  },
  {
    name: "RAG",
    category: "IA",
    description: "Embeddings, búsqueda híbrida y contexto recuperado.",
    symbol: "Rg",
  },
  {
    name: "DeepSeek",
    category: "IA",
    description: "Modelos de lenguaje para automatización y generación de contenido.",
    symbol: "DS",
  },
  {
    name: "Claude Code",
    category: "IA",
    description: "Desarrollo asistido por IA para acelerar proyectos complejos.",
    symbol: "Cc",
  },
  {
    name: "Hermes Agent",
    category: "IA",
    description: "Agentes autónomos para automatización avanzada.",
    symbol: "Hm",
  },
  {
    name: "Stripe",
    category: "Pagos",
    description: "Pagos y monetización.",
    symbol: "St",
  },
  {
    name: "Resend",
    category: "Email",
    description: "Infraestructura moderna de correo electrónico.",
    symbol: "Re",
  },
  {
    name: "Git & GitHub",
    category: "DevOps",
    description: "Control profesional del desarrollo.",
    symbol: "Gh",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Lenguaje",
  "Datos",
  "IA",
  "Automatización",
  "Pagos",
  "Email",
  "DevOps",
];

export function Stack() {
  return (
    <section id="stack" className="section relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Stack tecnológico"
              title={
                <>
                  Herramientas que se
                  <br />
                  <span className="text-fg-muted">convierten en sistemas.</span>
                </>
              }
              description="Tecnologías seleccionadas por su capacidad de construir productos reales, mantenibles y escalables. Cada pieza resuelve un problema concreto."
            />
            <div className="hidden md:flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <Stagger
          delay={0.1}
          stagger={0.04}
          className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stack.map((tech) => (
            <StaggerItem key={tech.name}>
              <TechCard tech={tech} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-bg-elevated/40 p-5 transition-all duration-500 ease-out-expo hover:border-border-strong hover:bg-bg-card/80">
      {/* Subtle gradient on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.04), transparent 40%)",
        }}
      />

      <div className="relative flex items-start gap-4">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-bg/80">
          <span className="font-mono text-[13px] font-semibold tracking-tight text-fg">
            {tech.symbol}
          </span>
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-fg">{tech.name}</h3>
            <span className="label-mono shrink-0 text-[10px]">
              {tech.category}
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-fg-muted text-pretty">
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
}

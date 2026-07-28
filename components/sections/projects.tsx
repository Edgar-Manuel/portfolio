"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Code2, Lightbulb, Target, Sparkles } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  status: "Live demo" | "MVP" | "In progress" | "Client project" | "Research";
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  href: string;
  demo?: string;
  accent: string;
  visual: React.ReactNode;
  architectureSteps?: Array<{ step: string; title: string; desc: string }>;
  codeSnippet?: { language: string; filename: string; code: string };
};

import { ProjectModal, ProjectDetail } from "@/components/ui/project-modal";

export const projects: ProjectDetail[] = [
  {
    id: "gymbro",
    number: "01",
    name: "gymbro",
    tagline: "PWA de entrenamiento inteligente, 100% offline y open source.",
    status: "MVP",
    problem:
      "Las apps de fitness son caras, requieren conexión o venden datos personales. Necesitaba una herramienta gratuita, offline y adaptada a mi método de entrenamiento.",
    solution:
      "PWA completa con React 19, almacenamiento local (Dexie/IndexedDB), clasificación tier de ejercicios, generador de rutinas con sistema RIR de progresión y calculadora nutricional.",
    technologies: ["React 19", "TypeScript", "Vite", "Dexie.js", "Zustand", "shadcn/ui", "Tailwind", "PWA", "Offline-first"],
    result:
      "App 100% offline e instalable como PWA con biblioteca de ejercicios, dashboard de progreso, rutinas personalizadas y sincronización pendiente. Sin servidores, sin anuncios, sin tracking.",
    href: "https://github.com/Edgar-Manuel/Gymbro-",
    demo: "https://gym-bro.appwrite.network/",
    accent: "from-emerald-300/20 via-emerald-200/10",
    visual: <GymbroVisual />,
    images: ["/projects/gymbro-dashboard.png"],
    architectureSteps: [
      { step: "Storage Layer", title: "IndexedDB + Dexie.js", desc: "Persistencia local instantánea sin latencia de red" },
      { step: "State Management", title: "Zustand Reactive Store", desc: "Gestión de estado ligero para temporizadores y rutinas activas" },
      { step: "PWA Service Worker", title: "Cache First Strategy", desc: "Instalable como app nativa sin conexión a internet" },
    ],
    codeSnippet: {
      language: "typescript",
      filename: "db.ts (Dexie Schema)",
      code: `import Dexie, { Table } from 'dexie';

export interface Exercise {
  id?: number;
  name: string;
  category: 'Chest' | 'Back' | 'Legs' | 'Shoulders';
  tier: 'S' | 'A' | 'B';
}

export class GymDatabase extends Dexie {
  exercises!: Table<Exercise>;
  constructor() {
    super('GymbroDB');
    this.version(1).stores({ exercises: '++id, name, category, tier' });
  }
}`,
    },
  },
  {
    id: "tubethink",
    number: "02",
    name: "tubethink",
    tagline: "Base de conocimiento IA sobre vídeos técnicos.",
    status: "MVP",
    problem:
      "El conocimiento técnico está disperso en vídeos largos y es difícil encontrar una respuesta concreta con contexto.",
    solution:
      "Pipeline de ingesta y consulta con transcripción, embeddings, búsqueda híbrida, chat persistente y grafo de conceptos.",
    technologies: ["Python", "RAG", "PostgreSQL", "Flask", "Embeddings"],
    result:
      "Un sistema separable por etapas para ingesta, recuperación y generación, preparado para evaluar la calidad de las respuestas.",
    href: "https://github.com/Edgar-Manuel/tubethink",
    accent: "from-sky-300/20 via-sky-200/10",
    visual: <ShiftVisual />,
    architectureSteps: [
      { step: "Ingesta", title: "Whisper & Transcript Extract", desc: "Extracción automática de subtítulos y chunkeado semántico" },
      { step: "Vector Index", title: "pgvector & Embeddings", desc: "Almacenamiento vectorial en PostgreSQL con similitud coseno" },
      { step: "RAG Pipeline", title: "Hybrid Search & LLM", desc: "Generación de respuesta grounded en las transcripciones exactas" },
    ],
    codeSnippet: {
      language: "python",
      filename: "rag_service.py",
      code: `from openai import OpenAI
import pgvector

def retrieve_video_context(query: str, top_k: font = 3):
    embedding = get_embedding(query)
    # Hybrid search using pgvector cosine distance + BM25 keyword matching
    chunks = db.query("SELECT content FROM chunks ORDER BY embedding <=> %s LIMIT %s", (embedding, top_k))
    return "\\n".join([c.content for c in chunks])`,
    },
  },
  {
    id: "cumple",
    number: "03",
    name: "cumple",
    tagline: "SaaS multi-agente para recordatorios y regalos.",
    status: "MVP",
    problem:
      "Recordar cumpleaños y preparar una respuesta personalizada requiere coordinar varias tareas y fuentes de información.",
    solution:
      "Arquitectura con agentes especializados para coordinación, mensajes, recomendaciones y funciones sociales.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "React"],
    result:
      "MVP funcional para explorar orquestación, persistencia y workflows de varios pasos con agentes.",
    href: "https://github.com/Edgar-Manuel/cumple",
    accent: "from-violet-300/20 via-violet-200/10",
    visual: <ConceptuVisual />,
    architectureSteps: [
      { step: "Orquestador", title: "FastAPI + Celery Task Queue", desc: "Programación de tareas asíncronas periódicas en background" },
      { step: "Multi-Agente", title: "Planner & Gift Agents", desc: "Agentes autónomos especializados con herramientas dedicadas" },
      { step: "Caching", title: "Redis State Store", desc: "Almacenamiento de contexto e historial de conversación" },
    ],
    codeSnippet: {
      language: "python",
      filename: "agent_orchestrator.py",
      code: `from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

@app.post("/api/v1/trigger-reminders")
async def trigger_birthday_agents(user_id: str, background_tasks: BackgroundTasks):
    # Queue multi-agent flow
    background_tasks.add_task(run_agent_pipeline, user_id)
    return {"status": "queued", "user_id": user_id}`,
    },
  },
  {
    id: "ebookforge-ai",
    number: "04",
    name: "ebookforge-ai",
    tagline: "Pipeline de generación de eBooks con IA.",
    status: "In progress",
    problem:
      "Crear un eBook profesional implica coordinar investigación, estructura, escritura, formato y marketing.",
    solution:
      "Pipeline full stack por etapas con streaming, generación asistida y selección de modelos según la tarea.",
    technologies: ["Next.js", "TypeScript", "Claude", "Google GenAI", "Streaming"],
    result:
      "Flujo reproducible para convertir una idea editorial en contenido estructurado y listo para formato.",
    href: "https://github.com/Edgar-Manuel/ebookforge-ai",
    accent: "from-emerald-300/20 via-emerald-200/10",
    visual: <CallVisual />,
    images: ["/projects/ebookai-strategy.png", "/projects/ebookai-dashboard.png"],
    architectureSteps: [
      { step: "Structure Agent", title: "Table of Contents Generator", desc: "Crea esquema estructurado de capítulos en formato JSON" },
      { step: "Streaming Engine", title: "Server-Sent Events (SSE)", desc: "Generación en tiempo real de capítulos con soporte para Claude" },
    ],
    codeSnippet: {
      language: "typescript",
      filename: "route.ts (Next.js Stream)",
      code: `import { AnthropicStream, StreamingTextResponse } from 'ai';

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await anthropic.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    stream: true,
    messages: [{ role: 'user', content: prompt }]
  });
  return new StreamingTextResponse(AnthropicStream(response));
}`,
    },
  },
  {
    id: "peluqueria-cool",
    number: "05",
    name: "peluqueria-cool",
    tagline: "Reservas y asistente conversacional para un negocio real.",
    status: "Client project",
    problem:
      "Un negocio local necesita atender dudas y gestionar citas sin depender de una agenda manual.",
    solution:
      "Web de reservas con asistente que entiende peticiones en lenguaje natural y ayuda a organizar citas.",
    technologies: ["JavaScript", "APIs", "Conversational AI", "WhatsApp"],
    result:
      "Un caso aplicado de automatización conversacional para sustituir procesos repetitivos de atención.",
    href: "https://github.com/Edgar-Manuel/peluqueria-cool",
    accent: "from-amber-300/20 via-amber-200/10",
    visual: <DropshipVisual />,
  },
  {
    id: "3d64rr3p0s",
    number: "06",
    name: "3d64rr3p0s",
    tagline: "Directorio de repositorios con chat y análisis IA.",
    status: "Live demo",
    problem:
      "Descubrir repositorios útiles requiere filtrar mucha información y revisar manualmente su estado.",
    solution:
      "Directorio con chat IA, GitHub API, análisis de salud y sincronización automática mediante GitHub Actions.",
    technologies: ["Next.js", "React", "Groq", "GitHub API", "Tailwind"],
    result:
      "Producto público con demo online y automatización de actualización.",
    href: "https://github.com/Edgar-Manuel/3d64rr3p0s",
    demo: "https://3d64rr3p0s.vercel.app/",
    accent: "from-rose-300/20 via-rose-200/10",
    visual: <ScrapingVisual />,
    images: ["/projects/3d64rr3p0s-dashboard.png"],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="trabajo" className="section relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          allProjects={projects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      )}

      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Proyectos destacados"
              title={
                <>
                  Sistemas reales,
                  <br />
                  <span className="text-fg-muted">no demos.</span>
                </>
              }
              description="Selección de productos y plataformas que he diseñado, desarrollado y puesto en producción. Cada caso es un problema real convertido en sistema funcional."
            />
            <div className="flex items-center gap-2 text-xs text-fg-subtle">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
               <span>6 casos · código público</span>
            </div>
          </div>
        </FadeIn>

        <Stagger
          delay={0.1}
          stagger={0.08}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <StaggerItem key={project.id} y={24}>
              <ProjectCard
                project={project}
                large={i === 0}
                onSelectProject={(p) => setSelectedProject(p)}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large = false,
  onSelectProject,
}: {
  project: ProjectDetail;
  large?: boolean;
  onSelectProject: (project: ProjectDetail) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-bg-elevated/50 transition-all duration-500 ease-out-expo",
        "hover:border-border-strong hover:bg-bg-card",
        large && "md:col-span-2",
      )}
    >
      {/* Background accent */}
      <div
        className={cn(
          "pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br to-transparent opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100",
          project.accent,
        )}
      />

      <div className={cn("relative grid", large ? "lg:grid-cols-2" : "")}>
        {/* Visual / Preview */}
        <div
          className={cn(
            "relative border-b border-border p-6 md:p-8",
            large && "lg:border-b-0 lg:border-r lg:min-h-[280px]",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-fg-faint">
                {project.number}
              </span>
              <span className="h-1 w-1 rounded-full bg-fg-faint" />
              <span className="label-mono text-[10px]">{project.status}</span>
            </div>
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              <Sparkles className="h-3 w-3" />
              <span>Ver Caso Completo</span>
            </button>
          </div>

          <div className="mt-6 flex h-44 md:h-56 items-center justify-center overflow-hidden rounded-xl border border-border bg-bg/40 p-4">
            {project.visual}
          </div>

          <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-tighter text-fg">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-fg-muted">{project.tagline}</p>
        </div>

        {/* Case study */}
        <div className="relative p-6 md:p-8">
          <div className="grid grid-cols-1 gap-5">
            <CaseRow
              icon={<Target className="h-3.5 w-3.5" />}
              label="Problema"
              text={project.problem}
            />
            <CaseRow
              icon={<Lightbulb className="h-3.5 w-3.5" />}
              label="Solución"
              text={project.solution}
            />
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5">
                    <CaseRow
                      icon={<Code2 className="h-3.5 w-3.5" />}
                      label="Tecnologías"
                      text={project.technologies.join(" · ")}
                    />
                    <CaseRow
                      icon={<Check className="h-3.5 w-3.5" />}
                      label="Resultado"
                      text={project.result}
                      highlight
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

           <div className="mt-6 flex flex-wrap items-center gap-1.5">
            {project.technologies.slice(0, expanded ? project.technologies.length : 4).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {!expanded && project.technologies.length > 4 && (
              <span className="chip">+{project.technologies.length - 4}</span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-xs font-medium"
            >
              Ver repositorio
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline text-xs font-medium text-fg-muted"
              >
                Abrir demo
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function CaseRow({
  icon,
  label,
  text,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3 md:grid-cols-[100px_1fr]">
      <div className="flex items-center gap-1.5 pt-0.5 text-fg-muted">
        {icon}
        <span className="label-mono text-[10px]">{label}</span>
      </div>
      <p
        className={cn(
          "text-[13.5px] leading-relaxed text-pretty",
          highlight ? "text-fg" : "text-fg-muted",
        )}
      >
        {text}
      </p>
    </div>
  );
}

/* ---------- Mini visualizaciones abstractas para cada proyecto ---------- */

function ShiftVisual() {
  const cols = ["L", "M", "X", "J", "V", "S", "D"];
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-7 gap-1.5">
        {cols.map((d, i) => (
          <div key={d} className="text-center font-mono text-[9px] text-fg-faint">
            {d}
          </div>
        ))}
        {Array.from({ length: 21 }).map((_, i) => {
          const states = ["M", "T", "N", "—", "M", "T", "M", "T", "N", "M", "—", "T", "N", "M", "T", "—", "M", "T", "N", "M", "T"];
          const v = states[i];
          return (
            <div
              key={i}
              className={cn(
                "flex h-7 items-center justify-center rounded-md border text-[9px] font-mono",
                v === "—" && "border-border bg-transparent text-fg-faint",
                v === "M" && "border-white/15 bg-white/[0.06] text-fg",
                v === "T" && "border-white/20 bg-white/[0.10] text-fg",
                v === "N" && "border-white/10 bg-white/[0.03] text-fg-muted",
              )}
            >
              {v}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ConceptuVisual() {
  return (
    <div className="relative h-full w-full max-w-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border border-white/20 bg-white/[0.04]" />
          <div className="absolute inset-0 animate-pulse-soft rounded-full border border-white/10" />
          <div className="absolute -inset-6 rounded-full border border-white/[0.06]" />
          <div className="absolute -inset-12 rounded-full border border-white/[0.04]" />
        </div>
      </div>
      {[
        { x: "8%", y: "20%", label: "Input" },
        { x: "78%", y: "20%", label: "Embed" },
        { x: "8%", y: "70%", label: "Agent" },
        { x: "78%", y: "70%", label: "Output" },
      ].map((n, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: n.x, top: n.y }}
        >
          <div className="rounded-md border border-border bg-bg/80 px-2 py-1 text-[10px] font-mono text-fg-muted backdrop-blur">
            {n.label}
          </div>
        </div>
      ))}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 240" preserveAspectRatio="none">
        <path d="M 60 60 Q 200 60 340 60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        <path d="M 60 180 Q 200 180 340 180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        <path d="M 60 60 Q 200 120 340 180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        <path d="M 340 60 Q 200 120 60 180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

function CallVisual() {
  return (
    <div className="relative w-full h-full min-h-[160px] overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-lg group-hover:border-white/20 transition-colors">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        <span className="ml-1 font-mono text-[9px] text-fg-subtle">ebookai.app</span>
      </div>
      <div className="relative h-44 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/ebookai-strategy.png"
          alt="EBookAI Strategy Dashboard"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function DropshipVisual() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-2">
      {Array.from({ length: 6 }).map((_, i) => {
        const trends = ["+24%", "+12%", "+38%", "+8%", "+19%", "+44%"];
        return (
          <div
            key={i}
            className="rounded-lg border border-border bg-bg/40 p-2.5"
          >
            <div className="font-mono text-[9px] text-fg-faint">#PRD-{1000 + i}</div>
            <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-white/40"
                style={{ width: `${30 + i * 12}%` }}
              />
            </div>
            <div className="mt-1.5 font-mono text-[10px] text-emerald-300/80">
              {trends[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ScrapingVisual() {
  return (
    <div className="relative w-full h-full min-h-[160px] overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-lg group-hover:border-white/20 transition-colors">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        <span className="ml-1 font-mono text-[9px] text-rose-400">3d64rr3p0s.vercel.app</span>
      </div>
      <div className="relative h-44 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/3d64rr3p0s-dashboard.png"
          alt="3D64RR3P0S Dashboard"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

function GymbroVisual() {
  return (
    <div className="relative w-full h-full min-h-[160px] overflow-hidden rounded-lg border border-white/10 bg-black/60 shadow-lg group-hover:border-white/20 transition-colors">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-3 py-1.5">
        <span className="h-2 w-2 rounded-full bg-rose-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        <span className="ml-1 font-mono text-[9px] text-emerald-400">gym-bro.appwrite.network</span>
      </div>
      <div className="relative h-44 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projects/gymbro-dashboard.png"
          alt="GymBro Dashboard"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

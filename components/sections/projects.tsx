"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Code2, Cpu, Lightbulb, Target } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  status: "Live" | "In progress" | "Concept" | "Production";
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  accent: string;
  visual: React.ReactNode;
};

const projects: Project[] = [
  {
    id: "weekly-shift",
    number: "01",
    name: "Weekly Shift",
    tagline: "Gestión de horarios y planificación de equipos.",
    status: "Production",
    problem:
      "Equipos pequeños y medianos gestionan turnos en hojas de cálculo, con errores de cobertura, conflictos de disponibilidad y baja visibilidad.",
    solution:
      "Aplicación web con planificación visual, rotaciones automáticas, control de disponibilidad y notificaciones centralizadas para managers y empleados.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Resend"],
    result:
      "Reducción de tiempo de planificación, eliminación de conflictos de turnos y visibilidad en tiempo real de la cobertura del equipo.",
    accent: "from-sky-300/20 via-sky-200/10",
    visual: <ShiftVisual />,
  },
  {
    id: "conceptuai",
    number: "02",
    name: "ConceptuAI",
    tagline: "Soluciones IA aplicadas a empresas.",
    status: "Live",
    problem:
      "Empresas con procesos intensivos en conocimiento buscan integrar IA pero carecen de estrategia técnica, prototipos funcionales y casos de uso claros.",
    solution:
      "Implementaciones a medida con LLMs, embeddings y agentes: clasificación, generación, búsqueda semántica y asistentes internos conectados a sus datos.",
    technologies: ["OpenAI APIs", "DeepSeek", "Next.js", "Python", "PostgreSQL"],
    result:
      "Sistemas IA en producción, integración con datos reales del cliente y workflows automatizados con resultados medibles.",
    accent: "from-violet-300/20 via-violet-200/10",
    visual: <ConceptuVisual />,
  },
  {
    id: "call-assistant",
    number: "03",
    name: "Asistente de llamadas IA",
    tagline: "Atención automática mediante voz.",
    status: "Live",
    problem:
      "Negocios reciben llamadas repetitivas para consultas, citas y gestión de incidencias que saturan al equipo humano y elevan los tiempos de respuesta.",
    solution:
      "Agente de voz conversacional con STT + LLM + TTS, capaz de entender contexto, responder dudas, registrar información y escalar a humanos cuando es necesario.",
    technologies: ["Python", "OpenAI APIs", "WebRTC", "Node.js", "PostgreSQL"],
    result:
      "Atención 24/7, clasificación automática de llamadas y derivación inteligente que libera al equipo de tareas repetitivas.",
    accent: "from-emerald-300/20 via-emerald-200/10",
    visual: <CallVisual />,
  },
  {
    id: "dropshipping-saas",
    number: "04",
    name: "SaaS Dropshipping IA",
    tagline: "Investigación y contenido automatizado.",
    status: "In progress",
    problem:
      "Tiendas de dropshipping dedican horas a investigar productos ganadores, analizar competencia y generar creatividades y copies para anuncios.",
    solution:
      "Plataforma SaaS con pipelines automatizados que combinan scraping, análisis de tendencias, generación de contenido y assets listos para campañas.",
    technologies: ["Crawl4AI", "Python", "OpenAI APIs", "Next.js", "Stripe"],
    result:
      "Aceleración del ciclo de validación de productos y producción de material creativo a escala.",
    accent: "from-amber-300/20 via-amber-200/10",
    visual: <DropshipVisual />,
  },
  {
    id: "real-estate-scraping",
    number: "05",
    name: "Scraping Inmobiliario",
    tagline: "Captación masiva y estructuración de datos.",
    status: "Production",
    problem:
      "Inversoras y agencias inmobiliarias necesitan datos actualizados del mercado: precios, disponibilidad, ubicaciones y tendencias en distintas fuentes.",
    solution:
      "Sistema de crawling multi-fuente con normalización, deduplicación, geolocalización y almacenamiento estructurado listo para análisis y modelos.",
    technologies: ["Crawl4AI", "Python", "PostgreSQL", "n8n", "MongoDB"],
    result:
      "Base de datos centralizada del mercado inmobiliario con actualización continua y datos limpios para toma de decisiones.",
    accent: "from-rose-300/20 via-rose-200/10",
    visual: <ScrapingVisual />,
  },
  {
    id: "business-automation",
    number: "06",
    name: "Automatizaciones Empresariales",
    tagline: "Workflows para eliminar tareas repetitivas.",
    status: "Live",
    problem:
      "Equipos operativos pierden horas en tareas mecánicas: mover datos entre apps, generar reportes, enviar emails y mantener CRMs actualizados.",
    solution:
      "Workflows personalizados con n8n y Make, integrando CRM, email, hojas de cálculo y APIs internas con manejo de errores y monitorización.",
    technologies: ["n8n", "Make", "Resend", "Node.js", "Stripe"],
    result:
      "Horas semanales recuperadas, menos errores manuales y procesos críticos operando de forma autónoma.",
    accent: "from-cyan-300/20 via-cyan-200/10",
    visual: <AutomationVisual />,
  },
];

export function Projects() {
  return (
    <section id="trabajo" className="section relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
              <span>6 proyectos · 4 verticales</span>
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
              <ProjectCard project={project} large={i === 0} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
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
              aria-label="Expandir caso de estudio"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg/50 text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
            >
              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </motion.span>
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
    <div className="flex w-full max-w-xs flex-col items-center gap-3">
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-1 rounded-full bg-white/40"
            style={{ height: `${20 + Math.sin(i * 1.2) * 12 + 8}px`, animationDelay: `${i * 0.1}s` }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i + 5}
            className="w-1 rounded-full bg-white/30"
            style={{
              height: `${10 + Math.abs(Math.sin(i * 0.7)) * 24}px`,
              animation: `pulseSoft ${1 + i * 0.15}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">
        00:42 / live call
      </div>
      <div className="w-full space-y-1.5 rounded-lg border border-border bg-bg/40 p-2.5">
        <div className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/60" />
          <div className="h-1.5 flex-1 rounded-full bg-white/20" />
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
        </div>
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
    <div className="grid w-full max-w-md grid-cols-2 gap-2">
      {[
        { city: "Madrid", count: "1,284", trend: "+12%" },
        { city: "Barcelona", count: "942", trend: "+8%" },
        { city: "Valencia", count: "611", trend: "+22%" },
        { city: "Sevilla", count: "487", trend: "+5%" },
      ].map((c) => (
        <div
          key={c.city}
          className="rounded-lg border border-border bg-bg/40 p-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-fg">{c.city}</span>
            <span className="font-mono text-[9px] text-emerald-300/80">
              {c.trend}
            </span>
          </div>
          <div className="mt-2 font-sans text-2xl font-semibold tracking-tighter text-fg">
            {c.count}
          </div>
          <div className="mt-1 font-mono text-[9px] text-fg-faint">
            listings
          </div>
        </div>
      ))}
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="flex w-full max-w-md items-center gap-2">
      {[
        { label: "Trigger", icon: "⚡" },
        { label: "Process", icon: "→" },
        { label: "Output", icon: "✓" },
      ].map((step, i) => (
        <div key={i} className="flex flex-1 items-center gap-2">
          <div className="flex-1 rounded-lg border border-border bg-bg/40 p-3 text-center">
            <div className="text-base">{step.icon}</div>
            <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-fg-muted">
              {step.label}
            </div>
          </div>
          {i < 2 && (
            <div className="text-fg-faint">
              <Cpu className="h-3.5 w-3.5" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

type Phase = {
  label: string;
  status: "now" | "next" | "later";
  description: string;
  items: { name: string; description: string }[];
};

const phases: Phase[] = [
  {
    label: "Construyendo",
    status: "now",
    description: "En desarrollo activo, prototipos y sistemas en producción.",
    items: [
      {
        name: "Agentes IA especializados",
        description: "Agentes verticales con herramientas, memoria y razonamiento por dominio.",
      },
      {
        name: "SaaS Dropshipping IA",
        description: "Plataforma de investigación de productos y generación de contenido.",
      },
      {
        name: "Automatizaciones empresariales",
        description: "Workflows reutilizables que eliminan tareas repetitivas en PYMES.",
      },
    ],
  },
  {
    label: "Lanzando",
    status: "next",
    description: "Diseñando, validando y preparando para abrir a usuarios reales.",
    items: [
      {
        name: "Sistemas multiagente",
        description: "Coordinación entre agentes para workflows complejos de varios pasos.",
      },
      {
        name: "Herramientas para PYMES",
        description: "Productos SaaS accesibles que integran IA sin requerir equipo técnico.",
      },
    ],
  },
  {
    label: "Escalando",
    status: "later",
    description: "Visión a medio plazo, contribuir y compartir conocimiento.",
    items: [
      {
        name: "Productos Open Source",
        description: "Liberar herramientas, frameworks y agentes para que la comunidad los use.",
      },
    ],
  },
];

const statusMap = {
  now: { dot: "bg-emerald-400", ping: "bg-emerald-400/60", text: "En curso" },
  next: { dot: "bg-white/60", ping: "bg-white/30", text: "Próximo" },
  later: { dot: "bg-white/30", ping: "bg-white/15", text: "Visión" },
};

export function Vision() {
  return (
    <section id="vision" className="section relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-page">
        <FadeIn>
          <SectionHeader
            eyebrow="Visión"
            title={
              <>
                Lo que estoy
                <br />
                <span className="text-fg-muted">construyendo.</span>
              </>
            }
            description="Una hoja de ruta pública de los sistemas, productos y plataformas que estoy llevando del concepto a producción. Transparencia total sobre dirección y prioridades."
          />
        </FadeIn>

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent md:block" />

          <Stagger
            delay={0.1}
            stagger={0.1}
            className="space-y-12 md:space-y-16"
          >
            {phases.map((phase, i) => (
              <StaggerItem key={phase.label} y={24}>
                <PhaseBlock phase={phase} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function PhaseBlock({ phase, index }: { phase: Phase; index: number }) {
  const status = statusMap[phase.status];
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[40px_1fr] md:gap-10">
      {/* Node */}
      <div className="relative hidden md:block">
        <div className="relative flex h-10 w-10 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-border bg-bg-elevated" />
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60">
              <span className={`h-full w-full rounded-full ${status.ping}`} />
            </span>
            <span className={`relative h-2 w-2 rounded-full ${status.dot}`} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-mono">
            0{index + 1} / {phase.label}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated/40 px-2.5 py-0.5 text-[10px] font-mono text-fg-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} />
            {status.text}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-fg-muted text-pretty">
          {phase.description}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {phase.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
              className="group rounded-xl border border-border bg-bg-elevated/40 p-4 transition-all duration-500 hover:border-border-strong hover:bg-bg-card"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-border bg-bg/60">
                  <span className="font-mono text-[9px] text-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-[13.5px] font-semibold text-fg">
                    {item.name}
                  </h4>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-fg-muted text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

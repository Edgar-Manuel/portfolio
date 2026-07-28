"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const stats = [
  { value: "Python", label: "Backend + IA aplicada" },
  { value: "ES", label: "Santander / remoto" },
];

const tags = ["FastAPI", "RAG", "Agentes", "APIs", "Automatización"];

interface HeroProps {
  onOpenRecruiterModal?: () => void;
  onOpenCommandPalette?: () => void;
}

export function Hero({ onOpenRecruiterModal, onOpenCommandPalette }: HeroProps) {
  return (
    <section
      id="top"
      aria-label="Presentación"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 grid-bg mask-radial opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-white/[0.03] via-transparent to-transparent" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-8">
            <FadeIn>
              <div className="eyebrow mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span>Disponible para incorporarme · Santander / remoto en España</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="font-sans text-display-2xl font-semibold tracking-tightest text-fg">
                <span className="block">Edgar</span>
                <span className="block">
                  <span className="gradient-text-bright">Manchón</span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-fg text-pretty">
                Python Backend & AI Developer
                <br />
                <span className="text-fg-muted">abierto a oportunidades.</span>
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="mt-5 max-w-2xl text-base md:text-[17px] leading-relaxed text-fg-muted text-pretty">
                Construyo APIs, pipelines RAG, agentes y automatizaciones.
                Busco mi próximo equipo como Python Backend, AI Integration
                o Automation Developer — en Santander, Cantabria o remoto
                desde España.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenRecruiterModal}
                  className="btn-primary group border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                >
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <span>Modo Reclutador (30s)</span>
                </button>
                <a href="#trabajo" className="btn-primary group">
                  Ver proyectos
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="mailto:emc2mil24@gmail.com"
                  className="btn-ghost group"
                >
                  <Mail className="h-4 w-4" />
                  Contactar
                </a>
                <a
                  href="https://www.linkedin.com/in/edgarmanchon"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-ghost"
                >
                  LinkedIn
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.42}>
              <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-fg-subtle">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-fg-muted" />
                  <span>Python Backend</span>
                </div>
                <span className="hidden h-3 w-px bg-border-strong sm:block" />
                <div>RAG + LLMs</div>
                <span className="hidden h-3 w-px bg-border-strong sm:block" />
                <div>AI Integrations</div>
                <span className="hidden h-3 w-px bg-border-strong sm:block" />
                <div>Open to work</div>
              </div>
            </FadeIn>
          </div>

          {/* Side panel */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.2} y={32}>
              <SidePanel />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function SidePanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent" />
      <div className="relative rounded-2xl border border-border bg-bg-elevated/60 p-6 backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>
          <span className="label-mono">system.overview</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-fg-muted">
              online
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 py-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-xl border border-border bg-bg/40 p-4"
            >
              <div className="font-sans text-3xl font-semibold tracking-tighter text-fg">
                {stat.value}
              </div>
              <div className="mt-1.5 text-[11px] leading-tight text-fg-subtle">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack tags */}
        <div className="border-t border-border pt-5">
          <div className="label-mono mb-3">Foco principal</div>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="chip"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Activity bar */}
        <div className="mt-5 border-t border-border pt-5">
          <div className="flex items-center justify-between">
            <span className="label-mono">Actividad</span>
            <span className="text-[10px] font-mono text-fg-subtle">últ. 30d</span>
          </div>
          <div className="mt-3 flex items-end gap-1 h-10">
            {Array.from({ length: 24 }).map((_, i) => {
              const h = [40, 65, 30, 80, 55, 45, 70, 35, 90, 60, 50, 75, 40, 85, 55, 70, 45, 95, 65, 80, 50, 60, 75, 88];
              return (
                <motion.div
                  key={i}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9 + i * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ height: `${h[i]}%`, transformOrigin: "bottom" }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-white/20 to-white/5"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cpu, GitBranch, Layers, Workflow } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const capabilities = [
  {
    icon: <Bot className="h-4 w-4" />,
    title: "Agentes autónomos",
    description:
      "Agentes que perciben su entorno, planifican, ejecutan herramientas y completan objetivos complejos sin intervención constante.",
  },
  {
    icon: <Layers className="h-4 w-4" />,
    title: "Automatización multiagente",
    description:
      "Coordinación entre varios agentes especializados que colaboran, se pasan contexto y resuelven tareas en paralelo.",
  },
  {
    icon: <BrainCircuit className="h-4 w-4" />,
    title: "Procesos asistidos por IA",
    description:
      "Workflows híbridos donde la IA acelera tareas de investigación, redacción, análisis y decisión dentro de procesos reales.",
  },
  {
    icon: <GitBranch className="h-4 w-4" />,
    title: "Sistemas híbridos humano + IA",
    description:
      "Diseños donde la IA propone y el humano valida, con bucles de feedback que mejoran la calidad y reducen errores.",
  },
];

const models = [
  { name: "OpenAI", role: "Razonamiento · visión · tools" },
  { name: "DeepSeek", role: "Generación · análisis de código" },
  { name: "Claude Code", role: "Desarrollo agéntico" },
  { name: "Hermes Agent", role: "Orquestación autónoma" },
];

export function AIAgents() {
  return (
    <section id="agentes" className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow background */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(180,180,200,0.12), transparent 60%)",
        }}
      />

      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="IA & Agentes"
              title={
                <>
                  Construyendo la próxima generación
                  <br />
                  <span className="text-fg-muted">de sistemas inteligentes.</span>
                </>
              }
              description="Diseño y opero sistemas donde modelos de lenguaje, herramientas y agentes autónomos resuelven problemas de negocio con un enfoque práctico, no teórico."
            />
            <div className="hidden md:flex items-center gap-2 rounded-full border border-border bg-bg-elevated/50 px-3 py-1.5 text-xs text-fg-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Multi-modelo · Multi-agente</span>
            </div>
          </div>
        </FadeIn>

        {/* Architecture diagram */}
        <FadeIn delay={0.15} y={32}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-bg-elevated/50">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 dot-bg opacity-30" />

            {/* Top chrome */}
            <div className="relative flex items-center justify-between border-b border-border bg-bg/40 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>
              <span className="label-mono">agent.architecture.tsx</span>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] text-fg-faint">v0.4.2</span>
              </div>
            </div>

            <div className="relative grid grid-cols-1 gap-px bg-border md:grid-cols-3">
              {/* Input layer */}
              <ArchColumn
                label="Entrada"
                subtitle="Señales del mundo real"
                nodes={[
                  { id: "user", label: "Usuario", sub: "Interfaz" },
                  { id: "api", label: "API / Webhooks", sub: "Eventos" },
                  { id: "data", label: "Datos", sub: "Docs · DB · Web" },
                ]}
              />

              {/* Orchestration */}
              <ArchColumn
                label="Orquestación"
                subtitle="Agentes + razonamiento"
                highlight
                nodes={[
                  { id: "router", label: "Router", sub: "Clasifica intent" },
                  { id: "planner", label: "Planner Agent", sub: "Descompone tareas" },
                  { id: "executor", label: "Executor", sub: "Usa herramientas" },
                ]}
              />

              {/* Models / Tools */}
              <ArchColumn
                label="Modelos & Tools"
                subtitle="LLMs + integraciones"
                nodes={[
                  { id: "openai", label: "OpenAI", sub: "GPT-4o · Vision" },
                  { id: "deepseek", label: "DeepSeek", sub: "Code · Reasoning" },
                  { id: "claude", label: "Claude Code", sub: "Dev agéntico" },
                ]}
              />
            </div>

            {/* Subtle connector arrows between columns */}
            <div className="pointer-events-none absolute inset-y-0 left-1/3 hidden -translate-x-1/2 items-center justify-center md:flex">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-fg-faint"
                aria-hidden
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-2/3 hidden -translate-x-1/2 items-center justify-center md:flex">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-fg-faint"
                aria-hidden
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-border bg-bg/40 px-5 py-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {models.map((m) => (
                  <span key={m.name} className="chip">
                    {m.name}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] text-fg-subtle">
                <Workflow className="h-3 w-3" />
                <span>orchestrator · loop running</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Capabilities */}
        <Stagger
          delay={0.1}
          stagger={0.08}
          className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group h-full rounded-xl border border-border bg-bg-elevated/40 p-5 transition-all duration-500 hover:border-border-strong hover:bg-bg-card">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-bg/50 text-fg-muted transition-colors group-hover:text-fg">
                  {c.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-fg">{c.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-fg-muted text-pretty">
                  {c.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ArchColumn({
  label,
  subtitle,
  nodes,
  highlight = false,
}: {
  label: string;
  subtitle: string;
  nodes: { id: string; label: string; sub: string }[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative bg-bg-elevated/30 p-5 ${highlight ? "bg-bg-card/30" : ""}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="h-3 w-3 text-fg-muted" />
            <span className="label-mono">{label}</span>
          </div>
          <div className="mt-1 text-[11px] text-fg-faint">{subtitle}</div>
        </div>
        <span className="font-mono text-[9px] text-fg-faint">
          {nodes.length} nodes
        </span>
      </div>

      <div className="space-y-2">
        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            className="group/node flex items-center gap-3 rounded-lg border border-border bg-bg/60 p-3 transition-colors hover:border-border-strong"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-bg-elevated">
              <span className="font-mono text-[9px] text-fg-muted">
                {n.id.slice(0, 2)}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[12.5px] font-medium text-fg">{n.label}</div>
              <div className="text-[10px] text-fg-subtle">{n.sub}</div>
            </div>
            <span className="font-mono text-[9px] text-fg-faint">0{i + 1}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

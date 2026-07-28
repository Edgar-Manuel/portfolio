"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  Bot,
  BrainCircuit,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  Zap,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

interface Scenario {
  id: string;
  title: string;
  category: string;
  query: string;
  steps: Array<{
    title: string;
    agent: string;
    action: string;
    output: string;
    durationMs: number;
  }>;
  finalOutput: string;
}

const scenarios: Scenario[] = [
  {
    id: "rag-ingest",
    title: "Pipeline RAG & Búsqueda Híbrida (TubeThink)",
    category: "RAG & Vector Search",
    query: "¿Cómo implementar middleware de rate limiting con Redis y FastAPI?",
    steps: [
      {
        title: "Transcripción & Chunking",
        agent: "IngestionAgent",
        action: "Extrayendo subtítulos de vídeo -> Chunks de 500 tokens con overlap de 50",
        output: "42 chunks creados. Generando embeddings text-embedding-3-small...",
        durationMs: 600,
      },
      {
        title: "Búsqueda Híbrida (BM25 + Cosine)",
        agent: "RetrieverAgent",
        action: "Consulta PostgreSQL pgvector + índice sintáctico full-text search",
        output: "Top 3 chunks recuperados (Similarity score: 0.892, 0.865, 0.841)",
        durationMs: 800,
      },
      {
        title: "Síntesis & Re-ranking",
        agent: "SynthesisAgent",
        action: "Inyectando contexto relevante a GPT-4o con plantilla estricta anti-alucinación",
        output: "Generación de respuesta con código Python verificado y timestamps de vídeo.",
        durationMs: 700,
      },
    ],
    finalOutput: `\`\`\`python
# Solución extraída del vídeo (Timestamp 14:20):
from fastapi import FastAPI, Request, HTTPException
import redis.asyncio as redis

app = FastAPI()
r = redis.Redis(host='localhost', port=6379, db=0)

@app.middleware("http")
async def rate_limit_middleware(request: Request, call_next):
    client_ip = request.client.host
    current = await r.incr(client_ip)
    if current == 1:
        await r.expire(client_ip, 60) # Window of 60s
    if current > 100: # Limit 100 req/min
        raise HTTPException(status_code=429, detail="Too Many Requests")
    return await call_next(request)
\`\`\``,
  },
  {
    id: "multi-agent",
    title: "Orquestación Multi-Agente (Cumple SaaS)",
    category: "Multi-Agent System",
    query: "Planificar regalo de cumpleaños para desarrollador Senior entusiasta de Rust y café.",
    steps: [
      {
        title: "Clasificación e Intención",
        agent: "RouterAgent",
        action: "Análisis del prompt -> Tarea subdividida en 3 agentes paralelos",
        output: "Agentes asignados: ProfileAnalyzer, GiftRecommender, MessageComposer",
        durationMs: 500,
      },
      {
        title: "Búsqueda & Tool Calling",
        agent: "GiftRecommender",
        action: "Invocando tool de scraping de tiendas tech & accesorios de café de especialidad",
        output: "Encontrado: Prensa francesa de precisión de acero + Taza con grabado Rust 'unwrap()'",
        durationMs: 900,
      },
      {
        title: "Redacción y Formato",
        agent: "MessageComposer",
        action: "Generando mensaje personalizado con tono ingenioso y guiño a sintaxis de Rust",
        output: "Draft final redactado y enviado a aprobación del usuario.",
        durationMs: 600,
      },
    ],
    finalOutput: `🎉 **Idea de Regalo Recomendada**: 
1. Molinillo manual de precisión Timemore Chestnut C3 (Café de especialidad).
2. Taza personalizada: \`match day { Birthday => celebrate() }\`.

✉️ **Mensaje Personalizado**:
"¡Feliz cumpleaños! Espero que tu día no lance ningún \`panic!\` y que todos tus proyectos compilen a la primera sin errores de borrow checker. ¡Que disfrutes de un café sin memoria leakeada!"`,
  },
  {
    id: "ebook-forge",
    title: "Pipeline de Generación Editorial (EBookForge AI)",
    category: "Autonomous Pipeline",
    query: "Generar índice y Capítulo 1 de un libro sobre 'Arquitecturas Escalables con FastAPI'",
    steps: [
      {
        title: "Outline & Estructuración",
        agent: "ArchitectAgent",
        action: "Modelando índice de 8 capítulos con progresión lógica de conceptos",
        output: "Estructura aprobada: Fundamentos -> Async -> DB Pools -> Cache -> Deploy",
        durationMs: 700,
      },
      {
        title: "Escritura en Streaming",
        agent: "WriterAgent (Claude)",
        action: "Redactando Capítulo 1 en Markdown estructurado con ejemplos prácticos",
        output: "Capítulo 1 generado: 2,400 palabras con diagramas Mermaid e instrucciones.",
        durationMs: 1000,
      },
    ],
    finalOutput: `# Capítulo 1: Fundamentos del Asincronismo en Python y FastAPI

## Introducción a Event Loops
Python FastAPI se basa en \`asyncio\` y la especificación ASGI (Asynchronous Server Gateway Interface)...

\`\`\`python
import asyncio

async def fetch_data_from_microservice(service_id: str):
    await asyncio.sleep(0.1) # Operación I/O no bloqueante
    return {"status": "ok", "service": service_id}
\`\`\``,
  },
];

export function AIPlayground() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(scenarios[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);
    setCompletedSteps([]);

    let delay = 0;
    selectedScenario.steps.forEach((step, index) => {
      delay += step.durationMs;
      setTimeout(() => {
        setCurrentStepIndex(index);
        setCompletedSteps((prev) => [...prev, index]);
        if (index === selectedScenario.steps.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
          }, 500);
        }
      }, delay);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentStepIndex(-1);
    setCompletedSteps([]);
  };

  return (
    <section id="playground" className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient background glow */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.25), transparent 70%)",
        }}
      />

      <div className="container-page">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Playground Interactivo"
              title={
                <>
                  Simulador de Agentes IA
                  <br />
                  <span className="text-fg-muted">en tiempo real.</span>
                </>
              }
              description="Prueba cómo funcionan los pipelines de RAG, la orquestación multi-agente y la ejecución de herramientas que desarrollo."
            />

            <div className="flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs text-sky-400 font-mono">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Interactive Agent Sandbox</span>
            </div>
          </div>
        </FadeIn>

        {/* Interactive Main Box */}
        <FadeIn delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-bg-elevated/70 shadow-2xl backdrop-blur-xl">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-bg/60 p-4 sm:px-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-fg-subtle mr-2">
                  Seleccionar Escenario:
                </span>
                {scenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setSelectedScenario(sc);
                      resetSimulation();
                    }}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all ${
                      selectedScenario.id === sc.id
                        ? "border border-sky-400/40 bg-sky-400/10 text-sky-300 shadow-sm"
                        : "border border-white/5 bg-white/5 text-fg-muted hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {sc.category}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={runSimulation}
                  disabled={isRunning}
                  className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5 disabled:opacity-50"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>{isRunning ? "Ejecutando..." : "Ejecutar Simulador"}</span>
                </button>
                <button
                  onClick={resetSimulation}
                  className="btn-ghost text-xs p-2 text-fg-subtle hover:text-white"
                  title="Reiniciar"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Prompt & Input Display */}
            <div className="border-b border-white/10 bg-black/40 p-4 sm:px-6">
              <div className="flex items-center gap-2 text-xs font-mono text-fg-subtle">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                <span>USER_PROMPT_INPUT</span>
              </div>
              <div className="mt-1.5 font-mono text-sm text-fg font-medium">
                &quot;{selectedScenario.query}&quot;
              </div>
            </div>

            {/* Simulation Steps & Output Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Execution Steps */}
              <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-white/10 p-6 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-fg-subtle mb-4">
                  Traza de Ejecución del Agente
                </div>

                {selectedScenario.steps.map((step, idx) => {
                  const isActive = isRunning && currentStepIndex === idx;
                  const isCompleted = completedSteps.includes(idx);

                  return (
                    <div
                      key={step.title}
                      className={`relative rounded-2xl border p-4 transition-all duration-300 ${
                        isActive
                          ? "border-sky-400/60 bg-sky-400/10 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                          : isCompleted
                          ? "border-emerald-500/30 bg-emerald-500/5"
                          : "border-white/5 bg-white/[0.02] opacity-60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          ) : isActive ? (
                            <span className="relative flex h-3 w-3 shrink-0">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                              <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-400" />
                            </span>
                          ) : (
                            <span className="h-3 w-3 rounded-full bg-white/10 shrink-0" />
                          )}
                          <span className="font-semibold text-sm text-fg">
                            {step.title}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/5 text-fg-subtle">
                          {step.agent}
                        </span>
                      </div>

                      <p className="mt-2 font-mono text-xs text-fg-muted">
                        {step.action}
                      </p>

                      {(isActive || isCompleted) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-2 pt-2 border-t border-white/10 text-xs font-mono text-emerald-300"
                        >
                          → {step.output}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Output Result Display */}
              <div className="lg:col-span-6 p-6 flex flex-col justify-between bg-black/40">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      Resultado Final Sintetizado
                    </div>
                    {completedSteps.length === selectedScenario.steps.length && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        COMPLETED (100%)
                      </span>
                    )}
                  </div>

                  {completedSteps.length === selectedScenario.steps.length ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-white/10 bg-bg-card/80 p-4 font-mono text-xs text-fg-muted leading-relaxed overflow-x-auto"
                    >
                      <pre className="whitespace-pre-wrap font-mono">
                        {selectedScenario.finalOutput}
                      </pre>
                    </motion.div>
                  ) : (
                    <div className="h-48 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 text-center p-6 text-fg-subtle">
                      <Bot className="h-8 w-8 mb-2 opacity-40 animate-pulse text-sky-400" />
                      <p className="text-xs font-mono">
                        Haz clic en &quot;Ejecutar Simulador&quot; para iniciar la traza del agente en tiempo real.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-fg-subtle border-t border-white/10 pt-4">
                  <span>Pipeline Latency: ~1.8s</span>
                  <span>Model: GPT-4o / Claude 3.5 Sonnet</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

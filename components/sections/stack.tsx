"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, X, Sparkles, Terminal, Check, Copy } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

type Tech = {
  name: string;
  category: string;
  description: string;
  symbol: string;
  codeSnippet?: { filename: string; code: string };
};

const stack: Tech[] = [
  {
    name: "Python",
    category: "Lenguaje",
    description: "Backend asíncrono, IA, procesamiento de datos y automatización.",
    symbol: "Py",
    codeSnippet: {
      filename: "async_pipeline.py",
      code: `import asyncio
from typing import AsyncGenerator

async def process_data_stream(items: list[str]) -> AsyncGenerator[dict, None]:
    for item in items:
        await asyncio.sleep(0.05) # Async I/O simulation
        yield {"item": item, "processed": True, "score": 0.98}`,
    },
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "APIs REST asíncronas de alto rendimiento y backend para IA.",
    symbol: "Fa",
    codeSnippet: {
      filename: "main.py",
      code: `from fastapi import FastAPI, Depends, BackgroundTasks
from pydantic import BaseModel

app = FastAPI(title="AI Agent API", version="1.0.0")

class PromptRequest(BaseModel):
    query: str
    temperature: float = 0.7

@app.post("/v1/agent/run")
async def run_agent(req: PromptRequest):
    return {"status": "success", "result": f"Executed query: {req.query}"}`,
    },
  },
  {
    name: "RAG & Vector DBs",
    category: "IA",
    description: "Embeddings, búsqueda híbrida, pgvector y recuperador semántico.",
    symbol: "Rg",
    codeSnippet: {
      filename: "vector_search.py",
      code: `def hybrid_retrieve(query_vector, text_query, top_k=5):
    # Combine pgvector Cosine Distance with PostgreSQL TSQUERY keyword search
    sql = """
      SELECT id, content, 
             (1 - (embedding <=> %s)) * 0.7 + ts_rank(text_search, to_tsquery(%s)) * 0.3 AS score
      FROM document_chunks
      ORDER BY score DESC LIMIT %s
    """
    return db.execute(sql, (query_vector, text_query, top_k))`,
    },
  },
  {
    name: "Next.js 14",
    category: "Frontend",
    description: "App Router, Server Components, SSR y aplicaciones reactivas.",
    symbol: "N",
    codeSnippet: {
      filename: "page.tsx",
      code: `import { Suspense } from "react";

export default async function DashboardPage() {
  return (
    <main className="container mx-auto p-6">
      <Suspense fallback={<SkeletonLoader />}>
        <AsyncMetricsFeed />
      </Suspense>
    </main>
  );
}`,
    },
  },
  {
    name: "TypeScript",
    category: "Lenguaje",
    description: "Desarrollo con tipado estricto, interfaces sólidas y seguridad.",
    symbol: "TS",
    codeSnippet: {
      filename: "types.ts",
      code: `export type AgentState = "idle" | "planning" | "executing" | "completed" | "error";

export interface AgentPayload<T = unknown> {
  id: string;
  state: AgentState;
  data: T;
  timestamp: number;
}`,
    },
  },
  {
    name: "PostgreSQL",
    category: "Datos",
    description: "Persistencia relacional, índices pgvector y transacciones ACID.",
    symbol: "Pg",
    codeSnippet: {
      filename: "schema.sql",
      code: `CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE document_chunks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    embedding vector(1536),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`,
    },
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Backend escalable para aplicaciones y APIs en tiempo real.",
    symbol: "Nd",
  },
  {
    name: "Supabase",
    category: "Backend",
    description: "Base de datos moderna con autenticación, RLS y suscripciones.",
    symbol: "Sb",
  },
  {
    name: "MongoDB",
    category: "Datos",
    description: "Bases de datos NoSQL para documentos JSON no estructurados.",
    symbol: "Mg",
  },
  {
    name: "Appwrite",
    category: "Backend",
    description: "Backend alternativo para autenticación y base de datos.",
    symbol: "Aw",
  },
  {
    name: "n8n",
    category: "Automatización",
    description: "Automatización avanzada de workflows y webhooks.",
    symbol: "n8",
  },
  {
    name: "Make",
    category: "Automatización",
    description: "Integración rápida entre plataformas y servicios SaaS.",
    symbol: "Mk",
  },
  {
    name: "Crawl4AI",
    category: "Datos",
    description: "Extracción e ingesta inteligente de información web para RAG.",
    symbol: "C4",
  },
  {
    name: "OpenAI APIs",
    category: "IA",
    description: "Integración de GPT-4o, embeddings y tool calling en producción.",
    symbol: "OA",
  },
  {
    name: "DeepSeek",
    category: "IA",
    description: "Modelos de lenguaje avanzados para análisis de código y razonamiento.",
    symbol: "DS",
  },
  {
    name: "Claude Code",
    category: "IA",
    description: "Desarrollo agéntico asistido para acelerar proyectos de código.",
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
    description: "Suscripciones, checkout y monetización de SaaS.",
    symbol: "St",
  },
  {
    name: "Resend",
    category: "Email",
    description: "Infraestructura moderna de correo electrónico transaccional.",
    symbol: "Re",
  },
  {
    name: "Git & GitHub",
    category: "DevOps",
    description: "CI/CD con GitHub Actions, control de versiones y releases.",
    symbol: "Gh",
  },
];

const categories = [
  "Todos",
  "Backend",
  "IA",
  "Lenguaje",
  "Frontend",
  "Datos",
  "Automatización",
  "DevOps",
];

export function Stack() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeCodeTech, setActiveCodeTech] = useState<Tech | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredStack =
    selectedCategory === "Todos"
      ? stack
      : stack.filter((item) => item.category === selectedCategory);

  const handleCopyCode = () => {
    if (activeCodeTech?.codeSnippet) {
      navigator.clipboard.writeText(activeCodeTech.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="stack" className="section relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Code Snippet Modal */}
      {activeCodeTech && activeCodeTech.codeSnippet && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCodeTech(null)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/95 p-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-emerald-400" />
                  <span className="font-semibold text-fg text-sm">
                    {activeCodeTech.name} — Ejemplo en Producción
                  </span>
                </div>
                <button
                  onClick={() => setActiveCodeTech(null)}
                  className="rounded-lg p-1 text-fg-subtle hover:bg-white/10 hover:text-fg"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between bg-black/80 px-4 py-2 rounded-t-xl border border-white/10">
                  <span className="font-mono text-xs text-fg-muted">
                    {activeCodeTech.codeSnippet.filename}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-xs text-fg-subtle hover:text-white"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    <span>{copied ? "Copiado" : "Copiar"}</span>
                  </button>
                </div>
                <pre className="max-h-80 overflow-x-auto rounded-b-xl border border-t-0 border-white/10 bg-black/90 p-4 font-mono text-xs leading-relaxed text-zinc-300">
                  <code>{activeCodeTech.codeSnippet.code}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}

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
              description="Tecnologías seleccionadas por su capacidad de construir productos reales, mantenibles y escalables. Haz clic en las tarjetas con el icono de código para ver snippets reales."
            />

            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                    selectedCategory === c
                      ? "border border-white/20 bg-white/10 text-white shadow-sm"
                      : "border border-white/5 bg-white/[0.02] text-fg-subtle hover:text-fg hover:bg-white/5"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <Stagger
          delay={0.1}
          stagger={0.04}
          className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredStack.map((tech) => (
            <StaggerItem key={tech.name}>
              <TechCard
                tech={tech}
                onSelect={() => {
                  if (tech.codeSnippet) setActiveCodeTech(tech);
                }}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function TechCard({ tech, onSelect }: { tech: Tech; onSelect: () => void }) {
  return (
    <div
      onClick={onSelect}
      className={`group relative h-full overflow-hidden rounded-xl border border-border bg-bg-elevated/40 p-5 transition-all duration-500 ease-out-expo hover:border-border-strong hover:bg-bg-card/80 ${
        tech.codeSnippet ? "cursor-pointer" : ""
      }`}
    >
      <div className="relative flex items-start gap-4">
        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-bg/80">
          <span className="font-mono text-[13px] font-semibold tracking-tight text-fg">
            {tech.symbol}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-fg flex items-center gap-1.5">
              <span>{tech.name}</span>
              {tech.codeSnippet && (
                <Code2 className="h-3.5 w-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
              )}
            </h3>
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

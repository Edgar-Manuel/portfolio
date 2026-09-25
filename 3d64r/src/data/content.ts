// Content mirrored from the main portfolio (../components/sections/*.tsx).

export const CONTACT_EMAIL = "emc2mil24@gmail.com";
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

export const heroHead = {
  plain: "/assets/hero/head.webp",
  shades: "/assets/hero/head-shades.webp",
};

export const screenshots = {
  gymbro: "/projects/gymbro-dashboard.png",
  ebookStrategy: "/projects/ebookai-strategy.png",
  ebookDashboard: "/projects/ebookai-dashboard.png",
  repos: "/projects/3d64rr3p0s-dashboard.png",
};

export interface StackItem {
  name: string;
  category: string;
  description: string;
  symbol: string;
}

export const stack: StackItem[] = [
  { name: "Python", category: "Lenguaje", symbol: "Py", description: "Backend asíncrono, IA, procesamiento de datos y automatización." },
  { name: "FastAPI", category: "Backend", symbol: "Fa", description: "APIs REST asíncronas de alto rendimiento y backend para IA." },
  { name: "RAG & Vector DBs", category: "IA", symbol: "Rg", description: "Embeddings, búsqueda híbrida, pgvector y recuperador semántico." },
  { name: "Next.js 14", category: "Frontend", symbol: "N", description: "App Router, Server Components, SSR y aplicaciones reactivas." },
  { name: "TypeScript", category: "Lenguaje", symbol: "TS", description: "Desarrollo con tipado estricto, interfaces sólidas y seguridad." },
  { name: "PostgreSQL", category: "Datos", symbol: "Pg", description: "Persistencia relacional, índices pgvector y transacciones ACID." },
  { name: "Node.js", category: "Backend", symbol: "Nd", description: "Backend escalable para aplicaciones y APIs en tiempo real." },
  { name: "Supabase", category: "Backend", symbol: "Sb", description: "Base de datos moderna con autenticación, RLS y suscripciones." },
  { name: "MongoDB", category: "Datos", symbol: "Mg", description: "Bases de datos NoSQL para documentos JSON no estructurados." },
  { name: "Appwrite", category: "Backend", symbol: "Aw", description: "Backend alternativo para autenticación y base de datos." },
  { name: "n8n", category: "Automatización", symbol: "n8", description: "Automatización avanzada de workflows y webhooks." },
  { name: "Make", category: "Automatización", symbol: "Mk", description: "Integración rápida entre plataformas y servicios SaaS." },
  { name: "Crawl4AI", category: "Datos", symbol: "C4", description: "Extracción e ingesta inteligente de información web para RAG." },
  { name: "OpenAI APIs", category: "IA", symbol: "OA", description: "Integración de GPT-4o, embeddings y tool calling en producción." },
  { name: "DeepSeek", category: "IA", symbol: "DS", description: "Modelos de lenguaje avanzados para análisis de código y razonamiento." },
  { name: "Claude Code", category: "IA", symbol: "Cc", description: "Desarrollo agéntico asistido para acelerar proyectos de código." },
  { name: "Hermes Agent", category: "IA", symbol: "Hm", description: "Agentes autónomos para automatización avanzada." },
  { name: "Stripe", category: "Pagos", symbol: "St", description: "Suscripciones, checkout y monetización de SaaS." },
  { name: "Resend", category: "Email", symbol: "Re", description: "Infraestructura moderna de correo electrónico transaccional." },
  { name: "Git & GitHub", category: "DevOps", symbol: "Gh", description: "CI/CD con GitHub Actions, control de versiones y releases." },
];

export interface Service {
  number: string;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    number: "01",
    name: "Python Backend",
    description:
      "APIs REST asíncronas de alto rendimiento con FastAPI, integraciones y persistencia en PostgreSQL y Redis.",
  },
  {
    number: "02",
    name: "RAG & LLMs",
    description:
      "Embeddings, búsqueda híbrida y pgvector para dar a los modelos contexto útil, no respuestas aisladas.",
  },
  {
    number: "03",
    name: "Agentes IA",
    description:
      "Agentes que perciben su entorno, planifican, ejecutan herramientas y completan objetivos complejos sin intervención constante.",
  },
  {
    number: "04",
    name: "Automatización",
    description:
      "Workflows con n8n, Make y agentes que eliminan tareas repetitivas en procesos reales de negocio.",
  },
  {
    number: "05",
    name: "Producto Web",
    description:
      "Aplicaciones con Next.js, React y TypeScript, desde PWAs offline-first hasta dashboards: problemas reales antes que demos.",
  },
];

export type Tile =
  | { kind: "image"; src: string; alt: string }
  | { kind: "code"; filename: string; code: string }
  | { kind: "architecture"; steps: Array<{ step: string; title: string; desc: string }> }
  | { kind: "stack"; items: string[] }
  | { kind: "caseStudy"; problem: string; solution: string }
  | { kind: "result"; text: string };

export interface Project {
  number: string;
  name: string;
  tagline: string;
  status: string;
  href: string;
  demo?: string;
  col1: [Tile, Tile];
  col2: Tile;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "gymbro",
    tagline: "PWA de entrenamiento inteligente, 100% offline y open source.",
    status: "MVP",
    href: "https://github.com/Edgar-Manuel/Gymbro-",
    demo: "https://gym-bro.appwrite.network/",
    col1: [
      { kind: "stack", items: ["React 19", "TypeScript", "Vite", "Dexie.js", "Zustand", "shadcn/ui", "Tailwind", "PWA", "Offline-first"] },
      {
        kind: "architecture",
        steps: [
          { step: "Storage Layer", title: "IndexedDB + Dexie.js", desc: "Persistencia local instantánea sin latencia de red" },
          { step: "State Management", title: "Zustand Reactive Store", desc: "Gestión de estado ligero para temporizadores y rutinas activas" },
          { step: "PWA Service Worker", title: "Cache First Strategy", desc: "Instalable como app nativa sin conexión a internet" },
        ],
      },
    ],
    col2: { kind: "image", src: screenshots.gymbro, alt: "Dashboard de gymbro" },
  },
  {
    number: "02",
    name: "tubethink",
    tagline: "Base de conocimiento IA sobre vídeos técnicos.",
    status: "MVP",
    href: "https://github.com/Edgar-Manuel/tubethink",
    col1: [
      { kind: "stack", items: ["Python", "RAG", "PostgreSQL", "Flask", "Embeddings"] },
      {
        kind: "code",
        filename: "rag_service.py",
        code: `from openai import OpenAI
import pgvector

def retrieve_video_context(query: str, top_k: int = 3):
    embedding = get_embedding(query)
    # Hybrid search using pgvector cosine distance + BM25 keyword matching
    chunks = db.query("SELECT content FROM chunks ORDER BY embedding <=> %s LIMIT %s", (embedding, top_k))
    return "\\n".join([c.content for c in chunks])`,
      },
    ],
    col2: {
      kind: "architecture",
      steps: [
        { step: "Ingesta", title: "Whisper & Transcript Extract", desc: "Extracción automática de subtítulos y chunkeado semántico" },
        { step: "Vector Index", title: "pgvector & Embeddings", desc: "Almacenamiento vectorial en PostgreSQL con similitud coseno" },
        { step: "RAG Pipeline", title: "Hybrid Search & LLM", desc: "Generación de respuesta grounded en las transcripciones exactas" },
      ],
    },
  },
  {
    number: "03",
    name: "cumple",
    tagline: "SaaS multi-agente para recordatorios y regalos.",
    status: "MVP",
    href: "https://github.com/Edgar-Manuel/cumple",
    col1: [
      { kind: "stack", items: ["Python", "FastAPI", "PostgreSQL", "Redis", "React"] },
      {
        kind: "code",
        filename: "agent_orchestrator.py",
        code: `from fastapi import FastAPI, BackgroundTasks

app = FastAPI()

@app.post("/api/v1/trigger-reminders")
async def trigger_birthday_agents(user_id: str, background_tasks: BackgroundTasks):
    # Queue multi-agent flow
    background_tasks.add_task(run_agent_pipeline, user_id)
    return {"status": "queued", "user_id": user_id}`,
      },
    ],
    col2: {
      kind: "architecture",
      steps: [
        { step: "Orquestador", title: "FastAPI + Celery Task Queue", desc: "Programación de tareas asíncronas periódicas en background" },
        { step: "Multi-Agente", title: "Planner & Gift Agents", desc: "Agentes autónomos especializados con herramientas dedicadas" },
        { step: "Caching", title: "Redis State Store", desc: "Almacenamiento de contexto e historial de conversación" },
      ],
    },
  },
  {
    number: "04",
    name: "ebookforge-ai",
    tagline: "Pipeline de generación de eBooks con IA.",
    status: "En desarrollo",
    href: "https://github.com/Edgar-Manuel/ebookforge-ai",
    col1: [
      { kind: "image", src: screenshots.ebookDashboard, alt: "Dashboard de ebookforge-ai" },
      {
        kind: "code",
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
    ],
    col2: { kind: "image", src: screenshots.ebookStrategy, alt: "Estrategia editorial en ebookforge-ai" },
  },
  {
    number: "05",
    name: "peluqueria-cool",
    tagline: "Reservas y asistente conversacional para un negocio real.",
    status: "Proyecto cliente",
    href: "https://github.com/Edgar-Manuel/peluqueria-cool",
    col1: [
      { kind: "stack", items: ["JavaScript", "APIs", "Conversational AI", "WhatsApp"] },
      {
        kind: "result",
        text: "Un caso aplicado de automatización conversacional para sustituir procesos repetitivos de atención.",
      },
    ],
    col2: {
      kind: "caseStudy",
      problem: "Un negocio local necesita atender dudas y gestionar citas sin depender de una agenda manual.",
      solution: "Web de reservas con asistente que entiende peticiones en lenguaje natural y ayuda a organizar citas.",
    },
  },
  {
    number: "06",
    name: "3d64rr3p0s",
    tagline: "Directorio de repositorios con chat y análisis IA.",
    status: "Demo pública",
    href: "https://github.com/Edgar-Manuel/3d64rr3p0s",
    demo: "https://3d64rr3p0s.vercel.app/",
    col1: [
      { kind: "stack", items: ["Next.js", "React", "Groq", "GitHub API", "Tailwind"] },
      {
        kind: "caseStudy",
        problem: "Descubrir repositorios útiles requiere filtrar mucha información y revisar manualmente su estado.",
        solution: "Directorio con chat IA, GitHub API, análisis de salud y sincronización automática mediante GitHub Actions.",
      },
    ],
    col2: { kind: "image", src: screenshots.repos, alt: "Dashboard de 3d64rr3p0s" },
  },
];

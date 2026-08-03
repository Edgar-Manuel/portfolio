"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  FileText,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  ArrowRight,
  X,
  Code2,
  Briefcase,
  Layers,
  Bot,
  User,
  Check,
  Copy,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRecruiterModal: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navegación" | "Acciones Rápidas" | "Social & Contacto";
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onOpenRecruiterModal,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"menu" | "terminal">("menu");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<
    Array<{ type: "input" | "output" | "error" | "system"; text: string }>
  >([
    {
      type: "system",
      text: "Edgar Manchón CLI v1.0.0 — Escribe 'help' para ver comandos disponibles.",
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (mode === "menu") inputRef.current?.focus();
        else terminalInputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen, mode]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("emc2mil24@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const items: CommandItem[] = [
    {
      id: "recruiter",
      title: "Modo Reclutador (Resumen en 30s)",
      subtitle: "Vista de alto impacto para hiring managers",
      category: "Acciones Rápidas",
      icon: <Sparkles className="h-4 w-4 text-emerald-400" />,
      action: () => {
        onClose();
        onOpenRecruiterModal();
      },
    },
    {
      id: "terminal-mode",
      title: "Modo Consola / CLI Interactivo",
      subtitle: "Explora el portfolio mediante línea de comandos",
      category: "Acciones Rápidas",
      icon: <Terminal className="h-4 w-4 text-sky-400" />,
      action: () => {
        setMode("terminal");
      },
    },
    {
      id: "projects",
      title: "Ver Proyectos Destacados",
      subtitle: "Gymbro, TubeThink, Cumple SaaS, EBookForge AI...",
      category: "Navegación",
      icon: <Briefcase className="h-4 w-4 text-indigo-400" />,
      action: () => scrollTo("trabajo"),
    },
    {
      id: "agents",
      title: "Arquitectura IA & Agentes",
      subtitle: "Multi-agente, RAG, tool calling, orquestación",
      category: "Navegación",
      icon: <Bot className="h-4 w-4 text-violet-400" />,
      action: () => scrollTo("agentes"),
    },
    {
      id: "stack",
      title: "Tech Stack & Código",
      subtitle: "Python, FastAPI, Next.js, Postgres, Docker",
      category: "Navegación",
      icon: <Layers className="h-4 w-4 text-emerald-400" />,
      action: () => scrollTo("stack"),
    },
    {
      id: "about",
      title: "Sobre Edgar Manchón",
      subtitle: "Perfil, visión e historia profesional",
      category: "Navegación",
      icon: <User className="h-4 w-4 text-amber-400" />,
      action: () => scrollTo("sobre-mi"),
    },
    {
      id: "github-sec",
      title: "Actividad GitHub & Repositorios",
      subtitle: "Commits, repos destacados y estadísticas",
      category: "Navegación",
      icon: <Github className="h-4 w-4 text-fg-muted" />,
      action: () => scrollTo("github"),
    },
    {
      id: "copy-email",
      title: copiedEmail ? "¡Email Copiado!" : "Copiar Email (emc2mil24@gmail.com)",
      subtitle: "Dirección de contacto directo",
      category: "Social & Contacto",
      icon: copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-sky-400" />,
      action: handleCopyEmail,
    },
    {
      id: "linkedin",
      title: "Abrir LinkedIn",
      subtitle: "linkedin.com/in/edgarmanchon",
      category: "Social & Contacto",
      icon: <Linkedin className="h-4 w-4 text-blue-400" />,
      action: () => {
        window.open("https://www.linkedin.com/in/edgarmanchon", "_blank");
        onClose();
      },
    },
    {
      id: "github-link",
      title: "Abrir perfil de GitHub",
      subtitle: "github.com/Edgar-Manuel",
      category: "Social & Contacto",
      icon: <Github className="h-4 w-4 text-fg" />,
      action: () => {
        window.open("https://github.com/Edgar-Manuel", "_blank");
        onClose();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const executeTerminalCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    setTerminalLogs((prev) => [...prev, { type: "input", text: `$ ${cmd}` }]);

    if (!cleanCmd) return;

    if (cleanCmd === "help") {
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: "output",
          text: `Comandos disponibles:\n  help        - Muestra esta ayuda\n  skills      - Muestra el stack técnico principal\n  projects    - Lista los proyectos en producción/MVP\n  contact     - Muestra información de contacto\n  hire        - Abre el resumen rápido para reclutadores\n  oo status   - Muestra el estado de la sesión OOMOL CLI\n  oo llm      - Muestra la configuración del cliente LLM unificado\n  clear       - Limpia la pantalla\n  exit        - Vuelve al menú interactivo`,
        },
      ]);
    } else if (cleanCmd.startsWith("oo")) {
      if (cleanCmd === "oo" || cleanCmd === "oo status" || cleanCmd === "oo auth status") {
        setTerminalLogs((prev) => [
          ...prev,
          {
            type: "output",
            text: `✓ Logged in to oomol.com account Edgar-Manuel\n  - Active account: true\n  - API key status: Valid\n  - Default team: Edgar-Manuel_team\n  - Accounts:\n    * Edgar-Manuel [active] (oomol.com)`,
          },
        ]);
      } else if (cleanCmd === "oo llm" || cleanCmd === "oo llm config") {
        setTerminalLogs((prev) => [
          ...prev,
          {
            type: "output",
            text: `{"apiKey":"api-6e8f376...","baseUrl":"https://llm.oomol.com/v1","chatCompletionsUrl":"https://llm.oomol.com/v1/chat/completions","model":"oomol-chat"}`,
          },
        ]);
      } else if (cleanCmd.includes("skills")) {
        setTerminalLogs((prev) => [
          ...prev,
          {
            type: "output",
            text: `✓ Found 4 skills in OOMOL registry (Universal + Claude Code):\n  • oo (Universal API Router & Connected Accounts)\n  • oo-find-skills (Skill Discovery & Catalog)\n  • oo-create-skill (Skill Authoring & Workflow Adoption)\n  • oo-publish-skill (Registry Publisher)`,
          },
        ]);
      } else {
        setTerminalLogs((prev) => [
          ...prev,
          {
            type: "output",
            text: `OOMOL CLI v1.6.7 (win32-x64)\nCuenta activa: Edgar-Manuel (Edgar-Manuel_team)\nPrueba 'oo status', 'oo llm' o 'oo skills'.`,
          },
        ]);
      }
    } else if (cleanCmd === "skills") {
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: "output",
          text: `STACK TÉCNICO:\n  • Backend: Python, FastAPI, Flask, AsyncIO, REST APIs\n  • IA & RAG: LangChain, LlamaIndex, OpenAI GPT-4o, DeepSeek, Embeddings, Vector DBs\n  • Frontend: Next.js 14, React 19, TypeScript, Tailwind CSS, Framer Motion\n  • DB & Infra: PostgreSQL, Redis, Docker, Git, Vercel`,
        },
      ]);
    } else if (cleanCmd === "projects") {
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: "output",
          text: `PROYECTOS DESTACADOS:\n  1. Gymbro [React 19, Dexie.js, PWA] - App offline-first de entrenamiento inteligente.\n  2. TubeThink [Python, RAG, Postgres] - Ingesta y consulta RAG sobre vídeos técnicos.\n  3. Cumple [FastAPI, Redis, Multi-agent] - SaaS multiagente para recordatorios.\n  4. EBookForge AI [Next.js, Claude] - Generación estructurada de eBooks.\n  5. Peluquería Cool [Conversational AI] - Asistente y agenda en producción local.\n  6. 3D64RR3P0S [Next.js, Groq API] - Directorio de repos con análisis IA.`,
        },
      ]);
    } else if (cleanCmd === "contact") {
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: "output",
          text: `CONTACTO DIRECTO:\n  Email: emc2mil24@gmail.com\n  LinkedIn: https://linkedin.com/in/edgarmanchon\n  GitHub: https://github.com/Edgar-Manuel\n  Ubicación: Santander, Cantabria, España (disponible para remoto/presencial)`,
        },
      ]);
    } else if (cleanCmd === "hire") {
      onClose();
      onOpenRecruiterModal();
    } else if (cleanCmd === "clear") {
      setTerminalLogs([]);
    } else if (cleanCmd === "exit") {
      setMode("menu");
    } else {
      setTerminalLogs((prev) => [
        ...prev,
        {
          type: "error",
          text: `Comando desconocido: '${cleanCmd}'. Escribe 'help' para ver los comandos válidos.`,
        },
      ]);
    }

    setTerminalInput("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-bg-elevated/90 shadow-2xl backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-bg/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-fg-subtle">
                {mode === "menu" ? "paleta-comandos.sh" : "edgar-terminal.cli"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMode(mode === "menu" ? "terminal" : "menu")}
                className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-fg-muted hover:bg-white/10 hover:text-fg transition-colors"
              >
                <Terminal className="h-3.5 w-3.5 text-sky-400" />
                <span>{mode === "menu" ? "CLI" : "Menú"}</span>
              </button>
              <button
                onClick={onClose}
                className="rounded-md p-1 text-fg-subtle hover:bg-white/10 hover:text-fg transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {mode === "menu" ? (
            <div>
              {/* Search Bar Input */}
              <div className="relative flex items-center border-b border-white/10 px-4 py-3">
                <Search className="h-4 w-4 text-fg-subtle" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Buscar comando, sección, tecnología..."
                  className="w-full bg-transparent px-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
                />
                <kbd className="hidden rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-fg-subtle sm:inline-block">
                  ESC
                </kbd>
              </div>

              {/* Items List */}
              <div className="max-h-[360px] overflow-y-auto p-2">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-sm text-fg-subtle">
                    No se encontraron resultados para &quot;{query}&quot;
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
                          isSelected
                            ? "bg-white/10 text-fg shadow-inner"
                            : "text-fg-muted hover:bg-white/5 hover:text-fg"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium text-fg">{item.title}</div>
                            {item.subtitle && (
                              <div className="text-xs text-fg-subtle">
                                {item.subtitle}
                              </div>
                            )}
                          </div>
                        </div>
                        <ArrowRight
                          className={`h-4 w-4 transition-transform ${
                            isSelected
                              ? "translate-x-0 opacity-100 text-emerald-400"
                              : "-translate-x-1 opacity-0"
                          }`}
                        />
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-between border-t border-white/10 bg-bg/40 px-4 py-2 text-[11px] text-fg-subtle">
                <div className="flex items-center gap-3">
                  <span>Navegar: <kbd className="font-mono text-fg-muted">↑</kbd> <kbd className="font-mono text-fg-muted">↓</kbd></span>
                  <span>Seleccionar: <kbd className="font-mono text-fg-muted">↵</kbd></span>
                </div>
                <span>Edgar Manchón — Full-Stack & AI</span>
              </div>
            </div>
          ) : (
            /* Terminal View */
            <div className="p-4">
              <div className="h-[320px] overflow-y-auto rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs leading-relaxed text-emerald-400">
                {terminalLogs.map((log, index) => (
                  <div key={index} className="mb-1.5 whitespace-pre-wrap">
                    {log.type === "input" && (
                      <span className="text-white font-semibold">{log.text}</span>
                    )}
                    {log.type === "output" && (
                      <span className="text-zinc-300">{log.text}</span>
                    )}
                    {log.type === "system" && (
                      <span className="text-sky-400 font-medium">{log.text}</span>
                    )}
                    {log.type === "error" && (
                      <span className="text-rose-400">{log.text}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeTerminalCommand(terminalInput);
                }}
                className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <span className="font-mono text-xs text-emerald-400">$</span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Escribe un comando... ('help', 'skills', 'projects', 'hire')"
                  className="w-full bg-transparent font-mono text-xs text-white placeholder:text-fg-subtle focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-500/20 px-3 py-1 font-mono text-[11px] text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                >
                  Ejecutar
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

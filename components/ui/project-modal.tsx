"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Code2,
  Layers,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Terminal,
} from "lucide-react";

export type ProjectDetail = {
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
  visual?: React.ReactNode;
  images?: string[];
  architectureSteps?: Array<{ step: string; title: string; desc: string }>;
  codeSnippet?: { language: string; filename: string; code: string };
};

interface ProjectModalProps {
  project: ProjectDetail | null;
  allProjects: ProjectDetail[];
  onClose: () => void;
  onSelectProject: (project: ProjectDetail) => void;
}

export function ProjectModal({
  project,
  allProjects,
  onClose,
  onSelectProject,
}: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "code">(
    "overview"
  );
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-bg-elevated/95 shadow-2xl backdrop-blur-2xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-bg/60 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-emerald-400 font-semibold">
                PROYECTO [{project.number}]
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-fg-subtle">
                {project.status}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveTab("overview");
                  onSelectProject(prevProject);
                }}
                className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-fg-subtle hover:bg-white/10 hover:text-fg transition-colors"
                title="Proyecto anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setActiveTab("overview");
                  onSelectProject(nextProject);
                }}
                className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-fg-subtle hover:bg-white/10 hover:text-fg transition-colors"
                title="Siguiente proyecto"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={onClose}
                className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-fg-subtle hover:bg-white/10 hover:text-fg transition-colors ml-2"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-fg">
                  {project.name}
                </h2>
                <p className="mt-1 text-base text-fg-muted">
                  {project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2 px-4"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    <span>Ver Demo en vivo</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost text-xs py-2 px-4"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>Código en GitHub</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-6 flex border-b border-white/10 gap-6 text-sm">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-3 font-medium transition-colors relative ${
                  activeTab === "overview"
                    ? "text-white"
                    : "text-fg-subtle hover:text-fg"
                }`}
              >
                Resumen & Impacto
                {activeTab === "overview" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                  />
                )}
              </button>

              {project.architectureSteps && (
                <button
                  onClick={() => setActiveTab("architecture")}
                  className={`pb-3 font-medium transition-colors relative ${
                    activeTab === "architecture"
                      ? "text-white"
                      : "text-fg-subtle hover:text-fg"
                  }`}
                >
                  Arquitectura del Sistema
                  {activeTab === "architecture" && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                    />
                  )}
                </button>
              )}

              {project.codeSnippet && (
                <button
                  onClick={() => setActiveTab("code")}
                  className={`pb-3 font-medium transition-colors relative ${
                    activeTab === "code"
                      ? "text-white"
                      : "text-fg-subtle hover:text-fg"
                  }`}
                >
                  Código de Muestra
                  {activeTab === "code" && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                    />
                  )}
                </button>
              )}
            </div>

            {/* Tab Contents */}
            <div className="mt-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-white/10 bg-bg/40 p-5">
                      <div className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">
                        El Desafío / Problema
                      </div>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-bg/40 p-5">
                      <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                        La Solución Técnica
                      </div>
                      <p className="text-sm text-fg-muted leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {project.images && project.images.length > 0 && (
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-sky-400">
                        Capturas de Pantalla e Interfaz Real
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {project.images.map((imgSrc, idx) => (
                          <div
                            key={idx}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={imgSrc}
                              alt={`${project.name} screenshot ${idx + 1}`}
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                      Resultados e Impacto
                    </div>
                    <p className="text-sm text-fg leading-relaxed">
                      {project.result}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-fg-subtle mb-3">
                      Tecnologías y Librerías Utilizadas
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="chip text-xs bg-white/5 border-white/10 text-fg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "architecture" && project.architectureSteps && (
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-4">
                    Flujo de Datos y Módulos
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.architectureSteps.map((step, i) => (
                      <div
                        key={step.step}
                        className="relative rounded-2xl border border-white/10 bg-bg/50 p-5"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 font-mono text-xs font-bold text-sky-400">
                            0{i + 1}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-fg-subtle">
                            {step.step}
                          </span>
                        </div>
                        <h4 className="font-semibold text-fg text-sm mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-fg-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "code" && project.codeSnippet && (
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 bg-black/80 px-4 py-2.5 rounded-t-xl">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-emerald-400" />
                      <span className="font-mono text-xs text-fg-muted">
                        {project.codeSnippet.filename}
                      </span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1 text-xs text-fg-subtle hover:text-white transition-colors"
                    >
                      {copiedCode ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Code2 className="h-3.5 w-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="max-h-[320px] overflow-x-auto rounded-b-xl border border-t-0 border-white/10 bg-black/90 p-4 font-mono text-xs leading-relaxed text-zinc-300">
                    <code>{project.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

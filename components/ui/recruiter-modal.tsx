"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  FileText,
  Mail,
  Linkedin,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Bot,
  Zap,
  Code2,
  Layers,
} from "lucide-react";

interface RecruiterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterModal({ isOpen, onClose }: RecruiterModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyContact = () => {
    navigator.clipboard.writeText(
      "Edgar Manchón — emc2mil24@gmail.com — https://linkedin.com/in/edgarmanchon"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-emerald-500/20 bg-bg-elevated/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
        >
          {/* Header Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(52, 211, 153, 0.3), transparent 70%)",
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full border border-white/10 bg-white/5 p-2 text-fg-subtle hover:bg-white/10 hover:text-fg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            <span>MODO RECLUTADOR · RESUMEN RÁPIDO EN 30 SEGUNDOS</span>
          </div>

          <h2 className="mt-4 font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
            Edgar Manchón — <span className="gradient-text-bright">Python & AI Engineer</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-fg-muted leading-relaxed">
            Especializado en la creación de backend con Python (FastAPI/Flask), arquitecturas de agentes IA, pipelines RAG y desarrollo web full-stack de alto rendimiento.
          </p>

          {/* Snapshot Grid */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-bg/50 p-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Clock className="h-4 w-4" />
                <span>Disponibilidad</span>
              </div>
              <div className="mt-2 text-base font-semibold text-fg">Inmediata</div>
              <div className="mt-0.5 text-xs text-fg-subtle">Jornada completa</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-bg/50 p-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400">
                <MapPin className="h-4 w-4" />
                <span>Ubicación</span>
              </div>
              <div className="mt-2 text-base font-semibold text-fg">Santander / Remoto</div>
              <div className="mt-0.5 text-xs text-fg-subtle">Residencia en España</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-bg/50 p-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400">
                <Zap className="h-4 w-4" />
                <span>Perfil Destacado</span>
              </div>
              <div className="mt-2 text-base font-semibold text-fg">Backend & IA</div>
              <div className="mt-0.5 text-xs text-fg-subtle">RAG, Agentes & Web</div>
            </div>
          </div>

          {/* Key Value Proposition */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-fg-subtle mb-3">
              ¿Por qué incorporar a Edgar a tu equipo?
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-fg-muted">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Sistemas IA reales:</strong> No sólo wrappers, sino pipelines RAG con embeddings, evaluación y orquestación multiagente.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Backend Robustos:</strong> APIs asíncronas con FastAPI, Python, PostgreSQL y Redis listas para escalar.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Frontend Moderno:</strong> Aplicaciones fluidas con Next.js 14, React 19, TypeScript y Tailwind CSS.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Autonomía y Entrega:</strong> Mentalidad orientada a producto y resolución de problemas reales de negocio.</span>
              </li>
            </ul>
          </div>

          {/* Core Tech Stack */}
          <div className="mt-6">
            <div className="text-xs font-mono uppercase tracking-wider text-fg-subtle mb-2">
              Stack Tecnológico Principal
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Python 3.12",
                "FastAPI",
                "RAG & Embeddings",
                "LLMs & Tool Calling",
                "Next.js 14",
                "TypeScript",
                "React 19",
                "PostgreSQL",
                "Redis",
                "Docker",
                "PWA / Offline-First",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-fg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Direct Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="mailto:emc2mil24@gmail.com?subject=Contacto%20por%20oportunidad%20laboral%20-%20Edgar%20Manch%C3%B3n"
                className="btn-primary group"
              >
                <Mail className="h-4 w-4" />
                <span>Enviar Email Directo</span>
              </a>
              <button
                onClick={handleCopyContact}
                className="btn-ghost flex items-center gap-2 text-xs"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "¡Datos copiados!" : "Copiar Contacto"}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-fg-subtle">
              <a
                href="https://www.linkedin.com/in/edgarmanchon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/Edgar-Manuel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1 transition-colors"
              >
                <Code2 className="h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#sobre-mi", label: "Perfil" },
  { href: "#trabajo", label: "Trabajo" },
  { href: "#stack", label: "Stack" },
  { href: "#agentes", label: "IA" },
  { href: "#github", label: "GitHub" },
  { href: "#contacto", label: "Contacto" },
];

import { Search, Sparkles } from "lucide-react";

interface NavProps {
  onOpenCommandPalette?: () => void;
  onOpenRecruiterModal?: () => void;
}

export function Nav({ onOpenCommandPalette, onOpenRecruiterModal }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
      )}
    >
      <div
        className={cn(
          "container-page flex h-16 items-center justify-between transition-all duration-500",
          scrolled && "h-14",
        )}
      >
        <AnimatePresence>
          <motion.div
            layout
            className={cn(
              "absolute inset-x-0 top-0 -z-10 mx-auto transition-all duration-500 ease-out-expo",
              scrolled
                ? "h-16 border-b border-border bg-bg/70 backdrop-blur-xl"
                : "h-20 border-b border-transparent bg-transparent",
            )}
            style={{
              maskImage: scrolled
                ? "linear-gradient(to bottom, black 60%, transparent)"
                : "none",
            }}
          />
        </AnimatePresence>

        <Link
          href="/"
          aria-label="Edgar Manchón — inicio"
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-border-strong bg-bg-elevated">
            <span className="font-mono text-[11px] font-semibold tracking-tighter text-fg">
              EM
            </span>
            <span className="absolute inset-0 -z-10 rounded-md bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-fg">
            Edgar Manchón
            <span className="font-mono text-[10px] text-fg-faint">/builder</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-bg-elevated/50 px-1.5 py-1 backdrop-blur-md">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-fg-muted transition-colors duration-300 hover:bg-white/[0.05] hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-fg-muted hover:border-white/20 hover:text-fg transition-all"
            title="Buscar o abrir comandos (Cmd + K)"
          >
            <Search className="h-3.5 w-3.5 text-fg-subtle" />
            <span className="hidden sm:inline">Buscar</span>
            <kbd className="hidden sm:inline-block rounded border border-white/10 bg-black/40 px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle">
              ⌘K
            </kbd>
          </button>

          {/* Recruiter Quick Mode Trigger */}
          <button
            onClick={onOpenRecruiterModal}
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20 transition-all"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Reclutadores (30s)</span>
          </button>

          <a
            href="#contacto"
            className="btn-primary text-xs py-2 px-4"
          >
            Contactar
          </a>
        </div>
      </div>
    </motion.header>
  );
}

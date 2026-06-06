"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const links = [
  {
    label: "GitHub",
    handle: "Edgar-Manuel",
    href: "https://github.com/Edgar-Manuel",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.07c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.24 2.78.12 3.07.74.81 1.18 1.84 1.18 3.1 0 4.44-2.7 5.42-5.26 5.7.41.36.77 1.07.77 2.16v3.2c0 .3.21.66.8.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Edgar Manchón",
    href: "https://linkedin.com/in/edgarmanchon",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "hola@edgarmanchon.com",
    href: "mailto:hola@edgarmanchon.com",
    icon: <Mail className="h-5 w-5" />,
  },
];

export function CTA() {
  return (
    <section id="contacto" className="section relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,200,220,0.1), transparent 60%)",
        }}
      />

      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated/40">
            {/* Background pattern */}
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(255,255,255,0.06), transparent 60%)",
              }}
            />

            <div className="relative grid grid-cols-1 gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Colaboración</span>
                </div>
                <h2 className="mt-6 font-sans text-display-md md:text-display-lg font-semibold tracking-tighter text-fg text-balance">
                  ¿Construimos algo
                  <br />
                  <span className="gradient-text">interesante?</span>
                </h2>
                <p className="mt-6 max-w-lg text-[15px] md:text-base leading-relaxed text-fg-muted text-pretty">
                  Estoy abierto a colaborar en proyectos relacionados con
                  inteligencia artificial, automatización, desarrollo web y
                  nuevos productos digitales.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hola@edgarmanchon.com"
                    className="btn-primary group"
                  >
                    Iniciar conversación
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href="#trabajo" className="btn-ghost">
                    Ver proyectos
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-bg/40 p-4 transition-all duration-500 hover:border-border-strong hover:bg-bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-elevated text-fg-muted transition-colors group-hover:text-fg">
                        {link.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-fg-subtle">
                          {link.label}
                        </div>
                        <div className="text-sm font-medium text-fg">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-fg-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

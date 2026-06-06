"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const traits = [
  { label: "Constructor", description: "Sistemas, no slides." },
  { label: "Autodidacta", description: "Aprendizaje continuo como motor." },
  { label: "Orientado a resultados", description: "Métricas, no opiniones." },
  { label: "Tecnológico", description: "Stack moderno, pragmático." },
  { label: "Práctico", description: "Lo que funciona, lo que escala." },
  { label: "Innovador", description: "IA + automatización + producto." },
  { label: "Curioso", description: "Explorar antes de decidir." },
  { label: "Siempre aprendiendo", description: "Iteración constante." },
];

export function About() {
  return (
    <section id="sobre-mi" className="section relative">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
              <SectionHeader
                eyebrow="Sobre mí"
                title={
                  <>
                    Builder,
                    <br />
                    <span className="text-fg-muted">no espectador.</span>
                  </>
                }
              />
            </FadeIn>
          </div>

          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="space-y-5 text-base md:text-[17px] leading-relaxed text-fg-muted text-pretty">
                <p>
                  Soy un creador de productos digitales apasionado por la
                  inteligencia artificial, la automatización y el desarrollo
                  web.
                </p>
                <p>
                  Mi enfoque consiste en entender problemas reales y construir
                  soluciones funcionales que aporten valor tangible.
                </p>
                <p>
                  Trabajo constantemente explorando nuevas tecnologías,
                  frameworks y agentes inteligentes para mejorar la
                  productividad y acelerar procesos.
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {traits.map((trait, i) => (
                <FadeIn
                  key={trait.label}
                  delay={0.1 + i * 0.05}
                  className="group bg-bg-elevated p-5 transition-colors duration-500 hover:bg-bg-card"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-fg-faint">
                      0{i + 1}
                    </span>
                    <div className="text-sm font-medium text-fg">
                      {trait.label}
                    </div>
                  </div>
                  <div className="mt-2 text-[13px] leading-relaxed text-fg-subtle">
                    {trait.description}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

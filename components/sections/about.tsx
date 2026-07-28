"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeader } from "@/components/ui/section-header";

const traits = [
  { label: "Python backend", description: "APIs, integraciones y persistencia." },
  { label: "RAG + LLMs", description: "Contexto útil, no respuestas aisladas." },
  { label: "Agentes", description: "Sistemas que usan herramientas y actúan." },
  { label: "Producto", description: "Problemas reales antes que demos." },
  { label: "Autodidacta", description: "Aprender construyendo y publicando." },
  { label: "Pragmático", description: "Tecnología al servicio del resultado." },
];

export function About() {
  return (
    <section id="sobre-mi" className="section relative">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeIn>
                <SectionHeader
                eyebrow="Perfil"
                title={
                  <>
                    Backend,
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
                  Soy desarrollador autodidacta en transición desde el sector
                  servicios hacia el desarrollo de software.
                </p>
                <p>
                  Construyo productos con Python, FastAPI, TypeScript y modelos
                  de lenguaje: APIs, pipelines RAG, agentes y automatizaciones.
                </p>
                <p>
                  Busco incorporarme a un equipo como Python Backend, AI
                  Integration o Automation Developer, en Cantabria o remoto
                  desde España.
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

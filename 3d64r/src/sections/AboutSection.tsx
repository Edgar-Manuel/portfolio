import { FadeIn } from "../components/FadeIn";
import { AnimatedText } from "../components/AnimatedText";
import { ContactButton } from "../components/ContactButton";
import { StackBadge } from "../components/StackBadge";

const PARAGRAPH =
  "Construyo productos con Python, FastAPI, TypeScript y modelos de lenguaje: APIs, pipelines RAG, agentes y automatizaciones. Busco incorporarme a un equipo donde pueda aportar en backend Python, integraciones de IA, RAG y automatización, en Santander, Cantabria o remoto desde España. ¿Hablamos de una oportunidad?";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <StackBadge symbol="Py" label="Python" tilt={-8} />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <StackBadge symbol="Rg" label="RAG + LLMs" tilt={6} />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <StackBadge symbol="Fa" label="FastAPI" tilt={7} />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <StackBadge symbol="Ag" label="Agentes IA" tilt={-5} />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              Sobre mí
            </h2>
          </FadeIn>

          <AnimatedText
            text={PARAGRAPH}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
        </div>

        <ContactButton />
      </div>
    </section>
  );
}

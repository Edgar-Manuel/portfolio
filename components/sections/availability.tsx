"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Zap, Building, Globe } from "lucide-react";

const items = [
  {
    icon: <Zap className="h-4 w-4" />,
    label: "Disponibilidad",
    value: "Inmediata · Candidato a Jr/Mid",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Ubicación",
    value: "Santander / Cantabria",
  },
  {
    icon: <Building className="h-4 w-4" />,
    label: "Presencial",
    value: "Cantabria preferente",
  },
  {
    icon: <Globe className="h-4 w-4" />,
    label: "Remoto",
    value: "Cualquier España",
  },
];

export function Availability() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="container-page">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.04] via-emerald-500/[0.02] to-transparent">
            {/* Pulsing dot */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/80">
                Open to work
              </span>
            </div>

            <div className="grid grid-cols-2 gap-px md:grid-cols-4">
              {items.map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-5 md:p-6"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated text-fg-muted">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-fg-subtle">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-fg">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

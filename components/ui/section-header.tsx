"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="h-section max-w-3xl text-balance">{title}</h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg text-fg-muted leading-relaxed text-pretty",
            align === "center" && "text-center",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

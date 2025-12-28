"use client";

import * as React from "react";

import { cn } from "./utils";

export function MagicCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-[12px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-[2px] hover:border-white/20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(106, 92, 255, 0.18), transparent 40%), radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(224, 86, 193, 0.12), transparent 45%)",
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

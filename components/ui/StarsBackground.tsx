"use client";

import { useMemo } from "react";

import { cn } from "./utils";

function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = {
  top: number;
  left: number;
  size: number;
  opacity: number;
};

export function StarsBackground({
  className,
  starCount = 140,
}: {
  className?: string;
  starCount?: number;
}) {
  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(starCount);
    return Array.from({ length: starCount }).map(() => {
      const size = rand() < 0.85 ? 1 : 2;
      return {
        top: rand() * 100,
        left: rand() * 100,
        size,
        opacity: 0.15 + rand() * 0.55,
      };
    });
  }, [starCount]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              boxShadow: "0 0 12px rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(106, 92, 255, 0.15) 0%, transparent 45%), radial-gradient(ellipse at bottom, rgba(224, 86, 193, 0.12) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

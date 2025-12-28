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

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

type ShootingStar = {
  top: number;
  left: number;
  delay: number;
  duration: number;
  length: number;
};

export function ShootingStars({
  className,
  starCount = 14,
}: {
  className?: string;
  starCount?: number;
}) {
  const stars = useMemo<ShootingStar[]>(() => {
    const rand = mulberry32(starCount);
    return Array.from({ length: starCount }).map(() => {
      return {
        top: rand() * 80,
        left: rand() * 100,
        delay: rand() * 6,
        duration: 2.2 + rand() * 2.8,
        length: 140 + rand() * 120,
      };
    });
  }, [starCount]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          <span
            className="block h-px rounded-full bg-gradient-to-r from-white/0 via-white/80 to-white/0"
            style={{
              width: `${s.length}px`,
              transform: "rotate(-35deg)",
              transformOrigin: "left center",
              animation: "bejibun-shooting-star var(--bejibun-shooting-duration) linear infinite",
              "--bejibun-shooting-duration": `${s.duration}s`,
            } as CSSVars}
          />
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-white/90"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.7))",
              transform: "translate(0, -50%) rotate(-35deg)",
              animation: "bejibun-shooting-star-head var(--bejibun-shooting-duration) linear infinite",
              "--bejibun-shooting-duration": `${s.duration}s`,
            } as CSSVars}
          />
        </span>
      ))}

      <style jsx>{`
        @keyframes bejibun-shooting-star {
          0% {
            opacity: 0;
            transform: rotate(-35deg) translateX(0);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: rotate(-35deg) translateX(600px);
          }
        }

        @keyframes bejibun-shooting-star-head {
          0% {
            opacity: 0;
            transform: translate(0, -50%) rotate(-35deg);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(600px, -50%) rotate(-35deg);
          }
        }
      `}</style>
    </div>
  );
}

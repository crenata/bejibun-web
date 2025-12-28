"use client";

import * as React from "react";

type NumberTickerProps = {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  startWhenInView?: boolean;
};

export function NumberTicker({
  value,
  duration = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  startWhenInView = false,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = React.useState(0);
  const rafRef = React.useRef<number | null>(null);
  const elRef = React.useRef<HTMLSpanElement | null>(null);
  const [shouldAnimate, setShouldAnimate] = React.useState(!startWhenInView);

  React.useEffect(() => {
    if (!startWhenInView) return;
    if (shouldAnimate) return;
    if (!elRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(elRef.current);

    return () => {
      observer.disconnect();
    };
  }, [startWhenInView, shouldAnimate]);

  React.useEffect(() => {
    if (!shouldAnimate) return;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayValue(value * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration, shouldAnimate]);

  const formatted = displayValue.toFixed(decimals);

  return (
    <span ref={elRef} className={className}>
      {prefix}
      {decimals === 0 ? Number(formatted).toString() : formatted}
      {suffix}
    </span>
  );
}

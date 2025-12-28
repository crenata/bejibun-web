"use client";

import * as React from "react";

import { cn } from "./utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex animate-gradient bg-gradient-to-r from-brand-pink via-brand-purple to-brand-pink bg-[length:200%_200%] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}

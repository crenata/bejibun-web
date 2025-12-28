"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  title,
  description,
  className,
}: {
  data: TimelineEntry[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const resolvedTitle = useMemo(
    () => title ?? "Changelog from my journey",
    [title]
  );

  const resolvedDescription = useMemo(
    () =>
      description ??
      "I've been working on Aceternity for the past 2 years. Here's a timeline of my journey.",
    [description]
  );

  return (
    <div
      className={cn(
        "w-full bg-black dark:bg-black font-sans lg:px-20",
        className
      )}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 lg:px-8 xl:px-10">
        <h2 className="text-lg lg:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          {resolvedTitle}
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm lg:text-base max-w-sm">
          {resolvedDescription}
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 lg:pt-40 lg:gap-10">
            <div className="sticky flex flex-col z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute lg:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

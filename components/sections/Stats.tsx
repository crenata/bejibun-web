"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";

import { NumberTicker } from "../ui/number-ticker";

const stats = [
    {
        value: "5x",
        label: "Faster Builds",
        description: "Compared to traditional runtimes",
    },
    {
        value: "100%",
        label: "TypeScript",
        description: "Native support included",
    },
    {
        value: "High",
        label: "Throughput Ready",
        description:
            "Designed for high-volume Web3 and API workloads",
    },
    {
        value: "<10ms",
        label: "Cold Start Time",
        description:
            "Optimized startup using Bun's native runtime and bundler",
    },
];

// Background gradient circle ring
function BackgroundGradients() {
    return (
        <>
            {/* Central gradient circle with glow effect */}
            <motion.div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1500px] h-[1500px] z-0 pointer-events-none">
                <div className="absolute inset-[-11.29%]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 2714 2714"
                    >
                        <g filter="url(#filter0_stats)">
                            <circle
                                cx="1357"
                                cy="1357"
                                r="1105"
                                stroke="url(#paint0_stats)"
                                strokeOpacity="0.6"
                                strokeWidth="4"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="2714"
                                id="filter0_stats"
                                width="2714"
                                x="0"
                                y="0"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="15.5464" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                    result="effect1_dropShadow_stats"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="31.0929" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect1_dropShadow_stats"
                                    mode="normal"
                                    result="effect2_dropShadow_stats"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="108.825" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect2_dropShadow_stats"
                                    mode="normal"
                                    result="effect3_dropShadow_stats"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="125" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect3_dropShadow_stats"
                                    mode="normal"
                                    result="effect4_dropShadow_stats"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="125" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect4_dropShadow_stats"
                                    mode="normal"
                                    result="effect5_dropShadow_stats"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="125" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect5_dropShadow_stats"
                                    mode="normal"
                                    result="effect6_dropShadow_stats"
                                />
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect6_dropShadow_stats"
                                    mode="normal"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_stats"
                                x1="1357"
                                x2="1357"
                                y1="250"
                                y2="2464"
                            >
                                <stop stopColor="#403799" />
                                <stop offset="1" stopColor="#6A5CFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </motion.div>
        </>
    );
}

export function Stats() {
    return (
            <section id="stats" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <BackgroundGradients />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div
                        className="relative rounded-3xl overflow-hidden p-12 md:p-16"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(224, 86, 193, 0.05) 0%, rgba(106, 92, 255, 0.05) 100%), rgba(20, 15, 35, 0.6)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-20">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                                    backgroundSize: "40px 40px",
                                }}
                            />
                        </div>

                        <div className="relative z-10">
                            <motion.div
                                className="text-center mb-16"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl mb-4">
                                    Performance That Speaks for Itself
                                </h2>
                                <p className="text-xl text-white/70">
                                    Benchmark results that matter
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        className="text-center"
                                    >
                                        {stat.value === "5x" ? (
                                            <div
                                                className="text-5xl md:text-6xl mb-3 bg-gradient-to-r bg-clip-text text-transparent"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(135deg, #E056C1 0%, #6A5CFF 100%)",
                                                }}
                                            >
                                                <NumberTicker value={5} suffix="x" startWhenInView />
                                            </div>
                                        ) : stat.value === "100%" ? (
                                            <div
                                                className="text-5xl md:text-6xl mb-3 bg-gradient-to-r bg-clip-text text-transparent"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(135deg, #E056C1 0%, #6A5CFF 100%)",
                                                }}
                                            >
                                                <NumberTicker value={100} suffix="%" startWhenInView />
                                            </div>
                                        ) : stat.value === "<10ms" ? (
                                            <div
                                                className="text-5xl md:text-6xl mb-3 bg-gradient-to-r bg-clip-text text-transparent"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(135deg, #E056C1 0%, #6A5CFF 100%)",
                                                }}
                                            >
                                                <span className="mr-1">&lt;</span>
                                                <NumberTicker value={10} suffix="ms" startWhenInView />
                                            </div>
                                        ) : (
                                            <div
                                                className="text-5xl md:text-6xl mb-3 bg-gradient-to-r bg-clip-text text-transparent motion-safe:animate-soft-pulse"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(135deg, #E056C1 0%, #6A5CFF 100%)",
                                                }}
                                            >
                                                {stat.value}
                                            </div>
                                        )}
                                        <div className="text-xl mb-2">
                                            {stat.label}
                                        </div>
                                        <div className="text-sm text-white/60">
                                            {stat.description}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagicCard } from "../ui/magic-card";

// KeyFeatures.tsx
type Feature = {
    title: string;
    description: string;
    descriptionItalic?: string;
};

// Feature card data structure (typed so optional fields are allowed everywhere)
const FEATURES: Record<string, Feature> = {
    databaseORMPower: {
        title: "Database and ORM Power",
        description:
            "Powered by Knex.js with Eloquent-style models, soft deletes, and upcoming transaction support. ",
        descriptionItalic:
            "Making complex schemas easy across PostgreSQL, MySQL, and SQLite.",
    },
    routingMiddleware: {
        title: "Routing and Middleware Mastery",
        description:
            "An advanced, intuitive router with grouping, prefixes, middleware chaining, and full HTTP method, parameter, and guard support—ideal for API-heavy dApps. ",
    },
    validationSecurity: {
        title: "Validation and Security",
        description:
            "Integrates VineJS for powerful validation, plus a rate limiter and Redis-based TTL caching to boost security and performance.",
    },
    storageUtilities: {
        title: "Storage and Utilities",
        description:
            "A dedicated Storage class for file operations, with upcoming cross-disk support—plus CORS, logging, and a scaffolding CLI for easy setup.",
    },
    performance: {
        title: "Performance Edge",
        description:
            "Running on Bun, Bejibun handles concurrent requests with minimal overhead, ideal for real-time Web3 apps like DeFi protocols or NFT marketplaces.",
        // descriptionItalic is optional — add it here if you want:
        // descriptionItalic: "Optional italic line for performance.",
    },
};

// Background gradient blobs
function BackgroundGradients() {
    return (
        <>
            {/* Purple gradient blob - top left */}
            <div className="absolute bg-brand-purple/30 blur-[120px] filter left-[-50px] opacity-30 rounded-full size-[400px] top-0" />

            {/* Pink gradient blob - bottom right */}
            <div className="absolute bg-brand-pink/30 blur-[120px] bottom-0 filter right-[-50px] opacity-30 rounded-full size-[400px]" />
        </>
    );
}

function RevealOnHover({
    children,
    animationSpeed = 3,
    dotSize = 2,
}: {
    children: React.ReactNode;
    animationSpeed?: number;
    dotSize?: number;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative h-full w-full"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={animationSpeed}
                            containerClassName="bg-card"
                            colors={[
                                // brand-pink: #E056C1
                                [224, 86, 193],
                                // brand-purple: #6a5cff
                                [106, 92, 255],
                            ]}
                            dotSize={dotSize}
                        />
                        {/* Theme-safe radial fade */}
                        <div className="absolute inset-0 [mask-image:radial-gradient(320px_at_center,white,transparent)] bg-background/60" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content should render above the canvas */}
            <div className="relative z-10 h-full w-full">{children}</div>
        </div>
    );
}

// Small intro card with gradient text
function IntroCard() {
    return (
        <MagicCard className="relative max-h-[318px] h-full w-full overflow-clip rounded-[12px]">
            <RevealOnHover>
                <div className="absolute left-[32px] top-1/2 -translate-y-1/2 w-full max-w-[220px] lg:max-w-[220px] md:max-w-none md:relative md:left-0 md:top-0 md:translate-y-0 md:p-[32px]">
                    <h2 className="text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] tracking-[-0.8px]">
                        <span className="text-foreground">What makes </span>
                        <span className="bg-gradient-to-b from-brand-pink to-brand-purple bg-clip-text text-transparent">
                            Bejibun{" "}
                        </span>
                        <span className="text-foreground">stand out</span>
                        <span className="text-foreground">?</span>
                    </h2>
                </div>
            </RevealOnHover>
            {/* Card inner shadow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-0.5px_2px_rgba(255,255,255,0.06),inset_0px_-1px_4px_rgba(255,255,255,0.04)]" />
        </MagicCard>
    );
}


// Large feature card (Performance)
function LargeFeatureCard() {
    const { title, description, descriptionItalic } = FEATURES.performance;

    return (
        <MagicCard className="relative rounded-[12px] h-full w-full overflow-clip">
                <div className="flex flex-col justify-between p-[24px] md:p-[32px] h-full">
                    <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] tracking-[-0.8px] text-foreground">
                        {title}
                    </h3>

                    <div className="text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.2px] text-muted-foreground max-w-[480px]">
                        <span>{description}</span>
                        {descriptionItalic ? (
                            <span className="italic">{descriptionItalic}</span>
                        ) : null}
                    </div>
                </div>
            {/* Card inner shadow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-0.5px_2px_rgba(255,255,255,0.06),inset_0px_-1px_4px_rgba(255,255,255,0.04)]" />
        </MagicCard>
    );
}

// Standard feature card
function FeatureCard({ title, description, descriptionItalic }: Feature) {
    return (
        <MagicCard className="relative rounded-[12px] overflow-clip h-full w-full">

                <div className="p-[24px] md:p-[32px] flex flex-col justify-between h-full">
                    <h3 className="text-[22px] md:text-[24px] lg:text-[28px] leading-[1.2] tracking-[-0.8px] text-foreground">
                        {title}
                    </h3>

                    <div className="text-[15px] md:text-[16px] leading-[1.6] tracking-[-0.2px] text-muted-foreground">
                        <span>{description}</span>
                        {descriptionItalic ? (
                            <span className="italic">{descriptionItalic}</span>
                        ) : null}
                    </div>
                </div>
            {/* Card inner shadow */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-0.5px_2px_rgba(255,255,255,0.06),inset_0px_-1px_4px_rgba(255,255,255,0.04)]" />
        </MagicCard>
    );
}

// Main KeyFeatures component
export function KeyFeatures() {
    return (
        <section id="features" className="bg-black relative w-full py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
            <BackgroundGradients />

            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-[16px] md:gap-[20px] lg:gap-[24px]">
                    {/* Row 1, Col 1: Intro Card */}
                    <motion.div
                        className="min-h-[240px] md:min-h-[280px] lg:min-h-[320px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.0 }}
                    >
                        <IntroCard />
                    </motion.div>

                    {/* Row 1, Col 2-3: Large Performance Card */}
                    <motion.div
                        className="md:col-span-1 lg:col-span-2 min-h-[280px] md:min-h-[280px] lg:min-h-[320px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <LargeFeatureCard />
                    </motion.div>

                    {/* Row 2, Col 1-2: Routing Middleware (spans 2 columns) */}
                    <motion.div
                        className="min-h-[240px] md:min-h-[280px] lg:min-h-[320px] md:col-span-2 lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FeatureCard {...FEATURES.routingMiddleware} />
                    </motion.div>

                    {/* Row 2, Col 3: Database ORM */}
                    <motion.div
                        className="min-h-[240px] md:min-h-[280px] lg:min-h-[320px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <FeatureCard {...FEATURES.databaseORMPower} />
                    </motion.div>

                    {/* Row 3, Col 1: Validation Security */}
                    <motion.div
                        className="min-h-[240px] md:min-h-[280px] lg:min-h-[320px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <FeatureCard {...FEATURES.validationSecurity} />
                    </motion.div>

                    {/* Row 3, Col 2-3: Storage Utilities (spans 2 columns) */}
                    <motion.div
                        className="min-h-[240px] md:min-h-[280px] lg:min-h-[320px] md:col-span-2 lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <FeatureCard {...FEATURES.storageUtilities} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

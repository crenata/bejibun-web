import {Sparkles, Info, FilePlus} from "lucide-react";
import {motion} from "framer-motion";
import {AnimatedGradientText} from "@/components/ui/animated-gradient-text";
import {ShootingStars} from "@/components/ui/shooting-stars";
import {StarsBackground} from "@/components/ui/stars-background";
import {AnimatedSpan, Terminal, TypingAnimation} from "@/components/ui/terminal";

// Terminal line data structure with custom icons and colors
const TERMINAL_LINES: Array<{ text: string; className: string }> = [
    {
        text: "✔ Pulling starter kit.",
        className: "text-chart-2",
    },
    {
        text: "✔ Installing dependencies.",
        className: "text-chart-2",
    },
    {
        text: "✔ Cleansing.",
        className: "text-chart-2",
    },
    {
        text: "✔ Setup environment.",
        className: "text-chart-2",
    },
];

const FILE_UPDATES: string[] = [".env"];

// Background gradient blobs
function BackgroundGradients() {
    return (
        <>
            {/* Purple gradient blob - bottom left */}
            <div
                className="absolute bg-brand-purple/30 blur-[120px] filter left-[-50px] opacity-30 rounded-full size-[400px] md:size-[600px] top-[40%] md:top-[556px]"/>

            {/* Pink gradient blob - top right */}
            <div
                className="absolute bg-brand-pink/30 blur-[120px] filter right-[-50px] md:left-[858px] opacity-30 rounded-full size-[400px] md:size-[600px] top-[10%] md:top-[30px]"/>

            {/* Central gradient circle with glow effect - hide on mobile for performance */}
            <div className="hidden md:block absolute left-1/2 size-[2214px] top-[627px] translate-x-[-50%]">
                <div className="absolute inset-[-11.29%]">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 2714 2714"
                    >
                        <g filter="url(#filter0_dddddd_5_542)">
                            <circle
                                cx="1357"
                                cy="1357"
                                r="1105"
                                stroke="url(#paint0_linear_5_542)"
                                strokeOpacity="0.01"
                                strokeWidth="4"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="2714"
                                id="filter0_dddddd_5_542"
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
                                <feOffset/>
                                <feGaussianBlur stdDeviation="15.5464"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                    result="effect1_dropShadow_5_542"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset/>
                                <feGaussianBlur stdDeviation="31.0929"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect1_dropShadow_5_542"
                                    mode="normal"
                                    result="effect2_dropShadow_5_542"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset/>
                                <feGaussianBlur stdDeviation="108.825"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect2_dropShadow_5_542"
                                    mode="normal"
                                    result="effect3_dropShadow_5_542"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset/>
                                <feGaussianBlur stdDeviation="125"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect3_dropShadow_5_542"
                                    mode="normal"
                                    result="effect4_dropShadow_5_542"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset/>
                                <feGaussianBlur stdDeviation="125"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect4_dropShadow_5_542"
                                    mode="normal"
                                    result="effect5_dropShadow_5_542"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset/>
                                <feGaussianBlur stdDeviation="125"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0.415686 0 0 0 0 0.360784 0 0 0 0 1 0 0 0 1 0"
                                />
                                <feBlend
                                    in2="effect5_dropShadow_5_542"
                                    mode="normal"
                                    result="effect6_dropShadow_5_542"
                                />
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect6_dropShadow_5_542"
                                    mode="normal"
                                    result="shape"
                                />
                            </filter>
                            <linearGradient
                                gradientUnits="userSpaceOnUse"
                                id="paint0_linear_5_542"
                                x1="1357"
                                x2="1357"
                                y1="250"
                                y2="2464"
                            >
                                <stop stopColor="#403799"/>
                                <stop offset="1" stopColor="#6A5CFF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
}

// Hero text content - chip, heading, and subheading
function HeroContent() {
    return (
        <motion.div
            className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 pt-[120px] md:pt-[120px] max-w-[1106px] mx-auto w-full"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
        >
            {/* Chip badge */}
            <div
                className="flex gap-[10px] items-center justify-center px-[16px] py-[4px] rounded-[9999px] mb-[24px] md:mb-[32px] relative">
                <div
                    aria-hidden="true"
                    className="absolute border border-brand-purple border-solid inset-0 pointer-events-none rounded-[9999px]"
                />
                <Sparkles
                    className="size-[14px] md:size-[16px] text-brand-pink"
                    strokeWidth={1.33333}
                />
                <AnimatedGradientText
                    className="leading-[28px] md:leading-[36px] text-[14px] md:text-[16px] tracking-[-0.2px]">
                    Bun-Native Framework
                </AnimatedGradientText>
            </div>

            {/* Main heading */}
            <div className="mb-[24px] md:mb-[40px]">
                <h1 className="leading-[1.2] text-[32px] md:text-[48px] lg:text-[64px] font-semibold tracking-[-0.04em]">
                    <span className="text-brand-purple">Fastest</span>
                    <span>{` Framework for `}</span>
                    <span className="text-brand-pink">Web3 Builders</span>
                </h1>
            </div>

            {/* Subheading */}
            <div className="mb-[32px] md:mb-[40px]">
                <p className="leading-[1.6] text-[16px] md:text-[18px] lg:text-[20px] text-muted-foreground tracking-[-0.2px] max-w-[90%] md:max-w-full mx-auto">
                    Modular by design. Powerful out of the box. Ready for
                    blockchain workflows.
                </p>
            </div>

            {/* CTA buttons */}
            <CTAButtons/>
        </motion.div>
    );
}

// CTA buttons
function CTAButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[16px] items-center mb-[48px] md:mb-[60px]">
            {/* Primary button - Get Started */}
            <a
                href="https://docs.bejibun.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-[44px] md:h-[48px] items-center justify-center px-[14px] py-0 rounded-[6px] bg-gradient-to-br from-brand-purple to-brand-pink w-full sm:w-auto transition-transform active:scale-[0.98] hover:scale-[1.02]"
            >
                <div className="flex flex-col items-center overflow-clip px-[6px] py-0">
                    <div
                        className="flex flex-col justify-center leading-[0] not-italic text-center text-nowrap text-white">
                        <p className="leading-[24px] text-[15px] md:text-[16px]">Get Started</p>
                    </div>
                </div>
            </a>

            {/* Secondary button - Buy $BJBN */}
            <a
                href="https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=CQhbNnCGKfDaKXt8uE61i5DrBYJV7NPsCDD9vQgypump"
                target="_blank"
                rel="noreferrer"
                className="bg-black/60 h-[44px] md:h-[48px] relative rounded-[6px] w-full sm:w-auto transition-transform active:scale-[0.98] hover:scale-[1.02]"
            >
                <div
                    className="flex h-full items-center justify-center overflow-clip px-[14px] py-0 relative rounded-[inherit]">
                    <div className="flex flex-col items-center overflow-clip px-[6px] py-0">
                        <div
                            className="flex flex-col justify-center leading-[0] not-italic text-foreground text-center text-nowrap">
                            <p className="leading-[24px] text-[15px] md:text-[16px]">Buy $BJBN</p>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute border border-brand-pink border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_0px_1px_rgba(46,46,46,1)]"
                />
            </a>
        </div>
    );
}

// Terminal/Code preview window
function CodeTerminal() {
    const command = "> bunx @bejibun/cli your-project";
    const typingSpeed = 45;
    const afterTypingDelay = 250;
    const lineStagger = 220;
    const baseDelay = command.length * typingSpeed + afterTypingDelay;

    return (
        <motion.div
            className="relative z-10 mx-auto px-4 md:px-6 pb-[60px] md:pb-[80px] w-full max-w-[1150px]"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.1}}
        >
            <Terminal
                className="max-w-none bg-white/5 border-white/10 text-white shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] rounded-[12px] md:rounded-[16px]"
                sequence={false}
            >
                <TypingAnimation
                    delay={0}
                    duration={typingSpeed}
                    className="text-white text-[13px] md:text-[16px] break-all"
                >
                    {command}
                </TypingAnimation>

                {TERMINAL_LINES.map((line, index) => (
                    <AnimatedSpan
                        key={line.text}
                        delay={baseDelay + index * lineStagger}
                        className={`text-[13px] md:text-[16px] ${line.className}`}
                    >
                        {line.text}
                    </AnimatedSpan>
                ))}

                <AnimatedSpan
                    delay={baseDelay + TERMINAL_LINES.length * lineStagger}
                    className="text-[13px] md:text-[16px] text-brand-purple"
                >
                    <span className="inline-flex items-center">
                        <Info
                            className="size-[14px] md:size-[16px]"
                            strokeWidth={1.33333}
                        />
                        <span className="pl-2">Update 1 file:</span>
                    </span>
                </AnimatedSpan>

                {FILE_UPDATES.map((file, index) => (
                    <AnimatedSpan
                        key={file}
                        delay={baseDelay + (TERMINAL_LINES.length + 1 + index) * lineStagger}
                        className="text-[13px] md:text-[16px] text-brand-purple"
                    >
                        <span className="inline-flex items-center ml-6">
                            <FilePlus
                                className="size-[14px] md:size-[16px]"
                                strokeWidth={1.33333}
                            />
                            <span className="pl-2">{file}</span>
                        </span>
                    </AnimatedSpan>
                ))}

                <TypingAnimation
                    delay={baseDelay + (TERMINAL_LINES.length + 1 + FILE_UPDATES.length) * lineStagger}
                    className="text-muted-foreground text-[13px] md:text-[16px]"
                >
                    Success! Project initialization completed.
                </TypingAnimation>
            </Terminal>
        </motion.div>
    );
}

// Main Hero component
export function Hero() {
    return (
        <section id="hero" className="bg-black relative min-h-screen w-full flex flex-col overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <StarsBackground className="opacity-80"/>
                <ShootingStars className="opacity-60"/>
            </div>
            <BackgroundGradients/>
            <HeroContent/>
            <CodeTerminal/>
        </section>
    );
}
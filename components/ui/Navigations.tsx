"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, BookOpen, Menu, X } from "lucide-react";
import * as React from "react";

import { Button } from "./Button";

export function Navigation() {
    const [open, setOpen] = React.useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const navRef = React.useRef<HTMLElement | null>(null);

    const scrollToId = React.useCallback((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const y = rect.top + window.scrollY;
        const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches;
        const extraOffset = isDesktop || id === "hero" ? 0 : -260;
        const headerOffset = (navRef.current?.getBoundingClientRect().height ?? 120) + extraOffset;
        window.scrollTo({
            top: Math.max(0, y - headerOffset),
            behavior: "smooth",
        });
    }, []);

    const scrollAfterClose = React.useCallback(
        (id: string) => {
            setOpen(false);
            requestAnimationFrame(() => requestAnimationFrame(() => scrollToId(id)));
        },
        [scrollToId]
    );

    React.useEffect(() => {
        const pending = sessionStorage.getItem("bejibun:scrollTo");
        if (pending) {
            sessionStorage.removeItem("bejibun:scrollTo");
            requestAnimationFrame(() => scrollToId(pending));
        }
    }, [scrollToId]);

    const handleLogoClick = () => {
        if (pathname === "/") {
            scrollAfterClose("hero");
            return;
        }
        sessionStorage.setItem("bejibun:scrollTo", "hero");
        router.push("/");
        setOpen(false);
    };

    const handleNavClick = (id: string) => {
        if (pathname !== "/") {
            sessionStorage.setItem("bejibun:scrollTo", id);
            router.push("/");
            setOpen(false);
            return;
        }
        scrollAfterClose(id);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6"
            ref={navRef}
        >
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-4">
                    <div className="flex md:grid-cols-3 items-center md:items-center md:justify-items-stretch justify-between">
                        <button
                            type="button"
                            onClick={handleLogoClick}
                            className="flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 rounded-xl"
                            aria-label="Go to home"
                        >
                            <Image
                                src="/logo.png"
                                alt="Bejibun"
                                width={40}
                                height={40}
                                className="rounded-xl"
                                priority
                            />
                            <span className="text-xl">Bejibun</span>
                        </button>

                        <div className="hidden md:flex items-center justify-center gap-8">
                            <button
                                type="button"
                                onClick={() => handleNavClick("features")}
                                className="cursor-pointer text-white/80 hover:text-white transition-colors"
                            >
                                Features
                            </button>
                            <button
                                type="button"
                                onClick={() => handleNavClick("blockchain")}
                                className="cursor-pointer text-white/80 hover:text-white transition-colors"
                            >
                                Blockchain
                            </button>
                            <button
                                type="button"
                                onClick={() => handleNavClick("quickstart")}
                                className="cursor-pointer text-white/80 hover:text-white transition-colors"
                            >
                                Quick Start
                            </button>
                            <button
                                type="button"
                                onClick={() => handleNavClick("roadmap")}
                                className="cursor-pointer text-white/80 hover:text-white transition-colors"
                            >
                                Roadmap
                            </button>
                        </div>

                        <div className="hidden md:flex items-center justify-end gap-2">
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                            >
                                <a
                                    href="https://github.com/Bejibun-Framework/bejibun"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Open GitHub"
                                >
                                    <Github className="size-5" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                            >
                                <a
                                    href="https://docs.bejibun.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Open documentation"
                                >
                                    <BookOpen className="size-5" />
                                </a>
                            </Button>
                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="md:hidden rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                            onClick={() => setOpen((v) => !v)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <X className="size-5" /> : <Menu className="size-5" />}
                        </Button>
                    </div>

                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-3">
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("features")}
                                        className="cursor-pointer text-left text-white/80 hover:text-white transition-colors"
                                    >
                                        Features
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("blockchain")}
                                        className="cursor-pointer text-left text-white/80 hover:text-white transition-colors"
                                    >
                                        Blockchain
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("quickstart")}
                                        className="cursor-pointer text-left text-white/80 hover:text-white transition-colors"
                                    >
                                        Quick Start
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleNavClick("roadmap")}
                                        className="cursor-pointer text-left text-white/80 hover:text-white transition-colors"
                                    >
                                        Roadmap
                                    </button>

                                    <div className="flex items-center gap-2 pt-2">
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                                        >
                                            <a
                                                href="https://github.com/Bejibun-Framework/bejibun"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Open GitHub"
                                            >
                                                <Github className="size-5" />
                                            </a>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-xl text-white/80 hover:text-white hover:bg-white/10"
                                        >
                                            <a
                                                href="https://docs.bejibun.com"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Open documentation"
                                            >
                                                <BookOpen className="size-5" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
}
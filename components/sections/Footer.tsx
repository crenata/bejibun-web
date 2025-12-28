import Image from "next/image";
import { Github, BookOpen, Send } from "lucide-react";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none transform-gpu"
        style={{
          background: "radial-gradient(circle, #6A5CFF 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Bejibun" width={40} height={40} className="rounded-xl" />
            <div>
              <div className="text-xl">Bejibun</div>
              <p className="text-white/60 text-sm">
                A Bun-native framework for building fast APIs and Web3 backends.
              </p>
            </div>
          </div>

          <nav className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a
              href="https://docs.bejibun.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Docs
            </a>
            <a
              href="https://github.com/crenata/bejibun"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://x.com/bjbnframework"
              target="_blank"
              rel="noreferrer"
              aria-label="Open X"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <div className="opacity-80 hover:opacity-100">
                <Image src="/x-logo.svg" alt="X" width={12} height={12} />
              </div>
              X/Twitter
            </a>
            <a
              href="https://t.me/BejibunPortal"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Telegram"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            {/* <a
              href="#roadmap"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
            >
              <Map className="w-4 h-4" />
              Roadmap
            </a> */}
          </nav>
        </div>

        <div className="pt-10 mt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-white/60">© 2025 Bejibun.</p>
        </div>
      </motion.div>
    </footer>
  );
}
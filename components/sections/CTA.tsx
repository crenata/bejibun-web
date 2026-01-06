import { motion } from "framer-motion";
import { Rocket, Github, BookOpen, Zap } from "lucide-react";
import { Button } from "../ui/Button";
import { NumberTicker } from "../ui/number-ticker";

export function CTA() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient ring - matching Hero/Stats sections */}
      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-0 pointer-events-none opacity-30 transform-gpu">
        <div className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, #6A5CFF 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(224, 86, 193, 0.1) 0%, rgba(106, 92, 255, 0.1) 100%), rgba(20, 15, 35, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(106, 92, 255, 0.5) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4 text-[#6A5CFF]" />
              <span className="text-sm">Production Ready</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Build Faster with Bejibun Framework
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto">
              Framework with Bun-native performance, ship APIs and Web3 apps with a fast & friendly onboarding experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                className="px-8 py-6 text-lg rounded-xl hover:scale-105 transition-transform"
                style={{
                  background: 'linear-gradient(135deg, #E056C1 0%, #6A5CFF 100%)',
                }}
              >
                <a href="https://docs.bejibun.com" target="_blank" rel="noreferrer">
                  <Rocket className="mr-2 size-5" />
                  Get Started
                </a>
              </Button>
              <Button
                asChild
                className="px-8 py-6 text-lg rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:scale-105 transition-transform"
              >
                <a href="https://github.com/Bejibun-Framework/bejibun" target="_blank" rel="noreferrer">
                  <Github className="mr-2 size-5" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                className="px-8 py-6 text-lg rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:scale-105 transition-transform"
              >
                <a href="https://docs.bejibun.com" target="_blank" rel="noreferrer">
                  <BookOpen className="mr-2 size-5" />
                  Docs
                </a>
              </Button>
            </div>

            {/* Quick start command */}
            <div className="bg-[#0A0A0F]/80 backdrop-blur-sm rounded-xl p-4 inline-block border border-white/10">
              <code className="text-white/90 text-sm md:text-base font-mono">
                <span className="text-[#6A5CFF]">$</span> <span className="text-[#E056C1]">bunx</span> @bejibun/cli your-project
              </code>
            </div>

            {/* Stats row */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <div className="text-3xl font-semibold mb-2 bg-gradient-to-r from-[#E056C1] to-[#6A5CFF] bg-clip-text text-transparent">
                  <NumberTicker value={5} suffix="x" />
                </div>
                <div className="text-sm text-white/60">Faster Builds</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-2 bg-gradient-to-r from-[#E056C1] to-[#6A5CFF] bg-clip-text text-transparent">
                  <NumberTicker value={100} suffix="%" />
                </div>
                <div className="text-sm text-white/60">TypeScript</div>
              </div>
              <div>
                <div className="text-3xl font-semibold mb-2 bg-gradient-to-r from-[#E056C1] to-[#6A5CFF] bg-clip-text text-transparent">
                  <span className="mr-1">&lt;</span>
                  <NumberTicker value={10} suffix="ms" />
                </div>
                <div className="text-sm text-white/60">Cold Start Time</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
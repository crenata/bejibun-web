import Image from "next/image";

import { motion } from "framer-motion";
import { Copy, Check, Terminal, Zap } from "lucide-react";
import { ReactNode, useState } from "react";

const steps: Array<{
  title: string;
  description: string;
  code: string;
  language: string;
  extraCode?: string;
  extraLanguage?: string;
}> = [
  {
    title: "Install Bun",
    description: "Install Bun first before proceeding with the next steps",
    code: "curl -fsSL https://bun.sh/install | bash",
    language: "bash",
    extraCode: "powershell -c \"irm bun.sh/install.ps1|iex\"",
    extraLanguage: "powershell",
  },
  {
    title: "Create a project",
    description: "Initialize a new Bejibun app",
    code: "bunx @bejibun/cli your-project\ncd your-project",
    language: "bash",
  },
  {
    title: "Run the dev server",
    description: "Start the development server",
    code: "bun run dev",
    language: "bash",
  },
  {
    title: "Build & deploy",
    description: "Common commands to ship",
    code: "bun run build\nbun run start",
    language: "bash",
  },
];

function CodeBlock({
  code,
  language,
  headerActions,
}: {
  code: string;
  language: string;
  headerActions?: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyLabel = copied ? "Copied!" : "Copy";

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#0A0A0F] border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#6A5CFF]" />
          <span className="text-sm text-white/60">{language}</span>
        </div>
        <div className="flex items-center gap-2">
          {headerActions}
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm cursor-pointer"
            aria-label={copyLabel}
            title={copyLabel}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="hidden sm:inline text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="hidden sm:inline">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Code Content */}
      <div className="p-4">
        <pre className="text-sm text-white/90 font-mono whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

function BunInstallTabs() {
  const [activeOs, setActiveOs] = useState<"macOS/Linux" | "Windows">(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    if (/windows/i.test(ua)) return "Windows";
    return "macOS/Linux";
  });

  const commands: Record<typeof activeOs, { language: string; code: string }> = {
    "macOS/Linux": {
      language: "bash",
      code: "curl -fsSL https://bun.sh/install | bash",
    },
    Windows: {
      language: "powershell",
      code: "powershell -c \"irm bun.sh/install.ps1|iex\"",
    },
  };

  const osTabs: Array<typeof activeOs> = ["macOS/Linux", "Windows"];
  const active = commands[activeOs];

  return (
    <CodeBlock
      code={active.code}
      language={active.language}
      headerActions={
        <div className="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 p-1">
          {osTabs.map((os) => (
            <button
              key={os}
              type="button"
              onClick={() => setActiveOs(os)}
              className={`inline-flex items-center justify-center gap-1.5 h-7 px-2 text-xs rounded-sm transition-colors cursor-pointer min-w-9 ${
                activeOs === os ? "bg-white/10 text-white" : "text-white/60 hover:text-white"
              }`}
              aria-pressed={activeOs === os}
              aria-label={os}
              title={os}
            >
              {os === "Windows" ? (
                <Image
                  src="/windows-logo.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 shrink-0"
                />
              ) : (
                <Terminal className="w-3.5 h-3.5 text-white shrink-0" />
              )}
              <span className="hidden sm:inline">{os}</span>
            </button>
          ))}
        </div>
      }
    />
  );
}

export function Quickstart() {
  return (
    <section id="quickstart" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #6A5CFF 0%, transparent 70%)",
          }}
        />
        <div 
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #E056C1 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-[#6A5CFF]" />
            <span className="text-sm">Get Started in Minutes</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Quick Start Guide
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get up and running with our TypeScript framework in just a few simple steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* Step Card */}
              <div className="h-full">
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold"
                      style={{
                        background: "linear-gradient(135deg, #E056C1 0%, #6A5CFF 100%)",
                      }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{step.title}</h3>
                      <p className="text-sm text-white/60">{step.description}</p>
                    </div>
                  </div>
                </div>
                {step.title === "Install Bun" ? (
                  <BunInstallTabs />
                ) : (
                  <div className="space-y-4">
                    <CodeBlock code={step.code} language={step.language} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/70 mb-4">
            Need help getting started?
          </p>
          <a
            href="https://docs.bejibun.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#6A5CFF] hover:text-[#E056C1] transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            <span>Read the full documentation</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

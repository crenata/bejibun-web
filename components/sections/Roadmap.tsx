"use client";

import React from "react";

import { motion } from "framer-motion";
import { Dot, Check } from "lucide-react";

import { Timeline } from "../ui/timeline";

export function Roadmap() {
  const data = [
    {
      title: "Q4 2025",
      content: (
        <div className="space-y-3">
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Framework foundation & core infrastructure.
          </p>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Installation CLI bunx @bejibun/cli your-project</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Initial Bejibun Framework</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Command</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Router</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Rate Limiter</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Cors <a href="https://github.com/Bejibun-Framework/bejibun-cors/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline"> (@bejibun/cors)</a></p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Redis <a href="https://github.com/Bejibun-Framework/bejibun-redis/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">(@bejibun/redis)</a></p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Cache <a href="https://github.com/Bejibun-Framework/bejibun-cache/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">(@bejibun/cache)</a></p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">x402 Protocol <a href="https://github.com/Bejibun-Framework/bejibun-x402/blob/master/README.md" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">(@bejibun/x402)</a></p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Check className="size-[16px]" /><p className="text-white/90 text-sm">Listing <a href="https://www.coingecko.com/en/coins/bejibun" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">Coingecko</a></p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Check className="size-[16px]" />
                  <span className="text-white/90 text-sm">Storage:</span>
                </div>

                <div className="flex items-center gap-2 pl-6 text-sm text-white/80">
                  <Check className="size-[16px]" />
                  <span>Local</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ),
    },
    {
      title: "Q1 2026",
      content: (
        <div className="space-y-3">
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Platform growth & essential services.
          </p>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Website Phase 1</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">SEO</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Authentication</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Mail Service</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Queue</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white/90 text-sm">Job Dispatch / Background Tasks: <br></br>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> Job Worker</div></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q2 2026",
      content: (
        <div className="space-y-3">
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Scalability, scheduling & storage expansion.
          </p>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Website Phase 2</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Scheduler / Cronjob</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Database Transaction</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white/90 text-sm">Cache: <br></br>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> Memcached </div></div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white/90 text-sm">Storage: <br></br>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> Disk Management </div>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> S3 <a href="https://bun.com/docs/runtime/s3" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:underline">Read Docs</a> </div>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> Cross Disks </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q3 2026",
      content: (
        <div className="space-y-3">
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Testing, real-time features & database expansion.
          </p>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Unit Test</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Websocket</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Model Relations</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <div className="text-white/90 text-sm">Database Supports: <br></br>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> Mysql </div>
                <div className="flex items-center gap-[2px]"><Dot className="size-[16px]" /> MongoDB </div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Listing Coinmarketcap</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q4 2026",
      content: (
        <div className="space-y-3">
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            Performance optimization & ecosystem maturity.
          </p>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Build own ORM based on Bun SQL</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Token Utility</p>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-white/90 text-sm">Listing CEX</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="roadmap" className="bg-black relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Timeline
          className="bg-black dark:bg-black"
          title="Roadmap"
          description="A high-level view of what we're building next."
          data={data}
        />
      </motion.div>
    </section>
  );
}

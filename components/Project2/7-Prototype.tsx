// components/Project2/7-prototypes.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

export default function PrototypesCamping() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        <SectionHeader
          kicker="LOW FIDELITY TESTING"
          title="Prototypes"
          align="center"
        />

        {/* 4-col: [img | caption | img | caption] */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start"
        >
          {/* --- Left image --- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-1"
          >
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/project2-images/proto-left.png"
                alt="Prototype A"
                width={1200}
                height={1800}
                className="h-[60vh] w-full object-cover rounded-xl block"
                priority
              />
            </div>
          </motion.div>

          {/* --- Left caption --- */}
          <motion.aside
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-1 self-stretch"
          >
            <div className="h-full rounded-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-md p-6 flex flex-col justify-between">
              <div>
                <p className="accent-text text-[11px] tracking-[0.22em] mb-2">PROTOTYPE A</p>
                <h3 className="text-xl font-semibold">Guided Gear Selection</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Tests a step-by-step helper to narrow choices by trip type, duration,
                  and experience level—reducing choice overload.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-white/70 text-sm">
                <li>• Fewer decision points per screen</li>
                <li>• Clear progress &amp; backtrack</li>
                <li>• Human, non-jargony copy</li>
              </ul>
            </div>
          </motion.aside>

          {/* --- Right image --- */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-1"
          >
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/project2-images/proto-right.png"
                alt="Prototype B"
                width={1200}
                height={1800}
                className="h-[60vh] w-full object-cover rounded-xl block"
              />
            </div>
          </motion.div>

          {/* --- Right caption --- */}
          <motion.aside
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="md:col-span-1 self-stretch"
          >
            <div className="h-full rounded-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-md p-6 flex flex-col justify-between">
              <div>
                <p className="accent-text text-[11px] tracking-[0.22em] mb-2">PROTOTYPE B</p>
                <h3 className="text-xl font-semibold">Curated Bundles</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Tests pre-built kits for “First-Time Camper,” “Weekend Getaway,” and
                  “Backpacking Lite” to boost confidence and speed.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-white/70 text-sm">
                <li>• Clear value &amp; fewer choices</li>
                <li>• Easy compare/modify bundles</li>
                <li>• Add-ons surfaced contextually</li>
              </ul>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}

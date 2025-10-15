// components/Project2/7-prototypes.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

export default function PrototypesCamping() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36 lg:mt-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <SectionHeader
          kicker="LOW FIDELITY TESTING"
          title="Prototypes"
          align="center"
        />

        {/* Stack on mobile; side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* ========== BUBBLE A ========== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:mt-24 rounded-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-4 md:p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start lg:items-center">
              
              {/* --- MOBILE TITLES ABOVE IMAGE ONLY --- */}
              <div className="lg:hidden mb-3 order-1">
                <p className="text-[11px] tracking-[0.22em] text-emerald-300">
                  HOMEPAGE PROTOTYPE
                </p>
                <h3 className="text-xl font-semibold text-white">
                  Guided Gear Selection
                </h3>
              </div>

              {/* IMAGE */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full aspect-[3/4] lg:h-[40vh]">
                  <Image
                    src="/images/project2-images/proto-home.png"
                    alt="Homepage Prototype"
                    fill
                    className="rounded-lg object-contain"
                    priority
                  />
                </div>
              </div>

              {/* CONTENT: desktop titles + paragraph + bullets
                  -> after image on mobile (order-3), beside image on desktop (lg:order-2) */}
              <aside className="order-3 lg:order-2 flex flex-col justify-between">
                {/* DESKTOP TITLES */}
                <div className="hidden lg:block">
                  <p className="accent-text text-[11px] tracking-[0.22em] mb-1 text-emerald-300">
                    HOMEPAGE PROTOTYPE
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Guided Gear Selection
                  </h3>
                </div>

                <p className="text-white/80 leading-snug mt-2 lg:mt-0">
                  Tests a step-by-step helper to narrow choices by trip type,
                  duration, and experience level—reducing choice overload.
                </p>
                <ul className="mt-2 lg:mt-6 lg:space-y-2 text-white/70 text-sm">
                  <li>• Fewer decision points per screen</li>
                  <li>• Clear progress &amp; backtrack</li>
                  <li>• Human, non-jargony copy</li>
                </ul>
              </aside>
            </div>
          </motion.div>

          {/* ========== BUBBLE B ========== */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:mt-24 rounded-2xl ring-1 ring-white/10 bg-white/[0.04] backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-4 md:p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start lg:items-center">

              {/* --- MOBILE TITLES ABOVE IMAGE ONLY --- */}
              <div className="lg:hidden mb-3 order-1">
                <p className="text-[11px] tracking-[0.22em] text-emerald-300">
                  PRODUCT PAGE PROTOTYPE
                </p>
                <h3 className="text-xl font-semibold text-white">
                  Curated Bundles
                </h3>
              </div>

              {/* IMAGE */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full aspect-[3/4] lg:h-[40vh]">
                  <Image
                    src="/images/project2-images/proto-bundle.png"
                    alt="Product Page Prototype"
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>

              {/* CONTENT: desktop titles + paragraph + bullets */}
              <aside className="order-3 lg:order-2 flex flex-col justify-between">
                {/* DESKTOP TITLES */}
                <div className="hidden lg:block">
                  <p className="accent-text text-[11px] tracking-[0.22em] mb-1 text-emerald-300">
                    PRODUCT PAGE PROTOTYPE
                  </p>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Curated Bundles
                  </h3>
                </div>

                <p className="text-white/80 leading-snug mt-2 lg:mt-0">
                  Tests pre-built kits for “First-Time Camper,” “Weekend
                  Getaway,” and “Backpacking Lite” to boost confidence and speed.
                </p>
                <ul className="mt-2 lg:mt-6 lg:space-y-2 text-white/70 text-sm">
                  <li>• Clear value &amp; fewer choices</li>
                  <li>• Easy compare/modify bundles</li>
                  <li>• Add-ons surfaced contextually</li>
                </ul>
              </aside>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.6, ease: "easeOut" },
  },
});

export default function Iterations() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader
          kicker="FINDINGS → REFINEMENTS"
          title="Iterations Based on Insights"
          align="center"
        />

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* LEFT: Homepage */}
          <motion.article
            variants={item(prefersReduced)}
            className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-7 md:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <p className="accent-text text-[12px] tracking-[0.22em]">HOMEPAGE</p>
            <h3 className="mt-2 text-2xl font-semibold">Added grid to Collections</h3>
            <p className="mt-2 text-white/80">
              Quicker scanning and variety at a glance for beginners.
            </p>

            <div className="mt-6 grid gap-6">
              {/* Before */}
              <div>
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2">
                  <Image
                    src="/images/project2-images/home-before.png"
                    alt="Homepage before usability study"
                    width={1400}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="mt-2 text-xs text-white/65">Before Usability Study</p>
              </div>

              {/* After */}
              <div>
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2">
                  <Image
                    src="/images/project2-images/home-after.png"
                    alt="Homepage after usability study with collections grid"
                    width={1400}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="mt-2 text-xs text-white/65">After Usability Study</p>
              </div>
            </div>
          </motion.article>

          {/* RIGHT: Check Out */}
          <motion.article
            variants={item(prefersReduced)}
            className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-7 md:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <p className="accent-text text-[12px] tracking-[0.22em]">CHECK OUT SCREEN</p>
            <h3 className="mt-2 text-2xl font-semibold">Reduced hesitation with clearer details</h3>
            <p className="mt-2 text-white/80">
              Quantity adjuster, return policy, tax/shipping info to reinforce trust.
            </p>

            <div className="mt-6 grid gap-6">
              {/* Before */}
              <div>
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2">
                  <Image
                    src="/images/project2-images/checkout-before.png"
                    alt="Checkout before usability study"
                    width={1400}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="mt-2 text-xs text-white/65">Before Usability Study</p>
              </div>

              {/* After */}
              <div>
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2">
                  <Image
                    src="/images/project2-images/checkout-after.png"
                    alt="Checkout after usability study with clearer details"
                    width={1400}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <p className="mt-2 text-xs text-white/65">After Usability Study</p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

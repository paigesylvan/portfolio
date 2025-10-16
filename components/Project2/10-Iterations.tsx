"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.5, ease: "easeOut" },
  },
});

export default function Iterations() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 md:px-6 text-white mt-24 lg:mt-0 pb-12">
      <div className="mx-auto w-full max-w-[900px]">
        <SectionHeader
          kicker="FINDINGS → REFINEMENTS"
          title="Iterations Based on Insights"
          align="center"
        />

        <motion.div
          className="mt-8 md:mt-10 grid gap-6 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* ---------- HOMEPAGE CARD ---------- */}
          <motion.article
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <p className="accent-text text-[10px] tracking-[0.22em] text-emerald-400 font-semibold">
              HOMEPAGE
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-semibold">
              Added grid to Collections
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-snug">
              Added grid to Collections for quicker scanning and variety at a glance.
            </p>

            {/* Side-by-side BEFORE / AFTER */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
              <figure className="flex flex-col">
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
                  <Image
                    src="/images/project2-images/home-before.png"
                    alt="Homepage before usability study"
                    width={1400}
                    height={900}
                    className="block w-full h-auto align-top"
                    priority
                  />
                </div>
                <figcaption className="mt-2 text-[10px] text-white/65 text-center">
                  Before Usability Study
                </figcaption>
              </figure>

              <figure className="flex flex-col">
                <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
                  <Image
                    src="/images/project2-images/home-after.png"
                    alt="Homepage after usability study with collections grid"
                    width={1400}
                    height={900}
                    className="block w-full h-auto align-top"
                  />
                </div>
                <figcaption className="mt-2 text-[10px] text-white/65 text-center">
                  After Usability Study
                </figcaption>
              </figure>
            </div>
          </motion.article>

          {/* ---------- CHECKOUT CARD ---------- */}
          <motion.article
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <p className="accent-text text-[10px] tracking-[0.22em] text-emerald-400 font-semibold">
              CHECKOUT SCREEN
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-semibold">
              Reduced hesitation with clearer details
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-snug">
              Added quantity adjuster, return policy, and tax/shipping info to reduce hesitation and reinforce trust.
            </p>

            <div className="mt-4 grid gap-4">
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
                <p className="mt-2 text-[10px] text-white/65">
                  Before Usability Study
                </p>
              </div>

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
                <p className="mt-2 text-[10px] text-white/65">
                  After Usability Study
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

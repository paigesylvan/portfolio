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
    <section className="flex flex-col items-center justify-center px-4 md:px-4 text-white mt-20 lg:mt-36 lg:mt-0 pb-8 md:pb-10">
      <div className="mx-auto w-full max-w-[780px] md:max-w-[820px]">
        <SectionHeader
          kicker="FINDINGS → REFINEMENTS"
          title="Iterations Based on Insights"
          align="center"
        />

        <motion.div
          className="mt-6 md:mt-8 grid gap-4 md:gap-6 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* ---------- HOMEPAGE CARD ---------- */}
          <motion.article
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-4 md:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[9px] tracking-[0.22em] text-emerald-400 font-semibold">
              HOMEPAGE
            </p>
            <h3 className="mt-2 text-base md:text-base font-semibold leading-snug">
              Added grid to Collections
            </h3>
            <p className="mt-2 text-[10px] md:text-base text-white/80 leading-snug">
              Added grid to Collections for quicker scanning and variety at a glance.
            </p>

            {/* Side-by-side BEFORE / AFTER */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
              <figure className="flex flex-col">
                <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
                  <Image
                    src="/images/project2-images/home-before.png"
                    alt="Homepage before usability study"
                    width={900}
                    height={600}
                    className="block w-full h-auto align-top"
                    priority
                  />
                </div>
                <figcaption className="mt-1 text-[9px] text-white/60 text-center">
                  Before Usability Study
                </figcaption>
              </figure>

              <figure className="flex flex-col">
                <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
                  <Image
                    src="/images/project2-images/home-after.png"
                    alt="Homepage after usability study with collections grid"
                    width={900}
                    height={600}
                    className="block w-full h-auto align-top"
                  />
                </div>
                <figcaption className="mt-1 text-[9px] text-white/60 text-center">
                  After Usability Study
                </figcaption>
              </figure>
            </div>
          </motion.article>

          {/* ---------- CHECKOUT CARD ---------- */}
          <motion.article
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-4 md:p-4 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[9px] tracking-[0.22em] text-emerald-400 font-semibold">
              CHECKOUT SCREEN
            </p>
            <h3 className="mt-2 text-base md:text-lg font-semibold leading-snug">
              Reduced hesitation with clearer details
            </h3>
            <p className="mt-2 text-[10px] md:text-[11px] text-white/80 leading-snug">
              Added quantity adjuster, return policy, and tax/shipping info to reduce hesitation and reinforce trust.
            </p>

            <div className="mt-3 grid gap-3">
              <div>
                <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-1.5">
                  <Image
                    src="/images/project2-images/checkout-before.png"
                    alt="Checkout before usability study"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <p className="mt-1 text-[9px] text-white/60">Before Usability Study</p>
              </div>

              <div>
                <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] p-1.5">
                  <Image
                    src="/images/project2-images/checkout-after.png"
                    alt="Checkout after usability study with clearer details"
                    width={900}
                    height={600}
                    className="w-full h-auto rounded-md"
                  />
                </div>
                <p className="mt-1 text-[9px] text-white/60">After Usability Study</p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

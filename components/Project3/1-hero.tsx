"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroDryCleaner() {
  const prefersReduced = useReducedMotion();

  const parent = (stagger = 0.12) => ({
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: stagger } },
  });

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReduced ? 0 : 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36 lg:mt-0 bg-gradient-to-b from-[#0B0D14] to-[#0F1220]">
      <motion.div
        className="w-full max-w-[1200px] mx-auto"
        variants={parent()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Eyebrow + Title (matches your SectionHeader pattern) */}
        <div className="mb-10">
          <SectionHeader
            kicker="CASE STUDY"
            title={
              <>
                How Clear Design Improves User
                <br className="hidden md:block" />
                Trust for a Local Dry Cleaner
              </>
            }
            align="center"
          />
        </div>

        {/* Mockup with soft shadow “puddle” */}
        <div className="relative flex justify-center items-center">
          {/* Blur shadow */}
          <motion.div
            variants={item}
            className="pointer-events-none absolute left-1/2 bottom-[-20px] -translate-x-1/2 w-[70%] max-w-[720px] h-[120px] bg-black/80 blur-[100px] rounded-full opacity-70"
          />

          {/* Desktop mockup */}
          <motion.div variants={item} className="relative z-10">
            <Image
              src="/images/project3-images/desktop.png"
              alt="Dry cleaner homepage on desktop"
              width={2200}
              height={1400}
              priority
              className="w-full max-w-[960px] h-auto rounded-2xl ring-1 ring-white/10 shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

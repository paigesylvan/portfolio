"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ExperienceHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6">
      <div className="w-full max-w-[1200px] mx-auto text-center">
        {/* Top text block */}
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut" }}
        >
          <p className="text-[12px] tracking-[0.22em] text-[#FACC15]">
            EXPERIENCE
          </p>
          <h1 className="mt-2 text-xl lg:text-3xl">
            Software & UI Developer Internship
          </h1>

          <p className="mt-6 text-sm lg:text-2xl ">
            <span data-nosnippet>Midwest Engineered Systems</span>
          </p>
          <p className="text-xs lg:text-lg ">August 2024 – January 2025</p>
        </motion.div>

        {/* Media */}
        <div className="relative mt-10">
          {/* Radial glow behind media */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 
              h-[50vw] w-[50vw] max-h-[320px] max-w-[320px]
              -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />

          <motion.div
            className="mx-auto w-full md:w-[50%] overflow-hidden rounded-lg"
            initial={
              prefersReduced
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 24, scale: 0.985 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: prefersReduced ? 0 : 0.8, ease: "easeOut", delay: prefersReduced ? 0 : 0.1 }}
          >
            <video
              src="/images/experience-images/mwes-hero.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

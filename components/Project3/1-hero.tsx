"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroDryCleaner() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          How Clear Design Improves User
          <br className="hidden md:block" />
          Trust for a Local Dry Cleaner
        </motion.h1>

        {/* Radial glow + desktop image */}
        <div className="relative mt-16">
          {/* warm amber glow */}
          <div
            className="
              pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[82vw] max-w-[920px] aspect-[2/1] rounded-full
              bg-[radial-gradient(circle_at_center,rgba(214,167,94,0.38),rgba(0,0,0,0)_60%)]
              blur-2xl
            "
          />

          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto max-w-[950px]"
          >
            {/* desktop “frame” card */}
            <div className="rounded-2xl bg-black/60 ring-1 ring-white/10 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <Image
                src="/images/project3-images/desktop.png" // <-- replace with your path
                alt="Dry cleaner homepage on desktop"
                width={2200}
                height={1400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>

            {/* soft floor shadow */}
            <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-8 rounded-full bg-black/70 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

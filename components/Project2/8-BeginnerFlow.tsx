"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BeginnerFlow() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 md:px-6 text-white">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Title & copy */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug lg:leading-tight">
            Turning complexity into clarity with a beginner-friendly shopping flow.
          </h2>
          <p className="mt-3 max-w-3xl text-white/85 text-xs sm:text-sm md:text-base leading-snug lg:leading-relaxed">
            After my user research, my goal was simplifying the layout, curating gear selections,
            and clearly communicating value. Every design choice—from the streamlined bundle
            presentation to the guided add-on options—was made to reduce decision fatigue and build
            confidence for those new to camping.
          </p>
        </div>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 md:p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
        >
          <Image
            src="/images/project2-images/flow-wide.png"
            alt="Beginner-friendly shopping flow overview"
            width={2000}
            height={1000}
            className="w-full h-auto rounded-xl object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

// components/Project2/8-beginner-flow.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BeginnerFlow() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Title & copy (left-aligned like your mock) */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Turning complexity into clarity with a beginner-friendly shopping flow.
          </h2>
          <p className="mt-4 max-w-4xl text-white/85 leading-relaxed">
            After my user research, my goal was simplifying the layout, curating gear selections,
            and clearly communicating value. Every design choice—from the streamlined bundle
            presentation to the guided add-on options—was made to reduce decision fatigue and build
            confidence for those new to camping.
          </p>
        </div>

        {/* Big image card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        >
          <Image
            src="/images/project2-images/flow-wide.png" // <- put your exported image here
            alt="Beginner-friendly shopping flow overview"
            width={2400}
            height={1200}
            className="w-full h-auto rounded-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

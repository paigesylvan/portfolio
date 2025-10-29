"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

export default function BeginnerFlow() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 md:px-6 text-white">
      <div className="w-full max-w-[900px] mx-auto">
      <SectionHeader
          kicker="LOW FIDELITY PROTOTYPES"
          title="Turning Complexity into Clarity "
          align="center"
        />
        {/* Title & copy */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <p className="mt-3 max-w-3xl mx-auto text-white/85 text-xs sm:text-sm md:text-md leading-snug lg:leading-relaxed text-center">
          After my user research, my goal was to simplify the layout, curating gear selections,
          and clearly communicating value. Every design choice, from the streamlined bundle
          presentation to the guided add-on options, was made to reduce decision fatigue and build
          confidence for users shopping.
          </p>
        </div>


        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl"
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

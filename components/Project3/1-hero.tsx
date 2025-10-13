"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroDryCleaner() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="w-screen min-h-screen bg-[#D0B79E] flex flex-col justify-center">
      <div className="w-full max-w-[1200px] mx-auto text-center  pt-100 mt-36">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold leading-tight text-black"
        >
          How Clear Design Improves User
          <br className="hidden md:block" />
          Trust for a Local Dry Cleaner
        </motion.h1>

        {/* Desktop mockup with shadow */}
        <div className="relative  flex justify-center items-center">
          {/* Black blur shadow */}
          <div className="absolute left-1/2 bottom-[-20px] -translate-x-1/2 w-[600px] h-[120px] bg-black/80 blur-[100px] rounded-full opacity-70" />

          {/* Desktop image */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: prefersReduced ? 0 : 0.7,
              ease: "easeOut",
              delay: 0.1,
            }}
            className="relative z-10"
          >
            <Image
              src="/images/project3-images/desktop.png"
              alt="Dry cleaner homepage on desktop"
              width={2200}
              height={1400}
              className="w-[900px] h-auto rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

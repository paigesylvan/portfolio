"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.6, ease: "easeOut" },
  },
});

export default function Outcome() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Reduce default spacing under the header */}
        <div className="mb-6">
          <SectionHeader
            kicker="OUTCOME"
            title="Bridging Design and Development"
            align="left"
          />
        </div>

        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          /* Center columns vertically so the image isn't sitting low */
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
        >
          {/* Left copy */}
          <motion.div
            variants={item(prefersReduced)}
            className="space-y-6 text-white/90 text-xl"
          >
            <p>
              Jumping into the automation industry, with a full-stack web development
              background, was a daunting start met with immense reward. I love learning
              and being able to make meaningful contributions through problem solving
              and design thinking.
            </p>
            <p>
              One of the biggest challenges of this project was bridging the gap between
              design and development. On the surface, creating HMI screens might seem like
              a purely technical task, but I quickly learned how deeply design decisions
              impact usability. Every choice— from layout and spacing to how recipes were
              saved and displayed— had to balance technical accuracy with operator clarity.
            </p>
            <p>
              At times, I dove into PLC logic and electrical schematics to ensure
              functionality matched the interface, pushing me beyond “designing screens”
              into truly integrating design with development. This process was rewarding
              and eye-opening: it showed how impactful good interface design is in complex,
              high-stakes environments, and it ultimately fueled my decision to pivot my
              career focus from software engineering toward UX/UI design.
            </p>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={item(prefersReduced)}
            className="flex justify-center md:justify-end self-center "
          >
            <Image
              src="/images/experience-images/mwes-badge.png"
              alt="MWES Employee Badge"
              width={720}
              height={900}
              className="w-[350px] md:w-[400px] h-auto object-contain rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

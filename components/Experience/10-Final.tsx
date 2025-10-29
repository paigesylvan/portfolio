"use client";
import Link from "next/link";

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
    <section className="flex flex-col items-center justify-center px-6 text-white mt-20 mb-0">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-2">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          {/* Left copy */}
          <motion.div
            variants={item(prefersReduced)}
            className="space-y-4 text-white/85 text-sm md:text-base leading-snug md:leading-normal"
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
              impact usability. Every choice from layout and spacing to how recipes were
              saved and displayed had to balance technical accuracy with operator clarity.
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
            className="flex justify-center md:justify-center self-center"
          >
            <Image
              src="/images/experience-images/mwes-badge.png"
              alt="MWES Employee Badge"
              width={720}
              height={900}
              className="w-[240px] md:w-[280px] h-auto object-contain rounded-xl"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="text-center mt-10 mb-4">
  <h1 className="mx-auto max-w-[650px] text-[#D6A75E] font-semibold leading-snug text-base sm:text-sm md:text-xl lg:text-2xl">
    View the portion of the Project 3 Operations Manual I authored to guide operators 
    in using the program I designed.
  </h1>

  <Link
    href="/images/experience-images/operations-manual.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group inline-flex items-center justify-center
      mt-5 px-6 py-2.5 rounded-full
      font-medium text-[13px] sm:text-sm text-white
      bg-white/[0.08] border border-white/20 backdrop-blur-md
      shadow-[0_3px_12px_rgba(0,0,0,0.3)]
      hover:bg-white/[0.18] hover:shadow-[0_5px_20px_rgba(0,0,0,0.45)]
      transition-all duration-300
    "
  >
    View Document
    <span
      className="
        ml-2 flex items-center justify-center
        w-5 h-5 rounded-full
        bg-white/10
        transition-all duration-300
        group-hover:bg-[#D6A75E]/40
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </Link>
</div>



      </div>
    </section>
  );
}

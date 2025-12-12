"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type WF = {
  src: string;
  alt: string;
};

const wireframes: WF[] = [
  { src: "/images/project1-images/wf-1.png", alt: "Wireframe 1" },
  { src: "/images/project1-images/wf-2.png", alt: "Wireframe 2" },
  { src: "/images/project1-images/wf-3.png", alt: "Wireframe 3" },
  { src: "/images/project1-images/wf-4.png", alt: "Wireframe 4" },
  { src: "/images/project1-images/wf-5.png", alt: "Wireframe 5" },
  { src: "/images/project1-images/wf-6.png", alt: "Wireframe 6" },
];

const parent = (stagger = 0.12): Variants => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // ✅ typed easing
  },
});

export default function Wireframes() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-4 text-white py-10 md:py-14 mt-12 lg:mt-0">
      <div className="w-full max-w-6xl mx-auto">
        <SectionHeader
          kicker="LOW-FI EXPLORATION"
          title="Key Wireframes"
          align="center"
        />

        <p className="mx-auto mt-3 max-w-[300px] lg:max-w-5xl text-center text-white/75 text-[10px] md:text-base leading-snug md:leading-snug mb-4 lg:mb-0">
          I began sketching early concepts of the pages. These quick sketches
          allowed me to explore layouts and content hierarchy. I tested
          different navigation bar options to see which would enhance usability
          and identified which items were most essential to feature. Wireframing
          helped me establish early structure for core flows; appointment
          creation, groomer discovery, and status visibility.
        </p>

        {/* Wireframes grid */}
        <motion.div
          className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 justify-items-center"
          style={{ maxWidth: "720px", margin: "0 auto" }}
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wireframes.map((wf) => (
            <motion.figure
              key={wf.src}
              variants={item(!!prefersReduced)}
              className="rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-2 md:p-3 hover:bg-white/10 transition-all"
            >
              <div
                className="
                  relative mx-auto aspect-[4/5]
                  w-[110px] sm:w-[160px] md:w-[150px] lg:w-[160px]
                  overflow-hidden rounded-lg ring-1 ring-white/10
                "
              >
                <Image
                  src={wf.src}
                  alt={wf.alt}
                  fill
                  className="object-contain p-2 md:p-3"
                  sizes="(min-width: 1024px) 25vw, 45vw"
                />
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {/* Shared caption */}
        <p className="mt-6 text-center text-[10px] md:text-[11px] text-[#7FB2FF] font-semibold tracking-wide">
          Homepage Wireframes
        </p>
      </div>
    </section>
  );
}

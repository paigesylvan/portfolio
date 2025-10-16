"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

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

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger },
  },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.6, ease: "easeOut" },
  },
});

export default function Wireframes() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 md:px-6 text-white mt-24 lg:mt-0 pb-12">
      <div className="w-full max-w-[900px] mx-auto">
        <SectionHeader
          kicker="LOW-FI EXPLORATION"
          title="Key Wireframes"
          align="center"
        />

        <p className="text-xs md:text-sm lg:text-base pb-6 leading-snug mx-auto mt-4 max-w-2xl text-center text-white/80">
          I began sketching early concepts of the pages. These quick sketches allowed me to explore layouts and content hierarchy. I tested different navigation bar options to see which would enhance usability and identified which items were most essential to feature. Wireframing helped establish early structure for core flows—appointment creation, groomer discovery, and status visibility.
        </p>

        {/* Wireframes grid */}
        <motion.div
          className="
            mt-10
            grid grid-cols-2 md:grid-cols-3
            gap-4 sm:gap-5
            justify-items-center
          "
          style={{ maxWidth: "900px", margin: "0 auto" }}
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wireframes.map((wf) => (
            <motion.figure
              key={wf.src}
              variants={item(prefersReduced)}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-3 md:p-4 hover:bg-white/10 transition-all"
            >
              <div
                className="
                  relative mx-auto aspect-[4/5]
                  w-[140px] sm:w-[200px] md:w-[180px] lg:w-[200px]
                  overflow-hidden rounded-xl ring-1 ring-white/10
                "
              >
                <Image
                  src={wf.src}
                  alt={wf.alt}
                  fill
                  className="object-contain p-3 sm:p-4"
                  sizes="(min-width: 1024px) 30vw, 45vw"
                />
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {/* Shared caption */}
        <p className="mt-8 text-center text-xs md:text-sm text-[#7FB2FF] font-semibold">
          Homepage Wireframes
        </p>
      </div>
    </section>
  );
}

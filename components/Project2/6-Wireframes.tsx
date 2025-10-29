"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

type WF = { src: string; alt: string; label?: string };

const wireframes: WF[] = [
  { src: "/images/project2-images/wf2-1.png", alt: "Wireframe 1" },
  { src: "/images/project2-images/wf2-2.png", alt: "Wireframe 2" },
  { src: "/images/project2-images/wf2-3.png", alt: "Wireframe 3" },
  { src: "/images/project2-images/wf2-4.png", alt: "Wireframe 4" },
  { src: "/images/project2-images/wf2-5.png", alt: "Wireframe 5" },
  { src: "/images/project2-images/wf2-6.png", alt: "Wireframe 6" },
];

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
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
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-3 sm:px-4 text-white mt-20 lg:mt-12 pb-6">
      <div className="w-full max-w-[800px] mx-auto">
        <SectionHeader
          kicker="LOW-FI EXPLORATION"
          title="Key Wireframes"
          align="center"
        />

        <p className="mx-auto mt-2 lg:mt-3 max-w-[310px] lg:max-w-2xl text-center text-white/80 text-xs md:text-md leading-snug">
          I began with low-fidelity wireframes to explore layouts that reduce overwhelm and guide users quickly toward the right gear. 
          Since research showed beginners feel unsure where to start, I focused on surfacing curated bundles and trust-building elements 
          early in the flow. Each frame experimented with ways to balance product discovery and clarity without clutter.
        </p>

        {/* Grid: smaller scale, 3 cols on desktop */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 justify-items-center"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wireframes.map((wf) => (
            <motion.figure
              key={wf.src}
              variants={item(prefersReduced)}
              className="rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-2 md:p-3 hover:bg-white/10 transition"
            >
              <div className="relative mx-auto aspect-[4/5] w-[120px] sm:w-[160px] md:w-[180px] overflow-hidden rounded-lg ring-1 ring-white/10">
                <Image
                  src={wf.src}
                  alt={wf.alt}
                  fill
                  className="object-contain p-2 sm:p-3"
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 48vw"
                />
              </div>
              {wf.label && (
                <figcaption className="mt-2 text-center text-[10px] sm:text-xs text-white/75">
                  {wf.label}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

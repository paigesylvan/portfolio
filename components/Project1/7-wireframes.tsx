// components/Project1/8-wireframes.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

type WF = {
  src: string;
  alt: string;
  label?: string;
};

const wireframes: WF[] = [
  { src: "/images/project1-images/wf-1.png", alt: "Wireframe 1" },
  { src: "/images/project1-images/wf-2.png", alt: "Wireframe 2" },
  { src: "/images/project1-images/wf-3.png", alt: "Wireframe 3" },
  { src: "/images/project1-images/wf-4.png", alt: "Wireframe 4" },
  { src: "/images/project1-images/wf-5.png", alt: "Wireframe 5" },
  { src: "/images/project1-images/wf-6.png", alt: "Wireframe 6" },
];

// shared variants (same feel as Goals)
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
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        <SectionHeader
          kicker="LOW-FI EXPLORATION"
          title="Key Wireframes"
          align="center"
        />

        <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">
          Early structure for core flows—appointment creation, groomer discovery,
          and status visibility.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {wireframes.map((wf) => (
            <motion.figure
              key={wf.src}
              variants={item(prefersReduced)}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-4 hover:bg-white/10 transition"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  src={wf.src}
                  alt={wf.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              {wf.label && (
                <figcaption className="mt-3 text-center text-sm text-white/80">
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

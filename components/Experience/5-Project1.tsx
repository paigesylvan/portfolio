"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

type Block = {
  key: string;
  title: string;
  icon: string;
  alt: string;
  body?: string;
  bullets?: string[];
};

const blocks: Block[] = [
  {
    key: "overview",
    title: "Overview",
    icon: "/images/experience-images/overview.png",
    alt: "Overview icon",
    body:
      "Joined during testing to address usability issues in an Ignition HMI app. Ensured 11 screens were accurate and intuitive using Ignition logic, Python scripting, and PLC binding.",
  },
  {
    key: "role",
    title: "My Role",
    icon: "/images/experience-images/role.png",
    alt: "Role icon",
    bullets: [
      "Created/updated OPC Tags and Tag Groups from PLC programming.",
      "Built status indicators/data inputs and linked to corresponding PLC tags.",
      "Cleaned layouts and standardized typography, icons, size and spacing.",
      "Added and linked buttons for clearer task flow.",
    ],
  },
  {
    key: "collab",
    title: "Collaboration",
    icon: "/images/experience-images/collabb.png",
    alt: "Collaboration icon",
    bullets: [
      "Mentored by the lead HMI developer to finalize features.",
      "Worked with engineers and Controls Manager during team testing.",
      "Observed how feedback, PLC tags, and HMI design align in practice.",
    ],
  },
  {
    key: "solve",
    title: "Problem-Solving",
    icon: "/images/experience-images/solvee.png",
    alt: "Problem solving icon",
    bullets: [
      "Data accuracy: fixed incorrect tag bindings so values matched PLC.",
      "Readability: reduced clutter with spacing/alignment for faster scan.",
    ],
  },
  {
    key: "learning",
    title: "Learning Experience",
    icon: "/images/experience-images/learn.png",
    alt: "Learning icon",
    body:
      "Resulting HMI improved trust and efficiency via accurate data, better spacing, and clearer inputs, supporting a smoother handoff and demonstrating how interface detail impacts factory-floor usability.",
  },
];

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.6, ease: "easeOut" },
  },
});

export default function Project1() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex flex-col items-center justify-center px-6 text-white mt-36 mb-12 lg:mb-0">
      <div className="w-full max-w-[1200px] mx-auto text-sm md:text-base">
        <SectionHeader kicker="PROJECT 1" title="Meter Room Project" align="left" />

        <div className="lg:mt-12 flex flex-col items-center">
          <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-2.5 shadow-[0_16px_60px_rgba(0,0,0,0.45)] w-full md:w-[80%]">
            <Image
              src="/images/experience-images/meter-room-hmi.png"
              alt="HMI status screen"
              width={1820}
              height={900}
              className="w-full h-auto rounded-xl mx-auto"
              priority
            />
          </div>
          <p className="mt-2 text-[10px] text-white/60 italic text-center">
            Image of DP Machine Status Screen —{" "}
            <span className="opacity-80">(red shown due to app being disconnected when saved)</span>
          </p>
        </div>

        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3"
        >
          {blocks.map((b) => (
            <motion.article
              key={b.key}
              variants={item(prefersReduced)}
              className="rounded-2xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_16px_60px_rgba(0,0,0,0.45)] px-3 py-6 flex flex-col transition-colors hover:bg-white/[0.10]"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={b.icon}
                  alt={b.alt}
                  width={80}
                  height={80}
                  className="h-12 w-12 object-contain"
                />
                <h3 className="mt-3 font-semibold text-base">{b.title}</h3>
              </div>

              {b.body && (
                <p className="mt-3 text-white/80 leading-snug">{b.body}</p>
              )}

              {b.bullets && (
                <ul className="mt-3 space-y-1.5 text-white/80 list-disc pl-[15px] leading-snug">
                  {b.bullets.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// components/Experience/5-Project1.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

type Block =
  | {
      key: string;
      title: string;
      icon: string;      // static icon (png/svg)
      alt: string;
      body?: string;
      bullets?: string[];
    };

const blocks: Block[] = [
  {
    key: "overview",
    title: "Over View",
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
      "Resulting HMI improved trust and efficiency via accurate data, better spacing, and clearer inputs—supporting a smoother handoff and demonstrating how interface detail impacts factory-floor usability.",
  },
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
    transition: { duration: reduced ? 0 : 0.7, ease: "easeOut" },
  },
});

export default function Project1() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1400px] mx-auto">
        <SectionHeader
          kicker="PROJECT 1"
          title="Meter Room Project"
          align="left"
        />

        {/* Big HMI screenshot */}
        <div className="mt-6 flex flex-col items-center">
          <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full md:w-[82%]">
            <Image
              src="/images/experience-images/meter-room-hmi.png"
              alt="HMI status screen"
              width={1820}
              height={900}
              className="w-[450px] h-[300px] rounded-xl"
              priority
            />
          </div>
          <p className="mt-2 text-[11px] text-white/60 italic">
            Image of DP Machine Status Screen — *(red shown due to app being disconnected when saved)*
          </p>
        </div>

        {/* Five cards */}
        <motion.div
  variants={parent()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
>
  {blocks.map((b) => (
    <motion.article
      key={b.key}
      variants={item(prefersReduced)}
      className="
        rounded-3xl bg-white/[0.06] backdrop-blur-md 
        ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]
        px-4 py-8 flex flex-col
        transition-colors hover:bg-white/[0.10]
      "
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src={b.icon}
          alt={b.alt}
          width={96}
          height={96}
          className="h-16 w-16 object-contain"
        />
        <h3 className="mt-4 font-semibold">{b.title}</h3>
      </div>

      {b.body && (
        <p className="mt-4 text-white/80 leading-tight">{b.body}</p>
      )}

      {b.bullets && (
        <ul className="mt-4 space-y-2 text-white/80 list-disc pl-[5px] leading-tight">
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

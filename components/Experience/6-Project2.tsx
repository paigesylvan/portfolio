"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

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
      "Designed an overview screen for an Automated Storage & Retrieval System (ASRS) in Ignition. Operators get a clear visual of slots, crane location, activity, and infeed/outfeed stations.",
  },
  {
    key: "role",
    title: "My Role",
    icon: "/images/experience-images/role.png",
    alt: "Role icon",
    bullets: [
      "Created iterations of the ASRS overview.",
      "Built components using Ignition’s built-in tools.",
      "Wrote Python scripts to animate crane movement & station activity.",
    ],
  },
  {
    key: "collab",
    title: "Collaboration",
    icon: "/images/experience-images/collabb.png",
    alt: "Collaboration icon",
    bullets: [
      "Worked with mentor & engineers to refine clarity and spacing.",
      "Aligned interface with operator needs and feedback.",
    ],
  },
  {
    key: "solve",
    title: "Problem-Solving",
    icon: "/images/experience-images/solvee.png",
    alt: "Problem solving icon",
    bullets: [
      "Combined Ignition functions with Python scripting for smooth crane animation.",
      "Designed clear legend & color coding for quick status identification.",
    ],
  },
  {
    key: "learning",
    title: "Learning Experience",
    icon: "/images/experience-images/learn.png",
    alt: "Learning icon",
    body:
      "Grew HMI design skills in Ignition, especially Python scripting for logic/animation. Translated a physical system into an operator-friendly visualization.",
  },
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
    transition: {
      duration: reduced ? 0 : 0.6,
      // TS-safe equivalent of "easeOut"
      ease: [0, 0, 0.58, 1],
    } as Transition,
  },
});

export default function Project2() {
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;

  return (
    <section className="flex flex-col items-center justify-center px-6 text-white mt-36 mb-0">
      <div className="w-full max-w-[1200px] mx-auto text-sm md:text-base">
        <SectionHeader kicker="PROJECT 2" title="ASRS Project" align="left" />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* left */}
          <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-2.5 shadow-[0_16px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/experience-images/asrs-hmi.png"
              alt="ASRS overview status screen"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-xl"
              priority
            />
            <p className="mt-2 text-[10px] text-white/60 italic text-center">
              Image of DP Machine Status Screen —{" "}
              <span className="opacity-80">
                red shown due to app being disconnected when saved
              </span>
            </p>
          </div>

          {/* right */}
          <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-2.5 shadow-[0_16px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/experience-images/asrs-script.png"
              alt="Ignition scripting view"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-xl"
            />
            <p className="mt-2 text-[10px] text-white/60 italic text-center">
              Image of DP Machine Status Screen —{" "}
              <span className="opacity-80">
                red shown due to app being disconnected when saved
              </span>
            </p>
          </div>
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
              variants={item(reduced)}
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

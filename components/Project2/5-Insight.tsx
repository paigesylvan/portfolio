"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

type Insight = {
  title: string;
  body: string;
  goal: string;
  staticIcon: string; // PNG/SVG
  gifIcon: string;    // animated GIF
  alt: string;
};

const insights: Insight[] = [
  {
    title: "Unsure Where to Start",
    body:
      "Users lacked clear entry points and guidance while shopping, which created uncertainty at the beginning of their journey.",
    goal:
      "Simplify interface so it’s informative yet beginner-friendly and easy to navigate.",
    staticIcon: "/images/project2-images/icons/start-static.png",
    gifIcon: "/images/project2-images/icons/start.gif",
    alt: "Onboarding / getting started",
  },
  {
    title: "Too Many Options",
    body:
      "Large catalogs overwhelmed users, making comparison and product discovery difficult.",
    goal:
      "Ease into gear discovery with curated product lines and collections.",
    staticIcon: "/images/project2-images/icons/options-static.png",
    gifIcon: "/images/project2-images/icons/options.gif",
    alt: "Too many options icon",
  },
  {
    title: "Unfamiliar with Products",
    body:
      "Technical jargon and unclear features reduced trust and confidence.",
    goal:
      "Build trust through clear, digestible product descriptions, setup guides, and reviews.",
    staticIcon: "/images/project2-images/icons/jargon-static.png",
    gifIcon: "/images/project2-images/icons/jargon.gif",
    alt: "Product unfamiliarity icon",
  },
];

// stagger + slide-up
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
    transition: { duration: reduced ? 0 : 0.7, ease: "easeOut" },
  },
});

export default function KeyInsights() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Green-accent header (pass accent='camp' if you wired SectionHeader for themes) */}
        <SectionHeader
          kicker="FINDINGS FROM RESEARCH"
          title="Key Insights"
          align="center"
          accent="camp"
        />

        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {insights.map((i) => (
            <motion.div
              key={i.title}
              variants={item(prefersReduced)}
              className="group rounded-2xl bg-white/[0.03] backdrop-blur-md ring-1 ring-white/10 p-6 md:p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.45)] hover:bg-white/[0.06] transition-colors"
            >
              {/* Icon: static swaps to GIF on hover (no JS needed) */}
              <div className="mx-auto mb-6 relative h-20 w-20">
                {/* static */}
                <Image
                  src={i.staticIcon}
                  alt={i.alt}
                  fill
                  className="object-contain opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                  sizes="80px"
                  unoptimized
                />
                {/* gif */}
                <Image
                  src={i.gifIcon}
                  alt={i.alt}
                  fill
                  className="object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  sizes="80px"
                  unoptimized
                />
              </div>

              <h3 className="text-lg md:text-xl font-semibold">{i.title}</h3>

              <p className="mt-3 text-white/80 leading-relaxed">{i.body}</p>

              {/* green divider */}
              <div className="my-6 h-px w-16 mx-auto bg-emerald-400/40" />

              <p className="text-[11px] tracking-[0.22em] text-emerald-300/90">
                DESIGN GOAL
              </p>
              <p className="mt-2 text-emerald-200/95">
                {i.goal}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

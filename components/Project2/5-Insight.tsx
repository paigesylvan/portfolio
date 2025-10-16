"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

type Insight = {
  title: string;
  body: string;
  goal: string;
  staticIcon: string;
  alt: string;
};

const insights: Insight[] = [
  {
    title: "Unsure Where to Start",
    body:
      "Users lacked clear entry points and guidance while shopping, which created uncertainty at the beginning of their journey.",
    goal:
      "Simplify interface so it’s informative yet beginner-friendly and easy to navigate.",
    staticIcon: "/images/project2-images/clarity.png",
    alt: "Onboarding / getting started",
  },
  {
    title: "Too Many Options",
    body:
      "Large catalogs overwhelmed users, making comparison and product discovery difficult.",
    goal:
      "Ease into gear discovery with curated product lines and collections.",
    staticIcon: "/images/project2-images/navigation.png",
    alt: "Too many options icon",
  },
  {
    title: "Unfamiliar with Products",
    body:
      "Technical jargon and unclear features reduced trust and confidence.",
    goal:
      "Build trust through clear, digestible product descriptions, setup guides, and reviews.",
    staticIcon: "/images/project2-images/confidence.png",
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
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 sm:px-6 text-white mt-36 lg:mt-0 pb-6">
      <div className="w-full max-w-[900px] mx-auto">
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
          className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {insights.map((i) => (
            <motion.div
              key={i.title}
              variants={item(prefersReduced)}
              className="group flex flex-col justify-between h-full rounded-2xl bg-white/[0.03] backdrop-blur-md ring-1 ring-white/10 
                         p-4 md:p-6 text-center shadow-[0_16px_60px_rgba(0,0,0,0.45)] 
                         transition-all hover:bg-white/[0.06] hover:-translate-y-0.5"
            >
              {/* Top content */}
              <div>
                <div className="mx-auto mb-4 sm:mb-5 flex items-center justify-center">
                  <div className="w-[70px] h-[60px] sm:w-[90px] sm:h-[70px] flex items-center justify-center">
                    <Image
                      src={i.staticIcon}
                      alt={i.alt}
                      width={120}
                      height={120}
                      className="object-contain drop-shadow-[0_6px_20px_rgba(16,185,129,0.25)]"
                    />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base md:text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/80 leading-snug">
                  {i.body}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-4 sm:mt-6">
                <div className="h-px w-10 sm:w-8 mx-auto bg-emerald-400/40" />
                <p className="mt-3 text-[10px] tracking-[0.22em] text-emerald-300/90">
                  DESIGN GOAL
                </p>
                <p className="mt-2 text-xs sm:text-sm leading-snug text-emerald-200/95">
                  {i.goal}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

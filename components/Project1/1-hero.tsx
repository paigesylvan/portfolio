"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroOverviewCamping() {
  const prefersReduced = useReducedMotion();

  const imageVariants = {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: prefersReduced ? 0 : 0.8, ease: "easeOut" },
    },
  };

  const skillsRow1 = ["RESEARCH", "USER FLOWS", "USABILITY TESTING", "SKETCHING"];
  const skillsRow2 = ["WIREFRAMING", "PROTOTYPING", "RESPONSIVE DESIGN", "UI CREATION"];

  return (
    <section className="w-screen min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1000px] px-6 pt-20 pb-24 mt-12">
        {/* ---------- HEADER ---------- */}
        <div className="text-center">
          <SectionHeader
            kicker="RESPONSIVE WEBSITE DESIGN"
            title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
            align="center"
            accent="camp"
            kickerClassName="text-[8px] md:text-sm text-emerald-400"
            titleClassName="text-md md:text-3xl max-w-3xl mx-auto text-center mt-2"
          />
        </div>

        {/* ---------- HERO IMAGE ---------- */}
        <div className="relative mt-10 lg:mt-14 flex items-end justify-center">
          {/* emerald radial glow — two stacked layers, inline styles (avoid purge), big + bright */}
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2
                       w-[4200px] max-w-[420vw] aspect-[2.4/1] rounded-full blur-[900px] opacity-95 z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(16,185,129,0.85) 0%, rgba(10,70,40,0.55) 50%, rgba(0,0,0,0) 92%)",
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2
                       w-[4600px] aspect-[2/1] rounded-full blur-[700px] opacity-80 z-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(16,185,129,0.6) 0%, rgba(10,70,40,0.35) 45%, rgba(0,0,0,0) 90%)",
            }}
          />

          {/* pedestal shadow */}
          <div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[1150px] max-w-[90vw] h-[120px] rounded-full bg-black/80 blur-[280px] opacity-70" />

          {/* laptop image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={imageVariants}
            transition={{ delay: prefersReduced ? 0 : 0.1 }}
            className="relative z-10 scale-[0.9]"
          >
            <Image
              src="/images/project2-images/camping-hero-laptop.png"
              alt="ELMNT camping website homepage mockup"
              width={1000}
              height={700}
              className="relative w-[75%] max-w-[720px] h-auto rounded-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* ---------- OVERVIEW ---------- */}
        <div className="mt-16 grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* LEFT — Project & Role */}
          <div className="ml-36">
            <p className="text-[11px] tracking-[0.22em] text-emerald-400">PROJECT</p>
            <p className="mt-1 lg:mt-2 text-xs md:text-[13px] text-white/95">
              Design a responsive website for a camping e-commerce experience.
            </p>

            <p className="mt-4 lg:mt-6 text-[11px] tracking-[0.22em] text-emerald-400">ROLE</p>
            <p className="mt-1 lg:mt-2 text-xs md:text-[13px] text-white/95">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-4 md:mt-0">
            <p className="text-[11px] tracking-[0.22em] text-emerald-400">DURATION</p>
            <p className="mt-1 lg:mt-2 text-xs md:text-[13px] text-white/95">
              May 2025 – July 2025
            </p>

            <p className="mt-4 lg:mt-6 text-[11px] tracking-[0.22em] text-emerald-400">
              UX/UI SKILLSETS LEVERAGED
            </p>

            {/* Skills chips */}
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {skillsRow1.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 lg:px-3 lg:py-1 text-[8px] lg:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {skillsRow2.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 lg:px-3 lg:py-1 text-[8px] lg:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Project1/HeroOverviewDog.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroOverviewDog() {
  const prefersReduced = useReducedMotion();

  const phoneVariants = {
    hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: prefersReduced ? 0 : 0.8, ease: "easeOut" },
    },
  };

  const skillsRow1 = ["UX RESEARCH", "UI CREATION", "USER FLOWS", "USABILITY STUDY"];
  const skillsRow2 = ["WIREFRAMING", "PROTOTYPING", "RESPONSIVE DESIGN"];

  return (
    <section className="w-screen min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-20 pb-24 mt-12">
        {/* ---------- HEADER ---------- */}
        <div className="text-center">
          <SectionHeader
            kicker="MOBILE APPLICATION"
            title="How Emotionally Intelligent Design Improves Booking Confidence for Dog Grooming"
            align="center"
            accent="dog"
            kickerClassName="text-[8px] md:text-sm text-[#9DC0FF]"
            titleClassName="text-md md:text-3xl max-w-3xl mx-auto text-center mt-2"
          />
        </div>

        {/* ---------- HERO IMAGE (PHONES) ---------- */}
        <div className="relative mt-10 lg:mt-14 flex items-end justify-center gap-6 md:gap-10">
          {/* blue radial glow */}
          <div
  className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2
  w-[2200px] max-w-[180vw] aspect-[2.6/1] rounded-full
  bg-[radial-gradient(circle_at_center,rgba(157,192,255,0.55)_0%,rgba(50,90,180,0.25)_40%,rgba(0,0,0,0)_90%)]
  blur-[420px] opacity-95"
/>

          {/* pedestal shadow */}
          <div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[700px] max-w-[92vw] h-[90px] rounded-full bg-black/80 blur-[90px] opacity-70" />

          {/* left phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.05 }}
            className="relative"
          >
            <Image
              src="/images/homepage-images/phone-1.png"
              alt="Login screen"
              width={420}
              height={860}
              className="relative z-10 w-[190px] h-auto"
              priority
            />
          </motion.div>

          {/* center phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.18 }}
            className="relative scale-[1.06]"
          >
            <Image
              src="/images/homepage-images/phone-2.png"
              alt="Home dashboard"
              width={420}
              height={860}
              className="relative z-10 w-[210px] h-auto"
              priority
            />
          </motion.div>

          {/* right phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.3 }}
            className="relative scale-[0.94]"
          >
            <Image
              src="/images/homepage-images/phone-3.png"
              alt="Service selection"
              width={420}
              height={860}
              className="relative z-10 w-[190px] h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* ---------- OVERVIEW ---------- */}
        <div className="mt-16 grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* LEFT — Project & Role */}
          <div className="ml-36">
            <p className="text-[11px] tracking-[0.22em] text-[#9DC0FF]">PROJECT</p>
            <p className="mt-1 lg:mt-2 text-xs md:text-[13px] text-white/95">
              Design a mobile-first app for a local dog grooming service.
            </p>

            <p className="mt-4 lg:mt-6 text-[11px] tracking-[0.22em] text-[#9DC0FF]">ROLE</p>
            <p className="mt-1 lg:mt-2 text-xs md:text-[13px] text-white/95">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-4 md:mt-0">
            <p className="text-[11px] tracking-[0.22em] text-[#9DC0FF]">DURATION</p>
            <p className="mt-1 lg:mt-2 text-xs md:text-[13px] text-white/95">
              July 2025 – August 2025
            </p>

            <p className="mt-4 lg:mt-6 text-[11px] tracking-[0.22em] text-[#9DC0FF]">
              UX/UI SKILLSETS LEVERAGED
            </p>

            {/* Skills chips */}
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {skillsRow1.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-[#9DC0FF]/20 bg-white/[0.05] px-2 py-1 lg:px-3 lg:py-1 text-[8px] lg:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-[#9DC0FF]/10 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {skillsRow2.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-[#9DC0FF]/20 bg-white/[0.05] px-2 py-1 lg:px-3 lg:py-1 text-[8px] lg:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-[#9DC0FF]/10 shadow-sm"
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

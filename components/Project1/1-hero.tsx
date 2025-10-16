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
      transition: { duration: prefersReduced ? 0 : 0.7, ease: "easeOut" },
    },
  };

  const skillsRow1 = ["UX RESEARCH", "UI CREATION", "USER FLOWS", "USABILITY STUDY"];
  const skillsRow2 = ["WIREFRAMING", "PROTOTYPING", "RESPONSIVE DESIGN"];

  return (
    <section className="w-screen bg-black text-white flex flex-col justify-center py-12 md:py-16">
      <div className="mx-auto w-full max-w-[900px] px-4 md:px-6">
        {/* ---------- HEADER ---------- */}
        <div className="text-center">
          <SectionHeader
            kicker="MOBILE APPLICATION"
            title="How Emotionally Intelligent Design Improves Booking Confidence for Dog Grooming"
            align="center"
            accent="dog"
            kickerClassName="text-[7px] md:text-xs text-[#9DC0FF]"
            titleClassName="text-sm md:text-2xl lg:text-3xl max-w-[700px] mx-auto mt-2"
          />
        </div>

        {/* ---------- HERO IMAGE (PHONES) ---------- */}
        <div className="relative mt-6 md:mt-10 flex items-end justify-center gap-4 md:gap-6">
          {/* blue radial glow */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] aspect-[2/1] rounded-full
                          bg-[radial-gradient(circle_at_center,rgba(157,192,255,0.25),rgba(0,0,0,0)_70%)] blur-[100px]" />

          {/* pedestal shadow */}
          <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-[420px] max-w-[85vw] h-[60px] rounded-full bg-black/80 blur-[60px] opacity-70" />

          {/* left phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.05 }}
            className="relative scale-[0.9]"
          >
            <Image
              src="/images/homepage-images/phone-1.png"
              alt="Login screen"
              width={360}
              height={740}
              className="relative z-10 w-[160px] h-auto"
              priority
            />
          </motion.div>

          {/* center phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.15 }}
            className="relative scale-[1]"
          >
            <Image
              src="/images/homepage-images/phone-2.png"
              alt="Home dashboard"
              width={360}
              height={740}
              className="relative z-10 w-[180px] h-auto"
              priority
            />
          </motion.div>

          {/* right phone */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.25 }}
            className="relative scale-[0.88]"
          >
            <Image
              src="/images/homepage-images/phone-3.png"
              alt="Service selection"
              width={360}
              height={740}
              className="relative z-10 w-[160px] h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* ---------- OVERVIEW ---------- */}
        <div className="mt-10 grid md:grid-cols-2 md:gap-8 md:items-start text-[11px] md:text-[12px] leading-snug">
          {/* LEFT — Project & Role */}
          <div>
            <p className="text-[9px] tracking-[0.22em] text-[#9DC0FF]">PROJECT</p>
            <p className="mt-1 text-white/90">
              Design a mobile-first app for a local dog grooming service.
            </p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-[#9DC0FF]">ROLE</p>
            <p className="mt-1 text-white/90">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-6 md:mt-0">
            <p className="text-[9px] tracking-[0.22em] text-[#9DC0FF]">DURATION</p>
            <p className="mt-1 text-white/90">July 2025 – August 2025</p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-[#9DC0FF]">
              UX/UI SKILLSETS LEVERAGED
            </p>

            {/* Skills chips */}
            <div className="mt-2 space-y-2">
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillsRow1.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[#9DC0FF]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[10px] tracking-wide text-white/95 ring-1 ring-inset ring-[#9DC0FF]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillsRow2.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[#9DC0FF]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[10px] tracking-wide text-white/95 ring-1 ring-inset ring-[#9DC0FF]/10"
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

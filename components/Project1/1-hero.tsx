"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroOverview() {
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
  const skillsRow2 = ["WIRE FRAMING", "PROTOTYPING", "RESPONSIVE DESIGN"];

  return (
    <section className="min-h-screen w-screen bg-[#5684BF] flex flex-col justify-start">
      {/* More top spacing */}
      <div className="mt-36 lg:mt-60" />

      {/* --- HERO TOP --- */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-8 text-center">
        <h1 className="text-white text-md md:text-5xl leading-tight font-semibold">
          How Emotionally Intelligent Design
          <br className="hidden md:block" />
          Improves Booking Confidence for Dog Grooming
        </h1>

        {/* iPhones */}
        <div className="relative mt-12 flex items-end justify-center gap-6 md:gap-10">
          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] aspect-[2.1/1] rounded-full bg-[radial-gradient(circle_at_center,rgba(170,190,230,0.30),rgba(0,0,0,0)_62%)] blur-[70px]" />

          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.05 }}
            className="relative"
          >
            <div className="pointer-events-none absolute left-1/2 bottom-4 -translate-x-1/2 w-[200px] h-[50px] bg-black/80 blur-[45px] rounded-full opacity-70" />
            <Image
              src="/images/phone-1.png"
              alt="Login screen"
              width={420}
              height={860}
              className="relative z-10 w-[220px] h-auto"
              priority
            />
          </motion.div>

          {/* CENTER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.18 }}
            className="relative scale-[1.06]"
          >
            <div className="pointer-events-none absolute left-1/2 bottom-4 -translate-x-1/2 w-[230px] h-[55px] bg-black/80 blur-[50px] rounded-full opacity-80" />
            <Image
              src="/images/phone-2.png"
              alt="Home dashboard"
              width={420}
              height={860}
              className="relative z-10 w-[240px] h-auto"
              priority
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={phoneVariants}
            transition={{ delay: prefersReduced ? 0 : 0.3 }}
            className="relative scale-[0.94]"
          >
            <div className="pointer-events-none absolute left-1/2 bottom-4 -translate-x-1/2 w-[190px] h-[45px] bg-black/80 blur-[45px] rounded-full opacity-70" />
            <Image
              src="/images/phone-3.png"
              alt="Service selection"
              width={420}
              height={860}
              className="relative z-10 w-[220px] h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* --- OVERVIEW --- */}
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-8 lg:mt-24">
        <div className="grid md:grid-cols-2 md:gap-20 md:items-start">
          {/* LEFT */}
          <div className="text-white lg:ml-[200px]">
            <p className="text-[11px] tracking-[0.22em] text-[#E6F0FF] pb-1">PROJECT</p>
            <p className="lg:mt-2 text-xs md:text-lg text-white/95">
              Design a Mobile-First App for a Local Dog Grooming Service
            </p>

            <p className="mt-3 lg:mt-10 text-[11px] tracking-[0.22em] text-[#E6F0FF] pb-1">ROLE</p>
            <p className="lg:mt-2 text-xs md:text-lg text-white/95">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT */}
          <div className="text-white md:pl-12 mt-3 lg:mt-12 md:mt-0">
            <p className="text-[11px] tracking-[0.22em] text-[#E6F0FF]">DURATION</p>
            <p className="mt-1 text-xs md:text-lg text-white/95">July 2025 – August 2025</p>

            {/* SKILLS SECTION */}
            <p className="mt-3 lg:mt-10 text-[11px] tracking-[0.22em] text-[#E6F0FF]">
            UX/UI SKILLSET’S LEVERAGED
            </p>

            {/* Wrapper changes with screen size */}
            <div className="mt-2 lg:mt-4 flex flex-wrap gap-3 
                max-w-[460px] sm:max-w-[500px] md:max-w-[600px] 
                justify-start">
                {[
                  "UX RESEARCH",
                  "UI CREATION",
                  "USER FLOWS",
                  "USABILITY STUDY",
                  "WIRE FRAMING",
                  "PROTOTYPING",
                  "RESPONSIVE DESIGN",
            ].map((tag) => (
            <span
              key={tag}
                  className="rounded-xl border border-white/10 bg-white/10 px-2 py-1 lg:px-4 lg:py-2 
                 text-xs md:text-[13px] 
                 tracking-wide text-white/95 ring-1 ring-inset ring-white/10 whitespace-nowrap"
              >
              {tag}
              </span>
              ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

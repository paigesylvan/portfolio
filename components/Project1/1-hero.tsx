"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

export default function HeroOverviewDog() {
  const prefersReduced = useReducedMotion();

  const phoneVariants: Variants = {
    hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: prefersReduced ? 0 : 0.7,
        // TS-safe "easeOut" equivalent as a cubic-bezier curve
        ease: [0, 0, 0.58, 1],
      } as Transition,
    },
  };

  const skillsRow1 = ["UX Research", "UI Creation", "User Flows", "Usability Study"];
  const skillsRow2 = ["Wireframing", "Prototyping", "Responsive Design"];

  return (
    <section className="w-screen bg-black text-white flex flex-col justify-center py-12 md:py-16 mt-12 lg:mt-[50px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="lg:ml-[85px]">
          <SectionHeader
            kicker="MOBILE APPLICATION"
            title="How Emotionally Intelligent Design Improves Booking Confidence for Dog Grooming"
            align="left"
            kickerClassName="text-[7px] md:text-xs text-[#9DC0FF]"
            titleClassName="text-md md:text-2xl lg:text-3xl max-w-[700px] mt-2"
          />
        </div>

        {/* mobile hero image*/}
        <div className="relative mt-10 flex items-end justify-center gap-4 md:gap-6">
          {/* hue */}
          <div
            className="absolute inset-0 z-1 pointer-events-none
             left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             w-[800px] h-[700px]"
            style={{
              background: [
                "radial-gradient(400px 300px at 50% 55%, rgba(80,140,255,0.9) 0%, rgba(80,140,255,0.4) 45%, rgba(0,0,0,0) 75%)",
                "radial-gradient(800px 400px at 48% 60%, rgba(0,195,255,0.28) 0%, rgba(0,195,255,0.12) 48%, rgba(0,0,0,0) 80%)",
                "radial-gradient(900px 400px at 40% 72%, rgba(110,80,255,0.20) 0%, rgba(110,80,255,0.08) 44%, rgba(0,0,0,0) 78%)",
              ].join(", "),
              filter: "blur(80px)",
              opacity: 0.9,
              mixBlendMode: "screen",
            }}
          />

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
            className="relative"
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

        {/* overview */}
        <div className="mt-12 lg:mt-10 grid md:grid-cols-2 md:gap-8 md:items-start text-[12px] md:text-[13px] leading-snug">
          {/* left */}
          <div className="lg:ml-24">
            <p className="text-[9px] tracking-[0.22em] text-[#9DC0FF]">PROJECT</p>
            <p className="mt-[2px] text-white/90">
              Design a mobile-first app for a local dog grooming service.
            </p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-[#9DC0FF]">ROLE</p>
            <p className="mt-[2px] text-white/90">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* right */}
          <div className="mt-4 md:mt-0">
            <p className="text-[9px] tracking-[0.22em] text-[#9DC0FF]">DURATION</p>
            <p className="mt-[2px] text-white/90">July 2025 – August 2025</p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-[#9DC0FF]">
              UX/UI SKILLSETS LEVERAGED
            </p>

            {/* Skills */}
            <div className="mt-2 space-y-2">
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillsRow1.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-[#9DC0FF]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[12px] md:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-[#9DC0FF]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillsRow2.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-[#9DC0FF]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[12px] md:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-[#9DC0FF]/10"
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

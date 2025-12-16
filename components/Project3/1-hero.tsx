"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export default function HeroOverviewDryCleaner() {
  const prefersReduced = useReducedMotion();

  const screenVariants = (reduced: boolean): Variants => ({
    hidden: {
      opacity: 0,
      y: reduced ? 0 : 14,
      filter: reduced ? "blur(0px)" : "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reduced
        ? { duration: 0 }
        : { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  });

  const skillsRow1 = ["Information Architecture", "UI Design", "Accessibility"];
  const skillsRow2 = [
    "Wireframing",
    "Prototyping",
    "Responsive Website",
    "Usability Testing",
  ];

  return (
    <section className="bg-black text-white flex flex-col justify-center py-12 md:py-16 mt-16 px-4 md:px-6">
      {/* ✅ centered container */}
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="text-left lg:ml-[85px]">
          <SectionHeader
            kicker="RESPONSIVE WEBSITE"
            title="How Clear Design Improves User Trust for a Local Dry Cleaner"
            align="left"
            kickerClassName="text-[7px] md:text-xs text-[#E6D6C3]"
            titleClassName="text-md md:text-2xl lg:text-3xl max-w-[500px] mt-2"
          />
        </div>

        <div className="relative flex items-end justify-center">
          <div
            className="absolute inset-0 z-1 pointer-events-none left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] lg:h-[400px]"
            style={{
              background: [
                "radial-gradient(400px 300px at 50% 55%, rgba(255,230,200,0.85) 0%, rgba(255,230,200,0.38) 44%, rgba(0,0,0,0) 75%)",
                "radial-gradient(800px 400px at 48% 60%, rgba(250,215,170,0.26) 0%, rgba(250,215,170,0.12) 48%, rgba(0,0,0,0) 80%)",
                "radial-gradient(900px 400px at 40% 72%, rgba(220,185,140,0.22) 0%, rgba(220,185,140,0.10) 44%, rgba(0,0,0,0) 78%)",
              ].join(", "),
              filter: "blur(80px)",
              opacity: 0.92,
              mixBlendMode: "screen",
            }}
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={screenVariants(!!prefersReduced)}
            transition={{ delay: prefersReduced ? 0 : 0.1 }}
            className="relative w-full"
          >
            <Image
              src="/images/project3-images/desktop.png"
              alt="Dry cleaner homepage on desktop"
              width={2200}
              height={1400}
              priority
              className="relative z-10 w-[80vw] max-w-[600px] h-auto mx-auto"
            />
          </motion.div>
        </div>


        {/* overview */}
        <div className="mt-6 grid md:grid-cols-2 md:gap-8 md:items-start text-[12px] md:text-[13px] leading-snug">
          {/* left */}
          <div className="lg:ml-24">
            <p className="text-[9px] tracking-[0.22em] text-[#E6D6C3]">PROJECT</p>
            <p className="mt-[2px] text-white/90">
              Design and build the first website for a 30+ year local dry cleaner
              to clarify services, hours, and trust signals for new and returning
              customers.
            </p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-[#E6D6C3]">ROLE</p>
            <p className="mt-[2px] text-white/90">
              UX/UI Designer, Researcher, Front-End Developer, Usability Tester
            </p>
          </div>

          {/* right */}
          <div className="mt-6 md:mt-0">
            <p className="text-[9px] tracking-[0.22em] text-[#E6D6C3]">DURATION</p>
            <p className="mt-[2px] text-white/90">June 2025 – August 2025</p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-[#E6D6C3]">
              UX/UI SKILLSETS LEVERAGED
            </p>

            <div className="mt-2 space-y-2">
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillsRow1.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-[#E6D6C3]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[12px] md:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-[#E6D6C3]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {skillsRow2.map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-[#E6D6C3]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[12px] md:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-[#E6D6C3]/10"
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

// components/Project2/HeroOverviewCamping.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function HeroOverviewCamping() {
  return (
    <section className="w-screen min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-20 pb-24 mt-12">
        {/* Header */}
        <div className="text-center">
        <SectionHeader
  kicker="RESPONSIVE WEBSITE DESIGN"
  title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
  align="center"
  accent="camp"
  kickerClassName="text-[8px] md:text-sm text-emerald-400"
  titleClassName="text-md md:text-5xl max-w-[1000px] ml-12 mt-2 "
/>

        </div>

        {/* Hero image */}
        <div className="relative mt-8 lg:mt-14 flex items-end justify-center">
          {/* emerald blur glow behind device */}
          <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[1200px] max-w-[95vw] aspect-[2/1] rounded-full
                          bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),rgba(0,0,0,0)_70%)] blur-[120px]" />

          {/* pedestal shadow under the laptop */}
          <div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[700px] max-w-[92vw] h-[90px] rounded-full bg-black/80 blur-[90px] opacity-70" />

          <Image
            src="/images/project2-images/camping-hero-laptop.png"
            alt="ELMNT camping website homepage mockup"
            width={1600}
            height={1000}
            className="relative z-10 w-[76%] max-w-[980px] h-auto rounded-2xl"
            priority
          />
        </div>

        {/* Overview (2 columns) */}
        <div className="mt-16 lg:mt-0 grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* LEFT — Project & Role */}
          <div>
            {/* PROJECT */}
            <p className="text-[11px] tracking-[0.22em] text-emerald-400">
              PROJECT
            </p>
            <p className="mt-1 lg:mt-2 text-xs md:text-xl text-white/95">
              Design a responsive website for a camping e-commerce experience.
            </p>

            {/* ROLE */}
            <p className="mt-4 lg:mt-10 text-[11px] tracking-[0.22em] text-emerald-400">
              ROLE
            </p>
            <p className="mt-1 lg:mt-2 text-xs md:text-xl text-white/95">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-4 md:mt-0">
            {/* DURATION */}
            <p className="text-[11px] tracking-[0.22em] text-emerald-400">
              DURATION
            </p>
            <p className="mt-1 lg:mt-2 text-xs md:text-xl text-white/95">
              May 2025 – July 2025
            </p>

            {/* SKILLS */}
            <p className="mt-4 lg:mt-10 text-[11px] tracking-[0.22em] text-emerald-400">
              UX/UI SKILLSETS LEVERAGED
            </p>

            {/* Chips: desktop = 2 rows; mobile stacks automatically */}
            <div className="mt-4 space-y-3">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {["RESEARCH", "USER FLOWS", "USABILITY TESTING", "SKETCHING"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 lg:px-4 lg:py-2 text-[8px] lg:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10 shadow-sm"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {[
                  "WIREFRAMING",
                  "PROTOTYPING",
                  "RESPONSIVE DESIGN",
                  "UI CREATION",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 lg:px-4 lg:py-2 text-[8px] lg:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10 shadow-sm"
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

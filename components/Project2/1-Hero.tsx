// components/Project2/HeroOverviewCamping.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function HeroOverviewCamping() {
  return (
    <section className="w-screen min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6 pt-16 md:pt-20 pb-16">
        {/* ---------- HEADER ---------- */}
        <div className="text-center">
          <SectionHeader
            kicker="RESPONSIVE WEBSITE DESIGN"
            title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
            align="center"
            accent="camp"
            kickerClassName="text-[8px] md:text-xs text-emerald-400"
            titleClassName="text-sm md:text-2xl lg:text-3xl max-w-[720px] mx-auto mt-3"
          />
        </div>

        {/* ---------- HERO IMAGE ---------- */}
        <div className="relative mt-8 md:mt-12 flex items-end justify-center">
          {/* Emerald glow — still visible but tighter */}
          <div className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[1200px] max-w-[96vw] aspect-[2/1] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.32),rgba(0,0,0,0)_70%)] blur-[150px]" />

          {/* Pedestal shadow */}
          <div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[560px] max-w-[90vw] h-[80px] rounded-full bg-black/80 blur-[80px] opacity-70" />

          <Image
            src="/images/project2-images/camping-hero-laptop.png"
            alt="ELMNT camping website homepage mockup"
            width={1400}
            height={900}
            className="relative z-10 w-[74%] max-w-[820px] h-auto rounded-2xl"
            priority
          />
        </div>

        {/* ---------- OVERVIEW ---------- */}
        <div className="mt-12 grid md:grid-cols-2 md:gap-8 md:items-start">
          {/* LEFT — Project & Role */}
          <div>
            <p className="text-[10px] tracking-[0.22em] text-emerald-400">PROJECT</p>
            <p className="mt-1 text-xs md:text-sm text-white/95">
              Design a responsive website for a camping e-commerce experience.
            </p>

            <p className="mt-5 text-[10px] tracking-[0.22em] text-emerald-400">ROLE</p>
            <p className="mt-1 text-xs md:text-sm text-white/95">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-6 md:mt-0">
            <p className="text-[10px] tracking-[0.22em] text-emerald-400">DURATION</p>
            <p className="mt-1 text-xs md:text-sm text-white/95">May 2025 – July 2025</p>

            <p className="mt-5 text-[10px] tracking-[0.22em] text-emerald-400">
              UX/UI SKILLSETS LEVERAGED
            </p>

            <div className="mt-3 space-y-2">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["RESEARCH", "USER FLOWS", "USABILITY TESTING", "SKETCHING"].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[11px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {["WIREFRAMING", "PROTOTYPING", "RESPONSIVE DESIGN", "UI CREATION"].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[11px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
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

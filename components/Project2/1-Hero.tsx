"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function HeroOverviewCamping() {
  return (
    <section className="w-screen bg-black text-white flex flex-col justify-center py-10 md:py-14">
      <div className="mx-auto w-full max-w-[950px] px-4 md:px-6">
        {/* ---------- HEADER ---------- */}
        <div className="text-center">
          <SectionHeader
            kicker="RESPONSIVE WEBSITE DESIGN"
            title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
            align="center"
            accent="camp"
            kickerClassName="text-[7px] md:text-xs text-emerald-400"
            titleClassName="text-sm md:text-xl lg:text-2xl max-w-[600px] mx-auto mt-2"
          />
        </div>

        {/* ---------- HERO IMAGE ---------- */}
        <div className="relative mt-6 md:mt-8 flex items-end justify-center">
          {/* Emerald glow */}
          <div className="pointer-events-none absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[90vw] aspect-[2/1] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25),rgba(0,0,0,0)_70%)] blur-[90px]" />

          {/* Pedestal shadow */}
          <div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[380px] max-w-[85vw] h-[60px] rounded-full bg-black/80 blur-[60px] opacity-70" />

          <Image
            src="/images/project2-images/camping-hero-laptop.png"
            alt="ELMNT camping website homepage mockup"
            width={1000}
            height={650}
            className="relative z-10 w-[70%] max-w-[600px] h-auto rounded-2xl"
            priority
          />
        </div>

        {/* ---------- OVERVIEW ---------- */}
        <div className="mt-8 grid md:grid-cols-2 md:gap-6 md:items-start text-[11px] md:text-[12px] leading-snug">
          {/* LEFT — Project & Role */}
          <div>
            <p className="text-[9px] tracking-[0.22em] text-emerald-400">PROJECT</p>
            <p className="mt-1 text-white/90">
              Design a responsive website for a camping e-commerce experience.
            </p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-emerald-400">ROLE</p>
            <p className="mt-1 text-white/90">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-5 md:mt-0">
            <p className="text-[9px] tracking-[0.22em] text-emerald-400">DURATION</p>
            <p className="mt-1 text-white/90">May 2025 – July 2025</p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-emerald-400">
              UX/UI SKILLSETS LEVERAGED
            </p>

            <div className="mt-2 space-y-2">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
                {["RESEARCH", "USER FLOWS", "USABILITY TESTING", "SKETCHING"].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-emerald-400/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[10px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2">
                {["WIREFRAMING", "PROTOTYPING", "RESPONSIVE DESIGN", "UI CREATION"].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-emerald-400/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[10px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
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

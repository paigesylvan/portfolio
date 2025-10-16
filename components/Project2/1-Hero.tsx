"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function HeroOverviewCamping() {
  return (
    <section className="w-screen min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="mx-auto w-full max-w-[1000px] px-6 pt-20 pb-24">
        {/* ---------- HEADER ---------- */}
        <div className="text-center">
          <SectionHeader
            kicker="RESPONSIVE WEBSITE DESIGN"
            title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
            align="center"
            accent="camp"
            kickerClassName="text-[8px] md:text-sm text-emerald-400"
            titleClassName="text-md md:text-3xl lg:text-4xl max-w-[800px] mx-auto mt-3"
          />
        </div>

        {/* ---------- HERO IMAGE ---------- */}
        <div className="relative mt-10 lg:mt-16 flex items-end justify-center">
          {/* Emerald glow — larger and softer */}
          <div className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[1600px] max-w-[96vw] aspect-[2/1] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),rgba(0,0,0,0)_70%)] blur-[180px]" />

          {/* Pedestal shadow */}
          <div className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[700px] max-w-[92vw] h-[90px] rounded-full bg-black/80 blur-[90px] opacity-70" />

          <Image
            src="/images/project2-images/camping-hero-laptop.png"
            alt="ELMNT camping website homepage mockup"
            width={1600}
            height={1000}
            className="relative z-10 w-[78%] max-w-[900px] h-auto rounded-2xl"
            priority
          />
        </div>

        {/* ---------- OVERVIEW ---------- */}
        <div className="mt-16 grid md:grid-cols-2 md:gap-12 md:items-start">
          {/* LEFT — Project & Role */}
          <div>
            <p className="text-[10px] tracking-[0.22em] text-emerald-400">PROJECT</p>
            <p className="mt-1 text-xs md:text-base text-white/95">
              Design a responsive website for a camping e-commerce experience.
            </p>

            <p className="mt-6 text-[10px] tracking-[0.22em] text-emerald-400">ROLE</p>
            <p className="mt-1 text-xs md:text-base text-white/95">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* RIGHT — Duration & Skills */}
          <div className="mt-6 md:mt-0">
            <p className="text-[10px] tracking-[0.22em] text-emerald-400">DURATION</p>
            <p className="mt-1 text-xs md:text-base text-white/95">May 2025 – July 2025</p>

            <p className="mt-6 text-[10px] tracking-[0.22em] text-emerald-400">
              UX/UI SKILLSETS LEVERAGED
            </p>

            <div className="mt-4 space-y-3">
              {/* Row 1 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 lg:gap-3">
                {["RESEARCH", "USER FLOWS", "USABILITY TESTING", "SKETCHING"].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 lg:px-3 lg:py-2 text-[9px] md:text-[12px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 lg:gap-3">
                {[
                  "WIREFRAMING",
                  "PROTOTYPING",
                  "RESPONSIVE DESIGN",
                  "UI CREATION",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-1 lg:px-3 lg:py-2 text-[9px] md:text-[12px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
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

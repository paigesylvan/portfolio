"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function HeroOverviewCamping() {
  return (
    <section className="bg-black text-white py-10 md:py-14 lg:mt-[50px] px-4 md:px-6">
      {/* ✅ Whole section constrained */}
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader
          kicker="RESPONSIVE WEBSITE DESIGN"
          title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
          align="left"
          kickerClassName="text-[7px] md:text-xs text-emerald-400"
          titleClassName="text-md md:text-2xl lg:text-3xl max-w-[650px] mt-2"
        />

        {/* hero image */}
        <div className="relative mt-6 md:mt-8 flex items-end justify-center">
          <div
            className="absolute inset-0 z-0 pointer-events-none
              left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[400px] h-[260px]
              lg:w-[600px] lg:h-[300px]"
            style={{
              background: [
                "radial-gradient(400px 300px at 50% 55%, rgba(0,255,150,0.85) 0%, rgba(0,255,150,0.38) 45%, rgba(0,0,0,0) 75%)",
                "radial-gradient(800px 400px at 48% 60%, rgba(80,255,180,0.26) 0%, rgba(80,255,180,0.12) 48%, rgba(0,0,0,0) 80%)",
                "radial-gradient(500px 400px at 40% 72%, rgba(0,180,120,0.22) 0%, rgba(0,180,120,0.10) 44%, rgba(0,0,0,0) 78%)",
              ].join(", "),
              filter: "blur(120px)",
              opacity: 0.9,
              mixBlendMode: "screen",
            }}
          />

          <Image
            src="/images/project2-images/camping-hero-laptop.png"
            alt="ELMNT camping website homepage mockup"
            width={1000}
            height={650}
            className="relative z-10 w-full max-w-[600px] h-auto rounded-2xl"
            priority
          />
        </div>

        {/* overview */}
        <div className="mt-8 grid md:grid-cols-2 md:gap-6 md:items-start text-[12px] md:text-[13px] leading-snug">
          {/* left */}
          <div>
            <p className="text-[9px] tracking-[0.22em] text-emerald-400">PROJECT</p>
            <p className="mt-[2px] text-white/90">
              Design a responsive website for a camping e-commerce experience.
            </p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-emerald-400">ROLE</p>
            <p className="mt-[2px] text-white/90">
              UX/UI Designer, Researcher, Visual Designer, Usability Tester
            </p>
          </div>

          {/* right */}
          <div className="mt-5 md:mt-0">
            <p className="text-[9px] tracking-[0.22em] text-emerald-400">DURATION</p>
            <p className="mt-[2px] text-white/90">May 2025 – July 2025</p>

            <p className="mt-3 text-[9px] tracking-[0.22em] text-emerald-400">
              UX/UI SKILLSETS LEVERAGED
            </p>

            <div className="mt-2 space-y-2">
              <div className="flex flex-wrap justify-start gap-1.5 md:gap-2">
                {["Research", "User Flows", "Usability Testing", "Sketching"].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[12px] md:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-start gap-1.5 md:gap-2">
                {["Wireframing", "Prototyping", "Responsive Design", "UI Creation"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-xl border border-emerald-400/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[12px] md:text-[13px] tracking-wide text-white/95 ring-1 ring-inset ring-emerald-400/10"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="w-full bg-black text-white py-16 lg:py-24 px-4 md:px-6">
      <div className="mx-auto w-full max-w-[1100px]">
        <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="left" />

        {/* 1/3 text + 2/3 video on desktop */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* TEXT (1/3) */}
          <div className="lg:col-span-4">
            <p className="text-white/85 text-[12px] md:text-[13px] leading-snug">
              The final product is an intuitive and sleek e-commerce experience
              designed to help users feel confident while gearing up for the
              outdoors. Clear navigation, curated bundles, and simplified product
              details reduce decision fatigue and make selections feel guided
              rather than overwhelming. Thoughtful information hierarchy and
              reassuring microcopy support users at every step, while a clean,
              modern visual style reinforces trust and brand clarity. The result
              is a shopping experience that transforms uncertainty into
              excitement, empowering users to explore nature with confidence and
              the right gear for their adventure.
            </p>
          </div>

          {/* VIDEO (2/3) */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <video
                src="/images/project2-images/final-design-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

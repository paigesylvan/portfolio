"use client";

import SectionHeader from "../SectionHeader";
import Link from "next/link";

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
            <div className="mt-6">
              <Link
                href="https://www.figma.com/proto/v3HyYQPBXbfa7hmWQCqBHT/ELMNT?node-id=2-369&t=EqKWEQ2hC4xkfQhz-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  rounded-full px-5 py-2.5
                  text-[12px] font-medium text-white
                  bg-white/[0.06] backdrop-blur-md
                  border border-white/10
                  shadow-[0_3px_12px_rgba(0,0,0,0.3)]
                  transition-all duration-300
                  hover:bg-white/[0.15]
                  hover:shadow-[0_5px_18px_rgba(0,0,0,0.45)]
                  focus-visible:ring-2 focus-visible:ring-white/40
                "
              >
                View Figma Prototype
                <span
                  className="
                    flex items-center justify-center
                    w-6 h-6 rounded-full
                    bg-white/10
                    transition-all duration-300
                    group-hover:bg-white/30
                    group-hover:translate-x-1
                  "
                >
                  ➜
                </span>
              </Link>
            </div>
          </div>

          {/* VIDEO (2/3) */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden ">
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

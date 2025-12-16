"use client";

import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex flex-col items-center justify-center px-6 text-white mt-24 lg:mt-18 mb-8 lg:mb-0">
      <div className="w-full max-w-[1000px]">
        <div className="mt-10 grid md:grid-cols-2 md:gap-12 gap-10 items-start">
          {/* LEFT: header + copy */}
          <div className="text-center md:text-left">
            <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="left" />

            <p className="text-left mt-4 text-white/85 leading-tight text-[12px] md:text-[13px] mx-auto md:mx-0">
              The final product is an intuitive and sleek e-commerce experience designed to help
              users feel confident while gearing up for the outdoors. Clear navigation, curated bundles,
              and simplified product details reduce decision fatigue and make selections feel guided rather
              than overwhelming. Thoughtful information hierarchy and reassuring microcopy support users at
              every step, while a clean, modern visual style reinforces trust and brand clarity. The result
              is a shopping experience that transforms uncertainty into excitement, empowering users to explore
              nature with confidence and the right gear for their adventure.
            </p>

            {/* DESKTOP */}
            <Link
              href="https://www.figma.com/proto/v3HyYQPBXbfa7hmWQCqBHT/ELMNT?node-id=2-369&p=f&t=zbiMKYwlGTMUTF94-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:inline-flex
                group relative mt-6 items-center gap-3
                rounded-full px-6 py-3 font-medium text-white text-[14px]
                bg-white/[0.06] backdrop-blur-md
                shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                border border-white/10
                transition-all duration-300
                hover:bg-white/[0.15] hover:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                focus-visible:ring-2 focus-visible:ring-white/40
              "
            >
              <span>View Figma Prototype</span>
              <span
                className="
                  flex items-center justify-center
                  w-7 h-7 rounded-full bg-white/10
                  transition-all duration-300
                  group-hover:bg-white/30
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>

          {/* RIGHT: laptop/video */}
          <div className="flex flex-col items-center md:items-end">
            <div className="overflow-hidden w-full max-w-[950px] py-6 md:py-0">
              <video
                src="/images/project2-images/final-design-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>

            {/* MOBILE */}
            <Link
              href="https://www.figma.com/proto/v3HyYQPBXbfa7hmWQCqBHT/ELMNT?node-id=2-369&p=f&t=zbiMKYwlGTMUTF94-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                md:hidden
                group relative mt-6 inline-flex items-center gap-2
                rounded-full px-5 py-2.5 font-medium text-white text-[12px]
                bg-white/[0.06] backdrop-blur-md
                shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                border border-white/10
                transition-all duration-300
                hover:bg-white/[0.15] hover:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                focus-visible:ring-2 focus-visible:ring-white/40
              "
            >
              <span>View Figma Prototype</span>
              <span
                className="
                  flex items-center justify-center
                  w-6 h-6 rounded-full bg-white/10
                  transition-all duration-300
                  group-hover:bg-white/30
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

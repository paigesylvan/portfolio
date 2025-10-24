"use client";

import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36 lg:mt-0 ">
      <div className="max-w-[1100px] w-full mx-auto text-center md:text-left">
        {/* Header */}
        <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="center" />

        {/* Content grid: column on mobile, row on desktop */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text column */}
          <div>
            <p className="text-white/85 leading-tight text-sm lg:text-[16px] md:text-[17px] max-w-[480px] mx-auto md:mx-0">
              The biggest challenge was balancing simplicity with trust—early versions felt
              either too bare or too cluttered. Iterative testing helped refine booking flows,
              add multi-dog support, and build credibility with groomer bios and status updates.
              The outcome was a streamlined, reassuring app that simplified scheduling while
              boosting user confidence.
            </p>

            {/* Link to Figma */}
            <Link
              href="https://www.figma.com" // replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_4px_0_0_#7FB2FF] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              LINK TO FIGMA
            </Link>
          </div>

          {/* Video column */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden">
              <video
                src="/images/project1-images/final-design.mp4" // replace with your video path
                width={420}
                height={860}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-[260px] md:w-[320px] rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="max-w-[1100px] w-full mx-auto text-center md:text-left">
        {/* Header */}
        <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="center" />

        {/* Content grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <p className="text-white/85 leading-relaxed text-[16px] md:text-[17px] max-w-[480px] mx-auto md:mx-0">
              The biggest challenge was balancing simplicity with trust—early versions felt
              either too bare or too cluttered. Iterative testing helped refine booking flows,
              add multi-dog support, and build credibility with groomer bios and status updates.
              The outcome was a streamlined, reassuring app that simplified scheduling while
              boosting user confidence.
            </p>

            {/* Link to Figma */}
            <Link
              href="https://www.figma.com" // replace with your real Figma file link
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-black shadow-[0_4px_0_0_#7FB2FF] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              LINK TO FIGMA
            </Link>
          </div>

          {/* Image column */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <Image
                src="/project1/final-design.png"
                alt="Final design preview of the Pampered Paws app"
                width={420}
                height={860}
                className="h-auto w-[260px] md:w-[320px] rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

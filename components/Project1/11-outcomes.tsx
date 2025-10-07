"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function ChallengesOutcomes() {
  return (
    <section className="flex min-h-[100svh] items-center justify-center px-6 text-white">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        {/* Header (left-aligned to match your mock) */}
        <SectionHeader
          kicker="TESTING & OUTCOME"
          title="Challenges & Outcomes"
          align="left"
        />

        <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
          {/* Left: copy + button */}
          <div>
            <p className="text-white/85 leading-relaxed text-[16px] md:text-[17px] max-w-[520px]">
              The biggest challenge was balancing simplicity with trust—early versions
              felt either too bare or too cluttered. Iterative testing helped refine
              booking flows, add multi-dog support, and build credibility with groomer
              bios and status updates. The outcome was a streamlined, reassuring app
              that simplified scheduling while boosting user confidence.
            </p>

            <Link
              href="https://www.figma.com"  // ← replace with your real file
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black shadow-[0_4px_0_0_#7FB2FF] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              LINK TO FIGMA
            </Link>
          </div>

          {/* Right: large style-guide image/card */}
          <div className="flex justify-center">
            <div className="w-full rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <Image
                src="/project1/ui-system.png"  // ← put your exported image here
                alt="Color, typography, and components style board"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function UsersSection() {
  return (
    <section className="px-4 lg:px-6 mt-12">
      {/* ✅ Whole section constrained */}
      <div className="mx-auto w-full max-w-[1000px] text-center">
        <SectionHeader
          kicker="USER PERSONAS"
          title="Who's Behind the Experience"
          align="center"
        />

        {/* Copy */}
        <p className="mx-auto mt-4 text-left text-white/80 text-xs lg:text-base leading-snug">
          After research, my next step was to understand the user.
          Based on market insights, I developed four user personas to
          align design choices with the diverse needs and challenges
          of pet owners.
        </p>

        {/* Image + Button */}
        <div className="mt-8 flex flex-col items-center">
          <Image
            src="/images/project1-images/dog-bg.png"
            alt="User personas"
            width={1800}
            height={1100}
            className="w-full max-w-[1000px] h-auto rounded-3xl shadow-2xl object-contain"
            priority
          />

          {/* Mobile button BELOW image */}
          <a
            href="/images/project1-images/ia-large.png"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 md:hidden inline-block rounded-full border border-white/10 
                       bg-white/[0.08] px-5 py-2 text-xs text-white 
                       hover:bg-white/[0.15] transition-all duration-200
                       shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            View Full Image
          </a>
        </div>
      </div>
    </section>
  );
}

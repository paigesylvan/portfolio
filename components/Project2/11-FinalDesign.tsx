"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36">
      <div className="max-w-[1100px] w-full mx-auto text-center md:text-left">
        {/* Header */}
        <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="center" />

   

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
    </section>
  );
}

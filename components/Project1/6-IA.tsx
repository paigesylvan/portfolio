"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function IA() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header using shared component */}
        <SectionHeader
          kicker="TURNING GOALS INTO APP FLOWS"
          title="Information Architecture"
          align="center"
        />

        {/* Intro text */}
        <p className="mx-auto mt-4 max-w-5xl text-center text-white/80 text-xs lg:text-xl leading-tight">
          The site map helps ensure that the structure of the app addresses user needs
          uncovered in research. My focus was to make information easily accessible, 
          with clear navigation for effortless booking and browsing.
        </p>

        {/* IA image */}
        <div className="mt-12 flex justify-center ">
          <div className="w-full p-2">
            <Image
              src="/images/project1-images/ia.png"  
              alt="Information Architecture diagram for dog grooming app"
              width={2000}
              height={1200}
              priority
              sizes="(min-width: 1024px) 60vw, 92vw"
              className="w-full h-auto rounded-xl"
            />
            <a
            href="/images/project1-images/ia-large.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block md:hidden mt-3 inline-block rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-xs md:text-sm text-white hover:bg-white/20 transition-all duration-200"
            >
            View Full Image
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

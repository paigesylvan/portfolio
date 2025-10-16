"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function IA() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-6 text-white">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Header using shared component */}
        <SectionHeader
          kicker="TURNING GOALS INTO APP FLOWS"
          title="Information Architecture"
          align="center"
        />

        {/* Intro text */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/80 text-xs md:text-sm lg:text-base leading-snug md:leading-normal">
          The site map helps ensure that the structure of the app addresses user needs
          uncovered in research. My focus was to make information easily accessible, 
          with clear navigation for effortless booking and browsing.
        </p>

        {/* IA image */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <div className="w-full p-2">
            <Image
              src="/images/project1-images/ia.png"
              alt="Information Architecture diagram for dog grooming app"
              width={2000}
              height={1200}
              priority
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="w-full h-auto rounded-xl"
            />

            {/* Mobile-only full view button */}
            <a
              href="/images/project1-images/ia-large.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden mt-3 mx-auto w-fit rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-xs text-white hover:bg-white/20 transition-all duration-200"
            >
              View Full Image
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

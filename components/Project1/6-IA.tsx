"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function IA() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-4 text-white py-10 md:py-14">
      <div className="w-full max-w-[850px] mx-auto">
        {/* header */}
        <SectionHeader
          kicker="INFORMATION ARCHITECTURE"
          title="Turning Goals Into App Flows"
          align="center"
        />

        {/* intro */}
        <p className="mx-auto mt-3 max-w-[300px] lg:max-w-4xl text-center text-white/75 text-[10px] md:text-base leading-snug md:leading-snug">
          My focus was to make information easily accessible with clear navigation for effortless booking and browsing. The site map helps ensure that the structure of the app consistently addresses user needs uncovered in my research. 
        </p>

        {/* image */}
        <div className="mt-6 md:mt-8 flex flex-col items-center justify-center">
          <div className="w-full p-1.5 md:p-2 max-w-[620px] md:max-w-[700px]">
            <Image
              src="/images/project1-images/ia.png"
              alt="Information Architecture diagram for dog grooming app"
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="w-full h-auto rounded-lg md:rounded-xl"
            />
          </div>

          {/* mobile button */}
          <a
            href="/images/project1-images/ia.png"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:hidden mx-auto inline-block rounded-full border border-white/10 
                       bg-white/[0.08] px-5 py-2 text-xs md:text-sm text-white 
                       hover:bg-white/[0.15] transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            View Full Image
          </a>
        </div>
      </div>
    </section>
  );
}

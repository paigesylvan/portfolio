"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function IA() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-4 text-white py-10 md:py-14">
      <div className="w-full max-w-[780px] mx-auto">
        {/* ---------- HEADER ---------- */}
        <SectionHeader
          kicker="TURNING GOALS INTO APP FLOWS"
          title="Information Architecture"
          align="center"
        />

        {/* ---------- INTRO TEXT ---------- */}
        <p className="mx-auto mt-3 max-w-[620px] text-center text-white/75 text-[10px] md:text-base leading-snug md:leading-snug">
          The site map helps ensure that the structure of the app addresses user needs
          uncovered in research. My focus was to make information easily accessible,
          with clear navigation for effortless booking and browsing.
        </p>

        {/* ---------- IA IMAGE ---------- */}
        <div className="mt-6 md:mt-8 flex justify-center">
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

            {/* ---------- MOBILE-ONLY FULL VIEW BUTTON ---------- */}
            <a
              href="/images/project1-images/ia-large.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden mt-3 mx-auto w-fit rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-[10px] text-white hover:bg-white/20 transition-all duration-200"
            >
              View Full Image
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

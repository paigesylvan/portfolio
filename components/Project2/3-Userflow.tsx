// components/Project2/UserFlow.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function UserFlow() {
  return (
    <section className="flex flex-col items-center justify-start px-4 md:px-6 text-white mt-12">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeader
          kicker="USER FLOW"
          title="Getting to Know the User"
          align="center"
        />

        <p className="text-xs md:text-sm lg:text-md mx-auto mt-2 lg:mt-4 max-w-[300px] lg:max-w-6xl text-center text-white/80 leading-snug md:leading-normal pb-6">
          To better understand the user decision-making process while on a store website, I created a user journey map.
          This helped identify moments of confusion and stress across the shopping experience, as
          well as opportunities to simplify decision-making with clear guidance.
        </p>

        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/project2-images/userflow.png"
            alt="User flow journey map"
            width={900}
            height={900}
            priority
            sizes="(min-width: 900px) 50vw, 90vw"
            className="w-full h-auto rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.45)] object-contain"
          />
        </div>

        {/* Mobile-only: view full image */}
        <a
          href="/images/project2-images/userflow.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden mt-6 mx-auto w-fit rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-xs text-white hover:bg-white/20 transition-all duration-200"
        >
          View Full Image
        </a>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function MindMap() {
  return (
    <section className="flex flex-col items-center justify-start px-4 md:px-6 text-white pt-24 md:pt-28">
      <div className="max-w-[1000px] w-full mx-auto text-left">
        <SectionHeader
          kicker="MIND MAP"
          title="Connecting Insights"
          align="center"
        />

        <p className="mx-auto mt-2 lg:mt-4  text-white/85 leading-snug text-[12px] md:text-[13px]">
          After mapping the user journey, I created a mind map to explore how different user goals,
          pain points, and personas could translate into the website’s needs and features.
          This helped visualize the relationships between problems and possible solutions,
          ensuring design priorities aligned with user and business goals.
        </p>

        {/* Large Image */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="relative w-full max-w-[700px]">
            <Image
              src="/images/project2-images/mindmap.png"
              alt="Mind map visualizing connections between user needs and features"
              width={900}
              height={900}
              priority
              sizes="(min-width: 890px) 60vw, 80vw"
              className="w-full h-auto rounded-2xl object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* Mobile */}
        <a
          href="/images/project2-images/mindmap.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden mt-3 mx-auto w-fit rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-xs text-white hover:bg-white/20 transition-all duration-200"
        >
          View Full Image
        </a>
      </div>
    </section>
  );
}

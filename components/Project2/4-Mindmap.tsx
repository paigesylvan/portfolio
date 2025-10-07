"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function MindMap() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-start px-4 md:px-10 text-white pt-32 md:pt-40">
      <div className="max-w-[1600px] w-full mx-auto text-center">
        <SectionHeader
          kicker="CONNECTING INSIGHTS"
          title="Mind Map"
          align="center"
        />

        <p className="mx-auto mt-6 max-w-3xl text-white/85 leading-relaxed text-[17px] md:text-[18px]">
          After mapping the user journey, I created a mind map to explore how different user goals,
          pain points, and personas could translate into the website’s needs and features.
          This helped visualize the relationships between problems and possible solutions,
          ensuring design priorities aligned with user and business goals.
        </p>

        {/* Large Image */}
        <div className="mt-24 flex justify-center">
          <div className="relative w-full max-w-[2000px]">
            <Image
              src="/images/project2-images/mindmap.png"
              alt="Mind map visualizing connections between user needs and features"
              width={800}
              height={600}
              priority
              className="w-full  rounded-3xl object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

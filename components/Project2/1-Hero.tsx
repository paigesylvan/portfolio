"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Hero() {
  return (
    <div className=" w-full max-w-[1200px] mx-auto flex flex-col items-center text-center">
      {/* Header */}
      <SectionHeader
        kicker="RESPONSIVE WEBSITE DESIGN"
        title="How Thoughtful UX Design Increased Engagement for First-Time Campers"
        align="center"
      />

      {/* Laptop mockup with glow */}
      <div className="relative mt-16">
        {/* Green glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] aspect-[2/1] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,150,80,0.25),rgba(0,0,0,0)_60%)] blur-2xl" />

        {/* Laptop image */}
        <div className="relative z-10 flex justify-center">
          <Image
            src="/images/project2-images/camping-hero-laptop.png"
            alt="ELMNT camping website homepage mockup"
            width={1200}
            height={800}
            className="w-[75%] h-auto rounded-2xl ring-1 ring-white/10"
            priority
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function UsersSection() {
  return (
    <div className=" lg:mt-12">
<div className="w-full max-w-[900px] mx-auto ">
<SectionHeader
        kicker="USER PERSONAS"
        title="Who's Behind the Experience"
        align="center"
      />
</div>


      <p className="mx-auto mt-4 max-w-[300px] lg:max-w-4xl text-left text-white/80 text-xs lg:text-base">
        After research, my next step was to understand the user.
        Based on market insights, I developed four user personas to
        align design choices with the diverse needs and challenges
        of pet owners.
      </p>

      {/* Image + Button */}
      <div className="flex flex-col items-center justify-center mt-6 md:mt-10">
        <Image
          src="/images/project1-images/dog-bg.png"
          alt="User personas"
          width={1800}
          height={1100}
          className="max-w-[90%] md:max-w-[85%] h-auto rounded-3xl shadow-2xl object-contain mt-8 lg:mt-0"
          priority
        />

        {/* Mobile button BELOW image */}
        <a
          href="/images/project1-images/ia-large.png"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 md:hidden inline-block rounded-full border border-white/10 
                     bg-white/[0.08] px-5 py-2 text-xs md:text-sm text-white 
                     hover:bg-white/[0.15] transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
        >
          View Full Image
        </a>
      </div>
    </div>
  );
}

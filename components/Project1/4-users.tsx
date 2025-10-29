// components/Project1/4-users.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function UsersSection() {
  return (
    <div className="mx-auto w-[92%] md:w-[70%] lg:mt-12">
      <SectionHeader
        kicker="USER PERSONAS"
        title="Who's Behind the Experience"
        align="center"
      />
        <p className="mx-auto mt-4 max-w-4xl text-center text-white/80 lg:text-base">
        After research, my next to step was to understand the user.
        Based on market insights, I developed four user personas to understand and align design choices with the diverse needs and challenges of pet owners.
        </p>

      <div className="flex items-center justify-center">
        <Image
          src="/images/project1-images/dog-bg.png"
          alt="User personas"
          width={1800}
          height={1100}
          className="max-w-[90%] md:max-w-[85%] h-auto rounded-3xl shadow-2xl object-contain"
          priority
        />

        <a
  href="/images/project1-images/users-large.png"
  target="_blank"
  rel="noopener noreferrer"
  className="block md:hidden mt-3 inline-block rounded-xl border border-white/10 bg-white/10 px-5 py-2 text-xs md:text-sm text-white hover:bg-white/20 transition-all duration-200"
>
  View Full Image
</a>
      </div>
    </div>
  );
}

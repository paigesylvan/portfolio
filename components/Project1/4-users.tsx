// components/Project1/4-users.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function UsersSection() {
  return (
    <div className="mx-auto w-[92%] md:w-[70%]">
      <SectionHeader
        kicker="USER PERSONAS"
        title="Who We’re Designing For"
        align="center"
      />
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">
        Based on market insights, I developed four user personas to align design choices with the diverse needs and challenges of pet owners.
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
      </div>
    </div>
  );
}

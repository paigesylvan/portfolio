"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function UserFlow() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-start px-4 md:px-10 text-white pt-32 md:pt-40">
        <div className="mx-auto w-[92%] md:w-[70%]">
      <SectionHeader
        kicker="GETTING TO KNOW THE USER"
        title="User Flow"
        align="center"
      />
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/80">
        To better understand the camper’s decision-making process, I created a user journey map.
          This helped identify moments of confusion and stress across the shopping experience, as
          well as opportunities to simplify decision-making with clear guidance.
        </p>

        <div className="flex items-center justify-center">
        <Image
          src="/images/project2-images/userflow.png"
          alt="User flow journey map"
          width={2800}
          height={1100}
          className="max-w-[90%] h-auto rounded-3xl shadow-2xl object-contain"
          priority
        />
      </div>
      </div>
    </section>
  );
}

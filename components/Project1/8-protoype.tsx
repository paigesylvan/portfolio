"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Prototype() {
  return (
    <section className="w-full text-white mt-24 md:mt-0 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1000px] flex flex-col justify-center">
        {/* Header + copy */}
        <div className="text-left">
          <SectionHeader
            kicker="LOW FIDELITY TESTING"
            title="Prototypes"
            align="left"
          />

          <p className="mt-3 text-left text-[12px] md:text-[13px] text-white/85 leading-snug max-w-[720px]">
            After exploring different page layouts, I refined my wireframes into
            low-fidelity prototypes. Connecting the pages helped validate
            navigation, booking flows, and onboarding interactions before moving
            into high-fidelity UI design.
          </p>
        </div>

        {/* Two prototypes */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Onboarding flow */}
          <div className="flex flex-col items-center md:col-span-1 w-full max-w-[520px] md:max-w-none mx-auto">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[340px] overflow-hidden rounded-xl">
                <Image
                  src="/images/project1-images/prototype-1.png"
                  alt="Low fidelity onboarding prototype flow"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 300px, 90vw"
                  priority
                />
              </div>
            </div>
            <p className="mt-3 tracking-[0.18em] uppercase text-center text-[10px] md:text-[11px] text-[#7FB2FF] font-semibold">
              ONBOARDING FLOW
            </p>
            <p className="mt-1 text-[10px] md:text-base text-white/70 max-w-[320px] text-center">
              Tested new-user introduction, account setup, and pet profile creation.
            </p>
          </div>

          {/* Booking flow */}
{/* Booking flow */}
<div className="flex flex-col items-center md:col-span-2 w-full max-w-[720px] md:max-w-none mx-auto">
  <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full">
    <div className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden rounded-xl">
      <Image
        src="/images/project1-images/prototype-2.png"
        alt="Low fidelity booking prototype flow"
        fill
        className="object-contain"
        sizes="(min-width: 1024px) 600px, 90vw"
      />
    </div>
  </div>

  <p className="mt-3 tracking-[0.18em] uppercase text-center text-[10px] md:text-[11px] text-[#7FB2FF] font-semibold">
    BOOKING APPOINTMENT FLOW
  </p>
  <p className="mt-1 text-[10px] md:text-base text-white/70 max-w-[360px] text-center mb-24 lg:mb-0">
    Tested service selection, scheduling, and confirmation steps.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

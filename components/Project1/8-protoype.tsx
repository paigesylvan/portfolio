"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Prototype() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center text-white mt-24 md:mt-0">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6">
        {/* Header + copy (constrained to 900px) */}
        <div className="mx-auto w-full max-w-[900px] text-center mb-2">
          <SectionHeader
            kicker="LOW FIDELITY TESTING"
            title="Prototypes"
            align="center"
          />

          <p className="mt-3 text-left text-xs md:text-base text-white/85 leading-snug md:leading-normal">
            After exploring different page layouts, I refined my wireframes into
            low-fidelity prototypes. Connecting the pages helped validate
            navigation, booking flows, and onboarding interactions before moving
            into high-fidelity UI design.
          </p>
        </div>

        {/* Two prototypes */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Onboarding flow */}
          <div className="flex flex-col items-center md:col-span-1">
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
            <p className="mt-3 text-[11px] tracking-[0.18em] text-[#7FB2FF] uppercase">
              ONBOARDING FLOW
            </p>
            <p className="mt-1 text-xs md:text-sm text-white/70 max-w-[250px] lg:max-w-sm">
              Tested new-user introduction, account setup, and pet profile creation.
            </p>
          </div>

          {/* Booking flow */}
          <div className="flex flex-col items-center md:col-span-2">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full">
              <div className="relative w-full aspect-[3/2] md:h-[340px] overflow-hidden rounded-xl">
                <Image
                  src="/images/project1-images/prototype-2.png"
                  alt="Low fidelity booking prototype flow"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 600px, 90vw"
                />
              </div>
            </div>
            <p className="mt-3 text-[11px] tracking-[0.18em] text-[#7FB2FF] uppercase">
              BOOKING APPOINTMENT FLOW
            </p>
            <p className="mt-1 text-xs md:text-sm text-white/70 max-w-[250px] lg:max-w-sm mb-24 lg:mb-0">
              Tested service selection, scheduling, and confirmation steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Project1/10-prototype.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Prototype() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="max-w-[1200px] w-full text-center">
        <SectionHeader
          kicker="LOW FIDELITY TESTING"
          title="Prototypes"
          align="center"
        />

        <p className="mx-auto mt-3 max-w-3xl text-white/85 leading-relaxed">
          I refined my wireframes into low-fidelity prototypes to validate navigation,
          booking flows, and onboarding interactions before moving into high-fidelity
          UI design.
        </p>

        {/* Two prototypes (Booking left, Onboarding right) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">


          {/* Onboarding Flow — 1/3 width (right) */}
          <div className="md:col-span-1 flex flex-col items-center">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full">
              <Image
                src="/images/project1-images/prototype-1.png"
                alt="Low fidelity onboarding prototype flow"
                width={2000}
                height={1000}
                className="w-full h-[460px] object-cover rounded-xl"
              />
            </div>
            <p className="mt-4 text-[12px] tracking-[0.18em] text-[#7FB2FF] uppercase">
              ONBOARDING FLOW
            </p>
            <p className="mt-1 text-sm text-white/70 max-w-sm">
              Tested new-user introduction, account setup, and pet profile creation.
            </p>
          </div>

                    {/* Booking Flow — 2/3 width (left) */}
                    <div className="md:col-span-2 flex flex-col items-center">
            <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full">
              <Image
                src="/images/project1-images/prototype-2.png"
                alt="Low fidelity booking prototype flow"
                width={2000}
                height={1000}
                className="w-full h-[460px] object-contain rounded-xl"
              />
            </div>
            <p className="mt-4 text-[12px] tracking-[0.18em] text-[#7FB2FF] uppercase">
              BOOKING APPOINTMENT FLOW
            </p>
            <p className="mt-1 text-sm text-white/70 max-w-sm">
              Validated service selection, scheduling, and confirmation steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

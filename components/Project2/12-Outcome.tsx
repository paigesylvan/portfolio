"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function OutcomeCamping() {
  return (
    <section className="px-4 md:px-6 text-white mt-24 lg:mt-0 pb-16">
      <div className="mx-auto w-full max-w-[900px] py-12 md:py-16">
        {/* Header */}
        <SectionHeader
          kicker="OUTCOME & RESULTS"
          title="A Simpler, More Trustworthy Camping Experience"
          align="center"
        />

        {/* short blurb */}
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/85 text-sm sm:text-base leading-snug">
          Iterations improved clarity on the homepage and confidence throughout checkout,
          especially for first-time campers. The result is a smoother, more guided experience
          that reduces overwhelm and builds trust with users.
        </p>

        {/* 2-column layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT — image card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-2 md:p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              {/* subtle pedestal shadow */}
              <div className="pointer-events-none absolute left-1/2 -bottom-5 -translate-x-1/2 w-[70%] h-6 rounded-full bg-black/70 blur-2xl opacity-50" />
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/project2-images/outcome-spec.png"
                  alt="Outcome and style overview for ELMNT Camping redesign"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain rounded-xl"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — outcome text */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            <h3 className="text-lg md:text-xl font-semibold">
              What improved after testing
            </h3>

            <ul className="mt-4 space-y-4 text-white/90 text-xs sm:text-sm leading-snug">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Improved Clarity:</span>{" "}
                  Users can now easily distinguish between Starter Bundle, Elemental
                  Collections, and Shop All — reducing confusion about ELMNT’s offerings.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Smoother Navigation:</span>{" "}
                  The homepage-to-checkout flow now has fewer steps and clearer calls-to-action,
                  minimizing hesitation and backtracking.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Increased Confidence:</span>{" "}
                  Curated bundles and supportive descriptions reduce decision fatigue.
                  Checkout details like quantity, returns, and shipping reinforced trust.
                </p>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Cross-Platform Consistency:</span>{" "}
                  Desktop and mobile experiences were aligned to maintain clarity and trust,
                  giving first-time campers the same guided experience across devices.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

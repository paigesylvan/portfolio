// components/Project2/Outcome.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function OutcomeCamping() {
  return (
    <section className="px-6 text-white">
      <div className="mx-auto w-full max-w-[1200px] py-16 md:py-24">
        {/* Header */}
        <SectionHeader
          kicker="OUTCOME & RESULTS"
          title="A Simpler, More Trustworthy Camping Experience"
          align="center"
        />

        {/* short blurb */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/90 leading-snug">
          Iterations improved clarity on the homepage and confidence throughout checkout,
          especially for first-time campers. The result is a smoother, more guided experience
          that reduces overwhelm and builds trust with users.
        </p>

        {/* 2-column layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT — image card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white/[0.05] ring-1 ring-white/10 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              {/* subtle pedestal shadow */}
              <div className="pointer-events-none absolute left-1/2 -bottom-6 -translate-x-1/2 w-[70%] h-8 rounded-full bg-black/70 blur-2xl opacity-50" />
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/project2-images/outcome-spec.png" // replace with your final outcome image
                  alt="Outcome and style overview for ELMNT Camping redesign"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — outcome text */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              What improved after testing
            </h3>

            <ul className="mt-6 space-y-5 text-white/90">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Improved Clarity:</span>{" "}
                  Users can now easily distinguish between Starter Bundle, Elemental
                  Collections, and Shop All — reducing confusion about ELMNT’s offerings.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Smoother Navigation:</span>{" "}
                  The homepage-to-checkout flow now has fewer steps and clearer calls-to-action,
                  minimizing hesitation and backtracking.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                <p>
                  <span className="font-semibold text-white">Increased Confidence:</span>{" "}
                  Curated bundles and supportive descriptions reduce decision fatigue.
                  Checkout details like quantity, returns, and shipping reinforced trust.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
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

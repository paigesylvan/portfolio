"use client";

import SectionHeader from "../SectionHeader";

const CARD =
  "rounded-2xl bg-white/[0.95] ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]";

export default function OutcomeCamping() {
  return (
    <section className="px-4 md:px-6 text-white mt-24 lg:mt-0 pb-16">
      <div className="mx-auto w-full max-w-[1100px] py-12 md:py-16">
        {/* Header */}
        <SectionHeader
          kicker="OUTCOME & RESULTS"
          title="A Simpler, More Trustworthy Camping Experience"
          align="center"
        />

        {/* 2-column layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT — mobile demo video */}
          <div className="lg:col-span-6">
            <div className="relative p-2 md:p-3">
              <div className="pointer-events-none absolute left-1/2 -bottom-5 -translate-x-1/2 w-[70%] h-6 rounded-full bg-black/70 blur-2xl opacity-50" />
              <div className="relative overflow-hidden">
                <video
                  src="/images/project2-images/elmnt-mobile-demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/images/project2-images/mobile-poster.jpg"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — separate but matching cards */}
          <div className="lg:col-span-6 mt-6 lg:mt-0 space-y-6">
            {/* Outcome card */}
            <div className={CARD}>
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

            {/* Next steps card (same style) */}
            <div className={CARD}>
              <h4 className="text-base md:text-lg font-semibold">Next steps</h4>
              <p className="mt-2 text-white/90 leading-snug text-sm">
                While the redesign addressed key issues of clarity, navigation, and confidence,
                there are opportunities to continue improving the experience:
              </p>

              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Validate with more users</p>
                    <p className="text-white/85">
                      Conduct additional usability tests with a larger group to confirm whether
                      the redesigned homepage and checkout flow solve the problems consistently.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Refine product copy</p>
                    <p className="text-white/85">
                      Test variations of bundle and collection descriptions to see which language
                      most effectively reassures beginners and reduces hesitation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold">Measure engagement</p>
                    <p className="text-white/85">
                      Track how users interact with bundles versus collections to evaluate which
                      entry points drive the most confident purchases.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* END right column */}
        </div>
      </div>
    </section>
  );
}

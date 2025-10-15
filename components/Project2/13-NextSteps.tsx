// components/Project2/NextSteps.tsx
"use client";

import SectionHeader from "../SectionHeader";

export default function NextStepsCamping() {
  return (
    <section className="px-6 text-white">
      <div className="mx-auto w-full max-w-[1200px] py-16 md:py-24">
        {/* Header */}
        <SectionHeader
          kicker="NEXT STEPS"
          title="Where to take this next"
          align="center"
          accent="camp"
        />

        {/* Card */}
        <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/[0.05] ring-1 ring-white/10 p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          <p className="text-white/90 leading-snug">
            While the redesign addressed key issues of clarity, navigation, and confidence,
            there are opportunities to continue improving the experience:
          </p>

          <ul className="mt-6 space-y-5">
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
    </section>
  );
}

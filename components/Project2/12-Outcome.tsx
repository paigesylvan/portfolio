"use client";

import SectionHeader from "../SectionHeader";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OutcomeCamping() {
  return (
    <section className="px-8 md:px-6 text-white mt-12 lg:mt-0">
      <div className="mx-auto w-full max-w-[900px] py-12 md:py-16">
        <SectionHeader
          kicker="OUTCOME & RESULTS"
          title="A Simpler, More Trustworthy Camping Experience"
          align="center"
        />

        {/* 2-column layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          {/* left - video */}
          <div className="lg:col-span-6 flex justify-center">
            <video
              src="/images/project2-images/elmnt-mobile-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/images/project2-images/mobile-poster.jpg"
              className="w-[300px] h-[480px] mt-6"
            />
          </div>

          {/* right - outcome */}
          <div className="lg:col-span-6 mt-6 flex flex-col gap-6">
            {/* Outcome bubble */}
            <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <h3 className="text-sm md:text-base font-semibold">
                What improved after testing
              </h3>
              <ul className="mt-3 space-y-3 text-[12px] md:text-[13px] leading-snug text-white/85">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Improved clarity:</span>{" "}
                    Clearer structure between Starter Bundles, Elemental Collections,
                    and Shop All, reducing confusion.
                  </p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Smoother navigation:</span>{" "}
                    Fewer steps and more visible calls-to-action reduce backtracking.
                  </p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Increased confidence:</span>{" "}
                    Curated bundles and clearer details lower decision fatigue.
                  </p>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <p>
                    <span className="font-semibold text-white">Cross-platform consistency:</span>{" "}
                    Mobile and desktop provide the same structured guidance.
                  </p>
                </li>
              </ul>
            </div>

            {/* Next Steps bubble */}
            <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <h4 className="text-xs md:text-sm font-semibold">Next steps</h4>
              <p className="mt-2 text-[12px] md:text-[13px] leading-snug text-white/85">
                Opportunities remain to continue improving confidence and clarity:
              </p>

              <ul className="mt-4 space-y-4 text-[12px] md:text-[13px] text-white/80 leading-snug">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Validate with more users</p>
                    <p>Ensure improvements hold true across diverse beginners.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Refine product copy</p>
                    <p>Test wording that most effectively reassures new campers.</p>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Measure engagement</p>
                    <p>Track which entry points drive confident purchases.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* next case link */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/projects/cleaners" 
            className="group text-[11px] sm:text-sm font-medium text-emerald-400 hover:text-white/20  flex items-center gap-2 transition-all"
          >
            Next Case Study
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-block"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

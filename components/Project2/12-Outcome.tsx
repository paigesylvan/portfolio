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
          
          {/* LEFT — video */}
          <div className="lg:col-span-6 flex flex-col items-center">
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

            {/* ✅ MOBILE: Next Case Study under video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center lg:hidden"
            >
              <Link
                href="/projects/cleaners"
                className="group text-[11px] sm:text-sm font-medium text-emerald-400 hover:text-white/70 flex items-center gap-2 transition-all"
              >
                Next Case Study
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — outcome content */}
          <div className="lg:col-span-6 mt-6 flex flex-col gap-6">
            
            {/* Outcome bubble */}
            <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <h3 className="text-sm md:text-base font-semibold">
                What improved after testing
              </h3>
              <ul className="mt-3 space-y-3 text-[12px] md:text-[13px] leading-snug text-white/85">
                {[
                  {
                    title: "Improved clarity",
                    text:
                      "Clearer structure between Starter Bundles, Elemental Collections, and Shop All.",
                  },
                  {
                    title: "Smoother navigation",
                    text:
                      "Fewer steps and more visible calls-to-action reduce backtracking.",
                  },
                  {
                    title: "Increased confidence",
                    text:
                      "Curated bundles and clearer details lower decision fatigue.",
                  },
                  {
                    title: "Cross-platform consistency",
                    text:
                      "Mobile and desktop provide the same structured guidance.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <p>
                      <span className="font-semibold text-white">
                        {item.title}:
                      </span>{" "}
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Next Steps bubble */}
            <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <h4 className="text-xs md:text-sm font-semibold">Next steps</h4>
              <p className="mt-2 text-[12px] md:text-[13px] leading-snug text-white/85">
                Opportunities remain to continue improving confidence and clarity:
              </p>

              <ul className="mt-4 space-y-4 text-[12px] md:text-[13px] text-white/80 leading-snug">
                {[
                  {
                    title: "Validate with more users",
                    text:
                      "Ensure improvements hold true across diverse beginners.",
                  },
                  {
                    title: "Refine product copy",
                    text:
                      "Test wording that most effectively reassures new campers.",
                  },
                  {
                    title: "Measure engagement",
                    text:
                      "Track which entry points drive confident purchases.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
          className="mt-20 md:mt-24 mb-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/projects/cleaners"
            prefetch={false}
            className="group inline-flex items-center gap-2 text-[11px] sm:text-sm text-[#00C67C] hover:text-white/20 transition-all duration-300"
          >
            <span>Next Case Study</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

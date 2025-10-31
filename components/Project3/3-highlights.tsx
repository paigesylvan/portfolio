"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HighlightsDryCleaner() {
  return (
    <section className="flex py-10 md:py-12 text-white px-4 mt-8 lg:mt-12">
      <div className="mx-auto w-full max-w-[820px]">
        <div className="grid gap-8 md:gap-10 md:grid-cols-12 items-start">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[250px] md:max-w-[300px]">
              <div className="rounded-[32px] bg-white/[0.03] p-3 shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/project3-images/phone-hero.png"
                  alt="Quick Cleaners mobile hero"
                  width={100}
                  height={500}
                  className="rounded-[26px] w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-7 space-y-4 md:space-y-5 px-8">
            {/* Card 1 */}
            <div className="rounded-xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">DESIGN DECISIONS</p>
              <div className="mt-2 text-white/85">
                <p className="font-semibold text-white text-[13px] md:text-sm mt-2">Responsive Layout:</p>
                <p className="text-[13px] md:text-sm">
                  Mobile-first browsing with scroll-triggered card flip effects.
                </p>

                <p className="font-semibold text-white text-[13px] md:text-sm mt-2">Service Cards:</p>
                <p className="text-[13px] md:text-sm">
                  Clear service descriptions without pricing due to competitive industry.
                </p>

                <p className="font-semibold text-white text-[13px] md:text-sm mt-2">Trust Signals:</p>
                <p className="text-[13px] md:text-sm">
                  Showcased owner’s story to build familiarity and credibility.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">DEVELOPMENT HIGHLIGHTS</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-white/85 text-[13px] md:text-sm">
                <li>Semantic HTML, JavaScript, Tailwind CSS</li>
                <li>Utility classes for faster iteration</li>
                <li>Smooth scroll interactions</li>
                <li>Static deployment for speed</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">OUTCOME</p>
              <p className="mt-2 text-white/85 text-[13px] md:text-sm">
                A welcoming digital storefront that improves confidence and clarity for users.
              </p>
            </div>

            <Link
              href="https://www.quickcleanersandlaundry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative mt-6 inline-flex items-center gap-2
                rounded-full px-5 py-2.5 font-medium text-white text-[13px]
                bg-white/[0.06] backdrop-blur-md
                border border-white/10
                shadow-[0_3px_12px_rgba(0,0,0,0.3)]
                transition-all duration-300
                hover:bg-white/[0.15] hover:shadow-[0_5px_18px_rgba(0,0,0,0.45)]
                focus-visible:ring-2 focus-visible:ring-white/40
              "
            >
              Website Link
              <span
                className="
                  flex items-center justify-center
                  w-6 h-6 rounded-full
                  bg-white/10
                  transition-all duration-300
                  group-hover:bg-white/30
                  group-hover:translate-x-1
                "
              >
                ➜
              </span>
            </Link>
          </div>
        </div>

        {/* View Experience Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/experience" 
            className="group text-[11px] sm:text-sm font-medium text-[#D6A75E] hover:text-white/20 flex items-center gap-2 transition-all"
          >
            View My Experience
            <motion.span
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
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

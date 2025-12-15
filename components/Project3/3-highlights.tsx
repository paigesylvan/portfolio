"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HighlightsDryCleaner() {
  return (
    <section className="w-full bg-black text-white px-4 py-10 md:py-12 mt-8 lg:mt-12">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] md:max-w-[360px] flex flex-col items-center">
              <div className="w-full rounded-[32px] bg-white/[0.03] p-3 ring-1 ring-white/10 shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/project3-images/phone-hero.png"
                  alt="Quick Cleaners mobile hero"
                  width={900}
                  height={1800}
                  className="w-full h-auto rounded-[26px]"
                  priority
                />
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
                Visit Live Site
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

          {/* Right */}
          <div className="md:col-span-7 space-y-4 md:space-y-5 md:pl-10">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">
                DESIGN DECISIONS
              </p>

              <div className="mt-3 space-y-3 text-white/85">
                <div>
                  <p className="font-semibold text-white text-[13px] md:text-sm">
                    Responsive Layout:
                  </p>
                  <p className="text-[13px] md:text-sm">
                    Mobile-first browsing with scroll-triggered card flip effects.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white text-[13px] md:text-sm">
                    Service Cards:
                  </p>
                  <p className="text-[13px] md:text-sm">
                    Clear service descriptions without pricing due to competitive industry.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white text-[13px] md:text-sm">
                    Trust Signals:
                  </p>
                  <p className="text-[13px] md:text-sm">
                    Showcased owner’s story to build familiarity and credibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">
                DEVELOPMENT HIGHLIGHTS
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-white/85 text-[13px] md:text-sm">
                <li>Semantic HTML, JavaScript, and Tailwind CSS for a responsive, accessible layout</li>
                <li>Mobile-first structure and compressed assets for fast load times</li>
                <li>Integrated Google Analytics 4 to track real user behavior</li>
                <li>Basic on-page SEO (titles, meta descriptions, local keywords) to support Google search visibility</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">OUTCOME</p>
              <p className="mt-3 text-white/85 text-[13px] md:text-sm">
                After launch, the site began receiving consistent traffic from both direct visits and organic Google search.
                Google Analytics 4 shows users exploring multiple sections (services, hours, and contact) in a single visit,
                validating that the structure and content are easy to navigate for new customers.
              </p>
            </div>
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

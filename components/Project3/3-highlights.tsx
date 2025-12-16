"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HighlightsDryCleaner() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 py-20 md:py-24 mt-8 lg:mt-12">
      <div className="mx-auto w-full max-w-[1000px]">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center">
          {/* LEFT */}
          <div className="max-w-[560px]">
            <p className="text-[11px] tracking-[0.22em] accent-text">
              PROJECT OUTCOME
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
              Development Highlights & Outcome
            </h2>

            {/* Development highlights */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.22em] accent-text">
                DEVELOPMENT HIGHLIGHTS
              </p>

              <ul className="mt-3 list-disc space-y-2 pl-4 text-white/80 text-[12px] md:text-[13px] leading-relaxed">
                <li>
                  Semantic HTML, JavaScript, and Tailwind CSS for a responsive,
                  accessible layout
                </li>
                <li>
                  Mobile-first structure and compressed assets for fast load times
                </li>
                <li>Integrated Google Analytics 4 to track real user behavior</li>
                <li>
                  Basic on-page SEO (titles, meta descriptions, local keywords) to
                  support Google search visibility
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div className="mt-7">
              <p className="text-[11px] tracking-[0.22em] accent-text">OUTCOME</p>

              <p className="mt-3 text-white/75 text-[12px] md:text-[13px] leading-relaxed">
                After launch, the site began receiving consistent traffic from both
                direct visits and organic Google search. Google Analytics 4 shows
                users exploring multiple sections (services, hours, and contact) in
                a single visit, validating that the structure and content are easy
                to navigate for new customers.
              </p>
            </div>

            {/* Primary CTA only */}
            <div className="mt-8">
              <Link
                href="https://www.quickcleanersandlaundry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center gap-2
                  rounded-full px-5 py-2.5 font-medium text-white text-[12px]
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

          {/* RIGHT — phone */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              className="w-full max-w-[320px] md:max-w-[360px]"
            >
              <Image
                src="/images/project3-images/phone-hero.png"
                alt="Quick Cleaners mobile hero"
                width={900}
                height={1800}
                className="w-full h-auto rounded-[26px]"
                priority
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link
            href="/experience"
            className="group text-[11px] sm:text-sm font-medium text-[#D6A75E] hover:text-white/70 flex items-center gap-2 transition-all"
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

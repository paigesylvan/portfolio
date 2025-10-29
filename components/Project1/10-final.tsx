"use client";

import Link from "next/link";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

export default function FinalDesign() {
  return (
    <section className="flex flex-col items-center justify-center px-6 text-white mt-24 lg:mt-12">
      <div className="max-w-[1100px] w-full mx-auto text-center md:text-left">
        {/* Header */}
        <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="center" />

        {/* Content grid: video first on mobile, 2-col on desktop */}
        <div className="mt-10 grid md:grid-cols-2 md:gap-12 gap-10 items-center">
          {/* Video column (first in DOM so it shows above text on mobile) */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden">
              <video
                src="/images/project1-images/final-design.mp4"
                width={420}
                height={860}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-[200px] sm:w-[240px] md:w-[320px] rounded-xl object-contain"
              />
            </div>
          </div>

          {/* Text bubble */}
          <div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] max-w-[380px] mx-auto md:mx-0">
            <p className="text-white/85 leading-tight text-[11px] md:text-[16px]">
              Iterative testing refined the booking experience, strengthened multi-dog
              support, and increased trust through clearer groomer profiles, messaging,
              and appointment status updates. A key design challenge was balancing
              simplicity with reassurance, since early concepts felt either too bare or
              overly busy. The final outcome is a streamlined and confident scheduling
              experience that helps pet owners feel informed and supported throughout the
              process.
            </p>

            <Link
              href="https://www.figma.com/proto/1fKLri7C8IZINRq3tWhYIV/Pampered-Paws?node-id=1-503&t=MTdqUvYwpWVoXLwk-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A503"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative mt-5 md:mt-7 inline-flex items-center gap-2 md:gap-3
                rounded-full px-4 py-2.5 md:px-6 md:py-3 font-medium text-white
                text-[12px] md:text-[14px]
                bg-white/[0.06] backdrop-blur-md
                shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                border border-white/10
                transition-all duration-300
                hover:bg-white/[0.15] hover:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                focus-visible:ring-2 focus-visible:ring-white/40
              "
            >
              <span>View Prototype</span>
              <span
                className="
                  flex items-center justify-center
                  w-5 h-5 md:w-7 md:h-7 rounded-full
                  bg-white/10
                  transition-all duration-300
                  group-hover:bg-white/30
                  group-hover:translate-x-1
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 md:w-4 md:h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Animated “Next Case Study” link */}
        <motion.div
          className="mt-20 md:mt-24 mb-6 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/projects/camping"
            className="group inline-flex items-center gap-2 text-sm md:text-base text-white/70 hover:text-white transition-all duration-300"
          >
            <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-white">
              Next Case Study
            </span>
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
    </section>
  );
}

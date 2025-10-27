"use client";

import Link from "next/link";
import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36 lg:mt-0 ">
      <div className="max-w-[1100px] w-full mx-auto text-center md:text-left">
        {/* Header */}
        <SectionHeader kicker="PROJECT OUTCOME" title="Final Design" align="center" />

        {/* Content grid: column on mobile, row on desktop */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Video column */}
                    <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden">
              <video
                src="/images/project1-images/final-design.mp4" // replace with your video path
                width={420}
                height={860}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-[260px] md:w-[320px] rounded-xl object-contain"
              />
            </div>
          </div>


          {/* Text column */}
<div className="rounded-2xl bg-white/[0.05] ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
  <p className="text-white/85 leading-tight text-sm lg:text-[16px] md:text-[17px] max-w-[350px] mx-auto md:mx-0">
  Iterative testing refined the booking experience, strengthened multi-dog support, and increased trust through clearer groomer profiles, messaging, and appointment status updates. A key design challenge was balancing simplicity with reassurance, since early concepts felt either too bare or overly busy. The final outcome is a streamlined and confident scheduling experience that helps pet owners feel informed and supported throughout the process.
  </p>

  {/* Button inside the bubble */}
  <Link
    href="https://www.figma.com/proto/1fKLri7C8IZINRq3tWhYIV/Pampered-Paws?node-id=1-503&t=MTdqUvYwpWVoXLwk-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A503"  /* Replace with real link */
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative mt-8 inline-flex items-center gap-3
      rounded-full px-6 py-3 font-medium text-white
      bg-white/[0.06] backdrop-blur-md
      shadow-[0_4px_12px_rgba(0,0,0,0.3)]
      border border-white/10
      transition-all duration-300
      hover:bg-white/[0.15] hover:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
      focus-visible:ring-2 focus-visible:ring-white/40
    "
  >
    <span className="text-sm tracking-wide">
      View Prototype
    </span>
    <span
      className="
        flex items-center justify-center
        w-7 h-7 rounded-full
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
        className="w-4 h-4"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </span>
  </Link>
</div>

  


            

        </div>
      </div>
    </section>
  );
}

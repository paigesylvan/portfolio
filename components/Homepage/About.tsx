"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section className="relative w-full px-6 py-14 text-white overflow-hidden mb-24">
      
      {/* ✨ Hue behind headshot */}
{/* ✨ Hue directly behind the headshot */}
<div
  className="pointer-events-none absolute -z-10"
  style={{
    width: "500px",
    height: "800px",
    left: "54%",
    top: "45%",
    transform: "translate(-10%, -40%)", 
    background: `
      radial-gradient(
        300px 260px at center,
        rgba(238,100,160,0.32) 0%,
        rgba(140,90,255,0.25) 35%,
        rgba(60,160,255,0.22) 60%,
        rgba(0,0,0,0) 90%
      )
    `,
    filter: "blur(90px)",
  }}
/>


      <div className="mx-auto max-w-[1100px] grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text left */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Product Designer & UX/UI Developer
          </h2>

          <p className="text-white/85 leading-relaxed max-w-[480px] mb-6 text-[14px] md:text-[15px]">
            Paige Sylvan is a product designer and UX/UI developer who creates clean,
            intuitive digital experiences that connect users, visuals, and behavior.
            Focused on improving everyday interactions through thoughtful design and
            modern engineering practices.
          </p>

          <p className="text-[11px] uppercase tracking-wide text-white/60">
            Open to: Full-time Product Designer or UX/UI roles 
            • Wisconsin • Remote-friendly
          </p>

          <Link
            href="/about"
            className="
              group inline-flex items-center gap-2 mt-6
              rounded-full px-5 py-2.5 font-medium text-white text-[13px]
              bg-white/[0.06] backdrop-blur-md
              shadow-[0_3px_10px_rgba(0,0,0,0.3)]
              border border-white/10
              transition-all duration-300
              hover:bg-white/[0.15] hover:shadow-[0_5px_16px_rgba(0,0,0,0.45)]
              focus-visible:ring-2 focus-visible:ring-white/40
            "
          >
            <span className="tracking-wide">More About Me</span>
            <span
              className="
                flex items-center justify-center
                w-6 h-6 rounded-full bg-white/10
                transition-all duration-300
                group-hover:bg-white/30 group-hover:translate-x-1
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
                className="w-3.5 h-3.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Photo right */}
        <div className="flex justify-center">
          <div className="rounded-xl overflow-hidden relative z-10">
            <Image
              src="/images/homepage-images/paige-headshot.png"
              alt="Paige Sylvan headshot"
              width={360}
              height={440}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeAbout() {
  return (
    <section className="relative w-full px-6 py-14 text-white overflow-hidden mb-24">
      {/* ✨ Mobile glow (centered) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="pointer-events-none absolute z-0 md:hidden"
        style={{
          width: "900px",
          height: "900px",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -40%)",
          background: `
            radial-gradient(
              480px 380px at center,
              rgba(238,100,160,0.50) 0%,   /* pink core */
              rgba(140,90,255,0.40) 25%,   /* violet mid */
              rgba(60,160,255,0.35) 55%,   /* blue outer mid */
              rgba(19,78,88,0.60) 90%,     /* teal outer edge */
              rgba(0,0,0,0) 100%   
            )
          `,
          filter: "blur(90px)",
          opacity: 1,
        }}
      />

      {/* ✨ Desktop glow (shifted right) */}
{/* ✨ Desktop glow (shifted right with outer blue tone) */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2, ease: "easeInOut" }}
  className="pointer-events-none absolute z-0 hidden md:block"
  style={{
    width: "300px",
    height: "320px",
    left: "66%",
    top: "45%",
    transform: "translate(-50%, -40%)",
    background: `
      radial-gradient(
        480px 380px at center,
        rgba(238,100,160,0.50) 5%,   /* pink core */
        rgba(140,90,255,0.30) 25%,   /* violet mid */
        rgba(60,160,255,0.35) 35%,   /* blue outer mid */
        rgba(0,230,190,0.95) 55%,      /* 💎 vibrant teal edge */
        rgba(0,230,190,0.60) 70%,      /* extended teal halo */
        rgba(0,0,0,0) 100%   
      )
    `,
    filter: "blur(70px)",
    opacity: 1,
  }}
/>


      <div className="relative z-10 mx-auto max-w-[1100px] grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — Text */}
        <div className="text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Product Designer & UX/UI Developer
          </h2>

          <p className="text-white/85 leading-relaxed max-w-[480px] mx-auto md:mx-0 mb-6 text-[14px] md:text-[15px]">
            Paige Sylvan is a product designer and UX/UI developer who creates clean,
            intuitive digital experiences that connect users, visuals, and behavior.
            Focused on improving everyday interactions through thoughtful design and
            modern engineering practices.
          </p>

          <p className="text-[11px] uppercase tracking-wide text-white/60 mb-6 md:mb-0">
            Open to: Full-time Product Designer or UX/UI roles • Wisconsin • Remote-friendly
          </p>

          {/* MOBILE BUTTON */}
          <Link
            href="/about"
            className="md:hidden group inline-flex items-center gap-2 mt-2 rounded-full px-5 py-2.5 font-medium text-white text-[13px] bg-white/[0.06] backdrop-blur-md shadow-[0_3px_10px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 hover:bg-white/[0.15] hover:shadow-[0_5px_16px_rgba(0,0,0,0.45)] focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span className="tracking-wide">More About Me</span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round"
                   className="w-3.5 h-3.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* DESKTOP BUTTON */}
          <Link
            href="/about"
            className="hidden md:inline-flex items-center gap-2 mt-6 rounded-full px-5 py-2.5 font-medium text-white text-[13px] bg-white/[0.06] backdrop-blur-md shadow-[0_3px_10px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 hover:bg-white/[0.15] hover:shadow-[0_5px_16px_rgba(0,0,0,0.45)] focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span className="tracking-wide">More About Me</span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round"
                   className="w-3.5 h-3.5">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="rounded-xl overflow-hidden relative z-10">
            <Image
              src="/images/homepage-images/paige-headshot.png"
              alt="Paige Sylvan headshot"
              width={340}
              height={420}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

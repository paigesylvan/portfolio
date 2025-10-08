"use client";

import Image from "next/image";

export default function ExperienceHero() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center px-6">
      <div className="w-full max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <p className="text-[12px] tracking-[0.22em] text-white/70">
          EXPERIENCE
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold">
          Software Engineer Internship
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/85">
          Midwest Engineered Systems
          <br className="hidden md:block" /> August 2024 – January 2025
        </p>

        {/* Radial glow behind image */}
        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70vw] w-[70vw] max-h-[520px] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),rgba(0,0,0,0)_65%)] blur-2xl" />

          {/* Image Panel */}
          <div className="mx-auto w-full md:w-[90%] rounded-3xl bg-white/[0.03] ring-1 ring-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.55)] overflow-hidden">
            <Image
              src="/images/experience-images/mwes-hero.png" /* <- your combined strip image */
              alt="Midwest Engineered Systems — facility and robotics"
              width={2400}
              height={1200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

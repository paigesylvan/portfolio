"use client";

import Image from "next/image";

export default function HighlightsDryCleaner() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="mx-auto w-[92%] md:w-[72%]">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* LEFT – phone mock */}
          <div className="md:col-span-5">
            <div className="mx-auto max-w-[420px]">
              <div className="rounded-[34px] ring-1 ring-white/10 bg-white/[0.03] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/project3-images/phone-hero.png" // ← your phone mock image
                  alt="Quick Cleaners mobile hero"
                  width={900}
                  height={1800}
                  className="rounded-[26px] w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT – three charcoal cards */}
          <div className="md:col-span-7 space-y-6 transition-transform hover:-translate-y-0.5">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] animate-[fadeInUp_700ms_ease-out_forwards] opacity-0">
              <p className="text-[12px] tracking-[0.22em] accent-text">
                DESIGN DECISIONS
              </p>
              <div className="mt-3 space-y-4 text-white/85">
                <div>
                  <p className="font-semibold text-white">Responsive Layout:</p>
                  <p>
                    Optimized for mobile-first browsing with Scroll-Triggered Card Flip and
                    service card flip on hover on desktop and larger screen sizes.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Service Cards:</p>
                  <p>
                    Clearly indicated services with description. (They opted out of including
                    prices because of competitive industry)
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">Trust Signals:</p>
                  <p>
                    Included owner’s story of her small independent business, and perks offered.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] animate-[fadeInUp_800ms_ease-out_forwards] opacity-0">
              <p className="text-[12px] tracking-[0.22em] accent-text">
                DEVELOPMENT HIGHLIGHTS
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/85">
                <li>Built with semantic HTML, JavaScript and Tailwind CSS</li>
                <li>Used utility classes for fast prototyping and consistent spacing</li>
                <li>Implemented smooth scroll and anchor links for intuitive navigation</li>
                <li>Deployed as a static site for speed and simplicity</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] animate-[fadeInUp_900ms_ease-out_forwards] opacity-0">
              <p className="text-[12px] tracking-[0.22em] accent-text">OUTCOME</p>
              <p className="mt-3 text-white/85">
                The site now serves as a welcoming digital storefront, helping users quickly
                understand services and feel confident reaching out. It’s fast, clear, and
                emotionally resonant—just like the business it represents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

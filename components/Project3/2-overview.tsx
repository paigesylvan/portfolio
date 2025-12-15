"use client";

export default function OverviewDryCleaner() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1000px]">
        {/* Header */}
        <div className="max-w-[720px]">
          <p className="text-[11px] tracking-[0.22em] accent-text">
            GETTING TO KNOW THE COMPANY
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
            Quick Cleaners
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-14 items-start">
          {/* LEFT — narrative */}
          <div className="md:col-span-7 space-y-6 text-white/80 text-[12px] md:text-[13px] leading-relaxed">
            <p>
              Quick Cleaners in Pewaukee, Wisconsin has been in the dry cleaning
              industry for over 30 years, but had no online presence. Through
              competitive research, I found that many local dry cleaners either
              rely on outdated websites or have no website at all.
            </p>

            <p>
              Quick Cleaners wanted a modern, trustworthy site that clearly relays
              essential information while building credibility through clear
              content and approachable branding.
            </p>

            <p>
              From interviews with the owner and employees, I learned that customers
              primarily care about services, turnaround expectations, and how to
              contact the shop. The challenge was designing an experience that feels
              warm, modern, and easy to navigate—even for first-time visitors.
            </p>

            <p className="text-white/65">
              I led the project end-to-end, from research and wireframes to visual
              design and front-end development. I focused on mobile-first layouts,
              lightweight performance, and clear hierarchy so customers can quickly
              understand services, hours, and next steps.
            </p>
          </div>

          {/* RIGHT — design decisions (lighter, not a heavy card) */}
          <aside className="md:col-span-5">
            <div className="rounded-2xl bg-white/[0.035] backdrop-blur-md ring-1 ring-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <p className="text-[11px] tracking-[0.22em] accent-text">
                DESIGN DECISIONS
              </p>

              <div className="mt-5 space-y-5 text-white/85">
                <div>
                  <p className="font-semibold text-white text-[13px] md:text-sm">
                    Responsive Layout
                  </p>
                  <p className="mt-1 text-[12px] md:text-[13px] text-white/70 leading-snug">
                    Mobile-first structure that keeps services, hours, and contact
                    information immediately accessible.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="font-semibold text-white text-[13px] md:text-sm">
                    Service Presentation
                  </p>
                  <p className="mt-1 text-[12px] md:text-[13px] text-white/70 leading-snug">
                    Clear service descriptions without pricing to respect a
                    competitive local market while reducing “call-to-ask” friction.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <p className="font-semibold text-white text-[13px] md:text-sm">
                    Trust Signals
                  </p>
                  <p className="mt-1 text-[12px] md:text-[13px] text-white/70 leading-snug">
                    Highlighted the owner’s story and familiarity cues to build
                    confidence for first-time visitors.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

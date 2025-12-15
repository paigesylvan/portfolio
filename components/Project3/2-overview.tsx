"use client";

export default function OverviewDryCleaner() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] w-full max-w-[1000px]">
        <div className="px-6 py-8 md:px-10 md:py-10">
          <p className="text-[11px] tracking-[0.22em] accent-text">
            GETTING TO KNOW THE COMPANY
          </p>
          <h3 className="mt-3 text-3xl font-semibold">Quick Cleaners</h3>

          {/* ✅ 2-col layout on desktop */}
          <div className="mt-7 grid gap-8 md:grid-cols-12 md:items-start">
            {/* LEFT: narrative */}
            <div className="md:col-span-7 space-y-5 text-white/85 leading-tight text-[12px] md:text-[13px]">
              <p>
                Quick Cleaners in Pewaukee, Wisconsin has been in the dry cleaning
                industry for over 30 years, but had no online presence. Through
                competitive research, I found that many local dry cleaners either
                rely on outdated websites or have no website at all. Quick Cleaners
                wanted a modern, trustworthy site to relay key information to
                customers and build credibility through clear content and branding.
              </p>

              <p>
                From interviews with the owner and employees, I learned that customers
                primarily care about services, turnaround expectations and how to
                contact the shop. The challenge was to design a site that feels warm,
                modern, and easy to navigate, even for first-time visitors.
              </p>

              <p className="text-white/70">
                I led the project end-to-end, from research and wireframes to visual
                design and front-end development. I focused on mobile-first responsive
                layouts, lightweight performance, and clear hierarchy so customers can
                quickly understand services, hours, and how to get in touch.
              </p>
            </div>

            {/* RIGHT: design decisions callout */}
            <aside className="md:col-span-5">
              <div className="rounded-2xl bg-white/[0.05] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
                <p className="text-[11px] tracking-[0.22em] accent-text">
                  DESIGN DECISIONS
                </p>

                <div className="mt-4 space-y-4 text-white/85">
                  <div>
                    <p className="font-semibold text-white text-[13px] md:text-sm">
                      Responsive Layout
                    </p>
                    <p className="text-[12px] md:text-[13px] text-white/75 leading-snug">
                      Mobile-first browsing with a clean layout that keeps key details
                      (services, hours, contact) within easy reach.
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="font-semibold text-white text-[13px] md:text-sm">
                      Service Cards
                    </p>
                    <p className="text-[12px] md:text-[13px] text-white/75 leading-snug">
                      Clear service descriptions without pricing to respect a competitive
                      local market while still reducing “call-to-ask” friction.
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="font-semibold text-white text-[13px] md:text-sm">
                      Trust Signals
                    </p>
                    <p className="text-[12px] md:text-[13px] text-white/75 leading-snug">
                      Featured the owner’s story and familiarity cues to build credibility
                      for first-time visitors.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

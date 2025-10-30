"use client";

import SectionHeader from "../SectionHeader"; // if you want to center a big header later

const skillset1 = ["RESEARCH", "USER INTERVIEWS", "UI CREATION", "RESPONSIVE DESIGN"];
const tools = ["VS CODE", "REACT", "TAILWIND CSS", "VERCEL"];

export default function OverviewDryCleaner() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">

        {/* Company / charcoal bubble */}
        <div className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] max-w-6xl">
          <div className="px-6 py-8 md:px-10 md:py-10">
            <p className="text-[11px] tracking-[0.22em] accent-text">
              GETTING TO KNOW THE COMPANY
            </p>
            <h3 className="mt-3 text-3xl font-semibold">Quick Cleaners</h3>

            <div className="mt-6 space-y-5 text-white/85 leading-tight text-xs lg:text-lg">
              <p>
                Quick Cleaners in Pewaukee, Wisconsin has been in the dry cleaning industry for
                over 30 years, yet had no online presence. Through research I found majority of
                local dry cleaners often rely on outdated websites or also have no online
                presence at all. This company wanted a website to relay information to customers
                and build trust through clarity and branding. From interviewing the owner and
                employees that relayed that customers prioritize service details and contact info.
              </p>

              <p>
                The challenge was to design a site that felt modern, warm, and easy to navigate,
                even for first-time visitors. My goal was to create a clean, trustworthy digital
                presence that helps users quickly understand services, business info, and to feel
                confident in the care provided through a one-page responsive website.
              </p>

              <p className="text-white/70">
                I led the design and development, from the wireframes to final code, focusing on
                mobile-first design, lightweight performance and layout clarity with warm branding.
              </p>
            </div>
          </div>
        </div>

 
    </section>
  );
}

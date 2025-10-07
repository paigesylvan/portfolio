"use client";

// import SectionHeader from "../SectionHeader"; // not used here – safe to remove

const skillsRow1 = ["RESEARCH", "USER FLOWS", "USABILITY TESTING", "SKETCHING"];
const skillsRow2 = ["WIRE FRAMING", "PROTOTYPING", "RESPONSIVE DESIGN", "UI CREATION"];

export default function OverviewCamping() {
  return (
    <div className="mx-auto w-[90%] md:w-[70%]">
      {/* small meta blocks */}
      <div className="space-y-8">
        {/* PROJECT */}
        <div>
          <p className="accent-text text-[11px] tracking-[0.22em]">PROJECT</p>
          <p className="mt-2 text-lg md:text-xl text-white/90">
            Design a Responsive Website for a camping e-commerce website
          </p>
        </div>

        {/* DURATION */}
        <div>
          <p className="accent-text text-[11px] tracking-[0.22em]">DURATION</p>
          <p className="mt-2 text-lg md:text-xl text-white/90">May 2025 – July 2025</p>
        </div>

        {/* ROLE */}
        <div>
          <p className="accent-text text-[11px] tracking-[0.22em]">ROLE</p>
          <p className="mt-2 text-lg md:text-xl text-white/90">
            UX/UI Designer, Researcher, Visual Designer, Usability Tester
          </p>
        </div>

        {/* SKILLS */}
        <div>
          <p className="accent-text text-[11px] tracking-[0.22em]">
            UX/UI SKILLSET’S LEVERAGED
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex flex-wrap gap-3">
              {skillsRow1.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] tracking-wide accent-text ring-1 ring-inset ring-white/5 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {skillsRow2.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] tracking-wide accent-text ring-1 ring-inset ring-white/5 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* charcoal “bubble” card */}
      <div className="mt-12 rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
        <div className="px-6 py-8 md:px-10 md:py-10">
          <p className="accent-text text-[11px] tracking-[0.22em]">
            THE UX PROCESS OF DISCOVERY
          </p>
          <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
            Finding User Friction Areas
          </h3>

          <div className="mt-5 space-y-5 text-white/85 leading-relaxed">
            <p>
              To understand the scope of the camping e-commerce space, I reviewed competitor
              websites, read camping gear reviews, and analyzed forums and product feedback to
              uncover common pain points.
            </p>
            <p>
              My secondary research revealed that cluttered layouts, jargon-heavy language, and
              impersonal shopping flows can lead to confusion, intimidation, and decision fatigue.
              Many sites overwhelm users by presenting hundreds of options with little guidance
              beyond price and product specs. This forces shoppers to search, skim, and filter
              through excessive information with minimal guidance, making it especially difficult
              for first-time or occasional campers.
            </p>
            <div className="pt-2 text-white/80 italic">
              This led me to ask:
              <br />
              <span className="text-white/90 not-italic">
                How might I create a trustworthy experience that simplifies decision-making and
                evokes the serenity of nature?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

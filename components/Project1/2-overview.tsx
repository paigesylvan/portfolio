// components/Project1/2-overview.tsx
"use client";


export default function Overview() {
  return (
    <div className="mx-auto w-[92%] md:w-[70%]">

      {/* subtle entrance */}
      <div className="opacity-0 animate-[fadeInUp_700ms_ease-out_forwards]">
        {/* PROJECT */}
        <p className="text-[11px] tracking-[0.22em] text-[#7FB2FF]">PROJECT</p>
        <p className="mt-2 text-lg md:text-xl text-white/90">
          Design a Mobile-First App for a Local Dog Grooming Service
        </p>

        {/* DURATION */}
        <p className="mt-10 text-[11px] tracking-[0.22em] text-[#7FB2FF]">DURATION</p>
        <p className="mt-2 text-lg md:text-xl text-white/90">July 2025 – August 2025</p>

        {/* ROLE */}
        <p className="mt-10 text-[11px] tracking-[0.22em] text-[#7FB2FF]">ROLE</p>
        <p className="mt-2 text-lg md:text-xl text-white/90">
          UX/UI Designer, Researcher, Visual Designer, Usability Tester
        </p>

        {/* SKILLS */}
        <p className="mt-12 text-[11px] tracking-[0.22em] text-[#7FB2FF]">
          UX/UI SKILLSET’S LEVERAGED
        </p>

        <div className="mt-4 space-y-3">
          {/* Row 1 (4 chips) */}
          <div className="flex flex-wrap justify-start gap-3">
            {["UX RESEARCH", "UI CREATION", "USER FLOWS", "USABILITY STUDY"].map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] tracking-wide text-[#9DC0FF] shadow-sm ring-1 ring-inset ring-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Row 2 (3 chips) */}
          <div className="flex flex-wrap justify-start gap-3">
            {["WIRE FRAMING", "PROTOTYPING", "RESPONSIVE DESIGN"].map((tag) => (
              <span
                key={tag}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] tracking-wide text-[#9DC0FF] shadow-sm ring-1 ring-inset ring-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

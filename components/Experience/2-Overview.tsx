"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

/* ---------- CountUp (animates from 0 to end on first view) ---------- */
function CountUp({
  end,
  duration = 2000,        // ms
  suffix = "",
  className = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(prefersReduced ? end : 0);
  const [started, setStarted] = useState(prefersReduced); // already done if reduced

  // Trigger when in view (simple IntersectionObserver)
  useEffect(() => {
    if (!ref.current || started) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  // Animate
  useEffect(() => {
    if (prefersReduced || !started) return;
    let raf = 0;
    const start = performance.now();

    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, prefersReduced, started]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ----------------------------- Page Section ----------------------------- */
export default function OverviewMWES() {
  const skillsRow1 = useMemo(
    () => ["WIRE FRAMING", "MID FI MOCKUPS", "USER FLOW", "UI CREATION"],
    []
  );
  const skillsRow2 = useMemo(
    () => ["DESIGN SYSTEM", "ITERATION", "INTERACTION DESIGN", "USABILITY TESTING"],
    []
  );

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      {/* Centered content wrapper */}
      <div className="w-full max-w-[1500px] mx-auto text-center md:text-left ">
        <div className="mb-24 ml-[154px]">
        <SectionHeader
          kicker="GETTING TO KNOW THE COMPANY"
          title="Midwest Engineered Systems (MWES)"
          align="left" // <-- make the title centered
        />
        </div>
        

        <div className="mt-10 grid gap-12 md:grid-cols-2 items-start justify-center ml-36">
          {/* Left: intro copy */}
          <div className="space-y-6 md:px-4">
            <p className="text-lg font-semibold">
              MWES is an industrial automation and robotics integration company
              specialized in designing, building, integrating and supporting
              custom systems for manufacturers.
            </p>

            <p className="text-white/85 leading-relaxed">
              Custom projects mean custom interfaces for users to interact,
              interpret and gather data from machines. I contributed to these
              interfaces where UX/UI has real operational consequences.
            </p>

            <div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-4 md:p-5 text-white/85">
              <p className="text-sm">
                <span className="font-semibold accent-text">Note:</span> Due to an
                ongoing NDA with MWES, client names are undisclosed.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <p className="text-[11px] tracking-[0.22em] accent-text mb-3">
                UX/UI SKILLSET’S LEVERAGED
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {[...skillsRow1, ...skillsRow2].map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[13px] tracking-wide text-white/90 ring-1 ring-inset ring-white/5 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: animated stats */}
          <div className="flex flex-col items-center md:items-start gap-10 md:px-4 ml-24">
            {[
              { end: 2, label: "Locations in Pewaukee, WI" },
              { end: 34, suffix: "+", label: "Years in the Industrial Automation Market" },
              { end: 4000, suffix: "+", label: "Systems Built" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-5xl font-extrabold accent-text">
                  <CountUp end={stat.end} suffix={stat.suffix || ""} />
                </div>
                <p className="mt-2 text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

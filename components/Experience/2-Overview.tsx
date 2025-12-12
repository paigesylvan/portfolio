"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";


function CountUp({
  end,
  duration = 2000,
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
  const [started, setStarted] = useState(prefersReduced);

  useEffect(() => {
    if (!ref.current || started) return;
    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && setStarted(true),
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (prefersReduced || !started) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
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


export default function OverviewMWES() {
  const skills = useMemo(
    () => [
      "WIRE FRAMING",
      "MID FI MOCKUPS",
      "USER FLOW",
      "UI CREATION",
      "DESIGN SYSTEM",
      "ITERATION",
      "INTERACTION DESIGN",
      "USABILITY TESTING",
    ],
    []
  );

  return (
    <section className="project-yellow flex flex-col justify-center px-4 sm:px-6 py-10 md:py-16 text-white ml-88 mt-12 lg:mt-0">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] mx-auto">
        <div className="text-center md:text-left mb-4 md:mb-6">
          <SectionHeader
          kicker="GETTING TO KNOW THE COMPANY"
           title="Midwest Engineered Systems (MWES)"
          align="left"
          titleClassName="text-2xl lg:text-4xl"
          kickerClassName="text-[10px] sm:text-[11px]"
          />
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center">
            {/* Left side */}
            <div>
              <p className="text-sm font-semibold lg:leading-relaxed">
                MWES is an industrial automation and robotics integration company
                specialized in designing, building, integrating and supporting
                custom systems for manufacturers.
              </p>

              <p className="text-white/85 text-sm mt-4 lg:leading-relaxed">
                Custom projects mean custom interfaces for users to interact,
                interpret and gather data from machines. I contributed to these
                interfaces where UX/UI has real operational consequences.
              </p>

              <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3 text-white/85 mt-4">
                <p className="text-xs sm:text-sm">
                  <span className="font-semibold accent-text" data-nosnippet>Note:</span> Due to an
                  ongoing NDA with MWES, client names are undisclosed.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-6">
                <p className="text-[10px] tracking-[0.22em] accent-text mb-2">
                  UX/UI SKILLSET’S LEVERAGED
                </p>

                <div className="-m-1.5 md:-m-2 flex flex-wrap">
                  {skills.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[#E6D6C3]/20 bg-white/[0.05] px-2 py-0.5 md:px-2.5 md:py-1 text-[8px] md:text-[10px] tracking-wide text-white/95 ring-1 ring-inset ring-[#E6D6C3]/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats mobile */}
              <div className="mt-12 md:hidden">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { end: 2, label: "Locations" },
                    { end: 34, suffix: "+", label: "Years" },
                    { end: 4000, suffix: "+", label: "Systems" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-extrabold accent-text leading-none">
                        <CountUp end={s.end} suffix={s.suffix || ""} />
                      </div>
                      <p className="mt-1 text-[11px] text-white/75">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side (desktop stats) */}
            <div className="hidden md:flex flex-col justify-center gap-6 ml-60">
              {[
                { end: 2, label: "Locations in Pewaukee, WI" },
                { end: 34, suffix: "+", label: "Years in the Industrial Automation Market" },
                { end: 4000, suffix: "+", label: "Systems Built" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl lg:text-4xl font-extrabold accent-text leading-tight">
                    <CountUp end={stat.end} suffix={stat.suffix || ""} />
                  </div>
                  <p className="mt-1.5 text-white/80 text-sm lg:text-base leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

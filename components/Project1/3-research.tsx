"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import React from "react";
import SectionHeader from "../SectionHeader";

/* ------------------ Types ------------------ */

type DonutProps = {
  percent: number;
  color?: string;
  size?: number;          // desktop
  stroke?: number;        // desktop
  mobileSize?: number;    // mobile
  mobileStroke?: number;  // mobile
  captionTop: string;
  label: string;
  delay?: number;
  duration?: number;
};

/* ------------------ Hook ------------------ */

function useIsSmUp() {
  const [isSmUp, setIsSmUp] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setIsSmUp(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  return isSmUp;
}

/* ------------------ Donut ------------------ */

function Donut({
  percent,
  color = "stroke-[#7FB2FF]",
  size = 112,
  stroke = 10,
  mobileSize = 88,
  mobileStroke = 8,
  captionTop,
  label,
  delay = 0,
  duration = 1.2,
}: DonutProps) {
  const prefersReduced = useReducedMotion();
  const isSmUp = useIsSmUp();

  const effectiveSize = isSmUp ? size : mobileSize;
  const effectiveStroke = isSmUp ? stroke : mobileStroke;

  const r = (effectiveSize - effectiveStroke) / 2;
  const c = 2 * Math.PI * r;
  const targetOffset = (1 - percent / 100) * c;

  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <svg
        width={effectiveSize}
        height={effectiveSize}
        viewBox={`0 0 ${effectiveSize} ${effectiveSize}`}
        className="drop-shadow-[0_6px_24px_rgba(127,178,255,0.25)]"
      >
        <circle
          cx={effectiveSize / 2}
          cy={effectiveSize / 2}
          r={r}
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={effectiveStroke}
          fill="none"
        />

        <motion.circle
          cx={effectiveSize / 2}
          cy={effectiveSize / 2}
          r={r}
          className={color}
          strokeWidth={effectiveStroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={
            prefersReduced
              ? { strokeDashoffset: targetOffset }
              : inView
              ? { strokeDashoffset: targetOffset }
              : { strokeDashoffset: c }
          }
          transition={{
            duration: prefersReduced ? 0 : duration,
            ease: "easeOut",
            delay,
          }}
          transform={`rotate(-90 ${effectiveSize / 2} ${effectiveSize / 2})`}
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white font-semibold"
          style={{ fontSize: effectiveSize * 0.22 }}
        >
          {`${percent}%`}
        </text>
      </svg>

      <p className="mt-3 text-[9px] sm:text-[11px] md:text-[12px] text-white leading-tight">
        {captionTop}
      </p>
      <p className="text-[9px] sm:text-[11px] md:text-[12px] text-white whitespace-pre-line leading-tight">
        {label}
      </p>
    </div>
  );
}

/* ------------------ Section ------------------ */

export default function ResearchInsights() {
  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1000px] lg:mt-8">
        <div className="text-left mb-8">
          <SectionHeader
            kicker="MARKET RESEARCH"
            title="Exploring the Grooming Space"
            align="left"
          />
        </div>

        {/* Donuts */}
        <div className="mb-8">
          <div className="mx-auto grid w-fit grid-cols-3 gap-x-6 lg:gap-x-[150px] py-6 lg:py-12">
            <Donut
              percent={67}
              captionTop="of U.S. households"
              label={"own at least one dog"}
              delay={0}
              size={120}
              stroke={10}
              mobileSize={88}
              mobileStroke={8}
            />
            <Donut
              percent={73}
              captionTop="of pet owners prefer"
              label={"scheduling appointments\nonline"}
              delay={0.12}
              size={120}
              stroke={10}
              mobileSize={88}
              mobileStroke={8}
            />
            <Donut
              percent={45}
              captionTop="of pet owners find it"
              label={"challenging to schedule\ngrooming services"}
              delay={0.24}
              size={120}
              stroke={10}
              mobileSize={88}
              mobileStroke={8}
            />
          </div>
        </div>

        {/* Content card */}
        <div className="rounded-3xl bg-[#111]/80 backdrop-blur-md ring-1 ring-white/10 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <h3 className="text-xl md:text-3xl text-white mb-2">
            Market Insights
          </h3>

          <p className="text-white/80 text-[12px] lg:text-[13px] leading-snug">
            I conducted secondary research by analyzing app reviews, service
            provider websites, and pet-care forums to learn how dog grooming
            digital experiences feel to users today. Through my research I found:
          </p>

          <ul className="mt-4 space-y-1 text-white/70 text-[12px] lg:text-[13px]">
            <li>• There’s a gap in user-friendly grooming apps overall.</li>
            <li>• Many groomers rely on outdated websites and phone calls.</li>
            <li>• First-time users seek reassurance their dog will be treated with care.</li>
            <li>• Users worry about timing, delays, and unexpected changes.</li>
          </ul>

          <p className="mt-6 text-white/90 text-[12px] lg:text-[13px]">
            <span className="font-semibold text-[#9DC0FF]">Key takeaway:</span>{" "}
            Trust, transparency, and clear communication matter as much as convenience.
          </p>
        </div>
      </div>
    </section>
  );
}

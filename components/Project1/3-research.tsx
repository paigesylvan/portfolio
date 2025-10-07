
"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import React from "react";
import SectionHeader from "../SectionHeader";

type DonutProps = {
  percent: number;           // 0–100
  color?: string;            // tailwind color class for stroke
  size?: number;             // px
  stroke?: number;           // px
  captionTop: string;
  label: string;
  delay?: number;            // seconds
  duration?: number;         // seconds
};

function Donut({
  percent,
  color = "stroke-[#7FB2FF]",
  size = 112,
  stroke = 10,
  captionTop,
  label,
  delay = 0,
  duration = 1.2,
}: DonutProps) {
  const prefersReduced = useReducedMotion();
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  // animate via strokeDashoffset (full -> target)
  const targetOffset = (1 - percent / 100) * c;

  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-[0_6px_24px_rgba(127,178,255,0.25)]"
        aria-label={`${percent}%`}
        role="img"
      >
        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={stroke}
          fill="none"
        />

        {/* animated arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className={color}
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          // full dasharray, then animate the dashoffset
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={
            prefersReduced
              ? { strokeDashoffset: targetOffset }
              : inView
              ? { strokeDashoffset: targetOffset }
              : { strokeDashoffset: c }
          }
          transition={{ duration: prefersReduced ? 0 : duration, ease: "easeOut", delay }}
          // start at top
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />

        {/* percent text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white font-semibold"
          style={{ fontSize: size * 0.22 }}
        >
          {`${percent}%`}
        </text>
      </svg>

      <p className="mt-5 text-[12px] tracking-[0.17em] text-white/70">
        {captionTop}
      </p>
      <p className=" text-[12px] tracking-[0.17em] text-white/70">
        {label}
      </p>
    </div>
  );
}

export default function ResearchInsights() {
  return (
    <div className="mx-auto w-[90%] max-w-[1200px]">
      <SectionHeader
        kicker="MARTKET RESEARCH"
        title="Exploring the Grooming Space"
        align="center"
      />

      <div className="mt-24 grid gap-12 md:grid-cols-12 items-start">
        {/* LEFT: Insight card (matches homepage card styling) */}
        <div className="md:col-span-8">
          <div className="rounded-3xl bg-[#111]/80 backdrop-blur-md ring-1 ring-white/10 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <h3 className="text-xl md:text-4xl text-white mb-4">
              Market Insights
            </h3>

            <p className="text-white/80 text-2xl ">
              I conducted secondary research by analyzing app reviews, service
              provider websites, and pet-care forums to learn how dog grooming
              digital experiences feel to users today.
            </p>

            <ul className="mt-6 space-y-5 text-white/70  text-xl ">
              <li>• There’s a gap in user-friendly grooming apps overall.</li>
              <li>
                • Many groomers still rely on outdated sites and phone calls to book appointments.
              </li>
              <li>
                • First-time users seek reassurance their dog will be treated with care.
              </li>
              <li>• Users worry about timing, delays, and unexpected changes.</li>
            </ul>

            <p className="mt-24 text-white/90 leading-relaxed text-2xl ">
              <span className="font-semibold text-[#9DC0FF]">Key takeaway:</span>{" "}
              Trust, transparency, and clear communication matter as much as convenience—especially
              for first-time users.
            </p>
          </div>
        </div>

        {/* RIGHT: Animated donuts with subtle stagger */}
        <div className="md:col-span-4 flex md:flex-col justify-center gap-10 md:gap-12">
          <Donut
            percent={67}
            captionTop="of U.S. households"
            label={"own at least one dog"}
            delay={0.0}
          />
          <Donut
            percent={73}
            captionTop="of pet owners prefer"
            label={"scheduling appointments\nonline"}
            delay={0.12}
          />
          <Donut
            percent={45}
            captionTop="of pet owners find it"
            label={"challenging to schedule\ngrooming services"}
            delay={0.24}
          />
        </div>
      </div>
    </div>
  );
}

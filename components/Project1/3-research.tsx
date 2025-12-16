"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import React from "react";
import SectionHeader from "../SectionHeader";

type DonutProps = {
  percent: number;
  color?: string;
  size?: number;
  stroke?: number;
  captionTop: string;
  label: string;
  delay?: number;
  duration?: number;
};

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsSmall(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isSmall;
}

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
  const targetOffset = (1 - percent / 100) * c;

  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center "
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-[0_6px_24px_rgba(127,178,255,0.25)]"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.14)"
          strokeWidth={stroke}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className={color}
          strokeWidth={stroke}
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
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
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

      <p className="mt-3 text-[8px] md:text-[12px] text-white leading-tight">
        {captionTop}
      </p>
      <p className="text-[8px] md:text-[12px] text-white whitespace-pre-line leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function ResearchInsights() {
  const isSmall = useIsSmallScreen();
  const donutSize = isSmall ? 56 : 90;
  const donutStroke = isSmall ? 8 : 9;

  return (
    <section className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1000px] lg:mt-8">
        {/* Header */}
        <div className="text-left mb-10">
          <SectionHeader
            kicker="MARKET RESEARCH"
            title="Exploring the Grooming Space"
            align="left"
          />
        </div>

        {/* ✅ Donuts — evenly spaced across width */}
        <div className="mb-10">
          <div className="grid grid-cols-3 items-start justify-items-center gap-x-12 md:gap-x-14 py-4 lg:py-10">
            <Donut
              percent={67}
              captionTop="of U.S. households"
              label={"own at least one dog"}
              delay={0}
              size={donutSize}
              stroke={donutStroke}
            />
            <Donut
              percent={73}
              captionTop="of pet owners prefer"
              label={"scheduling appointments\nonline"}
              delay={0.12}
              size={donutSize}
              stroke={donutStroke}
            />
            <Donut
              percent={45}
              captionTop="of pet owners find it"
              label={"challenging to schedule\ngrooming services"}
              delay={0.24}
              size={donutSize}
              stroke={donutStroke}
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Transition, useReducedMotion } from "framer-motion";

const items = [
  { src: "/images/about-images/about-1.JPG", label: "Exploring new places; China 2018" },
  { src: "/images/about-images/about-2.jpeg", label: "Enjoy baking fun things for the holidays" },
  { src: "/images/about-images/about-3.jpeg", label: "Milwaukee Bucks fan & 50/50 raffle winner" },
  { src: "/images/about-images/about-4.jpeg", label: "A new gardening hobby this summer" },
  { src: "/images/about-images/about-5.jpeg", label: "Love crafting for others" },
  { src: "/images/about-images/about-6.png", label: "Going on adventures with my dog, Sadie" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const floatTransition: Transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: [0.42, 0, 0.58, 1],
};

function LaptopOutline() {
  return (
    <svg
      viewBox="0 0 900 650"
      aria-hidden
      className="h-full w-full"
      fill="none"
    >
      {/* Screen */}
      <rect
        x="170"
        y="70"
        width="560"
        height="380"
        rx="28"
        stroke="rgba(255,255,255,0.82)"
        strokeWidth="6"
      />
      {/* Inner screen line */}
      <rect
        x="198"
        y="98"
        width="504"
        height="324"
        rx="18"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="4"
      />

      {/* Base */}
      <path
        d="M120 500H780"
        stroke="rgba(255,255,255,0.80)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M210 500C240 560 660 560 690 500"
        stroke="rgba(255,255,255,0.80)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Trackpad hint */}
      <rect
        x="395"
        y="520"
        width="110"
        height="26"
        rx="10"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="4"
      />
    </svg>
  );
}

function FloatingSkillIcon({
  src,
  alt,
  index,
  className,
}: {
  src: string;
  alt: string;
  index: number;
  className: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={prefersReduced ? undefined : { y: [-6, 6] }}
      transition={{ ...floatTransition, delay: index * 0.16 }}
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="flex flex-col items-center"
      >
        <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/[0.92] ring-1 ring-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
          <Image
            src={src}
            alt={alt}
            width={96}
            height={96}
            className="h-10 w-10 md:h-14 md:w-14 object-contain"
          />
        </div>

        <motion.span
          variants={{ rest: { opacity: 0, y: 4 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: easeOut }}
          className="mt-3 text-white text-[10px] md:text-xs tracking-[0.14em] pointer-events-none"
        >
          {alt}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section className="relative isolate overflow-hidden bg-black text-white full-bleed">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundColor: "#07090B",
          backgroundImage: [
            "radial-gradient(1100px 650px at 12% -10%, rgba(245,60,160,0.55) 0%, rgba(245,60,160,0.20) 45%, rgba(0,0,0,0) 72%)",
            "radial-gradient(1200px 700px at 108% -12%, rgba(0,196,255,0.55) 0%, rgba(0,196,255,0.18) 46%, rgba(0,0,0,0) 72%)",
            "radial-gradient(1000px 600px at 50% -16%, rgba(170,90,255,0.40) 0%, rgba(170,90,255,0.16) 46%, rgba(0,0,0,0) 72%)",
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,1) 100%)",
          ].join(", "),
          backgroundBlendMode: "screen, screen, screen, normal",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-[14vh] pb-24">
        {/* Top: two-column */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT */}
          <div className="lg:col-span-6">
            <p className="text-[11px] tracking-[0.22em] text-white/60">ABOUT</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">
              Hi, I’m Paige.
            </h1>

            <p className="mt-4 text-white/80 text-[13px] md:text-[14px] leading-snug max-w-[52ch]">
              A designer who blends creativity and logic — with a background in development and UX
              design to craft experiences that are beautiful and built to work in the real world.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["UX/UI", "Product Design", "Front-End"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] tracking-[0.12em] text-white/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: laptop highlight */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-[340px] md:w-[460px]">
              {/* glass frame */}
              <div className="absolute -inset-4 rounded-[30px] bg-white/[0.04] ring-1 ring-inset ring-white/10 backdrop-blur-md shadow-[0_24px_90px_rgba(0,0,0,0.55)]" />

              {/* laptop container */}
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden">
                {/* internal hue */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage: [
                      "radial-gradient(520px 320px at 30% 20%, rgba(170,90,255,0.28) 0%, rgba(170,90,255,0.12) 46%, rgba(0,0,0,0) 76%)",
                      "radial-gradient(560px 340px at 70% 30%, rgba(0,196,255,0.18) 0%, rgba(0,196,255,0.08) 46%, rgba(0,0,0,0) 78%)",
                      "radial-gradient(620px 360px at 55% 70%, rgba(0,210,190,0.12) 0%, rgba(0,210,190,0.05) 48%, rgba(0,0,0,0) 80%)",
                    ].join(", "),
                    filter: "blur(38px)",
                    mixBlendMode: "screen",
                  }}
                />

                {/* outline */}
                <div className="relative p-6 md:p-8">
                  <div className="relative aspect-[900/650] w-full">
                    <div className="absolute inset-0 opacity-[0.95] drop-shadow-[0_0_24px_rgba(170,90,255,0.28)]">
                      <LaptopOutline />
                    </div>

                    {/* tiny “screen glow” */}
                    <div
                      aria-hidden
                      className="absolute left-[22%] top-[16%] h-[52%] w-[56%] rounded-[18px]"
                      style={{
                        background:
                          "radial-gradient(420px 260px at 40% 35%, rgba(170,90,255,0.18) 0%, rgba(0,196,255,0.10) 45%, rgba(0,0,0,0) 75%)",
                        filter: "blur(18px)",
                        opacity: 0.9,
                      }}
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-6 rounded-full bg-black/70 blur-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating skills ARCH around laptop */}
        <div className="relative mt-14 h-[340px] md:h-[380px] overflow-hidden">
          {/* Top arch */}
          <FloatingSkillIcon src="/images/skills/5.png" alt="Figma" index={0} className="top-[6%] left-1/2 -translate-x-1/2" />
          <FloatingSkillIcon src="/images/skills/13.png" alt="VS Code" index={1} className="top-[12%] left-[64%]" />
          <FloatingSkillIcon src="/images/skills/3.png" alt="Adobe AE" index={2} className="top-[12%] left-[30%]" />
          <FloatingSkillIcon src="/images/skills/14.png" alt="Github" index={3} className="top-[20%] left-[78%]" />
          <FloatingSkillIcon src="/images/skills/1.png" alt="Canva" index={4} className="top-[20%] left-[16%]" />

          {/* Side “wrap” */}
          <FloatingSkillIcon src="/images/skills/6.png" alt="React" index={5} className="top-[44%] left-[86%]" />
          <FloatingSkillIcon src="/images/skills/7.png" alt="Next.js" index={6} className="top-[44%] left-[6%]" />

          {/* Bottom sides */}
          <FloatingSkillIcon src="/images/skills/10.png" alt="Tailwind.css" index={7} className="top-[66%] left-[18%]" />
          <FloatingSkillIcon src="/images/skills/4.png" alt="Google Analytics" index={8} className="top-[66%] left-[72%]" />
          <FloatingSkillIcon src="/images/skills/12.png" alt="HTML" index={9} className="top-[82%] left-[34%]" />
          <FloatingSkillIcon src="/images/skills/11.png" alt="CSS" index={10} className="top-[82%] left-[58%]" />

          {/* fade so icons hand off cleanly */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>

        {/* Gallery */}
        <div className="mt-28 md:mt-32">
          <p className="text-center text-[11px] tracking-[0.22em] text-white/60">
            BEYOND THE SCREEN
          </p>
          <h2 className="mt-3 text-center text-3xl md:text-5xl font-bold">
            Life Outside of Design
          </h2>

          <div className="mt-12 grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {items.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                className="rounded-full relative group aspect-square overflow-hidden border border-white/10 bg-white/5"
                aria-label={item.label}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-105 group-hover:brightness-75"
                />
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center px-2 text-center
                    text-[9px] xs:text-xs sm:text-sm md:text-base font-medium
                    transition-opacity duration-300
                    ${activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    bg-black/40 backdrop-blur-sm
                  `}
                >
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

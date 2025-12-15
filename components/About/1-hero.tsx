"use client";

import Image from "next/image";
import { motion, type Transition, useReducedMotion } from "framer-motion";

type SkillIcon = {
  src: string;
  alt: string;
  className: string;
};

const SKILLS: SkillIcon[] = [
  { src: "/images/skills/2.png", alt: "Shopify", className: "left-[9%] top-[10%] lg:left-[6%] lg:top-[10%]" },
  { src: "/images/skills/1.png", alt: "Canva", className: "left-[29%] top-[10%] lg:left-[22%] lg:top-[8%]" },
  { src: "/images/skills/3.png", alt: "Adobe AE", className: "left-[33%] top-[23%] lg:left-[36%] lg:top-[17%]" },
  { src: "/images/skills/5.png", alt: "Figma", className: "left-1/2 -translate-x-1/2 top-[5%] lg:top-[6%]" },
  { src: "/images/skills/13.png", alt: "VS Code", className: "right-[33%] top-[24%] lg:right-[28%] lg:top-[17%]" },
  { src: "/images/skills/7.png", alt: "Next.js", className: "right-[18%] top-[12%] lg:right-[11%] lg:top-[9%]" },
  { src: "/images/skills/14.png", alt: "GitHub", className: "right-[-5%] top-[13%] lg:right-[-3%] lg:top-[15%]" },

  { src: "/images/skills/4.png", alt: "Google Analytics", className: "left-[-10%] top-[20%] lg:left-[-8%] lg:top-[26%]" },
  { src: "/images/skills/10.png", alt: "Tailwind.css", className: "left-[-3%] top-[35%] lg:left-[4%] lg:top-[40%]" },
  { src: "/images/skills/9.png", alt: "Sass.css", className: "left-[-2%] top-[52%] lg:left-[0%] lg:top-[58%]" },

  { src: "/images/skills/8.png", alt: "JavaScript", className: "right-[3%] top-[24%] lg:right-[-4%] lg:top-[60%]" },
  { src: "/images/skills/11.png", alt: "CSS", className: "right-[-5%] top-[30%] lg:right-[5%] lg:top-[40%]" },
  { src: "/images/skills/12.png", alt: "HTML", className: "right-[-7%] top-[53%] lg:right-[-10%] lg:top-[37%]" },
];

const floatTransition: Transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: [0.42, 0, 0.58, 1],
};

function LaptopOutline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* screen */}
      <rect
        x="170"
        y="70"
        width="560"
        height="360"
        rx="26"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="6"
      />
      {/* inner bezel */}
      <rect
        x="200"
        y="100"
        width="500"
        height="300"
        rx="18"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="4"
      />
      {/* base */}
      <path
        d="M120 470H780"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M150 470L210 540H690L750 470"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* trackpad hint */}
      <rect
        x="395"
        y="500"
        width="110"
        height="22"
        rx="10"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="4"
      />
    </svg>
  );
}

function FloatingSkill({
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
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={reduce ? undefined : { y: [-6, 6] }}
      transition={{ ...floatTransition, delay: index * 0.14 }}
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="flex flex-col items-center"
      >
        <div className="flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full bg-white/[0.92] ring-1 ring-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
          <Image
            src={src}
            alt={alt}
            width={96}
            height={96}
            className="h-9 w-9 md:h-12 md:w-12 object-contain"
          />
        </div>

        <motion.span
          variants={{ rest: { opacity: 0, y: 4 }, hover: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-[8px] md:text-[9px] tracking-[0.12em] pointer-events-none"
        >
          {alt}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function AboutHeroLaptop() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white full-bleed">
      {/* background glow  */}
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

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-[20vh] lg:pt-[12vh]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.22em] text-white/60">ABOUT</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]">
              Hi, I’m Paige!
            </h1>

            <p className="mt-4 text-white/80 text-[13px] md:text-[14px] leading-snug max-w-3xl">
              I design and build digital experiences for web applications — blending UX strategy,
              visual polish, and front-end execution to make complex things feel effortless.
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

          {/* RIGHT: laptop + arch */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto w-full max-w-[720px]">
              {/* center glow behind laptop */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[28px] mb-36 lg:mb-0"
                style={{
                  backgroundImage: [
                    "radial-gradient(560px 420px at 50% 55%, rgba(0,196,255,0.20) 0%, rgba(0,196,255,0.08) 45%, rgba(0,0,0,0) 75%)",
                    "radial-gradient(560px 420px at 45% 50%, rgba(170,90,255,0.18) 0%, rgba(170,90,255,0.07) 50%, rgba(0,0,0,0) 78%)",
                  ].join(", "),
                  filter: "blur(70px)",
                  opacity: 0.9,
                  mixBlendMode: "screen",
                }}
              />

              <div className="relative rounded-[28px] p-6 md:p-10">
                {/* stage */}
                <div className="relative h-[520px] md:h-[560px] overflow-visible">
                  {/* laptop  */}
                  <div className="absolute inset-x-0 bottom-36 md:bottom-16 flex justify-center">
                    <div className="relative w-[520px] max-w-[90%]">
                      <LaptopOutline className="w-full h-auto drop-shadow-[0_28px_70px_rgba(0,0,0,0.65)]" />
                      <div className="pointer-events-none absolute inset-x-16 -bottom-3 h-8 rounded-full bg-black/70 blur-xl" />
                    </div>
                  </div>

                  {/* floating skills around in an arch */}
                  <div className="absolute inset-0 overflow-visible">
                    {SKILLS.map((s, idx) => (
                      <FloatingSkill
                        key={s.alt}
                        src={s.src}
                        alt={s.alt}
                        index={idx}
                        className={s.className}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

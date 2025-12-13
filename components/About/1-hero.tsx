"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Transition, useReducedMotion } from "framer-motion";
import PaigeOutlineTrace from "../outline";

const items = [
  { src: "/images/about-images/about-1.JPG", label: "Exploring new places; China 2018" },
  { src: "/images/about-images/about-2.jpeg", label: "Enjoy baking fun things for the holidays" },
  { src: "/images/about-images/about-3.jpeg", label: "Milwaukee Bucks fan & 50/50 raffle winner" },
  { src: "/images/about-images/about-4.jpeg", label: "A new gardening hobby this summer" },
  { src: "/images/about-images/about-5.jpeg", label: "Love crafting for others" },
  { src: "/images/about-images/about-6.png", label: "Going on adventures with my dog, Sadie" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

// ✅ Type-safe transition for Framer Motion (no string ease)
const floatTransition: Transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: [0.42, 0, 0.58, 1],
};

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
      className={`absolute ${className} pointer-events-auto`}
      animate={prefersReduced ? undefined : { y: [-6, 6] }}
      transition={{ ...floatTransition, delay: index * 0.18 }}
      initial="rest"
      whileHover="hover"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="flex h-14 w-14 md:h-24 md:w-24 items-center justify-center rounded-full bg-white/[0.92] ring-1 ring-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
          <Image
            src={src}
            alt={alt}
            width={96}
            height={96}
            className="h-10 w-10 md:h-16 md:w-16 object-contain"
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

      {/* subtle bottom hue so the section feels finished */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[32vh] opacity-70"
        style={{
          backgroundImage: [
            "radial-gradient(1100px 520px at 20% 120%, rgba(245,60,160,0.16) 0%, rgba(245,60,160,0.06) 42%, rgba(0,0,0,0) 74%)",
            "radial-gradient(1200px 520px at 55% 125%, rgba(0,196,255,0.14) 0%, rgba(0,196,255,0.06) 44%, rgba(0,0,0,0) 76%)",
            "radial-gradient(1100px 520px at 88% 120%, rgba(0,210,190,0.12) 0%, rgba(0,210,190,0.05) 46%, rgba(0,0,0,0) 78%)",
          ].join(", "),
          filter: "blur(70px)",
          mixBlendMode: "screen",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 75%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0) 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pt-[14vh] pb-24">
        {/* Top: two-column (matches homepage) */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* LEFT: copy */}
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

          {/* RIGHT: headshot (homepage glass style) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative lg:mt-8">
            <div className="relative w-[330px] md:w-[420px]">
              <div className="absolute -inset-4 rounded-[28px] bg-white/[0.04] ring-1 ring-inset ring-white/10 backdrop-blur-md shadow-[0_24px_90px_rgba(0,0,0,0.55)]" />

              <Image
                src="/images/homepage-images/paige-headshot.png"
                alt="Paige Sylvan headshot"
                width={500}
                height={520}
                className="relative rounded-3xl object-cover w-full"
                priority
                sizes="(min-width: 1024px) 420px, 330px"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PaigeOutlineTrace />
              </div>

              <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-6 rounded-full bg-black/70 blur-lg" />
            </div>
          </div>
        </div>

        {/* Floating skills layer (CAPPED + fade so it never overlaps the gallery) */}
        <div
          className="
            relative mt-12
            h-[360px] md:h-[420px]
            overflow-hidden
          "
        >
          {/* arc / row (switched from vh -> % so it’s stable inside this container) */}
          <FloatingSkillIcon src="/images/skills/2.png" alt="Shopify" index={0} className="top-[18%] left-[2%] lg:top-[28%] lg:left-[1%]" />
          <FloatingSkillIcon src="/images/skills/1.png" alt="Canva" index={1} className="top-[10%] left-[12%] lg:top-[16%] lg:left-[18%]" />
          <FloatingSkillIcon src="/images/skills/3.png" alt="Adobe AE" index={2} className="top-[18%] left-[28%] lg:top-[10%] lg:left-[30%]" />
          <FloatingSkillIcon src="/images/skills/5.png" alt="Figma" index={3} className="top-[8%] left-[50%] -translate-x-1/2 lg:top-[12%]" />
          <FloatingSkillIcon src="/images/skills/13.png" alt="VS Code" index={4} className="top-[16%] right-[22%] lg:top-[10%] lg:right-[32%]" />
          <FloatingSkillIcon src="/images/skills/7.png" alt="Next.js" index={5} className="top-[26%] right-[28%] lg:top-[36%] lg:right-[20%]" />
          <FloatingSkillIcon src="/images/skills/6.png" alt="React" index={6} className="top-[20%] right-[3%] lg:top-[28%] lg:right-[1%]" />

          {/* left cascade */}
          <FloatingSkillIcon src="/images/skills/4.png" alt="Google Analytics" index={7} className="top-[36%] left-[16%] lg:top-[48%] lg:left-[16%]" />
          <FloatingSkillIcon src="/images/skills/10.png" alt="Tailwind.css" index={8} className="top-[66%] left-[6%] lg:top-[70%] lg:left-[5%]" />
          <FloatingSkillIcon src="/images/skills/9.png" alt="Sass.css" index={9} className="top-[78%] left-[12%] lg:top-[80%] lg:left-[10%]" />

          {/* right cascade */}
          <FloatingSkillIcon src="/images/skills/8.png" alt="Javascript" index={10} className="top-[64%] right-[12%] lg:top-[64%] lg:right-[1%]" />
          <FloatingSkillIcon src="/images/skills/11.png" alt="CSS" index={11} className="top-[76%] right-[2%] lg:top-[74%] lg:right-[16%]" />
          <FloatingSkillIcon src="/images/skills/12.png" alt="HTML" index={12} className="top-[46%] right-[6%] lg:top-[82%] lg:right-[5%]" />

          {/* little extras */}
          <FloatingSkillIcon src="/images/skills/14.png" alt="Github" index={13} className="top-[6%] right-[14%] lg:top-[15%] lg:right-[12%]" />
          <FloatingSkillIcon src="/images/skills/15.png" alt="Vercel" index={14} className="top-[22%] left-[6%] lg:top-[16%] lg:left-[2%]" />

          {/* bottom fade so icons hand off cleanly */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,1) 100%)",
            }}
          />
        </div>

        {/* Gallery grid */}
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
                onClick={() => handleToggle(index)}
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

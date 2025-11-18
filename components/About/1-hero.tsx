"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { src: "/images/about-images/about-1.JPG", label: "Exploring new places; China 2018" },
  { src: "/images/about-images/about-2.jpeg", label: "Holiday baking joy" },
  { src: "/images/about-images/about-3.jpeg", label: "Milwaukee Bucks fan & 50/50 raffle winner" },
  { src: "/images/about-images/about-4.jpeg", label: "Summer gardening hobby" },
  { src: "/images/about-images/about-5.jpeg", label: "Crafting handmade gifts" },
  { src: "/images/about-images/about-6.png", label: "Adventures with my dog, Sadie" },
];


const floatTransition = {
  duration: 5,
  repeat: Infinity as const,
  repeatType: "reverse" as const,
  ease: "easeInOut",
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
  return (
    <motion.div
      className={`absolute flex flex-col items-center justify-center
        ${className} pointer-events-auto`}
      animate={{ y: [-6, 6] }}
      transition={{ ...floatTransition, delay: index * 0.18 }}
    >
      {/* CIRCLE */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="flex h-14 w-14 md:h-24 md:w-24 items-center justify-center
        rounded-full bg-white shadow-[0_18px_45px_rgba(0,0,0,0.45)]
        relative"
      >
        <Image
          src={src}
          alt={alt}
          width={60}
          height={60}
          className="h-12 w-12 md:h-24 md:w-24 object-contain transition-all duration-900 group-hover:scale-110"
        />
      </motion.div>

      {/* LABEL UNDERNEATH (fades in on hover) */}
      <motion.span
        initial={{ opacity: 0, y: 4 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="text-white text-[10px] md:text-xs mt-1 opacity-0 group-hover:opacity-100 pointer-events-none"
      >
        {alt}
      </motion.span>
    </motion.div>
  );
}



export default function AboutHero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) =>
    setActiveIndex((prev) => (prev === index ? null : index));

  return (
    <section className="relative isolate flex items-center justify-center px-6 bg-black text-white overflow-hidden">
      {/* Glow background */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none -z-10"
        style={{
          backgroundColor: "#07090B",
          backgroundImage: [
            "radial-gradient(1000px 600px at 42% -18%, rgba(255,70,70,0.48) 0%, rgba(255,70,70,0.20) 42%, rgba(255,70,70,0) 68%)",
            "radial-gradient(1300px 780px at -15% -20%, rgba(245,60,160,0.85) 0%, rgba(245,60,160,0.38) 40%, rgba(245,60,160,0) 64%)",
            "radial-gradient(1000px 600px at 28% -22%, rgba(170,90,255,0.55) 0%, rgba(170,90,255,0.22) 44%, rgba(170,90,255,0) 70%)",
            "linear-gradient(12deg, rgba(90,60,255,0.00) 34%, rgba(90,60,255,0.35) 48%, rgba(90,60,255,0.00) 66%)",
            "radial-gradient(1100px 720px at 88% -18%, rgba(44,110,255,0.62) 0%, rgba(44,110,255,0.26) 44%, rgba(44,110,255,0) 70%)",
            "radial-gradient(1300px 780px at 115% -20%, rgba(0,196,255,0.88) 0%, rgba(0,196,255,0.38) 40%, rgba(0,196,255,0) 64%)",
            "radial-gradient(900px 580px at 105% 6%, rgba(0,210,190,0.35) 0%, rgba(0,210,190,0.14) 40%, rgba(0,210,190,0) 64%)",
            "radial-gradient(1400px 600px at 50% -24%, rgba(255,165,80,0.70) 0%, rgba(255,165,80,0.24) 42%, rgba(255,165,80,0) 68%)",
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.64) 50%, rgba(0,0,0,0.90) 82%, rgba(0,0,0,1) 100%)",
          ].join(", "),
          backgroundBlendMode:
            "screen, screen, screen, screen, screen, screen, screen, screen, normal",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] text-center mt-[12vh]">

        {/* ----------------------------------------------------- */}
        <div className="relative w-full h-[280px] md:h-[320px] mb-4 pointer-events-none">

          {/* TOP ARCH (7 icons) */}

          {/* far left top */}
          <FloatingSkillIcon
            src="images/skills/2.png"
            alt="Shopify Logo"
            index={0}
            className="top-12 lg:top-[30vh] left-[1%]"
          />

          {/* mid-left top */}
          <FloatingSkillIcon
            src="images/skills/1.png"
            alt="Canva Logo"
            index={1}
            className="top-24 lg:top-[17vh] left-[18%]"
          />

          {/* left of center */}
          <FloatingSkillIcon
            src="images/skills/3.png"
            alt="Adobe AE Logo"
            index={2}
            className="top-36 lg:top-[10vh] left-[30%]"
          />

          {/* center top */}
          <FloatingSkillIcon
            src="images/skills/5.png"
            alt="Figma Logo"
            index={3}
            className="top-8 lg:top-[12vh] left-[45%] -translate-x-1/2"
          />

          {/*  right of center */}
          <FloatingSkillIcon
            src="images/skills/13.png"
            alt="VS Code Logo"
            index={4}
            className="top-4 lg:top-[10vh] right-[32%]"
          />

          {/* mid-right top */}
          <FloatingSkillIcon
            src="images/skills/7.png"
            alt="Next.js Logo"
            index={5}
            className="lg:top-[38vh] right-[20%]"
          />

          {/*  far right top */}
          <FloatingSkillIcon
            src="images/skills/6.png"
            alt="React Logo"
            index={6}
            className="lg:top-[30vh] right-[8%]"
          />

          {/* LEFT SIDE CASCADE (3 icons) */}

          {/* upper side left */}
          <FloatingSkillIcon
            src="images/skills/4.png"
            alt="Google Analytics Logo"
            index={7}
            className="top-60 lg:top-[37vh] left-[16%]"
          />

          {/*  mid-left */}
          <FloatingSkillIcon
            src="images/skills/10.png"
            alt="Tailwind Logo"
            index={8}
            className="top-48 lg:top-[50vh] left-[5%]"
          />

          {/*  lower-left */}
          <FloatingSkillIcon
            src="images/skills/9.png"
            alt="Sass Logo"
            index={9}
            className="top-48 lg:top-[65vh] left-[10%]"
          />

          {/* RIGHT SIDE CASCADE (3 icons) */}

          {/*  upper side right */}
          <FloatingSkillIcon
            src="images/skills/8.png"
            alt="Javascript Logo"
            index={10}
            className="top-48 lg:top-[45vh] right-[1%]"
          />

          {/*  mid-right */}
          <FloatingSkillIcon
            src="images/skills/11.png"
            alt="CSS Logo"
            index={11}
            className="top-24 lg:top-[55vh] right-[16%]"
          />

          {/* lower-right */}
          <FloatingSkillIcon
            src="images/skills/12.png"
            alt="HTML"
            index={12}
            className="top-36 lg:top-[67vh] right-[5%]"
          />
          <FloatingSkillIcon
            src="images/skills/14.png"
            alt="Github"
            index={13}
            className="top-8 lg:top-[15vh] right-[12%]"
          />

          {/* GitHub — top row far left-extra */}
          <FloatingSkillIcon
            src="images/skills/15.png"
            alt="Vercel"
            index={14}
            className="top-8 lg:top-[16vh] left-[2%]"
          />
        </div>

        {/* Text */}
        <h1 className="mt-2 md:text-4xl">Hi, I’m Paige!</h1>

        <h1 className="mt-8 text-lg lg:text-xl font-semibold leading-tight">
          A designer who blends creativity and logic.
        </h1>

        <p className="text-white/80 max-w-[500px] mx-auto text-[14px] md:text-[15px] leading-snug pt-1 pb-[13vh]">
          My background in development and UX design helps me craft experiences
          that are not only beautiful but built to work in the real world.
        </p>

        {/* Headshot */}
        <div className="flex justify-center mb-24">
          <div className="rounded-3xl overflow-hidden relative z-10">
            <Image
              src="/images/about-images/paige.png"
              alt="Paige Sylvan headshot"
              width={500}
              height={420}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* -----------------------------------------------------
           GALLERY GRID
        ------------------------------------------------------ */}
        <div className="mx-auto w-full mt-96">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-36">
            {items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="rounded-full relative group aspect-square overflow-hidden border border-white/10 bg-white/5 focus:outline-none"
                >
                  {/* Image */}
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className={`object-cover transition-all duration-300
                      ${
                        isActive
                          ? "blur-sm scale-105 brightness-75"
                          : "scale-100"
                      }
                      group-hover:blur-sm group-hover:scale-105 group-hover:brightness-75
                    `}
                  />

                  {/* Label Overlay */}
                  <div
                    className={`
                      absolute inset-0 flex items-center justify-center px-2 text-center
                      text-[9px] xs:text-xs sm:text-sm md:text-base font-medium
                      transition-opacity duration-300
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                      bg-black/40 backdrop-blur-sm
                    `}
                  >
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

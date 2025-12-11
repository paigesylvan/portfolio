"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import  PaigeOutlineTrace from "../outline"; // adjust path as needed

const items = [
  { src: "/images/about-images/about-1.JPG", label: "Exploring new places; China 2018" },
  { src: "/images/about-images/about-2.jpeg", label: "Enjoy baking fun things for the holidays" },
  { src: "/images/about-images/about-3.jpeg", label: "Milwaukee Bucks fan & 50/50 raffle winner" },
  { src: "/images/about-images/about-4.jpeg", label: "A new gardening hobby this summer" },
  { src: "/images/about-images/about-5.jpeg", label: "Love crafting for others" },
  { src: "/images/about-images/about-6.png", label: "Going on adventures with my dog, Sadie" },
];

const floatTransition = {
  duration: 5,
  repeat: Infinity,
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
      initial="rest"
      whileHover="hover"
    >
      {/* wrapper for scaling */}
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.15 },
        }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="relative flex items-center justify-center"
      >
        {/* circle + icon */}
        <div
          className="flex h-14 w-14 md:h-24 md:w-24 items-center justify-center
          rounded-full bg-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] relative"
        >
          <Image
            src={src}
            alt={alt}
            width={60}
            height={60}
            className="h-14 w-14 md:h-24 md:w-24 object-contain transition-all duration-500"
          />
        </div>
      </motion.div>

      {/* label */}
      <motion.span
        variants={{
          rest: { opacity: 0, y: 4 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-white text-[10px] md:text-xs mt-4 pointer-events-none tracking-[0.12em]"
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
      <div className="relative z-10 mx-auto w-full max-w-[1300px] text-center mt-[9vh]">
        {/* Floating skills */}
        <div className="relative w-full h-[280px] md:h-[320px] mb-4 pointer-events-none">
          {/* far left top */}
          <FloatingSkillIcon
            src="images/skills/2.png"
            alt="Shopify"
            index={0}
            className="top-[20vh] lg:top-[30vh] lg:left-[1%]"
          />

          {/* mid-left top */}
          <FloatingSkillIcon
            src="images/skills/1.png"
            alt="Canva"
            index={1}
            className="top-12 left-2 lg:top-[17vh] lg:left-[18%]"
          />

          {/* left of center */}
          <FloatingSkillIcon
            src="images/skills/3.png"
            alt="Adobe AE"
            index={2}
            className="top-[20vh] lg:top-[10vh] left-[30%]"
          />

          {/* center top */}
          <FloatingSkillIcon
            src="images/skills/5.png"
            alt="Figma"
            index={3}
            className="top-8 lg:top-[12vh] left-[45%] -translate-x-1/2"
          />

          {/* right of center */}
          <FloatingSkillIcon
            src="images/skills/13.png"
            alt="VS Code"
            index={4}
            className="top-24 right-[16%] lg:top-[10vh] lg:right-[32%]"
          />

          {/* mid-right top */}
          <FloatingSkillIcon
            src="images/skills/7.png"
            alt="Next.js"
            index={5}
            className="right-[30%] top-[20vh] lg:top-[38vh] lg:right-[20%]"
          />

          {/* far right top */}
          <FloatingSkillIcon
            src="images/skills/6.png"
            alt="React"
            index={6}
            className="top-[16vh] lg:top-[30vh] right-[1%]"
          />

          {/* LEFT SIDE CASCADE */}
          <FloatingSkillIcon
            src="images/skills/4.png"
            alt="Google Analytics"
            index={7}
            className="top-24 lg:top-[37vh] left-[16%]"
          />

          <FloatingSkillIcon
            src="images/skills/10.png"
            alt="Tailwind.css"
            index={8}
            className="top-[49vh] left-[8%] lg:top-[50vh] lg:left-[5%]"
          />

          <FloatingSkillIcon
            src="images/skills/9.png"
            alt="Sass.css"
            index={9}
            className="top-[60vh] lg:top-[65vh] lg:left-[10%]"
          />

          {/* RIGHT SIDE CASCADE */}
          <FloatingSkillIcon
            src="images/skills/8.png"
            alt="Javascript"
            index={10}
            className="top-[49vh] right-[15%] lg:top-[45vh] lg:right-[1%]"
          />

          <FloatingSkillIcon
            src="images/skills/11.png"
            alt="CSS"
            index={11}
            className="top-[55vh] right-1 lg:top-[55vh] lg:right-[16%]"
          />

          <FloatingSkillIcon
            src="images/skills/12.png"
            alt="HTML"
            index={12}
            className="top-[28vh] lg:top-[67vh] right-[5%]"
          />

          <FloatingSkillIcon
            src="images/skills/14.png"
            alt="Github"
            index={13}
            className="top-[1vh] lg:top-[15vh] right-[12%]"
          />

          <FloatingSkillIcon
            src="images/skills/15.png"
            alt="Vercel"
            index={14}
            className="left-[20%] lg:top-[16vh] lg:left-[2%]"
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

        <div className="relative mx-auto w-[350px] md:w-[420px]">
  {/* Image */}
  <Image
    src="/images/homepage-images/paige-headshot.png"
    alt="Paige Sylvan headshot"
    width={500}
    height={420}
    className="rounded-3xl object-cover w-full"
  />

  {/* Outline */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <PaigeOutlineTrace />
  </div>
</div>

        {/* Gallery grid */}
        <div className="mx-auto w-full mt-36">
        <div className="text-center relative">
        <p className="text-[11px] tracking-[0.22em] text-white/60">BEYOND THE SCREEN</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold mb-24">Life Outside of Design</h2>
      </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-36">
          {items.map((item, index) => (
  <div
    key={index}
    className="rounded-full relative group aspect-square overflow-hidden border border-white/10 bg-white/5"
  >
    <Image
      src={item.src}
      alt={item.label}
      fill
      className="object-cover transition-all duration-300
        group-hover:blur-sm group-hover:scale-105 group-hover:brightness-75
      "
    />

    <div
      className="
        absolute inset-0 flex items-center justify-center px-2 text-center
        text-[9px] xs:text-xs sm:text-sm md:text-base font-medium 
        transition-opacity duration-300
        opacity-0 group-hover:opacity-100
        bg-black/40 backdrop-blur-sm
      "
    >
      {item.label}
    </div>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
}

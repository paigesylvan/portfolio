"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Goal = {
  title: string;
  goal: string;
  copy?: string;
  image: string;
  gif: string;
  imageAlt: string;
};

const goals: Goal[] = [
  {
    title: "TRUST IS TOP PRIORITY",
    goal: "Goal: Show groomer bios, reviews, certifications, and past work.",
    copy: "First-time users feel safer when they can evaluate the humans behind the service.",
    image: "/images/project1-images/trust.png",
    gif: "/images/project1-images/trust.gif",
    imageAlt: "Profiles and reviews showing groomer transparency",
  },
  {
    title: "BOOKING FLOWS ARE CLUNKY OR OVERWHELMING",
    goal: "Goal: Allow quick appointment scheduling with a clean UI.",
    copy: "Reduce steps, remove jargon, and keep the path to ‘Select’ obvious.",
    image: "/images/project1-images/booking.png",
    gif: "/images/project1-images/booking.gif",
    imageAlt: "Clean appointment selection UI",
  },
  {
    title: "REAL-TIME UPDATES & COMMUNICATION IS RARE",
    goal: "Goal: Provide messaging and status notifications.",
    image: "/images/project1-images/updates.png",
    gif: "/images/project1-images/updates.gif",
    imageAlt: "Notifications and status UI",
  },
  {
    title: "REPEAT USERS WANT PERSONALIZATION",
    goal: "Goal: Let users create dog profiles to save preferences and see past appointments.",
    image: "/images/project1-images/personalization.png",
    gif: "/images/project1-images/personalization.gif",
    imageAlt: "Dog profile personalization",
  },
  {
    title: "SERVICE DESCRIPTIONS ARE OFTEN VAGUE",
    goal: "Goal: Use clear, detailed descriptions to reduce confusion and support calls.",
    image: "/images/project1-images/descriptions.png",
    gif: "/images/project1-images/descriptions.gif",
    imageAlt: "Clear, comparable service cards",
  },
  {
    title: "VISUAL DESIGN OFTEN FEELS OUTDATED OR GENERIC",
    goal: "Goal: Use warm colors, friendly microcopy, and pet-centric imagery.",
    image: "/images/project1-images/visual.png",
    gif: "/images/project1-images/visual.gif",
    imageAlt: "Warm, pet-centric visual language",
  },
];

const parent = (stagger = 0.12): Variants => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger },
  },
});

const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // ✅ typed easing
  },
});

export default function Goals() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="mt-12 md:mt-24 flex flex-col items-center justify-center px-3 md:px-6 text-white pb-8 md:pb-16">
      <div className="w-full max-w-[1000px] mx-auto">
        <SectionHeader
          kicker="DEFINING THE DESIGN "
          title="6 UX Findings and Design Goals"
          align="center"
        />

        {/* Intro blurb */}
        <p className="hidden sm:block text-xs sm:text-sm md:text-base mx-auto mt-3 max-w-4xl text-left text-white/80 leading-tight">
          From my research, I identified key focus areas from user needs to guide
          my UI design decisions. These findings highlight the need for a
          digital experience that builds trust, simplifies decisions, and
          streamlines the booking process.
        </p>

        <motion.div
          className="
            mt-8 md:mt-10
            grid grid-cols-2 md:grid-cols-3
            gap-2 sm:gap-4 md:gap-5
          "
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {goals.map((g) => (
            <motion.div
              key={g.title}
              variants={item(!!prefersReduced)}
              className="
                group flex flex-col items-center justify-between
                rounded-xl bg-white/5 p-2 sm:p-3 md:p-4
                ring-1 ring-white/10 backdrop-blur-md
                transition-all hover:bg-white/10
              "
            >
              {/* Image */}
              <div className="w-full flex justify-center mb-2 md:mb-3">
                <Image
                  src={g.image}
                  alt={g.imageAlt}
                  width={200}
                  height={200}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain group-hover:hidden"
                />
                <Image
                  src={g.gif}
                  alt={g.imageAlt}
                  width={200}
                  height={200}
                  unoptimized
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain hidden group-hover:block"
                />
              </div>

              {/* Text */}
              <h3 className="text-[#7FB2FF] text-[8px] sm:text-[10px] md:text-[12px] font-semibold tracking-[0.12em] text-center leading-snug">
                {g.title}
              </h3>
              <p className="mt-1 text-center text-white text-[8px] sm:text-[10px] md:text-[12px] leading-snug max-w-[250px]">
                {g.goal}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

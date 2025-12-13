"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Skill = {
  title: string;
  body: string;
  gif: string;
  alt: string;
};

const skills: Skill[] = [
  {
    title: "Simplify the Complex",
    body:
      "I work to make things clearer and easier to use, decluttering workflows and untangling overloaded interfaces.",
    gif: "/gifs/wireframes.gif",
    alt: "Wireframes animation",
  },
  {
    title: "Design With Intent",
    body:
      "I translate business goals and user needs into clean, intuitive interfaces that make sense the first time you click.",
    gif: "/gifs/palette.gif",
    alt: "Design tools animation",
  },
  {
    title: "Ship Real Products",
    body:
      "From sketches to code, I love bringing ideas to life and building responsive products that actually work.",
    gif: "/gifs/dev-desktop.gif",
    alt: "Development desktop animation",
  },
];

export default function Skills() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black text-white py-16 lg:py-32"
    >
      {/* subtle bottom hue that fades (not cut off) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[40vh] opacity-80"
        style={{
          backgroundImage: [
            "radial-gradient(1200px 520px at 20% 110%, rgba(245,60,160,0.22) 0%, rgba(245,60,160,0.10) 40%, rgba(0,0,0,0) 72%)",
            "radial-gradient(1100px 520px at 55% 115%, rgba(0,196,255,0.18) 0%, rgba(0,196,255,0.08) 42%, rgba(0,0,0,0) 74%)",
            "radial-gradient(1000px 520px at 90% 110%, rgba(0,210,190,0.16) 0%, rgba(0,210,190,0.07) 44%, rgba(0,0,0,0) 76%)",
          ].join(", "),
          filter: "blur(70px)",
          mixBlendMode: "screen",
          // fade the hue upward so it "flows" into the page
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 70%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* content layer */}
      <div className="relative z-10">
        <h2 className="mb-10 lg:mb-16 text-center text-[12px] tracking-[0.22em] text-white/60">
          SKILLS
        </h2>

        <div className="mx-auto w-full md:w-[60%]">
          <div className="grid gap-12 md:gap-10 md:grid-cols-3 text-center md:text-left">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: prefersReduced ? 0 : 0.5,
                  // ✅ framer-motion expects an easing function/array, not "easeOut" string (new TS strictness)
                  ease: [0.22, 1, 0.36, 1],
                  delay: prefersReduced ? 0 : i * 0.06,
                }}
                className="relative"
              >
                {/* Card content */}
                <div className="relative z-10 px-4 pb-4 md:px-0 md:pb-8 lg:pb-0 lg:ml-16">
                  <div className="mb-4 flex justify-center md:justify-start">
                    <Image
                      src={s.gif}
                      alt={s.alt}
                      width={100}
                      height={100}
                      unoptimized
                      className="h-14 w-18 md:h-20 md:w-24 object-contain opacity-90"
                    />
                  </div>

                  <h3 className="mb-2 lg:mb-3 text-[13px] md:text-[14px] font-semibold">
                    {s.title}
                  </h3>

                  <p className="text-white/80 leading-snug text-[11px] md:text-[12px] pr-24">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

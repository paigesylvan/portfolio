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

const HUES = [
  "radial-gradient(520px 360px at 50% 50%, rgba(238,100,160,0.28) 0%, rgba(170,90,255,0.20) 42%, rgba(0,0,0,0) 78%)",
  "radial-gradient(520px 360px at 50% 50%, rgba(0,195,255,0.24) 0%, rgba(80,140,255,0.28) 42%, rgba(0,0,0,0) 78%)",
  "radial-gradient(520px 360px at 50% 50%, rgba(0,210,190,0.24) 0%, rgba(19,78,88,0.40) 42%, rgba(0,0,0,0) 78%)",
];

export default function Skills() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative  overflow-hidden bg-black text-white lg:py-32"
    >
      {/* Soft global vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 26%, rgba(0,0,0,0.6) 52%, rgba(0,0,0,0) 100%)",
        }}
      />
            <div
        className="vignette-soft absolute inset-0 pointer-events-none"
        aria-hidden
      />


      <h2 className="mb-10 lg:mb-16 text-center text-[12px] tracking-[0.22em] text-white/60">
        SKILLS
      </h2>

      <div className="mx-auto w-full md:w-[60%] ">
        <div className="grid gap-12 md:gap-10 md:grid-cols-3 text-center md:text-left">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: prefersReduced ? 0 : i * 0.06,
              }}
              className="relative"
            >
              {/* Blur only on md+ to avoid mobile jank */}
              <div
                aria-hidden
                className="
                  hidden md:block
                  absolute left-1/2 top-1/2
                  -translate-x-1/2 -translate-y-1/2
                  md:-translate-x-[60%] lg:-translate-x-[70%]
                  z-0 w-[420px] h-[180px]
                  blur-[80px] opacity-90 pointer-events-none
                "
                style={{ background: HUES[i % HUES.length] }}
              /> 

              {/* Card content */}
              <div className="relative z-10 px-4 pb-4 md:px-0 md:pb-8 lg:pb-0 lg:ml-16">
                <div className="mb-4 flex justify-center md:justify-start ">
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
    </section>
  );
}

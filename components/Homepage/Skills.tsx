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

const easeOut = [0.22, 1, 0.36, 1] as const;

// subtle per-card hues (kept tasteful)
const CARD_HUES = [
  "radial-gradient(420px 260px at 30% 20%, rgba(245,60,160,0.22) 0%, rgba(245,60,160,0.10) 45%, rgba(0,0,0,0) 75%)",
  "radial-gradient(420px 260px at 30% 20%, rgba(0,196,255,0.20) 0%, rgba(0,196,255,0.09) 45%, rgba(0,0,0,0) 75%)",
  "radial-gradient(420px 260px at 30% 20%, rgba(0,210,190,0.18) 0%, rgba(0,210,190,0.08) 45%, rgba(0,0,0,0) 75%)",
];

export default function Skills() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden bg-black text-white
        py-16 lg:py-28
        pb-28 lg:pb-44
      "
    >
      <div className="relative z-10">
        <h2 className="mb-10 text-center text-[12px] tracking-[0.22em] text-white/60">
          SKILLS
        </h2>

        <div className="mx-auto w-full max-w-[1100px] px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((s, i) => (
              <motion.article
                key={s.title}
                initial={prefersReduced ? false : { opacity: 0, y: 18 }}
                whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: prefersReduced ? 0 : 0.55,
                  ease: easeOut,
                  delay: prefersReduced ? 0 : i * 0.06,
                }}
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-white/10 ring-1 ring-inset ring-white/10
                  bg-white/[0.05] backdrop-blur-md
                  shadow-[0_10px_40px_rgba(0,0,0,0.40)]
                  transition-all duration-300
                  hover:bg-white/[0.08] hover:shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                  hover:-translate-y-1
                "
              >
                {/* per-card hue */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: CARD_HUES[i % CARD_HUES.length],
                    filter: "blur(60px)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 85%)",
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 85%)",
                  }}
                />

                <div className="relative z-10 p-6 md:p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] ring-1 ring-inset ring-white/10">
                      <Image
                        src={s.gif}
                        alt={s.alt}
                        width={96}
                        height={96}
                        unoptimized
                        className="h-10 w-10 object-contain opacity-90"
                      />
                    </div>

                    <h3 className="text-[14px] md:text-[15px] font-semibold tracking-[0.01em]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-white/80 leading-snug text-[12px] md:text-[13px]">
                    {s.body}
                  </p>

                  {/* tiny “divider” that feels premium */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/14 to-white/0" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

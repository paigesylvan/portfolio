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
      className="relative py-24 lg:py-32 overflow-hidden bg-black text-white mb-24"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)",
        }}
      />

      <h2 className="mb-16 text-center text-sm tracking-[0.3em] text-white/70">
        SKILLS
      </h2>

      {/* content container */}
      <div className="mx-auto w-full md:w-[70%] px-6 md:px-0 lg:pl-[10.5%]">
        <div className="grid gap-10 md:grid-cols-3 text-center md:text-left">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: prefersReduced ? 0 : 1.2,
                ease: "easeOut",
                delay: i * 0.08,
              }}
            >
              {/* GIF */}
              <div className="mb-6 flex justify-center md:justify-start lg:pl-12">
                <Image
                  src={s.gif}
                  alt={s.alt}
                  width={100}
                  height={100}
                  unoptimized
                  className="h-16 w-20 md:h-20 object-contain opacity-90"
                />
              </div>

              {/* Title */}
              <h3 className="lg:mb-3 text-lg font-semibold">{s.title}</h3>

              {/* Body */}
              <p className="mx-auto md:mx-0 text-white/80 leading-tight text-lg max-w-sm w-[65%]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

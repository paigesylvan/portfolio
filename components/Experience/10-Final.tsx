"use client";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../SectionHeader";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

const parent = (stagger = 0.12): Variants => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger },
  },
});

// Variants with type-safe transition (no "easeOut" string)
const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0 : 0.6,
      ease: [0, 0, 0.58, 1], // type-safe equivalent of easeOut
    } as Transition,
  },
});

export default function Outcome() {
  const prefersReduced = useReducedMotion();
  // ✅ force it to a real boolean (no more boolean | null)
  const reduced = !!prefersReduced;

  return (
    <section className="flex flex-col items-center justify-center px-6 text-white mt-24 lg:mt-16 mb-24 lg:mb-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="[&_h1]:mb-0 [&_h2]:mb-0 [&_p]:mb-0">
          <SectionHeader
            kicker="OUTCOME"
            title="Bridging Design and Development"
            align="left"
            kickerClassName="text-[10px] tracking-[0.22em] text-[#D6A75E] !mb-1"
            titleClassName="text-[26px] md:text-[34px] lg:text-[40px] leading-[1.15] font-semibold !mb-3"
          />
        </div>

        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch"
        >
          <motion.div
            variants={item(reduced)}
            className="flex flex-col justify-between text-white/85 text-[12px] lg:text-[13px] leading-snug max-w-[62ch]"
          >
            <div className="space-y-4">
              <p>
                Jumping into the automation industry, with a full-stack web
                development background, was a daunting start met with immense
                reward. I love learning and being able to make meaningful
                contributions through problem solving and design thinking.
              </p>
              <p>
                One of the biggest challenges of this project was bridging the
                gap between design and development. On the surface, creating HMI
                screens might seem like a purely technical task, but I quickly
                learned how deeply design decisions impact usability. Every
                choice from layout and spacing to how recipes were saved and
                displayed had to balance technical accuracy with operator
                clarity.
              </p>
              <p>
                At times, I dove into PLC logic and electrical schematics to
                ensure functionality matched the interface, pushing me beyond
                “designing screens” into truly integrating design with
                development. This process was rewarding and eye-opening: it
                showed how impactful good interface design is in complex,
                high-stakes environments, and it ultimately fueled my decision
                to pivot my career focus from software engineering toward UX/UI
                design.
              </p>
            </div>

            <div className="text-center md:text-left mt-10 md:mt-20">
              <h1 className=" text-[#D6A75E] leading-snug text-[10px] lg:text-xs max-w-[350px]">
                View the portion of the Project 3 Operations Manual I authored
                to guide operators in using the program I designed.
              </h1>

              <Link
                href="/images/experience-images/operations-manual.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group inline-flex items-center justify-center
                  mt-4 px-6 py-2.5 rounded-full
                  font-medium text-[13px] sm:text-sm text-white
                  bg-white/[0.08] border border-white/20 backdrop-blur-md
                  shadow-[0_3px_12px_rgba(0,0,0,0.3)]
                  hover:bg-white/[0.18] hover:shadow-[0_5px_20px_rgba(0,0,0,0.45)]
                  transition-all duration-300
                "
              >
                View Document
                <span className="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-[#D6A75E]/40 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={item(reduced)}
            className="flex justify-center items-stretch order-first md:order-last"
          >
            <div className="relative w-full h-full min-h-[420px] md:min-h-[560px] overflow-hidden rounded-xl bg-black/20">
              <Image
                src="/images/experience-images/mwes-badge.png"
                alt="MWES Employee Badge"
                fill
                sizes="(min-width: 1280px) 600px, (min-width: 1024px) 520px, 100vw"
                className="!object-contain !object-center"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

type Term = {
  title: string;
  subtitle?: string;
  body: string;
  image: string;
  alt: string;
};

const terms: Term[] = [
  {
    title: "HMI",
    subtitle: "“Human-Machine Interface”",
    body:
      "The touchscreen interface operators use to control and monitor machines.",
    image: "/images/experience-images/hmi.png",
    alt: "Industrial HMI touchscreen",
  },
  {
    title: "PLC",
    subtitle: "“Programmable Logic Controller”",
    body:
      "The “brain” of the system, running the machine’s logic and sending real-time data to the HMI.",
    image: "/images/experience-images/plc.png",
    alt: "Programmable logic controller cabinet",
  },
  {
    title: "Automation Cell",
    subtitle: "",
    body:
      "A group of machines and robots working together on a specific task (e.g., welding or assembly), coordinated through PLCs and HMIs.",
    image: "/images/experience-images/cell.png",
    alt: "Robotic automation cell",
  },
];

const parent = (stagger = 0.12): Variants => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

// ✅ type-safe variants (no "easeOut" string)
const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0 : 0.7,
      // cubic-bezier equivalent of easeOut, TS-safe
      ease: [0, 0, 0.58, 1],
    } as Transition,
  },
});

export default function Terms() {
  const prefersReduced = useReducedMotion();
  // coerce boolean | null -> boolean
  const reduced = !!prefersReduced;

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        <SectionHeader
          kicker="GETTING TO KNOW THE PROCESS"
          title="Key Terms in Industrial Automation"
          align="left"
        />

        <motion.div
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {terms.map((t) => (
            <motion.article
              key={t.title}
              variants={item(reduced)}
              className="
                rounded-3xl bg-white/[0.06] backdrop-blur-md
                ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                px-4 py-4 sm:px-6 sm:py-8
                flex flex-col text-left sm:text-center
              "
            >
              {/* Mobile:  (image left, text right) Desktop: (title -> image -> body) */}
              <div className="flex items-start gap-3 sm:block">
                <div className="flex-none">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    width={96}
                    height={96}
                    className="w-20 h-20 sm:w-[350px] sm:h-[280px] rounded-lg object-cover"
                    priority
                  />
                </div>

                {/* Right text column (mobile), top text (desktop) */}
                <div className="flex-1 sm:mt-4 sm:mx-auto sm:max-w-[360px]">
                  <h3 className="text-base sm:text-xl font-semibold">
                    {t.title}
                  </h3>
                  {t.subtitle ? (
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/70">
                      {t.subtitle}
                    </p>
                  ) : null}

                  {/* Body for mobile (inline with title on the right) */}
                  <p className="mt-1.5 text-[12px]  text-white/80 leading-tight sm:hidden">
                    {t.body}
                  </p>
                </div>
              </div>

              {/* Body for desktop (under the image) */}
              <p className="hidden sm:block lg:mt-6 text-white/80 leading-snug text-[14px]">
                {t.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

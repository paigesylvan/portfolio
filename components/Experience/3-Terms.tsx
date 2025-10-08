"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

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

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.7, ease: "easeOut" },
  },
});

export default function Terms() {
  const prefersReduced = useReducedMotion();

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
              variants={item(prefersReduced)}
              className="
                rounded-3xl bg-white/[0.06] backdrop-blur-md
                ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                px-6 py-8 flex flex-col items-center text-center
              "
            >
              <h3
                className={`text-xl font-semibold ${
                  t.title === "Automation Cell" ? "pb-7" : ""
                }`}
              >
                {t.title}
              </h3>

              {t.subtitle ? (
                <p className="mt-1 text-sm text-white/70">{t.subtitle}</p>
              ) : null}

              <div className="mt-6 w-full">
                <div className="mx-auto max-w-[360px] p-2">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    width={500}
                    height={600}
                    className="w-[350px] h-[280px] rounded-lg"
                    priority
                  />
                </div>
              </div>

              <p className="mt-6 text-white/80 leading-relaxed">{t.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

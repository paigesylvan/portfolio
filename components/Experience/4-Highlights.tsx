// components/Experience/4-Highlights.tsx
"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

type Highlight = {
  title: string;
  body: string;
  still: string; // static PNG/SVG
  gif: string;   // animated GIF (plays on hover)
  alt: string;
};

const highlights: Highlight[] = [
  {
    title: "Collaboration & Teamwork",
    body:
      "Worked on cross-disciplinary teams to design HMIs for custom industrial automation projects.",
    still: "/images/experience-images/collab.png",
    gif:  "/images/experience-images/collab.gif",
    alt: "Collaboration icon",
  },
  {
    title: "Problem-Solving",
    body:
      "Troubleshot HMI programming in Ignition Designer to ensure a seamless UI experience.",
    still: "/images/experience-images/solve.png",
    gif:  "/images/experience-images/solve.gif",
    alt: "Problem solving icon",
  },
  {
    title: "UI/UX Design in Engineering",
    body:
      "Designed an end-to-end HMI in FactoryTalk View SE and deployed to an Allen-Bradley PanelView 5000.",
    still: "/images/experience-images/uiux.png",
    gif:  "/images/experience-images/uiux.gif",
    alt: "UI UX icon",
  },
  {
    title: "Technical Support & Client Interaction",
    body:
      "Went off-site to help troubleshoot remote viewing via Ewon devices for a customer.",
    still: "/images/experience-images/support.png",
    gif:  "/images/experience-images/support.gif",
    alt: "Support icon",
  },
  {
    title: "Programming & Technical Learning",
    body:
      "Hands-on PLC hardware + logic; programmed with Studio 5000 and implemented PLC logic.",
    still: "/images/experience-images/code.png",
    gif:  "/images/experience-images/code.gif",
    alt: "Programming icon",
  },
  {
    title: "Human-Centered Design & Safety",
    body:
      "Balanced usability, efficiency, design, and safety in complex industrial systems.",
    still: "/images/experience-images/safety.png",
    gif:  "/images/experience-images/safety.gif",
    alt: "Safety icon",
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

export default function Experience() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1200px] mx-auto">
        <SectionHeader
          kicker="HANDS ON EXPERIENCE"
          title="Highlights from my Internship"
          align="left"
        />

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {highlights.map((h) => (
            <motion.article
              key={h.title}
              variants={item(prefersReduced)}
              className="
                group rounded-3xl bg-white/[0.06] backdrop-blur-md
                ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)]
                px-7 py-8 flex flex-col items-center text-center
                transition-colors hover:bg-white/[0.10]
              "
            >
              {/* icon: swap to GIF on hover */}
              <div className="relative h-20 w-20">
                {/* still */}
                <Image
                  src={h.still}
                  alt={h.alt}
                  width={160}
                  height={160}
                  className="absolute inset-0 h-20 w-20 object-contain opacity-100 transition-opacity duration-200 group-hover:opacity-0"
                />
                {/* gif (kept unoptimized so it animates) */}
                <Image
                  src={h.gif}
                  alt={h.alt}
                  width={160}
                  height={160}
                  unoptimized
                  className="absolute inset-0 h-20 w-20 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </div>

              <h3 className="mt-5 text-base font-semibold">{h.title}</h3>
              <p className="mt-3 text-white/80 leading-relaxed">{h.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

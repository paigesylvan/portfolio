"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Study = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  imageAlt: string;
  cta?: string;
};

const studies: Study[] = [
  {
    slug: "/projects/dog-grooming",
    title:
      "How Emotionally Intelligent Design Improves Booking Confidence for Dog Grooming",
    subtitle:
      "A responsive grooming app designed to ease booking anxiety with empathetic UX and streamlined flows.",
    tags: ["UX RESEARCH", "UI CREATION", "PROTOTYPING"],
    image: "/images/homepage-images/dog-phone.png",
    imageAlt: "Dog grooming app on phone",
    cta: "View Case Study",
  },
  {
    slug: "/projects/camping",
    title:
      "How Thoughtful UX Design Increases Engagement for First-Time Campers",
    subtitle:
      "A responsive website with thoughtful UI design, clear information architecture, and a poetic brand voice to help first-time campers feel guided and confident while shopping for camping gear",
    tags: ["UX-UI", "USER FLOW", "USABILITY TESTING"],
    image: "/images/homepage-images/camping-laptop.png",
    imageAlt: "Camping site on laptop",
    cta: "View Case Study",
  },
  {
    slug: "/projects/cleaners",
    title: "How Clear Design Improves User Trust for a Local Dry Cleaners",
    subtitle:
      "Designed and coded a responsive homepage that simplifies service discovery and builds confidence for a local dry cleaning business.",
    tags: ["VS CODE", "REACT", "RESPONSIVE DESIGN"],
    image: "/images/homepage-images/cleaners-desktop.png",
    imageAlt: "Dry cleaner site on desktop",
    cta: "View Case Study",
  },
];

export default function CaseStudies() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="case-studies" className="relative py-20 overflow-hidden text-white w-screen">
      {/* Top cap into this section */}
      <div className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* Photo texture (base) */}
      <div
        className="absolute inset-0 -z-20 bg-black"
        style={{
          backgroundImage: "url('/images/homepage-images/case-study-bg2.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.55,
        }}
      />
{/* ✅ Extra mid-height hue band to add more color lower on the page */}

{/* CONTINUOUS MULTIHUE FIELD (no seam) */}
<div
  className="absolute left-1/2 -translate-x-1/2 inset-x-0 bottom-0 w-screen h-[70vh] -z-20 pointer-events-none"
  style={{
    background: [
      // broad indigo body across the center-bottom
      "radial-gradient(1400px 720px at 52% 105%, rgba(70,70,160,0.34) 0%, rgba(70,70,160,0.20) 40%, rgba(70,70,160,0.06) 68%, rgba(70,70,160,0) 90%)",
      // cyan/teal right
      "radial-gradient(1200px 620px at 103% 102%, rgba(0,196,255,0.34) 0%, rgba(0,196,255,0.16) 42%, rgba(0,196,255,0.06) 68%, rgba(0,196,255,0) 88%)",
      "radial-gradient(1100px 600px at 86% 96%, rgba(0,210,190,0.28) 0%, rgba(0,210,190,0.14) 44%, rgba(0,210,190,0.05) 70%, rgba(0,210,190,0) 90%)",
      // warm/violet left
      "radial-gradient(1200px 620px at -6% 104%, rgba(170,90,255,0.28) 0%, rgba(170,90,255,0.14) 44%, rgba(170,90,255,0.05) 70%, rgba(170,90,255,0) 90%)",
      "radial-gradient(1100px 580px at -10% 95%, rgba(238,100,160,0.22) 0%, rgba(238,100,160,0.12) 42%, rgba(238,100,160,0.05) 68%, rgba(238,100,160,0) 90%)",
      // gentle diagonal sweep to unify the field
      "linear-gradient(12deg, rgba(90,60,255,0.00) 20%, rgba(90,60,255,0.28) 45%, rgba(90,60,255,0.00) 72%)",
    ].join(", "),
    mixBlendMode: "screen",

    // feather the TOP edge of this entire field so it melts into black/content above
    WebkitMaskImage:
      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 64%)",
    maskImage:
      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 22%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 64%)",
  }}
/>

{/* optional micro-softener to ensure perfect blend on all engines */}



      {/* Black veil to keep text legible */}
      <div className="absolute inset-0 bg-black/60 -z-0" />

      <h2 className="mb-6 text-center text-[13px] tracking-[0.3em] text-white z-30">
        CASE STUDIES
      </h2>

      <div className="space-y-10 lg:space-y-16">
        {studies.map((s) => (
          <motion.article
            key={s.slug}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: prefersReduced ? 0 : 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: prefersReduced ? 0 : 0.8,
                  ease: "easeOut",
                },
              },
            }}
            className="
              group relative mx-auto w-[92%] lg:w-[75%]
              overflow-hidden rounded-3xl
              border border-white/10 ring-1 ring-inset ring-white/10
              bg-white/[0.05] backdrop-blur-lg
              shadow-[0_5px_22px_rgba(0,0,0,0.35)]
              px-4 py-5 md:px-5 md:py-7 lg:px-6 lg:py-10
              transition-all
              hover:bg-white/[0.08] hover:shadow-[0_8px_28px_rgba(0,0,0,0.45)] max-w-6xl
            "
          >
            <div className="grid items-center gap-6 md:grid-cols-12">
              {/* image */}
              <div className="md:col-span-5">
                <div className="mx-auto max-w-[220px] md:max-w-[300px] flex justify-center">
                  <div className="relative rounded-2xl">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      width={1200}
                      height={900}
                      className="h-[180px] w-auto md:h-[300px] object-contain"
                    />
                    <div className="pointer-events-none absolute inset-x-4 -bottom-2 h-4 rounded-full bg-black/60 blur-md" />
                  </div>
                </div>
              </div>

              {/* text */}
              <div className="md:col-span-7 lg:pl-12 pl-4">
                <div className="mb-3 flex flex-wrap gap-1 lg:gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-[2px]
                                 text-[7px] lg:text-[10px] tracking-[0.1em] text-white/85
                                 ring-1 ring-inset ring-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="lg:w-[85%] py-1 lg:py-4 font-bold leading-tight text-[16px] md:text-[20px]">
                  {s.title}
                </h3>

                <p className="mt-2 max-w-prose text-[13px] text-white/70 leading-tight">
                  {s.subtitle}
                </p>

                {/* CTA */}
                <Link
                  href={s.slug}
                  className="
                    group relative mt-6 inline-flex items-center gap-2
                    rounded-full px-5 py-2.5 font-medium text-white text-[12px]
                    bg-white/[0.06] backdrop-blur-md
                    border border-white/10
                    shadow-[0_3px_12px_rgba(0,0,0,0.3)]
                    transition-all duration-300
                    hover:bg-white/[0.15] hover:shadow-[0_5px_18px_rgba(0,0,0,0.45)]
                    focus-visible:ring-2 focus-visible:ring-white/40
                  "
                >
                  <span>{s.cta ?? "View Case Study"}</span>
                  <span
                    className="
                      flex items-center justify-center
                      w-6 h-6 rounded-full
                      bg-white/10
                      transition-all duration-300
                      group-hover:bg-white/30
                      group-hover:translate-x-1
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

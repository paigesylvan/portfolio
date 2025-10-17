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
      "A responsive, mobile-first grooming app designed to ease booking anxiety for pet parents through emotionally intelligent UX, soft visual cues and empathetic microcopy.",
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
      "A responsive website with thoughtful UI design, clear information architecture, and a poetic brand voice to help first-time campers feel guided and confident while shopping for camping gear.",
    tags: ["UX-UI", "USER FLOW", "USABILITY TESTING"],
    image: "/images/homepage-images/camping-laptop.png",
    imageAlt: "Camping site on laptop",
    cta: "View Case Study",
  },
  {
    slug: "/projects/cleaners",
    title: "How Clear Design Improves User Trust for a Local Dry Cleaner",
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
    <section
      id="case-studies"
      className="relative py-32 overflow-hidden text-white"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black"
        style={{
          backgroundImage: "url('/images/homepage-images/case-study-bg.png')", // update this path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.65,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      <h2 className="mb-10 text-center text-xs tracking-[0.3em] text-white/70">
        CASE STUDIES
      </h2>

      <div className="space-y-12 lg:space-y-24">
        {studies.map((s) => (
          <motion.article
            key={s.slug}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: { opacity: 0, y: prefersReduced ? 0 : 36 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: prefersReduced ? 0 : 1.0,
                  ease: "easeOut",
                },
              },
            }}
            className="
              group relative mx-auto w-[90%] lg:w-[70%] overflow-hidden rounded-3xl
              border border-white/10 ring-1 ring-inset ring-white/10
              bg-white/[0.06] backdrop-blur-lg
              shadow-[0_8px_30px_rgba(0,0,0,0.35)]
              px-4 py-6 md:px-5 md:py-7 lg:px-6 lg:py-12
              transition-all hover:bg-white/[0.08] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
            "
          >
            <div className="grid items-center gap-8 md:grid-cols-12">
              {/* image */}
              <div className="md:col-span-5">
                <div className="mx-auto max-w-xs md:max-w-lg flex justify-center">
                  <div className="relative rounded-2xl">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      width={1200}
                      height={900}
                      className="h-[250px] w-auto md:h-[450px] object-contain"
                    />
                    <div className="pointer-events-none absolute inset-x-6 -bottom-4 h-6 rounded-full bg-black/60 blur-lg" />
                  </div>
                </div>
              </div>

              {/* text */}
              <div className="md:col-span-7 lg:pl-16 pl-6">
                <div className="mb-4 flex flex-wrap gap-1 lg:gap-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[8px] lg:text-[14px] tracking-[0.12em] text-white/90 ring-1 ring-inset ring-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="lg:w-[70%] py-1 lg:py-6 font-bold leading-tight text-lg md:text-[36px] lg:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-prose text-md text-white/70 md:text-base leading-tight">
                  {s.subtitle}
                </p>

                {/* Modern pill button */}
                <Link
                  href={s.slug}
                  className="
                    group relative mt-8 inline-flex items-center gap-3
                    rounded-full px-6 py-3 font-medium text-white
                    bg-white/[0.06] backdrop-blur-md
                    shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                    border border-white/10
                    transition-all duration-300
                    hover:bg-white/[0.15] hover:shadow-[0_6px_20px_rgba(0,0,0,0.45)]
                    focus-visible:ring-2 focus-visible:ring-white/40
                  "
                >
                  <span className="text-sm tracking-wide">
                    {s.cta ?? "View Case Study"}
                  </span>
                  <span
                    className="
                      flex items-center justify-center
                      w-7 h-7 rounded-full
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
                      className="w-4 h-4"
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

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
      "A Responsive website with thoughtful UI design, clear information architecture, and a poetic brand voice to help first-time campers feel guided and confident while shopping for camping gear.",
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
    <section id="case-studies" className="relative py-32 bg-black overflow-hidden">
      {/* ---- Subtle modern dark-grey backdrop shapes ---- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* top-left curved blade */}
        <div
          className="absolute -top-52 -left-72 w-[1100px] h-[800px] rotate-[-14deg] opacity-[0.45] blur-[1px]"
          style={{
            background:
              "radial-gradient(120% 140% at 65% 35%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.045) 40%, rgba(255,255,255,0) 70%)",
            WebkitMaskImage:
              "conic-gradient(from 210deg at 70% 40%, rgba(0,0,0,1) 0 45%, rgba(0,0,0,0) 60%)",
            maskImage:
              "conic-gradient(from 210deg at 70% 40%, rgba(0,0,0,1) 0 45%, rgba(0,0,0,0) 60%)",
          }}
        />
        {/* bottom-right curved blade */}
        <div
          className="absolute -bottom-64 -right-80 w-[1200px] h-[900px] rotate-[10deg] opacity-[0.38] blur-[0.5px]"
          style={{
            background:
              "radial-gradient(120% 140% at 40% 60%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.045) 40%, rgba(255,255,255,0) 70%)",
            WebkitMaskImage:
              "conic-gradient(from 30deg at 35% 55%, rgba(0,0,0,1) 0 50%, rgba(0,0,0,0) 65%)",
            maskImage:
              "conic-gradient(from 30deg at 35% 55%, rgba(0,0,0,1) 0 50%, rgba(0,0,0,0) 65%)",
          }}
        />
        {/* center soft vignette to deepen the background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 40%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 45%, rgba(0,0,0,0.0) 70%)",
          }}
        />
        {/* very subtle bottom fade to black to help section transition */}
        <div
          className="absolute bottom-0 left-0 w-full h-[240px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        {/* optional film-grain for nicer glass contrast */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.55'/></svg>\")",
            backgroundSize: "140px 140px",
          }}
        />
      </div>

      <h2 className="mb-10 text-center text-xs tracking-[0.3em] text-white/70">
        CASE STUDIES
      </h2>

      {/* Cards stack */}
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
              transition-colors hover:bg-white/[0.08] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
            "
          >
            {/* inner highlight line (thin glass sheen) */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/5" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

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

                <Link
                  href={s.slug}
                  className="mt-6 inline-block rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_6px_0_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_rgba(0,0,0,0.4)] active:translate-y-0"
                >
                  {s.cta ?? "View Case Study"}
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

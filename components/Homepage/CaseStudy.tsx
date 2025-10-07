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
    image: "/images/dog-phone.png",
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
    image: "/images/camping-laptop.png",
    imageAlt: "Camping site on laptop",
    cta: "View Case Study",
  },
  {
    slug: "/projects/cleaners",
    title: "How Clear Design Improves User Trust for a Local Dry Cleaner",
    subtitle:
      "Designed and coded a responsive homepage that simplifies service discovery and builds confidence for a local dry cleaning business.",
    tags: ["VS CODE", "REACT", "RESPONSIVE DESIGN"],
    image: "/images/cleaners-desktop.png",
    imageAlt: "Dry cleaner site on desktop",
    cta: "View Case Study",
  },
];

export default function CaseStudies() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="case-studies" className="py-32">
      <h2 className="mb-10 text-center text-xs tracking-[0.3em] text-white/70">
        CASE STUDIES
      </h2>

      {/* gap between cards */}
      <div className="space-y-12 lg:space-y-24">
        {studies.map((s) => (
          <motion.article
            key={s.slug}
            initial="hidden"
            whileInView="show" // reveal each card on scroll
            viewport={{ once: true, amount: 0.4 }} // start when ~40% visible
            variants={{
              hidden: { opacity: 0, y: prefersReduced ? 0 : 36 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: prefersReduced ? 0 : 1.4, // slower animation
                  ease: "easeOut",
                },
              },
            }}
            className="w-[90%] lg:w-[70%] mx-auto rounded-3xl bg-white/10 backdrop-blur-md
            backdrop-blur-md border border-[0.5px] lg:px-6 lg:py-12 pb-8 pt-4"
          >
            <div className="grid items-center gap-8 md:grid-cols-12">

              {/* image */}
              <div className=" md:col-span-5">
                <div className="mx-auto max-w-xs md:max-w-lg flex justify-center">
                  <div className="relative rounded-2xl ">
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
              <div className="md:col-span-7 lg:pl-16 pl-8">
                <div className="mb-4 flex flex-wrap gap-1 lg:gap-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[0.5px] bg-white/10 px-3 py-1 text-[8px] lg:text-[14px] tracking-[0.12em] text-white/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="w-[70%] py-1 lg:py-6 font-bold leading-tight text-lg md:text-[36px] lg:text-2xl ">
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

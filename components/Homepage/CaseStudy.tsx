"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  m,
  useReducedMotion,
} from "framer-motion";

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
    tags: ["UX Research", "UI Creation", "Prototyping"],
    image: "/images/homepage-images/dog-phone.png",
    imageAlt: "Dog grooming app on phone",
    cta: "View Case Study",
  },
  {
    slug: "/projects/camping",
    title: "How Thoughtful UX Design Increases Engagement for First-Time Campers",
    subtitle:
      "A responsive website with thoughtful UI design, clear information architecture, and a poetic brand voice to help first-time campers feel guided and confident while shopping for camping gear",
    tags: ["UX-UI", "User Flow", "Usability Testing"],
    image: "/images/homepage-images/camping-laptop.png",
    imageAlt: "Camping site on laptop",
    cta: "View Case Study",
  },
  {
    slug: "/projects/cleaners",
    title: "How Clear Design Improves User Trust for a Local Dry Cleaners",
    subtitle:
      "Designed and coded a responsive homepage that simplifies service discovery and builds confidence for a local dry cleaning business.",
    tags: ["VS Code", "React", "Responsive Design"],
    image: "/images/homepage-images/cleaners-desktop.png",
    imageAlt: "Dry cleaner site on desktop",
    cta: "View Case Study",
  },
];

// detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

export default function CaseStudies() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const shouldAnimate = !reduce && !isMobile;

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const card = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section
      id="case-studies"
      className="
        relative overflow-hidden bg-black text-white
        py-16 lg:py-24
        scroll-mt-28 md:scroll-mt-40
      "
    >
      {/* Bottom aurora / hue */}
      <div className="cs-aurora-bottom pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[28vh] opacity-30" />

      <div className="relative z-10">
        {/* ✅ same container as Skills */}
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <h2 className="mb-10 text-left text-[12px] tracking-[0.22em] text-white/60">
            CASE STUDIES
          </h2>

          <LazyMotion features={domAnimation}>
            <MotionConfig reducedMotion="user">
              {/* ✅ same grid as Skills: 1 col mobile, 3 cols desktop */}
              <div className="grid gap-5 md:grid-cols-3">
                {studies.map((s, i) => {
                  const ArticleComp = shouldAnimate ? m.article : "article";

                  return (
                    <ArticleComp
                      key={s.slug}
                      {...(shouldAnimate && {
                        variants: card,
                        initial: "hidden",
                        whileInView: "show",
                        viewport: { once: true, amount: 0.25 },
                        transition: {
                          duration: 0.55,
                          ease: easeOut,
                          delay: i * 0.06,
                        },
                      })}
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
                      <div className="p-6 md:p-7">
                        {/* tags */}
                        <div className="mb-3 flex flex-wrap gap-1.5">
                          {s.tags.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* ✅ image left / text right */}
                        <div className="grid grid-cols-[110px_1fr] gap-4 items-center">
                          <div className="flex justify-center">
                            <Image
                              src={s.image}
                              alt={s.imageAlt}
                              width={420}
                              height={320}
                              sizes="(min-width: 768px) 160px, 120px"
                              className="h-[120px] w-auto object-contain opacity-95"
                              priority={i === 0}
                            />
                          </div>

                          <div>
                            {/* title like Skills */}
                            <h3 className="text-[14px] md:text-[15px] font-semibold tracking-[0.01em]">
                              {s.title}
                            </h3>

                            <p className="mt-2 text-white/80 leading-snug text-[12px] md:text-[13px]">
                              {s.subtitle}
                            </p>

                            <Link href={s.slug} className="cta-btn group mt-4 inline-flex">
                              <span>{s.cta ?? "View Case Study"}</span>
                              <span className="cta-icon">
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
                      </div>
                    </ArticleComp>
                  );
                })}
              </div>
            </MotionConfig>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}

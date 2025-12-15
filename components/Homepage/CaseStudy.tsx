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

  const piece = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
  };

  const imageWrap = {
    hidden: { opacity: 0, y: 10, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section
      id="case-studies"
      className="
      relative bg-black text-white overflow-hidden
      full-bleed
      py-16 lg:py-24
      scroll-mt-28 md:scroll-mt-40
      "
    >
      {/* aurora */}
      <div className="cs-aurora-bottom absolute inset-x-0 bottom-0 h-[24vh] pointer-events-none z-0 opacity-60 pt-12" />

      {/* ✅ same container rules as Skills */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
        <h2 className="mb-10 text-left text-[12px] tracking-[0.22em] text-white/60 lg:pl-1">
          CASE STUDIES
        </h2>

        <LazyMotion features={domAnimation}>
          <MotionConfig reducedMotion="user">
            {/* ✅ stacked column, each card fills container width */}
            <div className="space-y-5 md:space-y-6">
              {studies.map((s, idx) => {
                const ArticleComp = shouldAnimate ? m.article : "article";
                const ImageWrapComp = shouldAnimate ? m.div : "div";
                const PieceComp = shouldAnimate ? m.div : "div";
                const TitleComp = shouldAnimate ? m.h3 : "h3";
                const TextComp = shouldAnimate ? m.p : "p";

                return (
                  <ArticleComp
                    key={s.slug}
                    {...(shouldAnimate && {
                      variants: card,
                      initial: "hidden",
                      whileInView: "show",
                      viewport: { once: true, amount: 0.3 },
                    })}
                    className="
                      w-full
                      rounded-3xl
                      border border-white/10 ring-1 ring-inset ring-white/10
                      bg-white/[0.04] backdrop-blur-md
                      shadow-[0_18px_70px_rgba(0,0,0,0.45)]
                      px-5 sm:px-7 py-6 sm:py-7
                    "
                  >
                    <div className="grid items-center gap-6 md:grid-cols-12">
                      {/* image (left) */}
                      <ImageWrapComp
                        {...(shouldAnimate && { variants: imageWrap })}
                        className="md:col-span-5"
                      >
                        <div className="mx-auto max-w-[220px] md:max-w-[300px] flex justify-center">
                          <div className="relative">
                            <Image
                              src={s.image}
                              alt={s.imageAlt}
                              width={700}
                              height={520}
                              sizes="(min-width: 768px) 300px, 220px"
                              className="h-[180px] w-auto md:h-[300px] object-contain"
                              priority={idx === 0}
                            />
                            <div className="pointer-events-none absolute inset-x-4 -bottom-2 h-4 rounded-full bg-black/60 blur-md" />
                          </div>
                        </div>
                      </ImageWrapComp>

                      {/* text (right) */}
                      <div className="md:col-span-7 md:pl-8 lg:pl-12">
                        <PieceComp
                          {...(shouldAnimate && { variants: piece })}
                          className="mb-3 flex flex-wrap gap-1.5 lg:gap-2"
                        >
                          {s.tags.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </PieceComp>

                        <TitleComp
                          {...(shouldAnimate && { variants: piece })}
                          className="font-bold leading-tight text-[16px] md:text-[20px] lg:w-[92%]"
                        >
                          {s.title}
                        </TitleComp>

                        <TextComp
                          {...(shouldAnimate && { variants: piece })}
                          className="mt-2 max-w-prose text-[12px] md:text-[13px] text-white/70 leading-tight"
                        >
                          {s.subtitle}
                        </TextComp>

                        <PieceComp {...(shouldAnimate && { variants: piece })}>
                          <Link href={s.slug} className="cta-btn group mt-6">
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
                        </PieceComp>
                      </div>
                    </div>
                  </ArticleComp>
                );
              })}
            </div>
          </MotionConfig>
        </LazyMotion>
      </div>
    </section>
  );
}

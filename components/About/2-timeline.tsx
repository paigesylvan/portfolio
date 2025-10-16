"use client";

import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useLayoutEffect, useEffect } from "react";

type TimelineItem = {
  images: string[];
  imageAlt: string;
  heading: string;
  subheading?: string;
  body: string;
  cycleMs?: number;
};

const ACTIVE_BAND_PX = 120;
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(v, max));

export default function TimelineAbout() {
  const prefersReduced = useReducedMotion() ?? false; 
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const [containerTopAbs, setContainerTopAbs] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [segmentTop, setSegmentTop] = useState(0);
  const [segmentLen, setSegmentLen] = useState(0);

  useLayoutEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const absTop = window.scrollY + rect.top;
      setContainerTopAbs(absTop);
      setContainerHeight(containerRef.current.scrollHeight);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (!containerRef.current) return;
    const viewportCenter = window.innerHeight / 2;
    const progressPx = y + viewportCenter - containerTopAbs;
    const maxLen = containerHeight * 0.4;
    let nextTop = 0;
    let nextLen = 0;

    if (progressPx <= 0) {
      nextTop = 0;
      nextLen = 0;
    } else if (progressPx < maxLen) {
      nextTop = 220;
      nextLen = progressPx;
    } else {
      nextTop = progressPx - maxLen;
      nextLen = maxLen;
    }

    nextTop = clamp(nextTop, 0, Math.max(0, containerHeight - nextLen));

    setSegmentTop(nextTop);
    setSegmentLen(nextLen);
  });

  const items: TimelineItem[] = [
    {
      images: ["/images/about-images/2019-1.png"],
      imageAlt: "2019",
      heading: "2019",
      subheading: "CI Design & Milwaukee Magazine",
      body:
        "Shadowed at CI Design and Milwaukee Magazine, where I gained my first hands-on exposure to layout, branding, and editorial design.",
    },
    {
      images: ["/images/about-images/2020-1.png"],
      imageAlt: "2020",
      heading: "2020",
      subheading: "Branding & Communication Design",
      body:
        "As PR Chairman, I managed our chapter’s public image by creating branded Instagram graphics and event promotions.",
    },
    {
      images: ["/images/about-images/2021-1.png"],
      imageAlt: "2021",
      heading: "2021",
      subheading: "Graphic Design & Business Impact",
      body:
        "Designed product catalogs, flyers, and marketing materials while also handling product photography and digital content.",
    },
    {
      images: ["/images/about-images/2022-1.png"],
      imageAlt: "2022",
      heading: "2022",
      subheading: "Technical Foundations & Web Development",
      body:
        "Completed a full-stack bootcamp, building interactive websites from scratch and learning how design choices affect functionality.",
    },
    {
      images: ["/images/about-images/2024-1.png"],
      imageAlt: "2024",
      heading: "2024",
      subheading: "UI Design in Complex Systems",
      body:
        "As a Software Engineer Intern, I designed and built HMI applications for industrial automation — combining design and logic.",
    },
  ];

  return (
    <section className="relative px-6 py-28 bg-black text-white">
      <div ref={containerRef} className="relative mx-auto w-full max-w-[1700px]">
        {/* Header */}
        <div className="text-center mb-48 relative z-20">
          <p className="text-[11px] tracking-[0.22em] text-white/60">
            THE PATH SO FAR
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold">My Journey</h2>
        </div>

        {/* ===== Timeline Spine(s) ===== */}
        {/* Mobile: LEFT-ALIGNED spine */}
        <div className="pointer-events-none absolute left-3 w-[3px] h-full bg-white/15 rounded-full md:hidden" />
        <div
          className="pointer-events-none absolute left-3 w-[3px] rounded-full bg-white md:hidden"
          style={{ top: `${segmentTop}px`, height: `${segmentLen}px` }}
        />

        {/* Desktop: CENTER spine */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-white/15 rounded-full hidden md:block" />
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-white hidden md:block"
          style={{ top: `${segmentTop}px`, height: `${segmentLen}px` }}
        />

        {/* Timeline items */}
        <div className="space-y-24 relative z-10">
          {items.map((it, i) => (
            <TimelineRow
              key={i}
              item={it}
              prefersReduced={prefersReduced}
              containerTopAbs={containerTopAbs}
              segmentTop={segmentTop}
              segmentLen={segmentLen}
              priority={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- TIMELINE ROW ------------------------- */
function TimelineRow({
  item,
  prefersReduced,
  containerTopAbs,
  segmentTop,
  segmentLen,
  priority,
}: {
  item: TimelineItem;
  prefersReduced: boolean;
  containerTopAbs: number;
  segmentTop: number;
  segmentLen: number;
  priority?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [dotFilled, setDotFilled] = useState(false);
  const [idx, setIdx] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let raf = 0;
    const el = rowRef.current;
    if (!el) return;
    const calc = () => {
      const rect = el.getBoundingClientRect();
      const rowCenter = rect.top + rect.height / 2;
      const vpCenter = window.innerHeight / 2;
      setIsActive(Math.abs(rowCenter - vpCenter) <= ACTIVE_BAND_PX);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (prefersReduced || !isActive || (item.images?.length ?? 0) < 2) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % item.images.length),
      item.cycleMs ?? 3000
    );
    return () => clearInterval(t);
  }, [prefersReduced, isActive, item.images, item.cycleMs]);

  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const rowCenterAbs = window.scrollY + rect.top + rect.height / 2;
      const segTopAbs = containerTopAbs + segmentTop;
      const segBotAbs = segTopAbs + segmentLen;
      setDotFilled(rowCenterAbs >= segTopAbs && rowCenterAbs <= segBotAbs);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [containerTopAbs, segmentTop, segmentLen]);

  const currentSrc =
    item.images?.length ? item.images[idx] : "/images/placeholder.png";

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReduced ? 0 : 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
      className="relative grid items-center gap-6 md:gap-8 md:grid-cols-12 pl-8 md:pl-0"
    >
      {/* ===== Dots ===== */}
      {/* Mobile: slightly right of the line */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/70 ring-1 ring-white/25 z-20 md:hidden flex items-center justify-center"
      >
        <div
          className={`h-3.5 w-3.5 rounded-full ${
            dotFilled ? "bg-white" : "bg-transparent"
          }`}
        />
      </div>

      {/* Desktop: centered dot */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/70 ring-1 ring-white/25 z-20 hidden md:flex items-center justify-center"
      >
        <div
          className={`h-3.5 w-3.5 rounded-full ${
            dotFilled ? "bg-white" : "bg-transparent"
          }`}
        />
      </div>

      {/* Image */}
      <div className="md:col-span-5">
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[420px] overflow-hidden rounded-xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentSrc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: prefersReduced ? 0 : 0.9,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src={currentSrc}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 600px, 100vw"
                className="object-cover"
                priority={priority}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Spacer for desktop */}
      <div className="hidden md:block md:col-span-2" />

      {/* Text */}
      <div className="md:col-span-5">
        <h3 className="text-2xl md:text-3xl font-semibold">{item.heading}</h3>
        {item.subheading && (
          <p className="text-white/60 text-sm md:text-base mt-1 mb-2 italic">
            {item.subheading}
          </p>
        )}
        <p className="mt-3 text-white/80 leading-relaxed">{item.body}</p>
      </div>
    </motion.div>
  );
}

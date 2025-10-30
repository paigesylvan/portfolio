"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRef, useState, useLayoutEffect, useEffect } from "react";

type TimelineItem = {
  images: string[];
  imageAlt: string;
  heading: string;
  subheading?: string;
  body: string;
  cycleMs?: number;
};

const ACTIVE_BAND_PX = 100;
const clamp = (v: number, min: number, max: number) =>
  Math.max(min, Math.min(v, max));

export default function TimelineAbout() {
  const prefersReduced = useReducedMotion() ?? false;

  // The section that owns the absolute lines
  const containerRef = useRef<HTMLDivElement | null>(null);

  // === Detect the *real* scroll container and keep it reactive ===
  const [scrollHost, setScrollHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const snap = document.querySelector<HTMLElement>(".snap-page");
    const main = document.querySelector<HTMLElement>("main");

    const isScrollable = (el?: HTMLElement | null) =>
      !!el && el.scrollHeight > el.clientHeight;

    const host = snap ?? (isScrollable(main) ? main! : document.documentElement);
    setScrollHost(host);
  }, []);

  const [containerTopAbs, setContainerTopAbs] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [segmentTop, setSegmentTop] = useState(0);
  const [segmentLen, setSegmentLen] = useState(0);

  // responsive offset for mobile vs desktop
  const [startOffset, setStartOffset] = useState(100); // default desktop offset

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)");
    const apply = () => setStartOffset(mq.matches ? 10 : 100);
    apply();
    mq.addEventListener?.("change", apply);
    window.addEventListener("resize", apply, { passive: true });
    return () => {
      mq.removeEventListener?.("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  const [lineEndPx, setLineEndPx] = useState<number | null>(null);

  // Measure positions relative to the *scroll container*, not always window
  const measure = () => {
    if (!containerRef.current || !scrollHost) return;

    const host = scrollHost;
    const hostScrollTop =
      host === document.documentElement ? window.scrollY : host.scrollTop;

    const rect = containerRef.current.getBoundingClientRect();

    // Absolute top of container relative to host scroll origin
    const hostRect =
      host === document.documentElement ? { top: 0 } : host.getBoundingClientRect();

    const absTop = hostScrollTop + (rect.top - hostRect.top);

    setContainerTopAbs(absTop);
    setContainerHeight(containerRef.current.scrollHeight);

    // Find the last timeline row and compute its center
    const rows =
      containerRef.current.querySelectorAll<HTMLElement>("[data-timeline-row]");
    if (rows.length) {
      const last = rows[rows.length - 1];
      const r = last.getBoundingClientRect();
      const lastCenterAbs = hostScrollTop + (r.top - hostRect.top) + r.height / 2;
      setLineEndPx(Math.max(0, lastCenterAbs - absTop));
    }
  };

  // Bind measure to both window and host (so window-scroll pages work)
  useLayoutEffect(() => {
    if (!scrollHost) return;
    measure();

    const onResize = () => measure();
    const onScrollAny = () => measure();

    // always listen on window
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScrollAny, { passive: true });

    // and also on host if it’s a separate scroller
    if (scrollHost !== document.documentElement) {
      scrollHost.addEventListener("scroll", onScrollAny, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollAny);
      if (scrollHost !== document.documentElement) {
        scrollHost.removeEventListener("scroll", onScrollAny as EventListener);
      }
    };
  }, [scrollHost]);

  // Drive the fill segment from the host's/ window's scroll position
  useEffect(() => {
    if (!containerRef.current || !scrollHost) return;

    const host = scrollHost;

    const compute = () => {
      const viewportCenter =
        host === document.documentElement ? window.innerHeight / 2 : host.clientHeight / 2;

      const hostScrollTop =
        host === document.documentElement ? window.scrollY : host.scrollTop;

      const progressPx = hostScrollTop + viewportCenter - containerTopAbs;

      const capLen = Math.max(
        0,
        Math.min(containerHeight * 0.4, (lineEndPx ?? containerHeight) - startOffset)
      );

      let nextTop = 0;
      let nextLen = 0;

      if (progressPx <= 0) {
        nextTop = 0;
        nextLen = 0;
      } else if (progressPx < capLen) {
        nextTop = startOffset;
        nextLen = progressPx;
      } else {
        nextTop = progressPx - capLen;
        nextLen = capLen;
      }

      nextTop = clamp(nextTop, 0, Math.max(0, containerHeight - nextLen));
      setSegmentTop(nextTop);
      setSegmentLen(nextLen);
    };

    // initial + listeners
    compute();

    const onScrollAny = () => compute();
    const onResize = () => compute();

    window.addEventListener("scroll", onScrollAny, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    if (host !== document.documentElement) {
      host.addEventListener("scroll", onScrollAny, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScrollAny);
      window.removeEventListener("resize", onResize);
      if (host !== document.documentElement) {
        host.removeEventListener("scroll", onScrollAny);
      }
    };
  }, [scrollHost, containerTopAbs, containerHeight, lineEndPx, startOffset]);

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
        "As a Software Engineer Intern, I designed and built HMI applications for industrial automation, combining design and logic.",
    },
    {
      images: ["/images/about-images/2025-1.png"],
      imageAlt: "2025",
      heading: "Present Day",
      subheading: "Product Design + UX/UI Design",
      body:
        "From my experience at my internship I discovered my true interest, which I realize correlated into everything I have been lead to do, was in user experience and user interface. Eagerly, I signed up for Google's Coursera UX/UI design course to solidify my skills and polish two project case studies.",
    },
  ];

  return (
    <section className="relative isolate px-6 lg:py-28 bg-black text-white">
      <div className="text-center relative">
        <p className="text-[11px] tracking-[0.22em] text-white/60">THE PATH SO FAR</p>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold mb-24">My Journey</h2>
      </div>

      <div ref={containerRef} className="relative mx-auto w-full max-w-[1700px]">
        {/* ===== Timeline Spine(s) ===== */}
        {/* Mobile: LEFT-ALIGNED spine */}
        <div
          className="pointer-events-none absolute left-3 w-[3px] rounded-full bg-white/15 md:hidden z-20 mix-blend-normal"
          style={{ top: 0, height: lineEndPx ? `${lineEndPx}px` : "100%" }}
        />
        <div
          className="pointer-events-none absolute left-3 w-[3px] rounded-full bg-white md:hidden z-[60] mix-blend-normal"
          style={{ top: `${segmentTop}px`, height: `${segmentLen}px` }}
        />

        {/* Desktop: CENTER spine */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-white/15 hidden md:block z-20 mix-blend-normal"
          style={{ top: "100px", height: lineEndPx ? `${lineEndPx - 80}px` : "100%" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-white hidden md:block z-30 mix-blend-normal"
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
              scrollHost={scrollHost}
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
  scrollHost,
}: {
  item: TimelineItem;
  prefersReduced: boolean;
  containerTopAbs: number;
  segmentTop: number;
  segmentLen: number;
  priority?: boolean;
  scrollHost?: HTMLElement | null;
}) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [dotFilled, setDotFilled] = useState(false);
  const [idx, setIdx] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Helpers to normalize window vs element scroller
  const isDoc =
    !scrollHost || scrollHost === (typeof document !== "undefined" ? document.documentElement : null);
  const getHostScrollTop = () =>
    isDoc ? window.scrollY : (scrollHost as HTMLElement).scrollTop;
  const getHostClientHeight = () =>
    isDoc ? window.innerHeight : (scrollHost as HTMLElement).clientHeight;
  const getHostRectTop = () =>
    isDoc ? 0 : (scrollHost as HTMLElement).getBoundingClientRect().top;

  // --- ACTIVE band calc (use host for viewport center & attach listeners to host)
  useEffect(() => {
    let raf = 0;
    const el = rowRef.current;
    if (!el) return;

    const calc = () => {
      const rect = el.getBoundingClientRect(); // viewport coords
      const vpCenter = getHostRectTop() + getHostClientHeight() / 2; // host viewport center
      const rowCenter = rect.top + rect.height / 2; // viewport coords
      setIsActive(Math.abs(rowCenter - vpCenter) <= ACTIVE_BAND_PX);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };

    calc();
    const target: any = isDoc ? window : (scrollHost as HTMLElement);
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [scrollHost]);

  // Cycle images when active
  useEffect(() => {
    if (prefersReduced || !isActive || (item.images?.length ?? 0) < 2) return;
    const t = setInterval(
      () => setIdx((i) => (i + 1) % item.images.length),
      item.cycleMs ?? 3000
    );
    return () => clearInterval(t);
  }, [prefersReduced, isActive, item.images, item.cycleMs]);

  // --- Dot fill calc: compute row center ABSOLUTE to the host scroll origin
  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect(); // viewport coords
      const rowCenterAbs =
        getHostScrollTop() + (rect.top - getHostRectTop()) + rect.height / 2;

      const segTopAbs = containerTopAbs + segmentTop;
      const segBotAbs = segTopAbs + segmentLen;
      setDotFilled(rowCenterAbs >= segTopAbs && rowCenterAbs <= segBotAbs);
    };

    update();
    const target: any = isDoc ? window : (scrollHost as HTMLElement);
    const onScroll = () => update();
    const onResize = () => update();

    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [scrollHost, containerTopAbs, segmentTop, segmentLen]);

  const currentSrc =
    item.images?.length ? item.images[idx] : "/images/placeholder.png";

  return (
    <motion.div
      data-timeline-row
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
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/70 ring-1 ring-white/25 z-[70] md:hidden flex items-center justify-center mix-blend-normal"
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
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/70 ring-1 ring-white/25 z-[70] hidden md:flex items-center justify-center mix-blend-normal"
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
      <div className="md:col-span-5 max-w-[350px]">
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

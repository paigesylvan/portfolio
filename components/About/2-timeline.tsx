"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  useMemo,
} from "react";

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

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function TimelineAbout() {
  const prefersReduced = useReducedMotion() ?? false;
  const containerRef = useRef<HTMLDivElement | null>(null);
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
  const [startOffset, setStartOffset] = useState(100);

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

  const measure = useCallback(() => {
    if (!containerRef.current || !scrollHost) return;

    const host = scrollHost;
    const hostScrollTop =
      host === document.documentElement ? window.scrollY : host.scrollTop;

    const rect = containerRef.current.getBoundingClientRect();

    const hostRect =
      host === document.documentElement ? { top: 0 } : host.getBoundingClientRect();

    const absTop = hostScrollTop + (rect.top - hostRect.top);

    setContainerTopAbs(absTop);
    setContainerHeight(containerRef.current.scrollHeight);

    const rows =
      containerRef.current.querySelectorAll<HTMLElement>("[data-timeline-row]");
    if (rows.length) {
      const last = rows[rows.length - 1];
      const r = last.getBoundingClientRect();
      const lastCenterAbs = hostScrollTop + (r.top - hostRect.top) + r.height / 2;
      setLineEndPx(Math.max(0, lastCenterAbs - absTop));
    }
  }, [scrollHost]);

  useLayoutEffect(() => {
    if (!scrollHost) return;
    measure();

    const onResize = () => measure();
    const onScrollAny = () => measure();

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScrollAny, { passive: true });

    if (scrollHost !== document.documentElement) {
      scrollHost.addEventListener("scroll", onScrollAny, { passive: true });
    }

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollAny);
      if (scrollHost !== document.documentElement) {
        scrollHost.removeEventListener("scroll", onScrollAny);
      }
    };
  }, [scrollHost, measure]);

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
        Math.min(
          containerHeight * 0.4,
          (lineEndPx ?? containerHeight) - startOffset
        )
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
      subheading: "Technical Foundation",
      body:
        "Completed a full-stack bootcamp, building interactive websites from scratch and learning how design choices affect functionality.",
    },
    {
      images: ["/images/about-images/2024-1.png"],
      imageAlt: "2024",
      heading: "2024",
      subheading: "UI Design in Complex Systems",
      body:
        "As a Software & UI Developer Intern, I designed and built HMI applications for industrial automation, combining design and logic.",
    },
    {
      images: ["/images/about-images/2025-1.png"],
      imageAlt: "2025",
      heading: "Present",
      subheading: "Web & Digital Design",
      body:
        "I focus on execution-driven web work, owning CMS-based websites, publishing and validating content updates, and improving usability and performance across live digital platforms. My experience spans UI design, front-end development, and visual quality assurance, with an emphasis on accuracy, collaboration, and building digital tools that support real business and user needs.",
    },
  ];

  return (
    <section className="relative isolate bg-black text-white pb-28 md:pb-36 px-4 ">
      <div className="mx-auto w-full max-w-[1110px]">
        <div className="text-left relative ">
          <p className="text-[11px] tracking-[0.22em] text-white/60">
            THE PATH SO FAR
          </p>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold mb-16 ">
            My Journey
          </h2>
        </div>


        <div ref={containerRef} className="relative mx-auto w-full max-w-[1100px]">
          {/* Mobile Spine */}
          <div
            className="pointer-events-none absolute left-3 w-[3px] rounded-full bg-white/15 md:hidden z-20 mix-blend-normal"
            style={{ top: 0, height: lineEndPx ? `${lineEndPx}px` : "100%" }}
          />
          <div
            className="pointer-events-none absolute left-3 w-[3px] rounded-full bg-white md:hidden z-[60] mix-blend-normal"
            style={{ top: `${segmentTop}px`, height: `${segmentLen}px` }}
          />

          {/* Desktop Spine */}
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-white/15 hidden md:block z-20 mix-blend-normal"
            style={{ top: "100px", height: lineEndPx ? `${lineEndPx - 80}px` : "100%" }}
          />
          <div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[3px] rounded-full bg-white hidden md:block z-30 mix-blend-normal"
            style={{ top: `${segmentTop}px`, height: `${segmentLen}px` }}
          />

          {/* Timeline items */}
          <div className="space-y-20 md:space-y-24 relative z-10">
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
      </div>
    </section>
  );
}

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

  const isDoc = useMemo(
    () =>
      !scrollHost ||
      scrollHost ===
        (typeof document !== "undefined" ? document.documentElement : null),
    [scrollHost]
  );

  const getHostScrollTop = useCallback(
    () => (isDoc ? window.scrollY : (scrollHost as HTMLElement).scrollTop),
    [isDoc, scrollHost]
  );

  const getHostClientHeight = useCallback(
    () => (isDoc ? window.innerHeight : (scrollHost as HTMLElement).clientHeight),
    [isDoc, scrollHost]
  );

  const getHostRectTop = useCallback(
    () => (isDoc ? 0 : (scrollHost as HTMLElement).getBoundingClientRect().top),
    [isDoc, scrollHost]
  );

  useEffect(() => {
    let raf = 0;
    const el = rowRef.current;
    if (!el) return;

    const calc = () => {
      const rect = el.getBoundingClientRect();
      const vpCenter = getHostRectTop() + getHostClientHeight() / 2;
      const rowCenter = rect.top + rect.height / 2;
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
    const target: Window | HTMLElement = isDoc ? window : (scrollHost as HTMLElement);
    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [getHostClientHeight, getHostRectTop, isDoc, scrollHost]);

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
      const rowCenterAbs =
        getHostScrollTop() + (rect.top - getHostRectTop()) + rect.height / 2;

      const segTopAbs = containerTopAbs + segmentTop;
      const segBotAbs = segTopAbs + segmentLen;
      setDotFilled(rowCenterAbs >= segTopAbs && rowCenterAbs <= segBotAbs);
    };

    update();
    const target: Window | HTMLElement = isDoc ? window : (scrollHost as HTMLElement);
    const onScroll = () => update();
    const onResize = () => update();

    target.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      target.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [
    getHostRectTop,
    getHostScrollTop,
    isDoc,
    scrollHost,
    containerTopAbs,
    segmentTop,
    segmentLen,
  ]);

  const currentSrc =
    item.images?.length ? item.images[idx] : "/images/placeholder.png";

  return (
    <motion.div
      data-timeline-row
      ref={rowRef}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReduced ? 0 : 0.6, ease: easeOut }}
      viewport={{ once: false, amount: 0.25 }}
      className="relative grid items-center gap-6 md:gap-8 md:grid-cols-12 pl-8 md:pl-0"
    >
      {/* Mobile Dot */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 pl-[2px] -translate-y-1/2 h-6 w-6 rounded-full bg-black/70 ring-1 ring-white/25 z-[70] md:hidden flex items-center justify-center"
      >
        <div
          className={`h-3.5 w-3.5 rounded-full ${
            dotFilled ? "bg-white" : "bg-transparent"
          }`}
        />
      </div>

      {/* Desktop Dot */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-black/70 ring-1 ring-white/25 z-[70] hidden md:flex items-center justify-center"
      >
        <div
          className={`h-3.5 w-3.5 rounded-full ${
            dotFilled ? "bg-white" : "bg-transparent"
          }`}
        />
      </div>

      {/* IMAGE GLASS CARD */}
      <div className="md:col-span-5">
        <div className="group relative overflow-hidden rounded-3xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage:
                "radial-gradient(520px 320px at 25% 20%, rgba(0,196,255,0.18) 0%, rgba(170,90,255,0.12) 45%, rgba(0,0,0,0) 75%)",
              filter: "blur(60px)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 85%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 85%)",
            }}
          />

          <div className="relative w-full h-[220px] sm:h-[260px] md:h-[380px]">
            <Image
              src={currentSrc}
              alt={item.imageAlt}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-contain"
              priority={priority}
            />
          </div>

          <div className="pointer-events-none absolute inset-x-12 -bottom-3 h-6 rounded-full bg-black/70 blur-xl" />
        </div>
      </div>

      <div className="hidden md:block md:col-span-2" />

      {/* TEXT GLASS CARD */}
      <div className="md:col-span-5">
        <div
          className="
            relative overflow-hidden rounded-3xl max-w-md
            border border-white/10 ring-1 ring-inset ring-white/10
            bg-white/[0.05] backdrop-blur-md
            shadow-[0_12px_50px_rgba(0,0,0,0.45)]
            px-6 md:p-8
          "
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-70"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0))",
            }}
          />

          <div className="relative">
            <div className="flex items-baseline justify-between lg:gap-4">
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-[0.01em]">
                {item.heading}
              </h3>

              {item.subheading && (
                <span className="mb-4 hidden md:inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] tracking-[0.14em] text-white/80">
                  {item.subheading}
                </span>
              )}
            </div>

            {item.subheading && (
              <p className="md:hidden text-white/60 text-[12px] mt-2 tracking-[0.06em]">
                {item.subheading}
              </p>
            )}

            <p className="mt-1 lg:mt-4 text-white/80 lg:leading-relaxed text-[13px] md:text-[14px]">
              {item.body}
            </p>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/14 to-white/0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

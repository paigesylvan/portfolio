"use client";

import { useEffect, useRef } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  /** If provided, sets a fixed height (px). Otherwise the hero fills the screen. */
  height?: number;
  /** Video background source, e.g. "/videos/hero-loop.mp4" */
  videoSrc?: string;
  /** Optional poster image for the video */
  posterSrc?: string;
};

export default function HeroDots({
  title = "Design that actually works.",
  subtitle = "I build clean, responsive experiences guided by research and craft.",
  kicker = "PORTFOLIO",
  height, // if omitted, we'll use min-h-screen
  videoSrc = "/video/hero-loop.mp4",
  posterSrc,
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetXY = useRef({ x: 0, y: 0 });
  const currentXY = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Initialize spotlight at center
    const rect = el.getBoundingClientRect();
    currentXY.current = { x: rect.width / 2, y: rect.height / 2 };
    el.style.setProperty("--mx", `${currentXY.current.x}px`);
    el.style.setProperty("--my", `${currentXY.current.y}px`);

    const onMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      let cx = 0, cy = 0;
      if ("touches" in e) {
        const t = e.touches[0]; if (!t) return;
        cx = t.clientX; cy = t.clientY;
      } else {
        const m = e as MouseEvent;
        cx = m.clientX; cy = m.clientY;
      }
      const r = el.getBoundingClientRect();
      if (cx < r.left || cx > r.right || cy < r.top || cy > r.bottom) return;
      targetXY.current.x = cx - r.left;
      targetXY.current.y = cy - r.top;

      if (rafRef.current == null) {
        const tick = () => {
          const ease = 0.18; // higher = snappier cursor following
          currentXY.current.x += (targetXY.current.x - currentXY.current.x) * ease;
          currentXY.current.y += (targetXY.current.y - currentXY.current.y) * ease;
          el.style.setProperty("--mx", `${currentXY.current.x}px`);
          el.style.setProperty("--my", `${currentXY.current.y}px`);
          rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const stop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    // Listen on window so nothing blocks interaction
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("pointerup", stop);
    window.addEventListener("pointercancel", stop);
    window.addEventListener("blur", stop);

    return () => {
      stop();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
      window.removeEventListener("blur", stop);
    };
  }, []);

  // If height is passed, use fixed height. Otherwise, take full screen height.
  const sectionClass =
    "relative w-full overflow-hidden text-white " +
    (height ? "" : "min-h-screen");

  return (
    <section
      ref={sectionRef}
      className={sectionClass}
      style={
        {
          ...(height ? { height } : {}),
          // Spotlight knobs (tweak any of these quickly):
          // --spotR: core radius of dark area
          // --spotFade: feather size
          // --spotAlpha: opacity of the black blur
          ["--spotR" as any]: "120px",
          ["--spotFade" as any]: "200px",
          ["--spotAlpha" as any]: "0.55",
          ["--mx" as any]: "50vw",
          ["--my" as any]: "50vh",
          backgroundColor: "#000", // pure black behind the video
        } as React.CSSProperties
      }
    >
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Cursor-following black blur overlay (does not block clicks) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at var(--mx) var(--my),
              rgba(0,0,0,var(--spotAlpha)) 0,
              rgba(0,0,0,var(--spotAlpha)) var(--spotR),
              rgba(0,0,0,0) calc(var(--spotR) + var(--spotFade))
            ),
            radial-gradient(
              circle at var(--mx) var(--my),
              rgba(0,0,0,0.25) 0,
              rgba(0,0,0,0) calc(var(--spotR) + var(--spotFade) * 1.6)
            )
          `,
        }}
      />

      {/* Centered content */}
      <div className={`relative z-10 mx-auto max-w-[1200px] px-6 ${height ? "h-full" : "min-h-screen"} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-[10px] tracking-[0.22em] text-white/70">{kicker}</p>
          <h1 className="mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-white/85 text-sm md:text-base max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

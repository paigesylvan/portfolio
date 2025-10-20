"use client";

import { useEffect, useRef } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  height?: number;
  videoSrc?: string;       // MP4 (H.264/AAC) — required for iOS
  videoSrcWebm?: string;   // Optional WebM (Chrome/Android)
  posterSrc?: string;
};

export default function HeroDots({
  title = "Design that actually works.",
  subtitle = "I build clean, responsive experiences guided by research and craft.",
  kicker = "PORTFOLIO",
  height,
  // TIP: put videos under /public/videos; MP4 is key for iOS Safari
  videoSrc = "/images/homepage-images/hero-loop.mp4",
  videoSrcWebm,
  posterSrc = "/images/homepage-images/hero-poster.jpg",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetXY = useRef({ x: 0, y: 0 });
  const currentXY = useRef({ x: 0, y: 0 });

  // Cursor spotlight logic (unchanged)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

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
          const ease = 0.18;
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

  // Robust mobile autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // iOS quirks: set attributes ASAP
    v.muted = true;
    v.defaultMuted = true;
    // @ts-expect-error: webkit inline attr for older iOS
    v.setAttribute("webkit-playsinline", "true");
    v.playsInline = true;
    v.controls = false;

    const tryPlay = () => v.play().catch(() => { /* ignored */ });

    // 1) try as soon as we have metadata/canplay
    const onReady = () => tryPlay();
    v.addEventListener("loadedmetadata", onReady);
    v.addEventListener("canplay", onReady);

    // 2) if already buffered enough
    if (v.readyState >= 2) tryPlay();

    // 3) resume on tab visibility regain (iOS sometimes pauses)
    const onVis = () => { if (document.visibilityState === "visible") tryPlay(); };
    document.addEventListener("visibilitychange", onVis);

    // 4) FINAL fallback: first user gesture anywhere on page
    const onFirstTap = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstTap);
      window.removeEventListener("click", onFirstTap);
    };
    window.addEventListener("touchstart", onFirstTap, { passive: true, once: true });
    window.addEventListener("click", onFirstTap, { once: true });

    return () => {
      v.removeEventListener("loadedmetadata", onReady);
      v.removeEventListener("canplay", onReady);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("touchstart", onFirstTap);
      window.removeEventListener("click", onFirstTap);
    };
  }, [videoSrc, videoSrcWebm]);

  // Pause when off-screen, play when in view (saves battery on mobile)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver((entries) => {
      const e = entries[0];
      if (!e) return;
      if (e.isIntersecting) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, { threshold: 0.1 });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const sectionClass =
    "relative w-full overflow-hidden text-white " + (height ? "" : "min-h-screen");

  return (
    <section
      ref={sectionRef}
      className={sectionClass}
      style={
        {
          ...(height ? { height } : {}),
          ["--spotR" as any]: "120px",
          ["--spotFade" as any]: "200px",
          ["--spotAlpha" as any]: "0.55",
          ["--mx" as any]: "50vw",
          ["--my" as any]: "50vh",
          backgroundColor: "#000",
        } as React.CSSProperties
      }
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        // important for mobile UX
        autoPlay
        muted
        loop
        playsInline
        // @ts-expect-error: iOS inline play attribute
        webkit-playsinline="true"
        preload="metadata"     // smaller mobile footprint
        poster={posterSrc}
        disableRemotePlayback  // avoids AirPlay prompts
      >
        {videoSrcWebm ? <source src={videoSrcWebm} type="video/webm" /> : null}
        {videoSrc ? <source src={videoSrc} type="video/mp4" /> : null}
      </video>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-[220px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Cursor-following black blur overlay */}
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

      {/* Content */}
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

      {/* Subtle bottom cap (transparent -> black) */}
      <div className="absolute bottom-0 left-0 w-full h-[290px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}

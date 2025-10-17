"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Hero with interactive dot field:
 * - Dots float subtly (disabled when prefers-reduced-motion)
 * - Dots fade out near the pointer and ease back in after you move away
 * - Retina-aware canvas, resize-safe, cleans up listeners
 * - Accepts children to render hero copy/UI on top
 */
export default function HeroDots({
  title = "Design that actually works.",
  subtitle = "I build clean, responsive experiences guided by research and craft.",
  kicker = "PORTFOLIO",
  height = 560,
}: {
  title?: string;
  subtitle?: string;
  kicker?: string;
  height?: number; // px on mobile; grows on larger screens via Tailwind if desired
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const [reduced, setReduced] = useState(false);

  // Config (tweak to taste)
  const DOT_GAP = 26;        // distance between dots (logical px)
  const DOT_SIZE = 2.3;      // base radius (logical px)
  const FLOAT_AMPL = 0.7;    // float amplitude
  const HIDE_RADIUS = 90;    // px radius for full fade near cursor
  const HIDE_SOFTNESS = 110; // softness falloff beyond radius
  const EASE = 0.08;         // how fast opacity returns to 1 after hover

  // Recompute canvas size & dot layout on resize
  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const { width } = parent.getBoundingClientRect();
    const heightCss = parent.clientHeight; // set by wrapper

    // Set canvas display size
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(heightCss * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${heightCss}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw using CSS px units
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    fitCanvas();
    const onResize = () => fitCanvas();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [fitCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Dot = {
      x: number; y: number; baseY: number;
      opacity: number; targetOpacity: number;
      phase: number; // for floating
    };
    let dots: Dot[] = [];

    const buildDots = () => {
      dots = [];
      const parent = canvas.parentElement!;
      const { width, height: h } = parent.getBoundingClientRect();

      const cols = Math.ceil(width / DOT_GAP) + 2;
      const rows = Math.ceil(h / DOT_GAP) + 2;
      const xOffset = ((width % DOT_GAP) / 2) - DOT_GAP; // center the grid
      const yOffset = ((h % DOT_GAP) / 2) - DOT_GAP;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_GAP + xOffset;
          const y = r * DOT_GAP + yOffset;
          dots.push({
            x,
            y,
            baseY: y,
            opacity: 1,
            targetOpacity: 1,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    // initial population and also when resized
    buildDots();
    const resizeObserver = new ResizeObserver(() => {
      fitCanvas();
      buildDots();
    });
    canvas.parentElement && resizeObserver.observe(canvas.parentElement);

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const onPointerMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      pointerRef.current.active = true;
      if (e instanceof TouchEvent) {
        const t = e.touches[0];
        if (!t) return;
        const p = toLocal(t.clientX, t.clientY);
        pointerRef.current.x = p.x;
        pointerRef.current.y = p.y;
      } else {
        const me = e as PointerEvent | MouseEvent;
        const p = toLocal(me.clientX, me.clientY);
        pointerRef.current.x = p.x;
        pointerRef.current.y = p.y;
      }
    };
    const onPointerLeave = () => {
      pointerRef.current.active = false;
    };

    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("touchmove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("touchend", onPointerLeave);

    let t0 = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(32, t - t0); // clamp
      t0 = t;

      const parent = canvas.parentElement!;
      const { width, height: h } = parent.getBoundingClientRect();

      ctx.clearRect(0, 0, width, h);

      const pointer = pointerRef.current;
      // animation
      for (const d of dots) {
        // gentle float (disabled with reduced motion)
        const floatY = reduced ? 0 : Math.sin(d.phase + t * 0.0015) * FLOAT_AMPL;
        d.y = d.baseY + floatY;

        // distance to pointer
        if (pointer.active) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const hideInner = HIDE_RADIUS;
          const hideOuter = HIDE_RADIUS + HIDE_SOFTNESS;

          // map distance to target opacity (0 at inner, 1 beyond outer)
          let target = 1;
          if (dist <= hideInner) target = 0;
          else if (dist < hideOuter) {
            const k = (dist - hideInner) / (hideOuter - hideInner);
            target = k; // 0..1 ramp
          }
          d.targetOpacity = target;
        } else {
          d.targetOpacity = 1; // relax back to full when no pointer
        }

        // ease opacity toward target
        d.opacity += (d.targetOpacity - d.opacity) * EASE;
      }

      // draw
      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      for (const d of dots) {
        const alpha = Math.max(0, Math.min(1, d.opacity));
        if (alpha < 0.02) continue;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_SIZE, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("touchmove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("touchend", onPointerLeave);
      resizeObserver.disconnect();
    };
  }, [DOT_GAP, DOT_SIZE, FLOAT_AMPL, HIDE_RADIUS, HIDE_SOFTNESS, EASE, fitCanvas, reduced]);

  return (
    <section
      className="
        relative w-full text-white
        bg-gradient-to-b from-[#0B0D14] to-[#0F1220]
        overflow-hidden
      "
      style={{ height }}
    >
      {/* Canvas field of dots */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        aria-hidden
      />

      {/* Subtle vignette + glow for depth (optional) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(100,140,255,0.12),rgba(0,0,0,0))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.22em] text-[#9DC0FF]">{kicker}</p>
          <h1 className="mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-white/80 text-sm md:text-base max-w-[680px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

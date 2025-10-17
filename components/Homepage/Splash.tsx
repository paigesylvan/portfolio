"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function HeroDots({
  title = "Design that actually works.",
  subtitle = "I build clean, responsive experiences guided by research and craft.",
  kicker = "PORTFOLIO",
}: {
  title?: string;
  subtitle?: string;
  kicker?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const [reduced, setReduced] = useState(false);

  // ===== TUNING =====
  const DOT_GAP = 26;        // grid spacing (px)
  const DOT_SIZE = 2.2;      // radius (px)
  const FLOAT_AMPL_X = 0.8;  // float amplitude X (px)
  const FLOAT_AMPL_Y = 1.1;  // float amplitude Y (px)
  const FLOAT_SPEED = 0.0008; // smaller = slower global drift
  const HIDE_RADIUS = 100;   // full fade radius (px)
  const HIDE_SOFTNESS = 130; // feather area beyond radius (px)
  const RETURN_EASE = 0.1;   // how fast opacity returns to 1
  const COLOR = "#FFFFFF";   // dot color (keep white for best “stars” look)

  const fitCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const rect = parent.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
      x: number;      // base X
      y: number;      // base Y
      opacity: number;
      targetOpacity: number;
      phaseX: number; // per-dot phase for X
      phaseY: number; // per-dot phase for Y
      speedJitter: number; // slight speed variation per dot
    };

    let dots: Dot[] = [];

    const buildDots = () => {
      dots = [];
      const parent = canvas.parentElement!;
      const { width, height } = parent.getBoundingClientRect();

      const cols = Math.ceil(width / DOT_GAP) + 2;
      const rows = Math.ceil(height / DOT_GAP) + 2;
      const xOffset = ((width % DOT_GAP) / 2) - DOT_GAP;
      const yOffset = ((height % DOT_GAP) / 2) - DOT_GAP;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_GAP + xOffset;
          const y = r * DOT_GAP + yOffset;
          dots.push({
            x,
            y,
            opacity: 1,
            targetOpacity: 1,
            phaseX: Math.random() * Math.PI * 2,
            phaseY: Math.random() * Math.PI * 2,
            speedJitter: 0.6 + Math.random() * 0.8, // 0.6..1.4
          });
        }
      }
    };

    // Build + rebuild on container resize
    buildDots();
    const ro = new ResizeObserver(() => {
      fitCanvas();
      buildDots();
    });
    canvas.parentElement && ro.observe(canvas.parentElement);

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const onPointerMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      pointerRef.current.active = true;
      if ("touches" in e) {
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
      const dt = Math.min(32, t - t0);
      t0 = t;

      const parent = canvas.parentElement!;
      const rect = parent.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      const pointer = pointerRef.current;
      const TWO_PI = Math.PI * 2;

      // Animate + render
      ctx.save();
      ctx.fillStyle = COLOR;

      for (const d of dots) {
        // ----- floating (disable if reduced) -----
        let fx = 0, fy = 0;
        if (!reduced) {
          // slow per-dot drift using sinus with unique phase + slight speed jitter
          const tScale = t * FLOAT_SPEED * d.speedJitter;
          fx = Math.sin(d.phaseX + tScale) * FLOAT_AMPL_X;
          fy = Math.cos(d.phaseY + tScale * 1.1) * FLOAT_AMPL_Y;
        }

        const px = d.x + fx;
        const py = d.y + fy;

        // ----- hover fade -----
        if (pointer.active) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const dist = Math.hypot(dx, dy);
          const inner = HIDE_RADIUS;
          const outer = HIDE_RADIUS + HIDE_SOFTNESS;

          let target = 1;
          if (dist <= inner) target = 0;
          else if (dist < outer) target = (dist - inner) / (outer - inner);

          d.targetOpacity = target;
        } else {
          d.targetOpacity = 1;
        }

        // ease opacity back toward target
        d.opacity += (d.targetOpacity - d.opacity) * RETURN_EASE;

        // draw (skip near-zero alpha)
        const alpha = d.opacity;
        if (alpha > 0.02) {
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(px, py, DOT_SIZE, 0, TWO_PI);
          ctx.fill();
        }
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
      ro.disconnect();
    };
  }, [
    DOT_GAP,
    DOT_SIZE,
    FLOAT_AMPL_X,
    FLOAT_AMPL_Y,
    FLOAT_SPEED,
    HIDE_RADIUS,
    HIDE_SOFTNESS,
    RETURN_EASE,
    fitCanvas,
    reduced,
  ]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* interactive canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        aria-hidden
      />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.22em] text-white/60">{kicker}</p>
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

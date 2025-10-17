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

  // ----- Tuning -----
  const DOT_GAP = 26;          // spacing between dots (px)
  const DOT_SIZE = 2.2;        // radius (px)
  const FLOAT_AMPL_X = 0.8;    // float amplitude X (px)
  const FLOAT_AMPL_Y = 1.1;    // float amplitude Y (px)
  const FLOAT_SPEED = 0.0008;  // global drift speed
  const HIDE_RADIUS = 100;     // full fade radius (px)
  const HIDE_SOFTNESS = 130;   // feather after radius (px)
  const RETURN_EASE = 0.1;     // opacity ease back to target
  const COLOR = "#FFFFFF";     // dot color

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
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
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
      x: number; y: number;
      opacity: number; targetOpacity: number;
      phaseX: number; phaseY: number;
      speedJitter: number;
    };

    let dots: Dot[] = [];

    const buildDots = () => {
      dots = [];
      const parent = canvas.parentElement!;
      const { width, height } = parent.getBoundingClientRect();

      const cols = Math.ceil(width / DOT_GAP) + 2;
      const rows = Math.ceil(height / DOT_GAP) + 2;
      const xOffset = ((width % DOT_GAP) / 2) - DOT_GAP; // center the grid
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

    buildDots();
    const ro = new ResizeObserver(() => {
      fitCanvas();
      buildDots();
    });
    canvas.parentElement && ro.observe(canvas.parentElement);

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top, rect };
    };

    // Listen on window so content above the canvas can't block the interaction
    const onPointerMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      let cx = 0, cy = 0;
      if ("touches" in e) {
        const t = e.touches[0];
        if (!t) return;
        cx = t.clientX; cy = t.clientY;
      } else {
        const me = e as MouseEvent;
        cx = me.clientX; cy = me.clientY;
      }
      const { x, y, rect } = toLocal(cx, cy);
      const inside =
        cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
      pointerRef.current.active = inside;
      if (inside) {
        pointerRef.current.x = x;
        pointerRef.current.y = y;
      }
    };

    const onPointerLeaveWindow = () => { pointerRef.current.active = false; };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeaveWindow);
    window.addEventListener("blur", onPointerLeaveWindow);

    let t0 = performance.now();

    const draw = (t: number) => {
      const dt = Math.min(32, t - t0); // reserved if you want time-based easing
      t0 = t;

      const parent = canvas.parentElement!;
      const rect = parent.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      const TWO_PI = Math.PI * 2;
      const pointer = pointerRef.current;

      ctx.save();
      ctx.fillStyle = COLOR;

      for (const d of dots) {
        // Floating drift (disabled if reduced)
        let fx = 0, fy = 0;
        if (!reduced) {
          const ts = t * FLOAT_SPEED * d.speedJitter;
          fx = Math.sin(d.phaseX + ts) * FLOAT_AMPL_X;
          fy = Math.cos(d.phaseY + ts * 1.1) * FLOAT_AMPL_Y;
        }
        const px = d.x + fx;
        const py = d.y + fy;

        // Hover fade
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

        // Ease opacity
        d.opacity += (d.targetOpacity - d.opacity) * RETURN_EASE;

        // Draw
        if (d.opacity > 0.02) {
          ctx.globalAlpha = d.opacity;
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
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeaveWindow);
      window.removeEventListener("blur", onPointerLeaveWindow);
      ro.disconnect();
    };
  }, [
    DOT_GAP, DOT_SIZE,
    FLOAT_AMPL_X, FLOAT_AMPL_Y, FLOAT_SPEED,
    HIDE_RADIUS, HIDE_SOFTNESS, RETURN_EASE,
    fitCanvas, reduced,
  ]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Canvas draws the dots; let clicks pass through */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Content */}
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

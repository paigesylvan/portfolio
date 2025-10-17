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
  const DOT_GAP = 22;          // tighter grid (was 26)
  const DOT_SIZE = 1.6;        // smaller dots (was ~2.2)
  const DRIFT_AMPL_X = 0.5;    // subtle random float
  const DRIFT_AMPL_Y = 0.8;
  const DRIFT_SPEED = 0.0007;

  // Wave motion (clean, coherent motion across the field)
  const WAVE_AMPL = 8;                         // vertical wave amplitude (px)
  const WAVE_WAVELENGTH = 160;                 // px between crests
  const WAVE_SPEED = 0.0015;                   // time speed
  const WAVE2_AMPL = 4;                        // optional secondary cross-wave (x shift)
  const WAVE2_WAVELENGTH = 220;
  const WAVE2_SPEED = 0.0011;

  // Hover fade
  const HIDE_RADIUS = 100;
  const HIDE_SOFTNESS = 130;
  const RETURN_EASE = 0.1;
  const COLOR = "#FFFFFF";

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
      x: number; y: number;        // base grid position
      opacity: number; targetOpacity: number;
      driftPX: number; driftPY: number; // random drift phase
      speedJitter: number;
      rowPhase: number; colPhase: number; // stable offsets for coherent waves
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
            x, y,
            opacity: 1,
            targetOpacity: 1,
            driftPX: Math.random() * Math.PI * 2,
            driftPY: Math.random() * Math.PI * 2,
            speedJitter: 0.7 + Math.random() * 0.6, // 0.7..1.3
            rowPhase: (r / rows) * Math.PI * 2,
            colPhase: (c / cols) * Math.PI * 2,
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
      const inside = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
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
      const parent = canvas.parentElement!;
      const rect = parent.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      const TWO_PI = Math.PI * 2;
      const pointer = pointerRef.current;

      ctx.save();
      ctx.fillStyle = COLOR;

      for (const d of dots) {
        // ----- motion -----
        // coherent wave: vertical sinusoid based on x position (plus per-row offset)
        let wx = 0, wy = 0;
        if (!reduced) {
          const wavePhase = (d.x / WAVE_WAVELENGTH) * TWO_PI + t * WAVE_SPEED + d.rowPhase * 0.25;
          wy = Math.sin(wavePhase) * WAVE_AMPL;

          // optional second wave to add a gentle horizontal sway
          const wave2Phase = (d.y / WAVE2_WAVELENGTH) * TWO_PI + t * WAVE2_SPEED + d.colPhase * 0.25;
          wx = Math.sin(wave2Phase) * WAVE2_AMPL;

          // tiny random drift so it doesn't look perfectly mechanical
          const ts = t * DRIFT_SPEED * d.speedJitter;
          wx += Math.sin(d.driftPX + ts) * DRIFT_AMPL_X;
          wy += Math.cos(d.driftPY + ts * 1.1) * DRIFT_AMPL_Y;
        }

        const px = d.x + wx;
        const py = d.y + wy;

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

        // ease opacity
        d.opacity += (d.targetOpacity - d.opacity) * RETURN_EASE;

        // draw
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
    DRIFT_AMPL_X, DRIFT_AMPL_Y, DRIFT_SPEED,
    WAVE_AMPL, WAVE_WAVELENGTH, WAVE_SPEED,
    WAVE2_AMPL, WAVE2_WAVELENGTH, WAVE2_SPEED,
    HIDE_RADIUS, HIDE_SOFTNESS, RETURN_EASE,
    fitCanvas, reduced,
  ]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* canvas behind content; let clicks pass through */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
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

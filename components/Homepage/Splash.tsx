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
  // Appearance
  const DOT_GAP = 22;       // tighter grid
  const DOT_SIZE = 1.6;     // smaller dots
  const COLOR = "#FFFFFF";

  // Diagonal wave (primary motion)
  const WAVE_DIR_DEG = 45;                    // direction in degrees (45° = top-left -> bottom-right)
  const WAVE_AMPL = 8;                        // px amplitude (vertical offset relative to wave)
  const WAVE_WAVELENGTH = 160;                // px between crests
  const WAVE_SPEED = 0.002;                   // time speed

  // Cross-sway (secondary motion for organic feel)
  const SWAY_AMPL = 3;                        // px
  const SWAY_WAVELENGTH = 220;                // px
  const SWAY_SPEED = 0.0012;                  // time speed

  // Tiny per-dot drift (micro jitter so it’s not mechanical)
  const DRIFT_AMPL = 0.6;                     // px
  const DRIFT_SPEED = 0.0009;

  // Hover fade “hole”
  const HIDE_RADIUS = 100;                    // px full fade
  const HIDE_SOFTNESS = 130;                  // px feather
  const RETURN_EASE = 0.1;                    // opacity ease

  // ===== CANVAS SETUP =====
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
      x: number; y: number;                 // base grid position
      opacity: number; targetOpacity: number;
      jitter: number;                       // per-dot drift phase
    };

    let dots: Dot[] = [];

    const buildDots = () => {
      dots = [];
      const parent = canvas.parentElement!;
      const { width, height } = parent.getBoundingClientRect();

      const cols = Math.ceil(width / DOT_GAP) + 2;
      const rows = Math.ceil(height / DOT_GAP) + 2;
      const xOffset = ((width % DOT_GAP) / 2) - DOT_GAP; // center grid
      const yOffset = ((height % DOT_GAP) / 2) - DOT_GAP;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * DOT_GAP + xOffset;
          const y = r * DOT_GAP + yOffset;
          dots.push({
            x, y,
            opacity: 1,
            targetOpacity: 1,
            jitter: Math.random() * Math.PI * 2,
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

    // Coordinate helpers
    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top, rect };
    };

    // Listen on window so content never blocks interaction
    const onPointerMove = (e: PointerEvent | MouseEvent | TouchEvent) => {
      let cx = 0, cy = 0;
      if ("touches" in e) {
        const t = e.touches[0]; if (!t) return;
        cx = t.clientX; cy = t.clientY;
      } else {
        const me = e as MouseEvent;
        cx = me.clientX; cy = me.clientY;
      }
      const { x, y, rect } = toLocal(cx, cy);
      const inside = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
      pointerRef.current.active = inside;
      if (inside) { pointerRef.current.x = x; pointerRef.current.y = y; }
    };
    const onPointerLeaveWindow = () => { pointerRef.current.active = false; };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeaveWindow);
    window.addEventListener("blur", onPointerLeaveWindow);

    // Precompute wave direction vectors
    const dirRad = (WAVE_DIR_DEG * Math.PI) / 180;
    const ux = Math.cos(dirRad);  // unit vector along wave direction
    const uy = Math.sin(dirRad);
    // perpendicular unit (for vertical displacement relative to wave)
    const px = -uy;
    const py = ux;

    const TWO_PI = Math.PI * 2;

    const draw = (t: number) => {
      const parent = canvas.parentElement!;
      const rect = parent.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.save();
      ctx.fillStyle = COLOR;

      for (const d of dots) {
        // ===== Motion calculation =====
        let offX = 0, offY = 0;

        if (!reduced) {
          // Project point onto wave direction (distance along diagonal)
          const s = d.x * ux + d.y * uy; // scalar along direction

          // Primary wave: sine over the along-direction, moving over time
          const phase = (s / WAVE_WAVELENGTH) * TWO_PI + t * WAVE_SPEED;
          const wave = Math.sin(phase) * WAVE_AMPL;

          // Apply displacement along the perpendicular to the wave direction
          offX += px * wave;
          offY += py * wave;

          // Secondary cross-sway (orthogonal wave for shimmer)
          const s2 = d.x * px + d.y * py;
          const phase2 = (s2 / SWAY_WAVELENGTH) * TWO_PI + t * SWAY_SPEED;
          const sway = Math.sin(phase2) * SWAY_AMPL;
          offX += ux * sway * 0.6;
          offY += uy * sway * 0.6;

          // Tiny per-dot random drift
          const drift = Math.sin(d.jitter + t * DRIFT_SPEED) * DRIFT_AMPL;
          offX += drift * 0.6;
          offY += drift * 0.6;
        }

        const pxWorld = d.x + offX;
        const pyWorld = d.y + offY;

        // ===== Hover fade =====
        if (pointerRef.current.active) {
          const dx = pxWorld - pointerRef.current.x;
          const dy = pyWorld - pointerRef.current.y;
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

        // Ease opacity toward target
        d.opacity += (d.targetOpacity - d.opacity) * RETURN_EASE;

        // Draw
        if (d.opacity > 0.02) {
          ctx.globalAlpha = d.opacity;
          ctx.beginPath();
          ctx.arc(pxWorld, pyWorld, DOT_SIZE, 0, TWO_PI);
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
    WAVE_DIR_DEG, WAVE_AMPL, WAVE_WAVELENGTH, WAVE_SPEED,
    SWAY_AMPL, SWAY_WAVELENGTH, SWAY_SPEED,
    DRIFT_AMPL, DRIFT_SPEED,
    HIDE_RADIUS, HIDE_SOFTNESS, RETURN_EASE,
    fitCanvas, reduced,
  ]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Canvas draws dots behind content; let clicks pass through */}
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

// ...top unchanged...

export default function HeroDots({ title = "...", subtitle = "...", kicker = "PORTFOLIO" }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const [reduced, setReduced] = useState(false);

  // ...config + fitCanvas/useEffects unchanged up to the big animation effect...

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ===== buildDots etc. stays the same =====

    const toLocal = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top, rect };
    };

    // 🔁 Listen on window so content on top doesn't block the interaction
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
      // Only activate when inside the hero bounds
      const inside = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
      pointerRef.current.active = inside;
      if (inside) {
        pointerRef.current.x = x;
        pointerRef.current.y = y;
      }
    };

    const onPointerLeaveWindow = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeaveWindow);
    window.addEventListener("blur", onPointerLeaveWindow);

    // ...animation loop (draw) unchanged...

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeaveWindow);
      window.removeEventListener("blur", onPointerLeaveWindow);
      ro.disconnect();
    };
  }, [/* your deps unchanged */]);

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* ⬅ canvas no longer needs events; let clicks pass through */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

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

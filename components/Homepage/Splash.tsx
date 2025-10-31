"use client";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  height?: number;
};

export default function HeroProficoFullMultihue({
  title = "Paige Sylvan",
  subtitle = "Design that actually works. I build clean, responsive experiences guided by research and craft.",
  kicker = "PORTFOLIO",
  height,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden text-white full-bleed ${
        height ? "" : "min-h-[100svh] pt-safe pb-safe"
      }`}
      style={height ? { height } : undefined}
    >
      {/* Multihue aurora (top-only, masked) */}
      <div className="aurora-top absolute left-1/2 top-0 -translate-x-1/2 w-screen h-[70vh] pointer-events-none z-0" />

      {/* Clean fade to black below */}
      <div className="fade-black absolute inset-x-0 top-[36vh] bottom-0 pointer-events-none -z-10" />

      {/* Film grain */}
      <div className="film-grain absolute inset-0 pointer-events-none mix-blend-overlay opacity-30" aria-hidden />

      {/* Soft vignette */}
      <div className="vignette-soft absolute inset-0 pointer-events-none" aria-hidden />

      {/* Content */}
      <div className={`relative z-10 mx-auto max-w-[1200px] px-6 ${height ? "h-full" : "min-h-[100svh]"} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-[10px] tracking-[0.22em] text-white/90">{kicker}</p>
          <h1 className="mt-2 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
            {title}
          </h1>
          <p className="mt-5 text-white/95 text-sm md:text-base max-w-[760px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

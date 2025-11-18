"use client";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  height?: number;
};

export default function HeroProficoFullMultihue({
  title = "Paige Sylvan",
  subtitle = "I design experiences that balance clarity, usability, and beauty. Driven by the process of turning an idea into something real.",
  kicker = "",
  height,
}: Props) {
  return (
    <section
      className={`relative overflow-hidden text-white full-bleed ${
        height ? "" : "min-h-[100svh] pt-safe pb-safe"
      }`}
      style={height ? { height } : undefined}
    >
      <div className="aurora-top absolute left-1/2 top-0 -translate-x-1/2 w-screen h-[70vh] pointer-events-none z-0" />
      <div className="fade-black absolute inset-x-0 top-[36vh] bottom-0 pointer-events-none -z-10" />
      <div className="film-grain absolute inset-0 pointer-events-none mix-blend-overlay opacity-30" aria-hidden />
      <div className="vignette-soft absolute inset-0 pointer-events-none" aria-hidden />

      <div className={`relative z-10 mx-auto max-w-[1200px] px-6 ${height ? "h-full" : "min-h-[100svh]"} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-[10px] tracking-[0.22em] text-white/90">{kicker}</p>
          <h1 className="mt-2 text-5xl md:text-7xl lg:text-8xl  tracking-[0.1em]">
            {title}
          </h1>
          <p className="mt-10 text-white/95 text-sm md:text-2xl px-12 lg:px-0 max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

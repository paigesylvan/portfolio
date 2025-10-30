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
    
    className={`relative w-screen overflow-hidden text-white ${height ? "" : "min-h-screen-fix pt-safe pb-safe"}`}

      style={{
        ...(height ? { height } : {}),
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* Multihue aurora base (stronger, full-bleed) */}
{/* TOP-ONLY multihue, extended + masked so it fades out smoothly */}
<div
  className="absolute left-1/2 -translate-x-1/2 top-0 w-screen h-[70vh] pointer-events-none z-0"
  style={{
    backgroundImage: [
      "radial-gradient(1400px 600px at 50% -24%, rgba(255,165,80,0.85) 0%, rgba(255,165,80,0.34) 42%, rgba(255,165,80,0) 70%)",
      "radial-gradient(1300px 760px at -10% -16%, rgba(245,60,160,0.85) 0%, rgba(245,60,160,0.32) 44%, rgba(245,60,160,0) 72%)",
      "radial-gradient(1300px 760px at 110% -18%, rgba(0,196,255,0.88) 0%, rgba(0,196,255,0.36) 46%, rgba(0,196,255,0) 72%)",
      "linear-gradient(15deg, rgba(90,60,255,0) 40%, rgba(90,60,255,0.52) 58%, rgba(90,60,255,0) 76%)",
    ].join(", "),
    backgroundBlendMode: "screen, screen, screen, screen",

    /* Key: mask the lower part so there is no visible cutoff */
    WebkitMaskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 78%)",
    maskImage:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 78%)",
  }}
/>


{/* Clean fade to pure black BELOW */}
<div
  className="absolute inset-x-0 top-[36vh] bottom-0 pointer-events-none -z-10"
  style={{
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,1) 70%)",
  }}
/>



      {/* Film grain (slightly stronger) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 2px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 2px)",
          filter: "contrast(112%)",
        }}
      />

      {/* Softer vignette so colors read */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            // side vignette, milder
            "radial-gradient(140% 100% at -10% 80%, rgba(0,0,0,0.70) 30%, rgba(0,0,0,0.45) 58%, rgba(0,0,0,0.10) 82%, rgba(0,0,0,0) 95%)",
            // global dome
            "radial-gradient(125% 85% at 50% 62%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 56%, rgba(0,0,0,0.55) 88%, rgba(0,0,0,0.85) 100%)",
          ].join(", "),
        }}
      />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-[1200px] px-6 ${height ? "h-full" : "min-h-screen"} flex items-center justify-center`}
      >
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

"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        src="/video/hero-loop.mp4" // 👈 put your file in /public/bg/
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay (optional: tint for contrast) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          PAIGE SYLVAN
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80 md:text-xl">
          UX/UI FRONT END DEV
        </p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#000000]" />

    </section>
  );
}

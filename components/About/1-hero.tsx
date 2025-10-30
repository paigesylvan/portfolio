"use client";

export default function AboutHero() {
  return (
    <section className="relative isolate flex items-center justify-center px-6 md:py-40 bg-black text-white overflow-hidden h-[900px] mb-36">
      {/* Multihue aurora base (behind content, full-bleed) */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none -z-10"
        style={{
          backgroundColor: "#07090B",
          backgroundImage: [
            "radial-gradient(1000px 600px at 42% -18%, rgba(255,70,70,0.48) 0%, rgba(255,70,70,0.20) 42%, rgba(255,70,70,0) 68%)",
            "radial-gradient(1300px 780px at -15% -20%, rgba(245,60,160,0.85) 0%, rgba(245,60,160,0.38) 40%, rgba(245,60,160,0) 64%)",
            "radial-gradient(1000px 600px at 28% -22%, rgba(170,90,255,0.55) 0%, rgba(170,90,255,0.22) 44%, rgba(170,90,255,0) 70%)",
            "linear-gradient(12deg, rgba(90,60,255,0.00) 34%, rgba(90,60,255,0.35) 48%, rgba(90,60,255,0.00) 66%)",
            "radial-gradient(1100px 720px at 88% -18%, rgba(44,110,255,0.62) 0%, rgba(44,110,255,0.26) 44%, rgba(44,110,255,0) 70%)",
            "radial-gradient(1300px 780px at 115% -20%, rgba(0,196,255,0.88) 0%, rgba(0,196,255,0.38) 40%, rgba(0,196,255,0) 64%)",
            "radial-gradient(900px 580px at 105% 6%, rgba(0,210,190,0.35) 0%, rgba(0,210,190,0.14) 40%, rgba(0,210,190,0) 64%)",
            "radial-gradient(1400px 600px at 50% -24%, rgba(255,165,80,0.70) 0%, rgba(255,165,80,0.24) 42%, rgba(255,165,80,0) 68%)",
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.64) 50%, rgba(0,0,0,0.90) 82%, rgba(0,0,0,1) 100%)",
          ].join(", "),
          backgroundBlendMode:
            "screen, screen, screen, screen, screen, screen, screen, screen, normal",
        }}
      />

      {/* Content above hues */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] text-center">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight lg:mt-60">
          Hi, I’m Paige 👋
        </h1>
        <h1 className="mt-12 text-lg lg:text-4xl font-extrabold leading-tight ">
          A designer who blends creativity and logic.
        </h1>
   
        <p className=" text-white/80 max-w-3xl mx-auto text-l md:text-2xl leading-snug pt-1 ">
          My background in development and UX design helps me craft experiences
          that are not only beautiful but built to work in the real world.
        </p>

        <p className=" text-white/80 max-w-4xl mx-auto text-xs lg:text-md leading-snug pt-24 pb-2 accent-text uppercase tracking-[0.12em]">
          A few things I love
        </p>
        <p className="text-lg lg:text-5xl ">
        🎟️ 🥢 🏀 🌮 🎨 🎾 🌱 🌍 🌊  ☕ 🎲 🐶
                     
        </p>

      </div>
    </section>
  );
}

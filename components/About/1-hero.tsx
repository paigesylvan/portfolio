"use client";

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center px-6 py-28 md:py-40 bg-black text-white">
      <div className="mx-auto w-full max-w-[1100px] text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m Paige —
          <br className="hidden md:block" />
          a designer who blends creativity and logic.
        </h1>
        <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          My background in development and UX design helps me craft experiences
          that are not only beautiful but built to work in the real world.
        </p>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";



export default function Hero() {
  return (
    // full width wrapper just in case
    <div className="w-screen ">
      {/* centered, readable max width */}
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h1 className="text-center text-3xl md:text-5xl leading-tight">
          How Emotionally Intelligent Design
          <br className="hidden md:block" />
          Improves Booking Confidence for Dog Grooming
        </h1>

        <div className="relative mt-12">
          {/* soft glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] aspect-[2/1] rounded-full bg-[radial-gradient(circle_at_center,rgba(86,125,191,0.35),rgba(0,0,0,0)_60%)] blur-2xl" />

          {/* phones row */}
          <div className="relative mx-auto grid max-w-4xl grid-cols-3 items-end justify-items-center gap-6">
            {[1, 2, 3].map((n) => (
              <Image
                key={n}
                src={`/images/phone-${n}.png`}
                alt={`App screen ${n}`}
                width={420}
                height={860}
                className="h-auto w-full max-w-[280px]"
                priority={n === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36 lg:mt-0">
      <div className="max-w-[1200px] w-full mx-auto text-center">
        {/* Header */}
        <SectionHeader
          kicker="PROJECT OUTCOME"
          title="Final Design"
          align="center"
        />
              {/* short blurb */}
              <p className="mx-auto mt-3 max-w-2xl text-center text-white/85 text-sm sm:text-base leading-snug">
          Iterations improved clarity on the homepage and confidence throughout checkout,
          especially for first-time campers. The result is a smoother, more guided experience
          that reduces overwhelm and builds trust with users.
        </p>

        {/* Video Demo */}
        <div className="flex justify-center mt-10">
          <div className="overflow-hidden max-w-[1000px] w-full">
            <video
              src="/images/project2-images/final-design-desktop.mp4" // replace with your actual path
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

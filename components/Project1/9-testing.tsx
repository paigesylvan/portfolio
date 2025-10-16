"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Testing() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white py-8 mt-24 lg:mt-0">
      <div className="max-w-[1200px] w-full text-center mx-auto">
        {/* Header */}
        <SectionHeader
          kicker="TESTING USABILITY"
          title="Design Evolution Through Iteration"
          align="center"
        />

        {/* Subtitle */}
        <h3 className="mt-1 lg:mt-6 text-xs lg:text-lg md:text-xl font-medium text-white px-6">
          Moderated User Testing informed iterations and guided my final design decisions
        </h3>

        {/* Description */}
        <p className="text-xs lg:text-lg mx-auto mt-4 max-w-5xl text-white/85 leading-snug">
          Through a moderated usability study of one user, they navigated through the app
          while I noted comments and areas of refinement. Feedback was positive about the
          user flow of the booking process and ability to schedule for more than one dog.
          To bring more reassurance and comfort to the user, I prioritized the status of
          appointments and the personalization of dog profiles by adding them to the home
          screen. During the study, I noted the service information and messaging features
          were not easily accessible, so they were added to the navigation menu to benefit
          both new and repeating users.
        </p>

        {/* Evolution Images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center place-items-center">
          {[
            {
              src: "/images/project1-images/evolution-1.png",
              title: "Wireframe",
              desc: "Testing structure & navigation",
            },
            {
              src: "/images/project1-images/evolution-2.png",
              title: "First Iteration",
              desc: "Added visual identity + clearer CTA",
            },
            {
              src: "/images/project1-images/evolution-3.png",
              title: "Second Iteration",
              desc: "Personalized screen with appointments",
            },
            {
              src: "/images/project1-images/evolution-4.png",
              title: "Final Design",
              desc: "Added Navigation + Messaging Feature",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full max-w-[220px] sm:max-w-[260px] md:max-w-[280px]"
            >
              {/* Image container with consistent ratio */}
              <div className="w-full aspect-[9/18] overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={card.src}
                  alt={card.title}
                  width={280}
                  height={560}
                  className="w-full h-full object-cover"
                  priority={i === 0}
                />
              </div>

              {/* Captions */}
              <p className="mt-4 text-sm font-semibold text-[#7FB2FF]">
                {card.title}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-white/70 text-center max-w-[240px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

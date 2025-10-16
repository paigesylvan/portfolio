"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Testing() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 md:px-6 text-white py-8 mt-24 md:mt-0">
      <div className="max-w-[900px] w-full text-center mx-auto">
        {/* Header */}
        <SectionHeader
          kicker="TESTING USABILITY"
          title="Design Evolution Through Iteration"
          align="center"
        />

        {/* Subtitle */}
        <h3 className="mt-1 md:mt-4 text-xs md:text-sm lg:text-base font-medium text-white/90 px-4">
          Moderated usability testing informed iterations and guided my final design decisions.
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm lg:text-base mx-auto mt-4 max-w-2xl text-white/80 leading-snug md:leading-normal">
          Through a moderated usability study of one user, they navigated through the app
          while I noted comments and areas for refinement. Feedback was positive about the
          booking process and ability to schedule for more than one dog. To bring more
          reassurance and comfort to the user, I prioritized the status of appointments and
          personalization of dog profiles on the home screen. The service information and
          messaging features were not easily accessible, so they were added to the navigation
          menu to support both new and repeating users.
        </p>

        {/* Evolution Images */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
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
              desc: "Added navigation + messaging feature",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full max-w-[160px] sm:max-w-[200px] md:max-w-[180px]"
            >
              {/* Image container */}
              <div className="w-full aspect-[9/18] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
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
              <p className="mt-3 text-[11px] md:text-sm font-semibold text-[#7FB2FF] uppercase tracking-wide">
                {card.title}
              </p>
              <p className="mt-1 text-[10px] md:text-xs text-white/70 text-center max-w-[180px] leading-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

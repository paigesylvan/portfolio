"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Testing() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-4 text-white py-8 md:py-10 mt-20 md:mt-0">
      <div className="max-w-[760px] w-full text-center mx-auto">
        {/* ---------- HEADER ---------- */}
        <SectionHeader
          kicker="TESTING USABILITY"
          title="Design Evolution Through Iteration"
          align="center"
        />

        {/* ---------- SUBTITLE ---------- */}
        <h3 className="mt-1 md:mt-3 text-[10px] md:text-[11px] lg:text-[12px] font-medium text-white/85 px-3 leading-snug">
          Moderated usability testing informed iterations and guided my final design decisions.
        </h3>

        {/* ---------- DESCRIPTION ---------- */}
        <p className="text-[10px] md:text-[11px] lg:text-[12px] mx-auto mt-3 max-w-[620px] text-white/75 leading-snug md:leading-snug">
          Through a moderated usability study of one user, they navigated through the app
          while I noted comments and areas for refinement. Feedback was positive about the
          booking process and ability to schedule for more than one dog. To bring more
          reassurance and comfort to the user, I prioritized the status of appointments and
          personalization of dog profiles on the home screen. The service information and
          messaging features were not easily accessible, so they were added to the navigation
          menu to support both new and repeating users.
        </p>

        {/* ---------- EVOLUTION IMAGES ---------- */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
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
              className="flex flex-col items-center w-full max-w-[130px] sm:max-w-[150px] md:max-w-[140px]"
            >
              {/* Image container */}
              <div className="w-full aspect-[9/18] overflow-hidden rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                <Image
                  src={card.src}
                  alt={card.title}
                  width={240}
                  height={480}
                  className="w-full h-full object-cover"
                  priority={i === 0}
                />
              </div>

              {/* Captions */}
              <p className="mt-2 text-[9px] md:text-[10px] font-semibold text-[#7FB2FF] uppercase tracking-wide">
                {card.title}
              </p>
              <p className="mt-1 text-[8px] md:text-[9px] text-white/70 text-center max-w-[140px] leading-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Testing() {
  return (
    <section className="px-4 lg:px-6 text-white py-8 md:py-10 mt-20 md:mt-48 mb-8 lg:mb-0">
      {/* ✅ Whole section constrained */}
      <div className="mx-auto w-full max-w-[1000px] text-center">
        <SectionHeader
          kicker="TESTING USABILITY"
          title="Design Evolution Through Iteration"
          align="center"
        />

        {/* Copy block */}
        <div className="mx-auto mt-4 text-left">
          <p className="text-[12px] md:text-[13px] text-white/75 leading-snug">
            After developing low-fidelity prototypes, I conducted a moderated
            usability test with a participant representative of the target user.
            They completed key booking tasks using a think-aloud protocol,
            supported by follow-up questions to understand expectations and
            decision-making. The results informed refinements to the high-fidelity
            prototypes, and ensured the final design aligned with user needs and
            confidence in booking.
          </p>

          <h4 className="mt-4 text-[12px] md:text-[13px] font-semibold text-[#7FB2FF]">
            Positive signals
          </h4>
          <ul className="mt-1 list-disc pl-5 text-[10px] md:text-base text-white/70 leading-snug">
            <li>The booking flow was straightforward.</li>
            <li>Scheduling for multiple dogs was perceived as valuable and intuitive.</li>
          </ul>

          <h4 className="mt-4 text-[12px] md:text-[13px] font-semibold text-[#7FB2FF]">
            Identified friction
          </h4>
          <ul className="mt-1 list-disc pl-5 text-[10px] md:text-base text-white/70 leading-snug">
            <li>Appointment status was unclear after booking.</li>
            <li>The user sought reassurance their dog was “in good hands.”</li>
            <li>Service information and messaging were not easily discoverable.</li>
          </ul>

          <h4 className="mt-4 text-[12px] md:text-[13px] font-semibold text-[#7FB2FF]">
            Design adjustments based on insights
          </h4>
          <ul className="mt-1 list-disc pl-5 text-[10px] md:text-base text-white/70 leading-snug">
            <li>
              Surfaced{" "}
              <span className="font-medium text-white/85">
                appointment status
              </span>{" "}
              to reduce uncertainty and increase trust.
            </li>
            <li>
              Enhanced{" "}
              <span className="font-medium text-white/85">
                dog profile personalization
              </span>{" "}
              on the home screen for emotional reassurance.
            </li>
            <li>
              Added{" "}
              <span className="font-medium text-white/85">
                service info and messaging
              </span>{" "}
              to the primary navigation for new and returning users.
            </li>
          </ul>
        </div>

        {/* Evolution grid (keeps its own width) */}
        <div className="mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
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
              desc: "Personalized homescreen with appointments + dog profile",
            },
            {
              src: "/images/project1-images/evolution-4.png",
              title: "Final Design",
              desc: "Added navigation bar with CTA throughout entire app",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center w-full max-w-[140px]"
            >
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

              <p className="mt-2 text-[12px] md:text-[13px] font-semibold text-[#7FB2FF] uppercase tracking-wide">
                {card.title}
              </p>
              <p className="mt-1 text-[12px] md:text-[13px] text-white/70 text-center leading-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

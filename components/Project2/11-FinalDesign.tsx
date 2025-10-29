"use client";

import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white lg:mt-0">
      <div className="max-w-[1200px] w-full mx-auto text-center">
        {/* Header */}
        <SectionHeader
          kicker="PROJECT OUTCOME"
          title="Final Design"
          align="center"
        />

        {/* Video and Text wrapper */}
        <div className="flex flex-col-reverse md:flex-col items-center mt-8 gap-6">
          {/* Text */}
          <p className="mx-auto max-w-3xl text-center text-white/85 text-[10px] md:text-md leading-tight px-6 lg:px-0">
            The final product is an intuitive and sleek e-commerce experience designed to help 
            users feel confident while gearing up for the outdoors. Clear navigation, curated bundles, 
            and simplified product details reduce decision fatigue and make selections feel guided rather 
            than overwhelming. Thoughtful information hierarchy and reassuring microcopy support users at 
            every step, while a clean, modern visual style reinforces trust and brand clarity. The result 
            is a shopping experience that transforms uncertainty into excitement, empowering users to explore 
            nature with confidence and the right gear for their adventure.
          </p>

          {/* Video Demo */}
          <div className="flex justify-center w-full">
            <div className="overflow-hidden max-w-[950px] w-full py-12 lg:py-0">
              <video
                src="/images/project2-images/final-design-desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

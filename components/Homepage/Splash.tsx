import Image from "next/image";
import Link from "next/link";
import PaigeOutlineTrace from "../outline";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  minHeight?: number | string;
};

export default function Hero({
  title = "PAIGE SYLVAN",
  subtitle = "Designing experiences that balance clarity, usability, and beauty. Driven by the process of turning an idea into something real.",
  minHeight,
}: Props) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden text-white full-bleed pt-safe pb-safe"
      style={minHeight ? { minHeight } : undefined}
    >
      {/* Aurora background */}
      <div className="aurora-top absolute left-1/2 top-0 -translate-x-1/2 w-screen h-[40vh] pointer-events-none z-0" />
      <div className="fade-black absolute inset-x-0 top-[36vh] bottom-0 pointer-events-none -z-10" />
      <div
        className="film-grain absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
        aria-hidden
      />
      <div
        className="vignette-soft absolute inset-0 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-20 mt-[18vh] md:mt-[24vh] lg:mt-[27vh]">
        <div className="flex flex-col items-center text-center gap-10">
          
          {/* Title + Subtitle */}
          <div>
            
          <Image
            src="/images/homepage-images/Social.png"
            alt="Hero image"
            width={500}
            height={300}
          />

{/* 
            <h1
              id="hero-title"
              className="mt-2 text-5xl lg:text-7xl tracking-[0.07em] font-bold"
            >
              {title}
            </h1>
*/}
            <p className="mt-8 text-white/95 text-[14px] md:text-[15px] px-4 md:px-12 lg:px-0 max-w-[450px] mx-auto mb-36 leading-snug text-left">
              {subtitle}
            </p>
          </div>

          {/* Image + Outline */}
          <div className="relative mx-auto w-[350px] md:w-[420px]">
            <Image
              src="/images/homepage-images/paige-headshot.png"
              alt="Paige Sylvan headshot"
              width={500}
              height={420}
              className="rounded-3xl object-cover w-full"
              priority
              sizes="(min-width: 768px) 420px, 350px"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <PaigeOutlineTrace />
            </div>
          </div>

          {/* About block */}
          <div className="max-w-[520px] mx-auto flex flex-col items-center gap-4">
            <p className="mb-4 text-center text-[11px] tracking-[0.22em] text-white/60">
              ABOUT ME
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Product Designer & UX/UI Developer
            </h2>

            <p className="text-white/85  text-[11px] md:text-[12px]">
              I design clean, intuitive interfaces and build responsive,
              user-centered products with modern front-end tools. I blend UX
              strategy, visual design, and development experience to turn
              complex problems into simple, functional experiences.
            </p>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 mt-2 rounded-full px-5 py-2.5 font-medium text-white text-[13px] bg-white/[0.06] backdrop-blur-md shadow-[0_3px_10px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 hover:bg-white/[0.15] hover:shadow-[0_5px_16px_rgba(0,0,0,0.45)] focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <span className="tracking-wide">More About Me</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

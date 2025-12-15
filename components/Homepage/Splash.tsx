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
  title = "Product Designer & UX/UI Developer",
  kicker = "PAIGE SYLVAN",
  subtitle = "I design clean, intuitive interfaces and build responsive, user-centered products with modern front-end tools. I blend UX strategy, visual design, and development experience to turn complex problems into simple, functional experiences.",
  minHeight,
}: Props) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden text-white full-bleed pt-safe pb-safe bg-black"
      style={minHeight ? { minHeight } : undefined}
    >
      {/* Background */}
      <div className="aurora-top absolute left-1/2 top-0 -translate-x-1/2 w-screen h-[100vh] pointer-events-none z-0" />
      <div
        className="film-grain absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 z-[1]"
        aria-hidden
      />
      <div className="vignette-soft absolute inset-0 pointer-events-none z-[1]" aria-hidden />

      {/* Bottom hue (soft + not cut off) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-36 z-0 h-[70vh] opacity-85"
        style={{
          backgroundImage: [
            "radial-gradient(1400px 620px at 18% 92%, rgba(245,60,160,0.18) 0%, rgba(245,60,160,0.08) 42%, rgba(0,0,0,0) 78%)",
            "radial-gradient(1400px 620px at 55% 95%, rgba(0,196,255,0.16) 0%, rgba(0,196,255,0.07) 45%, rgba(0,0,0,0) 80%)",
            "radial-gradient(1400px 620px at 88% 92%, rgba(0,210,190,0.14) 0%, rgba(0,210,190,0.06) 46%, rgba(0,0,0,0) 82%)",
          ].join(", "),
          filter: "blur(95px)",
          mixBlendMode: "screen",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 92%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 92%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000] lg:max-w-[1090px] px-6 pt-24 pb-20 md:pt-28 lg:pt-32">
        <div className="grid items-left gap-14 lg:grid-cols-12">
          {/* LEFT: text */}
          <div className="lg:col-span-6 text-left lg:mt-36">
            <p className="text-[11px] tracking-[0.22em] text-white/60">{kicker}</p>

            <h1
              id="hero-title"
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.01em]"
            >
              {title}
            </h1>

            <p className="mt-5 text-white/80 text-[12px] md:text-[13px] leading-snug max-w-[52ch] mx-auto lg:mx-0">
              {subtitle}
            </p>



            <div className="mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-medium text-white text-[13px]
                           bg-white/[0.08] backdrop-blur-md border border-white/15
                           shadow-[0_3px_12px_rgba(0,0,0,0.35)]
                           transition-all duration-300 hover:bg-white/[0.16] hover:shadow-[0_6px_20px_rgba(0,0,0,0.55)]
                           focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <span className="tracking-wide">More About Me</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT: headshot */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative md:mt-10 lg:mt-16 lg:mr-4">
            <div className="relative w-[330px] md:w-[370px]">
              <div className="absolute -inset-4 rounded-[28px] bg-white/[0.04] ring-1 ring-inset ring-white/10 backdrop-blur-md shadow-[0_24px_90px_rgba(0,0,0,0.55)]" />

              <Image
                src="/images/homepage-images/paige-headshot.png"
                alt="Paige Sylvan headshot"
                width={500}
                height={520}
                className="relative rounded-3xl object-cover w-full"
                priority
                sizes="(min-width: 1024px) 400px, 330px"
              />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PaigeOutlineTrace />
              </div>

              <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-6 rounded-full bg-black/70 blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

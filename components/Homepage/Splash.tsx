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
  title = "Hi, I’m Paige.",
  kicker = "PRODUCT DESIGN • UX/UI DEVELOPMENT",
  subtitle = "Designing experiences that balance clarity, usability, and beauty. Driven by the process of turning an idea into something real.",
  minHeight,
}: Props) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden text-white full-bleed pt-safe pb-safe bg-black"
      style={minHeight ? { minHeight } : undefined}
    >
      {/* Background layers */}
      <div className="aurora-top absolute left-1/2 top-0 -translate-x-1/2 w-screen h-[100vh] pointer-events-none z-0" />

      {/* Subtle bottom hue that flows into the next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-28 z-0 h-[60vh] opacity-90"
        style={{
          backgroundImage: [
            "radial-gradient(1400px 620px at 18% 88%, rgba(245,60,160,0.18) 0%, rgba(245,60,160,0.08) 42%, rgba(0,0,0,0) 78%)",
            "radial-gradient(1400px 620px at 55% 92%, rgba(0,196,255,0.16) 0%, rgba(0,196,255,0.07) 45%, rgba(0,0,0,0) 80%)",
            "radial-gradient(1400px 620px at 88% 88%, rgba(0,210,190,0.14) 0%, rgba(0,210,190,0.06) 46%, rgba(0,0,0,0) 82%)",
          ].join(", "),
          filter: "blur(90px)",
          mixBlendMode: "screen",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0) 88%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 28%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0) 88%)",
        }}
      />

      <div
        className="film-grain absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 z-[1]"
        aria-hidden
      />
      <div className="vignette-soft absolute inset-0 pointer-events-none z-[1]" aria-hidden />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6 pt-24 pb-20 md:pt-28 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          {/* Small badge/kicker */}
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] tracking-[0.22em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
            {kicker}
          </p>

          {/* Optional “social” image (kept, but styled so it feels intentional) */}
          <div className="mb-10">
            <Image
              src="/images/homepage-images/Social.png"
              alt="Hero graphic"
              width={520}
              height={320}
              className="mx-auto opacity-95"
              priority
            />
          </div>

          {/* Headshot plate */}
          <div className="relative mx-auto w-[350px] md:w-[420px]">
            {/* glass plate behind image */}
            <div className="absolute -inset-4 rounded-[28px] bg-white/[0.04] ring-1 ring-inset ring-white/10 backdrop-blur-md shadow-[0_24px_90px_rgba(0,0,0,0.55)]" />

            <Image
              src="/images/homepage-images/paige-headshot.png"
              alt="Paige Sylvan headshot"
              width={500}
              height={420}
              className="relative rounded-3xl object-cover w-full"
              priority
              sizes="(min-width: 768px) 420px, 350px"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <PaigeOutlineTrace />
            </div>

            {/* shadow “base” */}
            <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-6 rounded-full bg-black/70 blur-lg" />
          </div>

          {/* About block */}
          <div className="max-w-[560px] mx-auto flex flex-col items-center gap-4 mt-10">
            <p className="text-center text-[11px] tracking-[0.22em] text-white/60">
              ABOUT ME
            </p>

            <h1
              id="hero-title"
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.01em]"
            >
              Product Designer & UX/UI Developer
            </h1>

            <p className="text-white/80 text-[12px] md:text-[13px] leading-snug">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-2 flex flex-col sm:flex-row items-center gap-3">
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

              <Link
                href="/#case-studies"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[13px]
                           text-white/85 border border-white/10 bg-white/[0.04]
                           hover:bg-white/[0.08] transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

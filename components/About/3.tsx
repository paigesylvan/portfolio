"use client";

import Link from "next/link";

export default function AboutFinalSection() {
  const shouldOpenInNewTab = (href: string) =>
    href.startsWith("http") || href.toLowerCase().endsWith(".pdf") || href.startsWith("/");

  return (
    <section className="relative isolate w-full overflow-hidden text-white">
      {/* Background hues */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none opacity-55"
        style={{
          background: [
            "radial-gradient(1400px 720px at 52% 105%, rgba(70,70,160,0.34) 0%, rgba(70,70,160,0.20) 40%, rgba(70,70,160,0.06) 68%, rgba(70,70,160,0) 90%)",
            "radial-gradient(1200px 620px at 103% 102%, rgba(0,196,255,0.34) 0%, rgba(0,196,255,0.16) 42%, rgba(0,196,255,0.06) 68%, rgba(0,196,255,0) 88%)",
            "radial-gradient(1100px 600px at 86% 96%, rgba(0,210,190,0.28) 0%, rgba(0,210,190,0.14) 44%, rgba(0,0,0,0) 90%)",
            "radial-gradient(1200px 620px at -6% 104%, rgba(170,90,255,0.28) 0%, rgba(170,90,255,0.14) 44%, rgba(170,90,255,0.05) 70%, rgba(0,0,0,0) 90%)",
          ].join(", "),
          mixBlendMode: "screen",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0) 72%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.55) 48%, rgba(0,0,0,0) 72%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 mt-12 lg:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Left Text */}
          <div className="md:col-span-7">
            <h3 className="text-[11px] tracking-[0.25em] text-white/60">CURRENTLY SEEKING</h3>
            <p className="mt-3 text-white/90 text-lg md:text-xl leading-relaxed max-w-[640px] lg:ml-0">
            Currently seeking a Web & Digital Designer role where I can design and build customer-facing websites and digital tools in a collaborative, execution-focused environment.
            </p>
          </div>

          {/* Right Icons */}
          <div className="md:col-span-5 flex justify-center md:justify-end pb-12 lg:py-36">
            <ul className="flex flex-wrap md:flex-nowrap gap-6 md:gap-7">
              {[
                { label: "Resume",  href: "/images/about-images/Paige-Sylvan.pdf", icon: "file" },
                { label: "LinkedIn", href: "https://linkedin.com/in/paige-sylvan", icon: "linkedin" },
                { label: "GitHub",   href: "https://github.com/paigesylvan",     icon: "github" },
                { label: "Email",    href: "mailto:paigesylvan@gmail.com",       icon: "mail" },
                { label: "Phone",    href: "tel:262-470-9943",                   icon: "phone" },
              ].map(({ label, href, icon }) => {
                const openBlank = shouldOpenInNewTab(href) && !href.startsWith("mailto:") && !href.startsWith("tel:");
                return (
                  <li key={label} className="relative group">
                    <Link
                      href={href}
                      target={openBlank ? "_blank" : undefined}
                      rel={openBlank ? "noopener noreferrer" : undefined}
                      aria-label={label}
                      className="grid place-items-center w-12 h-12 rounded-full border border-white/15 
                                 bg-white/[0.06] backdrop-blur ring-1 ring-inset ring-white/10
                                 transition-all duration-300 hover:scale-110 hover:-translate-y-1
                                 hover:bg-white/[0.14] focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      {icon === "file" && (
                        <svg
                          width="22" height="22" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
                          className="transition-transform duration-300 group-hover:-rotate-3"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                      )}
                      {icon === "linkedin" && (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"
                             className="transition-transform duration-300 group-hover:-rotate-3">
                          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.07 0 4.82 2.68 4.82 6.17V24h-4v-8.4c0-2 0-4.57-2.78-4.57-2.78 0-3.21 2.17-3.21 4.42V24h-4V8z"/>
                        </svg>
                      )}
                      {icon === "github" && (
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"
                             className="transition-transform duration-300 group-hover:-rotate-3">
                          <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53v-1.85c-3.05.66-3.69-1.3-3.69-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.07-.66.07-.66 1.09.08 1.66 1.12 1.66 1.12.98 1.67 2.57 1.19 3.2.91.1-.71.39-1.19.71-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.12-2.95-.11-.27-.49-1.37.11-2.86 0 0 .92-.3 3.01 1.13a10.5 10.5 0 0 1 5.48 0c2.09-1.43 3.01-1.13 3.01-1.13.6 1.49.22 2.59.11 2.86.69.77 1.12 1.75 1.12 2.95 0 4.22-2.57 5.14-5.02 5.41.4.34.76 1.02.76 2.07v3.06c0 .29.2.64.76.53A10.51 10.51 0 0 0 23 11.5C23 5.24 18.27.5 12 .5z"/>
                        </svg>
                      )}
                      {icon === "mail" && (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
                             className="transition-transform duration-300 group-hover:-rotate-3">
                          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                          <path d="m22 6-10 7L2 6" />
                        </svg>
                      )}
                      {icon === "phone" && (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
                             className="transition-transform duration-300 group-hover:-rotate-3">
                          <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.86.33 1.7.63 2.5a2 2 0 0 1-.45 2.11L7.1 9.9a16 16 0 0 0 6 6l1.57-1.14a2 2 0 0 1 2.11-.45c.8.3 1.64.51 2.5.63A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      )}
                    </Link>

                    {/* Label under icon */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-white/70 opacity-0 
                                     translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

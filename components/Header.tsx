// components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 lg:top-10 z-50">
      <div className="mx-auto w-[92%] md:w-[85%]">
        <div className="flex items-center justify-between rounded-full ring-1 lg:ring-3 ring-slate-50 bg-black/10 backdrop-blur-sm px-5 py-1 lg:py-3  lg:px-12">
          {/* Brand */}
          <Link
            href="/"
            className="text-white font-semibold tracking-wide lg:text-3xl"
          >
            PS
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm lg:text-md text-white/90">
            {/* ✅ This now navigates properly to the homepage & scrolls */}
            <Link
              href="/#case-studies"
              className="uppercase tracking-[0.18em]"
            >
              Case Studies
            </Link>
            <Link
              href="/experience"
              className="uppercase tracking-[0.18em]"
            >
              Experience
            </Link>
            <Link
              href="/about"
              className="uppercase tracking-[0.18em]"
            >
              About Me
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-7 w-7 items-center justify-center "
          >
            <span className="sr-only">Open menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide-in mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop (click to close) */}
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 md:hidden bg-black/30"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed right-0 top-0 z-50 h-screen w-full sm:w-[420px] bg-white text-black flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            >
              {/* Close header */}
              <div className="flex items-center justify-between px-6 py-5">
                <span className="text-sm font-semibold tracking-wide">MENU</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile nav links */}
              <nav className="mt-3 px-6">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/#case-studies"
                      onClick={() => setOpen(false)}
                      className="block py-2 text-xl font-semibold uppercase tracking-[0.25em]"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experience"
                      onClick={() => setOpen(false)}
                      className="block py-2 text-xl font-semibold uppercase tracking-[0.25em]"
                    >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={() => setOpen(false)}
                      className="block py-2 text-xl font-semibold uppercase tracking-[0.25em]"
                    >
                      About Me
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Footer */}
              <div className="mt-auto px-6 pb-8 text-xs text-black/60">
                © {new Date().getFullYear()} Paige Sylvan
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

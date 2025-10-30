import "./globals.css";
import Header from "../../components/Header";
import Cursor from "../../components/cursor";

export const metadata = {
  title: "Paige Sylvan",
  description: "Paige Sylvan's Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      {/* NOTE: no cursor-none on <html> or <body> for mobile */}
      <body className="h-full bg-black text-white antialiased overflow-x-hidden">
        {/* Hide cursor component on touch devices; never capture pointer events */}
        <div className="hidden md:block">
          <Cursor />
        </div>

        <Header />

        {/* Main MUST be scrollable and allow touch panning */}
        <main className="min-h-[100svh] touch-pan-y">
          {children}
        </main>
      </body>
    </html>
  );
}

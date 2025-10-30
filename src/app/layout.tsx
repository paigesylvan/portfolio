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
  viewportFit: "cover", // allows content to extend under Safari bars
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Makes Safari & Android dark UI tint */}
        <meta name="theme-color" content="#000000" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>

      <body className="h-full bg-black text-white antialiased overflow-x-hidden">
        {/* Underlay ensures full black under top/bottom Safari bars */}
        <div className="fixed inset-0 -z-50 bg-black pointer-events-none" />

        {/* Custom Cursor (desktop only) */}
        <div className="hidden md:block">
          <Cursor />
        </div>

        {/* Header with safe-area padding so it doesn’t overlap status bar */}
        <div className="pt-safe">
          <Header />
        </div>

        {/* Main content with dynamic viewport height fix */}
        <main className="min-h-screen-fix pb-safe">{children}</main>
      </body>
    </html>
  );
}

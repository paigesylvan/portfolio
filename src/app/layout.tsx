// app/layout.tsx
import "./globals.css";
import Header from "../../components/Header";
import Cursor from "../../components/cursor";

export const metadata = {
  title: "Paige Sylvan",
  description: "Paige Sylvan's Portfolio",
};

// ✅ Move viewport here (not inside metadata)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // important for iOS safe areas
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="cursor-none h-full">
      <body className="h-full min-h-[100svh] bg-black text-white cursor-none antialiased overflow-x-hidden">
        <Cursor />
        <Header />
        {/* Optional: wrap pages in a main with safe-area padding */}
        <main className="min-h-[100svh] pt-safe pb-safe">
          {children}
        </main>
      </body>
    </html>
  );
}

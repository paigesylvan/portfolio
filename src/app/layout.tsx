import "./globals.css";
import Header from "../../components/Header";
import Cursor from "../../components/cursor";
import Script from "next/script";

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
    <html lang="en" className="h-100vh">
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <div className="hidden md:block">
          <Cursor />
        </div>

        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

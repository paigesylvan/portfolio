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
    <html lang="en" className="">
      <body className=" bg-black text-white antialiased overflow-x-hidden">
        <div className="hidden md:block">
          <Cursor />
        </div>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

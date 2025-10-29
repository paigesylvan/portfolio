import "./globals.css";
import Header from "../../components/Header";
import Cursor from "../../components/cursor";
export const metadata = {
  title: "Paige Sylvan",
  description: "Paige Sylvan's Portfolio",
  viewport: "width=device-width, initial-scale=1", 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en" className="cursor-none">
      <body className="bg-black text-white cursor-none antialiased">
      <Cursor />
        <Header />
        
        {children}
      </body>
    </html>
  );
}

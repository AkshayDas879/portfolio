import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio | Sweden", // Updated for SEO
  description: "Portfolio of a Next.js developer based in Sweden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <div className="flex flex-col min-h-screen">

          {/* Nav: Full width border, centered content */}
          <nav className="border-b border-gray-100 py-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 w-full">
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
              <div className="font-bold text-xl tracking-tighter uppercase">AKSHAY DAS A S</div>
              <ul className="flex gap-6 text-sm font-medium text-slate-600">
                <li><a href="#work" className="hover:text-black transition">Work</a></li>
                <li><a href="#about" className="hover:text-black transition">About</a></li>
                <li><a href="#contact" className="hover:text-black transition">Contact</a></li>
              </ul>
            </div>
          </nav>

          {/* Main: Removed pt-20 to prevent double-spacing with Hero */}
          <main className="flex-grow max-w-5xl mx-auto w-full px-6">
            {children}
          </main>

          {/* Footer: Standard layout */}
          <footer className="border-t border-gray-100 py-12">
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-slate-400 uppercase tracking-widest">
              <p>© 2026 — Stockholm, SE</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/akshay-das-a-s-144530143/" className="hover:text-black transition">LinkedIn</a>
                <a href="https://github.com/AkshayDas879" className="hover:text-black transition">GitHub</a>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}

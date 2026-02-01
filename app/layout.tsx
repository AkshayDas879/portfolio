import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import portfolioData from "./portfolio.json";
import { PortfolioData } from "./types";

export async function generateMetadata() {
  const data = portfolioData as PortfolioData;
  return {
    metadataBase: new URL(data.seo.url),
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      title: data.seo.openGraph.title,
      description: data.seo.openGraph.description,
      images: data.seo.openGraph.images,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = portfolioData as PortfolioData;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        {data.seo.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${data.seo.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${data.seo.gaId}');
              `}
            </Script>
          </>
        )}
        <div className="flex flex-col min-h-screen">

          {/* Nav: Full width border, centered content */}
          <nav className="border-b border-gray-100 py-6 sticky top-0 bg-white/90 backdrop-blur-md z-50 w-full">
            <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
              <div className="font-bold text-xl tracking-tighter uppercase">{data.personal.name}</div>
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
              <p>© {new Date().getFullYear()} — {data.personal.location}</p>
              <div className="flex gap-4">
                <a href={data.contact.linkedin} className="hover:text-black transition">LinkedIn</a>
                <a href={data.personal.github} className="hover:text-black transition">GitHub</a>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}

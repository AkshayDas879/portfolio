import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./context/theme-context";
import { ThemeToggle } from "./components/theme-toggle";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300`}>
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
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">

            {/* Nav: Full width border, centered content */}
            <nav className="border-b border-gray-100 dark:border-slate-800 py-6 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 w-full transition-colors duration-300">
              <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
                <div className="font-bold text-xl tracking-tighter uppercase">{data.personal.name}</div>
                <div className="flex items-center gap-6">
                  <ul className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <li><a href="#work" className="hover:text-black dark:hover:text-white transition">Work</a></li>
                    <li><a href="#about" className="hover:text-black dark:hover:text-white transition">About</a></li>
                    <li><a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a></li>
                  </ul>
                  <ThemeToggle />
                </div>
              </div>
            </nav>

            {/* Main: Removed pt-20 to prevent double-spacing with Hero */}
            <main className="flex-grow max-w-5xl mx-auto w-full px-6">
              {children}
            </main>

            {/* Footer: Standard layout */}
            <footer className="border-t border-gray-100 dark:border-slate-800 py-12 transition-colors duration-300">
              <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-slate-400 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} — {data.personal.location}</p>
                <div className="flex gap-4">
                  <a href={data.contact.linkedin} className="hover:text-black dark:hover:text-white transition">LinkedIn</a>
                  <a href={data.personal.github} className="hover:text-black dark:hover:text-white transition">GitHub</a>
                </div>
              </div>
            </footer>

          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./styles/globals.css";
import { ThemeProvider } from "./context/theme-context";
import { ThemeToggle } from "./components/theme-toggle";
import { GSAPProvider } from "./components/animations";
import { SmoothScroll } from "./components/smooth-scroll";
import { CustomCursor } from "./components/custom-cursor";
import portfolioData from "./data/portfolio.json";
import { PortfolioData } from "./lib/types";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export async function generateMetadata() {
  const data = portfolioData as PortfolioData;
  return {
    metadataBase: new URL(data.seo.url),
    title: {
      default: data.seo.title,
      template: `%s | ${data.personal.name}`,
    },
    description: data.seo.description,
    keywords: data.about.values.concat(data.about.techStack.core.split(", ")),
    authors: [{ name: data.personal.name, url: data.personal.github }],
    creator: data.personal.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: data.seo.url,
      title: data.seo.openGraph.title,
      description: data.seo.openGraph.description,
      siteName: data.seo.title,
      images: [
        {
          url: data.seo.openGraph.images,
          width: 1200,
          height: 630,
          alt: data.personal.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.openGraph.title,
      description: data.seo.openGraph.description,
      images: [data.seo.openGraph.images],
      creator: "@AkshayDas879",
    },
    manifest: "/manifest.webmanifest",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = portfolioData as PortfolioData;

  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300`}>
        <CustomCursor />
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
        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.personal.name,
            url: data.seo.url,
            image: `${data.seo.url}${data.seo.openGraph.images}`,
            sameAs: [
              data.contact.linkedin,
              data.personal.github,
            ],
            jobTitle: "Senior Frontend Developer",
            worksFor: {
              "@type": "Organization",
              name: "Tata Consultancy Services",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Stockholm",
              addressCountry: "SE",
            },
          })}
        </Script>
        
        <SmoothScroll>
          <ThemeProvider>
            <GSAPProvider>
              <div className="flex flex-col min-h-screen">
                <nav className="border-b border-gray-100 dark:border-slate-800 py-6 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 w-full transition-colors duration-300">
                  <div className="max-w-5xl mx-auto px-6 flex justify-between items-center w-full">
                    <div className="font-bold text-xl tracking-tighter uppercase">{data.personal.name}</div>
                    <div className="flex items-center gap-6">
                      <ul className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <li><a href="#work" className="hover:text-black dark:hover:text-white transition cursor-hover">Work</a></li>
                        <li><a href="#about" className="hover:text-black dark:hover:text-white transition cursor-hover">About</a></li>
                        <li><a href="#contact" className="hover:text-black dark:hover:text-white transition cursor-hover">Contact</a></li>
                      </ul>
                      <ThemeToggle />
                    </div>
                  </div>
                </nav>

                <main className="flex-grow w-full relative z-10 bg-white dark:bg-slate-950">
                  {children}
                </main>

                <footer className="border-t border-gray-100 dark:border-slate-800 py-12 transition-colors duration-300 bg-white dark:bg-slate-950 relative z-0">
                  <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-slate-400 uppercase tracking-widest w-full">
                    <p>© {new Date().getFullYear()} — {data.personal.location}</p>
                    <div className="flex gap-4">
                      <a href={data.contact.linkedin} className="hover:text-black dark:hover:text-white transition cursor-hover">LinkedIn</a>
                      <a href={data.personal.github} className="hover:text-black dark:hover:text-white transition cursor-hover">GitHub</a>
                    </div>
                  </div>
                </footer>
              </div>
            </GSAPProvider>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

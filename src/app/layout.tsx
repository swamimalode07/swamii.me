import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Swami Malode",
  description: "Swami's Portfolio site.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Swami Malode",
  ],
  openGraph: {
    title: "Swami's Portfolio",
    description: "Swami's Portfolio site.",
    url: "https://swamii.me",
    siteName: "Swami's Portfolio site",
    images: [
      {
        url: "https://swamii.me/official/opengraphh.jpg",
        width: 1200,
        height: 630,
        alt: "My OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swami's Portfolio",
    description: "This is my portfolio.",
    images: ["https://swamii.me/official/opengraphh.jpg"],
    creator: "@SwamiMalode",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          data-website-id="dfid_wVN5yIAv7uo506eTbSUQ5"
          data-domain="swamii.me"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <link rel="canonical" href="https://swamii.me" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Swami Malode",
              url: "https://swamii.me",
              sameAs: [
                "https://github.com/swamimalode07",
                "https://linkedin.com/in/swamimalode",
                "https://x.com/swamimalode",
              ],
              jobTitle: "Frontend Developer & UI/UX Designer",
              image: "https://swamii.me/opengraphh.jpg",
            }),
          }}
        />
      </head>

      <link rel="icon" href="/logo.ico" />

      <body className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} antialiased`}>
        <TooltipProvider>
             {children}
        </TooltipProvider>
        <Analytics />
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}

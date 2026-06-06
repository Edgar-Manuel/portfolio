import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://edgarmanchon.com";
const title = "Edgar Manchón — AI Systems Builder & Web Developer";
const description =
  "Construyo aplicaciones web, automatizaciones y agentes de IA que transforman ideas en sistemas reales. AI Systems Builder, Automation Engineer y SaaS Builder.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Edgar Manchón",
  },
  description,
  keywords: [
    "Edgar Manchón",
    "AI Systems Builder",
    "Web Developer",
    "Automation Engineer",
    "SaaS Builder",
    "AI Agent Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "OpenAI",
    "Automatización",
    "Inteligencia Artificial",
  ],
  authors: [{ name: "Edgar Manchón", url: siteUrl }],
  creator: "Edgar Manchón",
  publisher: "Edgar Manchón",
  applicationName: "Edgar Manchón Portfolio",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title,
    description,
    siteName: "Edgar Manchón",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Edgar Manchón — AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@EdgarManuel",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edgar Manchón",
  url: siteUrl,
  jobTitle: "AI Systems Builder",
  description,
  sameAs: [
    "https://github.com/Edgar-Manuel",
    "https://linkedin.com/in/edgarmanchon",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Web Development",
    "Automation",
    "SaaS",
    "AI Agents",
    "Next.js",
    "TypeScript",
    "Python",
    "OpenAI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}

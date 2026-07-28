import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://edgarmanchon.com";
const title = "Edgar Manchón — Python Backend & AI Developer";
const description =
  "Desarrollador Python backend e IA. Construyo APIs, sistemas RAG, integraciones LLM, agentes y automatizaciones con FastAPI, PostgreSQL y TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Edgar Manchón",
  },
  description,
  keywords: [
    "Edgar Manchón",
    "Python Backend Developer",
    "AI Integration Engineer",
    "RAG Developer",
    "AI Automation Engineer",
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
        alt: "Edgar Manchón — Python Backend & AI Developer",
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
   jobTitle: "Python Backend & AI Developer",
  description,
  sameAs: [
    "https://github.com/Edgar-Manuel",
    "https://linkedin.com/in/edgarmanchon",
  ],
  knowsAbout: [
    "Artificial Intelligence",
     "Backend Development",
     "FastAPI",
     "RAG",
     "LLM Integrations",
     "Automation",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
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

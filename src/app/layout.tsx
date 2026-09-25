import type { Metadata } from "next";
import "./globals.css";
import DeveloperCreditWidget from "./components/DeveloperCreditWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://abduandhiba.vercel.app"),
  title: "Abdulla & Hiba Fathima | Wedding Invitation",
  description: "Wedding of Abdulla & Hiba Fathima — Sunday, September 27, 2026 · Pookolathur Mahallu Auditorium, Pulpatta",
  openGraph: {
    title: "Abdulla & Hiba Fathima | Wedding Invitation",
    description: "Wedding of Abdulla & Hiba Fathima — Sunday, September 27, 2026 · Pookolathur Mahallu Auditorium, Pulpatta",
    url: "https://abduandhiba.vercel.app",
    siteName: "Abdulla & Hiba Fathima Wedding",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Abdulla & Hiba Fathima Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulla & Hiba Fathima | Wedding Invitation",
    description: "Wedding of Abdulla & Hiba Fathima — Sunday, September 27, 2026 · Pookolathur Mahallu Auditorium, Pulpatta",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico?v=2" },
      { url: "/icon-192.png?v=2", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex justify-center items-start overflow-x-hidden font-sans"
        style={{ background: 'var(--ivory)', color: 'var(--text-primary)' }}
      >
        {children}
        <DeveloperCreditWidget />
      </body>
    </html>
  );
}

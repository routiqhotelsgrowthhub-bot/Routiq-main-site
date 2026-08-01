import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.routiq.co.in"),

  title: {
    default: "ROUTIQ | Hotel Growth Hub",
    template: "%s | ROUTIQ",
  },

  description:
    "ROUTIQ helps hotels increase direct bookings through hotel websites, CRM, digital marketing, automation, and revenue growth solutions.",

  keywords: [
    "ROUTIQ",
    "Hotel Growth",
    "Hotel Marketing",
    "Hotel CRM",
    "Hotel Website",
    "Hotel Digital Marketing",
    "Hotel Revenue Growth",
  ],

  applicationName: "ROUTIQ",

  verification: {
    google: "4z2DABOC4JKa7vGRYssLkI0V5Le1A5il9P2W3mWxf8k",
  },

  openGraph: {
    title: "ROUTIQ | Hotel Growth Hub",
    description:
      "Helping hotels increase direct bookings with websites, CRM, digital marketing, automation and revenue growth.",
    url: "https://www.routiq.co.in",
    siteName: "ROUTIQ",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ROUTIQ | Hotel Growth Hub",
    description:
      "Helping hotels increase direct bookings with websites, CRM, digital marketing and automation.",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ROUTIQ",
    alternateName: "ROUTIQ Hotel Growth Hub",
    url: "https://www.routiq.co.in",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
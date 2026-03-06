import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "P&R Workforce LLC | Electrical Staffing in Goldsboro, Raleigh & Wilmington NC",
    template: "%s | P&R Workforce LLC",
  },

  description:
    "P&R Workforce LLC is a reliable electrical staffing company based in Goldsboro, NC serving Raleigh, Wilmington, and surrounding North Carolina areas. Built in reliability, Driven by Quality.",

  keywords: [
    "electrical staffing",
    "electrician staffing",
    "construction staffing",
    "electrical workforce",
    "staffing agency North Carolina",
    "electrician jobs North Carolina",
    "Goldsboro staffing",
    "Raleigh electrician staffing",
    "Wilmington NC staffing",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },

  openGraph: {
    title: "P&R Workforce LLC | Electrical Staffing in North Carolina",
    description:
      "Reliable electrical staffing for Raleigh, Goldsboro, Wilmington, and surrounding North Carolina areas.",
    url: SITE_URL,
    siteName: "P&R Workforce LLC",
    images: [
      {
        url: "/images/workforce.png",
        width: 1200,
        height: 630,
        alt: "P&R Workforce Electrical Staffing",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "P&R Workforce LLC | Electrical Staffing in North Carolina",
    description:
      "Reliable electrical staffing for Raleigh, Goldsboro, Wilmington, and surrounding North Carolina areas.",
    images: ["/images/workforce.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
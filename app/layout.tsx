import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "360 Harmony Hub | A Space Where Science Meets Soul",
  description:
    "Discover balance through The Yin Yang Newsletter — exploring harmony between Yin (Sacred Feminine) and Yang (Sacred Masculine).",
  openGraph: {
    title: "360 Harmony Hub | A Space Where Science Meets Soul",
    description:
      "Explore the balance between Yin and Yang across celestial insights, wellness, and abundance.",
    url: "https://360harmonyhub.netlify.app",
    siteName: "360 Harmony Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "360 Harmony Hub — Balance Between Yin and Yang",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "360 Harmony Hub | A Space Where Science Meets Soul",
    description:
      "A mindful digital sanctuary for the modern, spiritually aware human.",
    images: ["/og-image.jpg"],
    creator: "@360HarmonyHub",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[#f9f5e6] to-[#e6d3b1] text-[#1c1b2b]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

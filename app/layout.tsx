import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aldervane.law"),
  title: {
    default: "Aldervane — Clear counsel for complex decisions",
    template: "%s — Aldervane",
  },
  description:
    "Strategic legal representation for businesses, institutions and individuals navigating high-stakes matters.",
  openGraph: {
    type: "website",
    siteName: "Aldervane",
    title: "Aldervane — Clear counsel for complex decisions",
    description:
      "Strategic legal representation for businesses, institutions and individuals navigating high-stakes matters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldervane — Clear counsel for complex decisions",
    description:
      "Strategic legal representation for businesses, institutions and individuals navigating high-stakes matters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

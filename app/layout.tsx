import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Hlestakov James — Founder · Technology Leader · Digital Product Builder",
    template: "%s — Hlestakov James",
  },
  description:
    "The professional platform of Hlestakov James — exploring leadership, technology, digital products, organizations, and ideas.",
  keywords: [
    "Hlestakov James",
    "technology leader",
    "digital product builder",
    "software development",
    "leadership",
    "digital products",
    "technology",
  ],
  authors: [{ name: "Hlestakov James" }],
  creator: "Hlestakov James",
  openGraph: {
    title:
      "Hlestakov James — Founder · Technology Leader · Digital Product Builder",
    description:
      "Leadership, technology, digital products, organizations, and ideas.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

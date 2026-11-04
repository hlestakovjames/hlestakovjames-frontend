import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Hlestakov James | Technologist, Entrepreneur & Systems Thinker",
    template: "%s | Hlestakov James",
  },
  description:
    "The professional portfolio of Hlestakov James — technology, software development, entrepreneurship, digital products and systems thinking.",
  keywords: [
    "Hlestakov James",
    "software development",
    "technology",
    "digital products",
    "entrepreneurship",
    "systems thinking",
    "Nexus Hub",
  ],
  authors: [{ name: "Hlestakov James" }],
  creator: "Hlestakov James",
  openGraph: {
    title: "Hlestakov James | Technologist, Entrepreneur & Systems Thinker",
    description:
      "Building technology, developing ventures and exploring how systems can solve real-world problems.",
    type: "website",
    locale: "en_KE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

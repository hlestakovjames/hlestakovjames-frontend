import type { ReactNode } from "react";
import AboutNavigation from "@/components/about/AboutNavigation";
import Footer from "@/components/layout/Footer";
import UtilityHeader from "@/components/layout/UtilityHeader";

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <UtilityHeader />

      <AboutNavigation />

      {children}

      <Footer />
    </div>
  );
}

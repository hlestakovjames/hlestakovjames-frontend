import type { ReactNode } from "react";
import Footer from "./Footer";
import SiteNavigation from "@/components/navigation/SiteNavigation";
import UtilityHeader from "./UtilityHeader";

type PublicSiteShellProps = {
  children: ReactNode;
  sectionNavigation?: ReactNode;
};

export default function PublicSiteShell({
  children,
  sectionNavigation,
}: PublicSiteShellProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <UtilityHeader />

      {sectionNavigation ?? <SiteNavigation />}

      {children}

      <Footer />
    </div>
  );
}

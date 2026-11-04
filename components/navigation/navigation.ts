export type NavigationItem = { label: string; href: string };
export type SectionNavigation = { title: string; basePath: string; items: NavigationItem[] };

export const globalNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Ventures", href: "/ventures" },
  { label: "Insights", href: "/insights" },
];

export const sectionNavigation: SectionNavigation[] = [
  { title: "About", basePath: "/about", items: [{ label: "Overview", href: "/about" }, { label: "My Story", href: "/about/my-story" }, { label: "Vision & Values", href: "/about/vision-values" }, { label: "How I Work", href: "/about/how-i-work" }] },
  { title: "Work", basePath: "/work", items: [{ label: "Overview", href: "/work" }, { label: "Projects", href: "/work#projects" }, { label: "Case Studies", href: "/work#case-studies" }] },
  { title: "Experience", basePath: "/experience", items: [{ label: "Overview", href: "/experience" }, { label: "Professional Journey", href: "/experience#journey" }, { label: "Education", href: "/experience#education" }] },
  { title: "Capabilities", basePath: "/capabilities", items: [{ label: "Overview", href: "/capabilities" }, { label: "Technology", href: "/capabilities#technology" }, { label: "Leadership", href: "/capabilities#leadership" }, { label: "Business", href: "/capabilities#business" }] },
  { title: "Ventures", basePath: "/ventures", items: [{ label: "Overview", href: "/ventures" }, { label: "Nexus Hub", href: "/ventures#nexus-hub" }, { label: "Products", href: "/ventures#products" }] },
  { title: "Insights", basePath: "/insights", items: [{ label: "Overview", href: "/insights" }, { label: "Systems Thinking", href: "/insights#systems-thinking" }, { label: "Technology", href: "/insights#technology" }] },
];

export function getSectionNavigation(pathname: string) {
  return sectionNavigation.find((section) => pathname === section.basePath || pathname.startsWith(`${section.basePath}/`));
}

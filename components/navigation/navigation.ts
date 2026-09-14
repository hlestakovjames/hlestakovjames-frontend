export type NavigationItem = {
  label: string;
  href: string;
};

export type SectionNavigation = {
  title: string;
  basePath: string;
  items: NavigationItem[];
};

export const globalNavigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Now", href: "/now" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const sectionNavigation: SectionNavigation[] = [
  {
    title: "About",
    basePath: "/about",
    items: [
      { label: "Overview", href: "/about" },
      { label: "My Story", href: "/about/story" },
      { label: "Vision & Values", href: "/about/vision-values" },
      { label: "How I Work", href: "/about/how-i-work" },
    ],
  },
  {
    title: "Leadership",
    basePath: "/leadership",
    items: [
      { label: "Overview", href: "/leadership" },
      { label: "Organizations", href: "/leadership/organizations" },
      { label: "Initiatives", href: "/leadership/initiatives" },
      { label: "Leadership Philosophy", href: "/leadership/philosophy" },
    ],
  },
  {
    title: "Work",
    basePath: "/work",
    items: [
      { label: "Overview", href: "/work" },
      { label: "Projects", href: "/work/projects" },
      { label: "Case Studies", href: "/work/case-studies" },
    ],
  },
  {
    title: "Experience",
    basePath: "/experience",
    items: [
      { label: "Overview", href: "/experience" },
      { label: "Professional Journey", href: "/experience/journey" },
      { label: "Leadership Experience", href: "/experience/leadership" },
      { label: "Achievements", href: "/experience/achievements" },
    ],
  },
  {
    title: "Skills",
    basePath: "/skills",
    items: [
      { label: "Overview", href: "/skills" },
      { label: "Technology", href: "/skills/technology" },
      { label: "Leadership", href: "/skills/leadership" },
      { label: "Business", href: "/skills/business" },
      { label: "Creative", href: "/skills/creative" },
    ],
  },
  {
    title: "Services",
    basePath: "/services",
    items: [
      { label: "Overview", href: "/services" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Backend & APIs", href: "/services/backend-apis" },
      { label: "Business Systems", href: "/services/business-systems" },
      { label: "Digital Products", href: "/services/digital-products" },
      { label: "Technical Consulting", href: "/services/technical-consulting" },
      { label: "Strategy", href: "/services/strategy" },
    ],
  },
  {
    title: "Blog",
    basePath: "/blog",
    items: [
      { label: "Home", href: "/blog" },
      { label: "Technology", href: "/blog/technology" },
      { label: "Leadership", href: "/blog/leadership" },
      { label: "Entrepreneurship", href: "/blog/entrepreneurship" },
      { label: "Organizations", href: "/blog/organizations" },
      { label: "Building in Public", href: "/blog/building-in-public" },
    ],
  },
  {
    title: "Now",
    basePath: "/now",
    items: [
      { label: "Current Work", href: "/now/current-work" },
      { label: "Learning", href: "/now/learning" },
      { label: "Exploring", href: "/now/exploring" },
      { label: "What's Next", href: "/now/whats-next" },
    ],
  },
  {
    title: "Resume",
    basePath: "/resume",
    items: [
      { label: "Overview", href: "/resume" },
      { label: "Experience", href: "/resume/experience" },
      { label: "Education", href: "/resume/education" },
      { label: "Skills", href: "/resume/skills" },
      { label: "Download", href: "/resume/download" },
    ],
  },
  {
    title: "Contact",
    basePath: "/contact",
    items: [
      { label: "Work With Me", href: "/contact/work-with-me" },
      { label: "General Inquiry", href: "/contact/general" },
      { label: "Connect", href: "/contact/connect" },
    ],
  },
];

export function getSectionNavigation(pathname: string) {
  return sectionNavigation.find(
    (section) =>
      pathname === section.basePath ||
      pathname.startsWith(`${section.basePath}/`),
  );
}

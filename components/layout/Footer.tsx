import Link from "next/link";
import HJMark from "@/components/brand/HJMark";

const links = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/experience" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Ventures", href: "/ventures" },
  { label: "Insights", href: "/insights" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4"><HJMark href="/" size="lg" /><span className="text-xs font-bold tracking-[0.16em] text-white">HLESTAKOV JAMES</span></div>
            <p className="mt-8 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
              Building useful technology. Developing ideas. Creating room for what comes next.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
              The professional portfolio of Hlestakov James — technologist, entrepreneur and systems thinker.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <p className="eyebrow text-white/40">Explore</p>
              <nav className="mt-5 flex flex-col gap-3">
                {links.map((item) => <Link key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">{item.label}</Link>)}
              </nav>
            </div>
            <div>
              <p className="eyebrow text-white/40">Connect</p>
              <nav className="mt-5 flex flex-col gap-3 text-sm">
                <a href="https://www.linkedin.com/in/hlestakovjames" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">LinkedIn ↗</a>
                <a href="https://github.com/hlestakovjames" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">GitHub ↗</a>
                <a href="https://www.instagram.com/khlestakov.james" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">Instagram ↗</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Hlestakov James. All rights reserved.</p>
          <p className="tracking-[0.15em]">TECHNOLOGY · ENTREPRENEURSHIP · SYSTEMS</p>
        </div>
      </div>
    </footer>
  );
}

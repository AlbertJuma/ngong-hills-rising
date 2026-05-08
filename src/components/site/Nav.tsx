import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#caaxton", label: "Caaxton" },
  { href: "#journey", label: "Journey" },
  { href: "#gallery", label: "Gallery" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="size-2 rounded-full bg-primary group-hover:scale-125 transition" />
          <span className="font-display text-lg tracking-widest uppercase">L&amp;R</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#support"
          className="text-xs uppercase tracking-widest px-4 py-2 border border-foreground/30 hover:border-primary hover:text-primary transition-colors"
        >
          Support
        </a>
      </div>
    </header>
  );
}


import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-text/10 bg-background/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="flex min-h-[84px] w-full items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMobileMenu}
          aria-label="ALEXONE home"
          className="group flex shrink-0 items-center gap-3"
        >
         <img
  src="/alexone-logo.jpg"
  alt="ALEXONE TECH logo"
  className="h-11 w-11 shrink-0 rounded-2xl object-contain transition-transform group-hover:scale-105"
  width={44}
  height={44}
/>

          <span className="text-xl font-black tracking-tight text-text sm:text-2xl">
            ALEXONE<span className="text-primary">TECH</span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.25em] text-text/50">
              Digital Solutions
            </span>
          </span>
        </a>

        {/* Right-side actions */}
        <div className="ml-auto flex items-center justify-end gap-4 lg:gap-5">
          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap py-4 text-lg font-semibold text-text/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-text/10 bg-card text-text transition hover:border-primary hover:text-primary"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Contact button */}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-text/10 text-text transition hover:border-primary hover:text-primary xl:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile and tablet navigation */}
      {menuOpen && (
        <div className="border-t border-text/10 bg-background px-4 pb-6 pt-4 shadow-xl sm:px-6 xl:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-semibold text-text/80 transition hover:bg-card hover:text-primary"
              >
                {link.label}
                <ArrowUpRight size={19} className="text-text/40" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
            >
              Let's Talk
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

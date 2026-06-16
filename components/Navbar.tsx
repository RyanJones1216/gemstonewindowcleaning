"use client";

import { useEffect, useState } from "react";

function GemIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon points="20,2 38,14 38,26 20,38 2,26 2,14" fill="#5B2D8E" />
      <polygon points="20,2 38,14 20,18" fill="#8B5CF6" opacity="0.8" />
      <polygon points="2,14 20,18 20,38" fill="#7DD3FC" opacity="0.7" />
      <polygon points="20,2 2,14 20,18" fill="#8B5CF6" opacity="0.5" />
      <polygon points="38,14 20,38 20,18" fill="#5B2D8E" opacity="0.6" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <GemIcon className="w-8 h-8 flex-shrink-0" />
          <span
            className="font-display text-lg font-bold leading-tight"
            style={{
              fontFamily: "var(--font-playfair), serif",
              color: "#5B2D8E",
            }}
          >
            Gemstone Window Cleaning
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#why-us">Why Us</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "#5B2D8E" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 mb-1 transition-all"
            style={{ backgroundColor: "#5B2D8E" }}
          />
          <span
            className="block w-5 h-0.5 mb-1 transition-all"
            style={{ backgroundColor: "#5B2D8E" }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{ backgroundColor: "#5B2D8E" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          <MobileLink href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </MobileLink>
          <MobileLink href="#why-us" onClick={() => setMenuOpen(false)}>
            Why Us
          </MobileLink>
          <MobileLink href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </MobileLink>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2 rounded-full text-white text-sm font-semibold text-center"
            style={{ backgroundColor: "#5B2D8E" }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium transition-colors duration-200"
      style={{ color: "#1E293B" }}
      onMouseEnter={(e) =>
        ((e.target as HTMLElement).style.color = "#8B5CF6")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLElement).style.color = "#1E293B")
      }
    >
      {children}
    </a>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-base font-medium py-1"
      style={{ color: "#1E293B" }}
    >
      {children}
    </a>
  );
}

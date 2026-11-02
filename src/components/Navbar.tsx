
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/story" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e1d7] bg-[#faf8f3]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-serif text-2xl font-semibold tracking-tight text-[#34251f]"
        >
          Village Hangout
          <span className="block text-[9px] font-sans uppercase tracking-[0.35em]">
            Café · JVC Dubai
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-[#59483e] transition hover:text-[#b56c4d]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/menu"
            className="hidden border border-[#59483e] px-5 py-3 text-xs uppercase tracking-widest text-[#34251f] transition hover:bg-[#34251f] hover:text-white sm:block"
          >
            Explore Menu
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-[#59483e] md:hidden"
          >
            <span className="h-px w-5 bg-[#34251f]" />
            <span className="h-px w-5 bg-[#34251f]" />
            <span className="h-px w-5 bg-[#34251f]" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#e9e1d7] bg-[#faf8f3] px-6 py-5 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#e9e1d7] py-4 text-xs uppercase tracking-[0.18em] text-[#34251f]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

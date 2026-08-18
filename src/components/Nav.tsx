"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/schedule", label: "Schedule" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-dojo-black/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Open Door Martial Arts Home"
          className="flex items-center gap-3 shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="Open Door Martial Arts"
            width={60}
            height={60}
            priority
            unoptimized
          />
          <span className="font-heading text-xl leading-tight tracking-wide hidden sm:block">
            OPEN DOOR{" "}
            <span className="text-dojo-red">MARTIAL ARTS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-semibold tracking-widest uppercase transition-colors rounded ${
                pathname === l.href
                  ? "text-dojo-red"
                  : "text-dojo-ink/90 hover:text-dojo-ink hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2 bg-dojo-red text-white font-heading text-lg tracking-widest rounded hover:bg-dojo-red-dark transition-colors"
          >
            FREE CLASS
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-dojo-ink hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-dojo-black px-6 py-5 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-heading text-3xl tracking-widest py-1 transition-colors ${
                pathname === l.href ? "text-dojo-red" : "text-dojo-ink hover:text-dojo-red"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 py-3 bg-dojo-red text-white font-heading text-3xl tracking-widest text-center rounded hover:bg-dojo-red-dark transition-colors"
          >
            FREE CLASS
          </Link>
        </div>
      )}
    </header>
  );
}

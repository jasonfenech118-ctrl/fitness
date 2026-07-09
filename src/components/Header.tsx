"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Workouts", href: "/workouts" },
  { label: "Exercises", href: "/exercises" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Community", href: "/community" },
  { label: "Plans", href: "/plans" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h4l2-6 4 12 2-6h6"
          />
        </svg>
      </div>
      <span className="font-black text-xl tracking-tight">
        Pulse<span className="text-primary">Fit</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <nav className="hidden md:flex items-center gap-1 bg-surface-dark rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium rounded-full hover:bg-surface hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="block mt-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-semibold text-center transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

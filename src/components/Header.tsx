"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Workouts",
    href: "/workouts",
    submenu: [
      { label: "Workout Plans", href: "/workouts" },
      { label: "Workout Database", href: "/workouts#database" },
      { label: "Muscle Groups", href: "/workouts#muscle-groups" },
    ],
  },
  {
    label: "Exercises",
    href: "/exercises",
    submenu: [
      { label: "Exercise Database", href: "/exercises" },
      { label: "By Muscle Group", href: "/exercises#by-muscle" },
      { label: "Exercise Videos", href: "/exercises#videos" },
    ],
  },
  {
    label: "Nutrition",
    href: "/nutrition",
    submenu: [
      { label: "Meal Plans", href: "/nutrition" },
      { label: "Recipes", href: "/nutrition#recipes" },
      { label: "Calorie Calculator", href: "/nutrition#calculator" },
      { label: "Supplements Guide", href: "/nutrition#supplements" },
    ],
  },
  {
    label: "Plans",
    href: "/plans",
  },
  {
    label: "Store",
    href: "/store",
  },
  {
    label: "Community",
    href: "/community",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-secondary text-white sticky top-0 z-50 shadow-lg">
      <div className="bg-primary text-white text-center text-sm py-1.5 font-semibold tracking-wide">
        FREE SHIPPING ON ORDERS OVER $49 | USE CODE: GAINS2026
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl">
              F
            </div>
            <div>
              <div className="font-black text-lg leading-tight tracking-tight">
                IRONFORGE
              </div>
              <div className="text-[10px] text-gray-400 tracking-widest uppercase">
                FITNESS
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors"
                >
                  {link.label}
                  {link.submenu && (
                    <svg
                      className="inline-block w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {link.submenu && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white text-gray-900 rounded-lg shadow-xl py-2 min-w-48 border border-gray-100">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 hover:text-primary transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="p-2 hover:text-primary transition-colors relative">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="#"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors"
            >
              Sign In
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        <div className="lg:hidden bg-secondary border-t border-gray-700">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 space-y-1">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block py-1 text-sm text-gray-400 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-700">
              <Link
                href="#"
                className="block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-bold text-center transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

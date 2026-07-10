import Link from "next/link";

const footerLinks = [
  { label: "Workouts", href: "/workouts" },
  { label: "Exercises", href: "/exercises" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Health", href: "/health" },
  { label: "Plans", href: "/plans" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-7 h-7 text-primary"
              viewBox="0 0 36 36"
              fill="currentColor"
            >
              <rect x="4" y="14" width="5" height="8" rx="2.5" />
              <rect x="12" y="8" width="5" height="20" rx="2.5" />
              <rect x="20" y="3" width="5" height="30" rx="2.5" />
              <rect x="28" y="11" width="5" height="14" rx="2.5" />
            </svg>
            <span className="font-black text-lg tracking-tight lowercase">
              pulse
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm text-muted">
            &copy; 2026 Pulse
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

const footerLinks = [
  { label: "Workouts", href: "/workouts" },
  { label: "Exercises", href: "/exercises" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Community", href: "/community" },
  { label: "Plans", href: "/plans" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-foreground flex items-center justify-center">
              <svg
                className="w-4 h-4 text-background"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                  opacity="0.35"
                />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-black text-lg tracking-tight lowercase">
              pulse<span className="text-primary">.</span>
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

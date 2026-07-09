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
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
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
            <span className="font-black text-lg tracking-tight">
              Pulse<span className="text-primary">Fit</span>
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
            &copy; 2026 PulseFit
          </div>
        </div>
      </div>
    </footer>
  );
}

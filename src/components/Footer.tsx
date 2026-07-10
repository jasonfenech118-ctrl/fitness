import Link from "next/link";

const sections = [
  { label: "Workouts", href: "/workouts" },
  { label: "Exercise Library", href: "/exercises" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Health", href: "/health" },
  { label: "Plans", href: "/plans" },
];

const topics = [
  { label: "Know Your Body", href: "/know-your-body" },
  { label: "Motivation", href: "/motivation" },
  { label: "Fat Loss", href: "/fat-loss" },
  { label: "Keto Diet", href: "/keto" },
  { label: "Mental Health", href: "/mental-health" },
  { label: "Men's Health", href: "/mens-health" },
  { label: "Skin Care", href: "/skin-care" },
  { label: "Custom Meals", href: "/custom-meals" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
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
            <p className="text-sm text-muted max-w-xs">
              Confidence and motivation that last — grounded in science,
              designed for real life.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3">Sections</h3>
            <ul className="space-y-2">
              {sections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3">Topics</h3>
            <ul className="grid grid-cols-2 gap-2">
              {topics.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-sm text-muted">
          &copy; 2026 Pulse
        </div>
      </div>
    </footer>
  );
}

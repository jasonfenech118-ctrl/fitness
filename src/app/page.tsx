import Link from "next/link";

const sections = [
  {
    label: "Workouts",
    href: "/workouts",
    description: "Training programs for every level and goal.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 6.5v11m11-11v11M3 9v6m18-6v6M6.5 12h11"
      />
    ),
  },
  {
    label: "Exercises",
    href: "/exercises",
    description: "Learn proper form for every movement.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    label: "Nutrition",
    href: "/nutrition",
    description: "Meal plans and recipes that fuel results.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c0-2.5 2-4.5 4.5-4.5S21 5.5 21 8c0 5-9 13-9 13S3 13 3 8c0-2.5 2-4.5 4.5-4.5S12 5.5 12 8z"
      />
    ),
  },
  {
    label: "Health",
    href: "/health",
    description: "Sleep, recovery, and everyday wellbeing.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4v16m8-8H4"
      />
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 text-sm text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our mission
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            Confidence and
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              motivation that last.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
            Our mission is to help you build the confidence and motivation to
            keep going — with training and nutrition guidance grounded in
            science and designed for real life.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/workouts"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Start Moving
            </Link>
            <Link
              href="/health"
              className="bg-surface border border-border hover:border-primary px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Explore Health
            </Link>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className="group bg-surface border border-border rounded-3xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {section.icon}
                </svg>
              </div>
              <h2 className="font-bold text-lg mb-1">{section.label}</h2>
              <p className="text-sm text-muted">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-3xl px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready when you are
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8">
            No pressure, no noise. Just a place to move, eat well, and feel
            better.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-primary hover:bg-white/90 px-8 py-3.5 rounded-full font-semibold transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

const footerLinks = [
  {
    title: "Workouts",
    links: [
      { label: "Workout Plans", href: "/workouts" },
      { label: "Exercise Database", href: "/exercises" },
      { label: "Muscle Groups", href: "/exercises#by-muscle" },
      { label: "Training Programs", href: "/plans" },
    ],
  },
  {
    title: "Nutrition",
    links: [
      { label: "Meal Plans", href: "/nutrition" },
      { label: "Recipes", href: "/nutrition#recipes" },
      { label: "Supplements", href: "/nutrition#supplements" },
      { label: "Calorie Calculator", href: "/nutrition#calculator" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Forums", href: "/community" },
      { label: "Progress Photos", href: "/community#progress" },
      { label: "Success Stories", href: "/community#stories" },
      { label: "Find a Gym", href: "/community#gyms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl">
                F
              </div>
              <div>
                <div className="font-black text-lg leading-tight">
                  IRONFORGE
                </div>
                <div className="text-[10px] text-gray-400 tracking-widest uppercase">
                  FITNESS
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Your ultimate destination for workouts, nutrition, supplements,
              and fitness community.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "youtube"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs font-bold uppercase">
                      {social[0]}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              &copy; 2026 IronForge Fitness. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-sm">Newsletter:</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary w-48"
                />
                <button className="bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-lg text-sm font-bold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { workoutPlans } from "@/data/workouts";
import { products } from "@/data/store";
import { transformations } from "@/data/community";

export default function Home() {
  const featuredWorkouts = workoutPlans.slice(0, 3);
  const featuredProducts = products.slice(0, 4);
  const featuredTransformations = transformations.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1 text-sm text-primary font-semibold mb-6">
              TRANSFORM YOUR BODY
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              BUILD YOUR
              <br />
              <span className="text-primary">BEST BODY</span>
              <br />
              EVER
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Expert workout plans, comprehensive exercise guides, personalized
              nutrition, and premium supplements — everything you need to achieve
              your fitness goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/workouts"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Start Training
              </Link>
              <Link
                href="/plans"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Browse Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2M+", label: "Active Members" },
              { value: "500+", label: "Workout Plans" },
              { value: "1,200+", label: "Exercises" },
              { value: "10K+", label: "Success Stories" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-black">
                  {stat.value}
                </div>
                <div className="text-sm text-white/80 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Workout Plans",
                desc: "Programs for every goal",
                href: "/workouts",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Exercise Database",
                desc: "1,200+ exercises with guides",
                href: "/exercises",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
              {
                title: "Nutrition Plans",
                desc: "Meal plans & recipes",
                href: "/nutrition",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                ),
              },
              {
                title: "Community",
                desc: "Join the discussion",
                href: "/community",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workout Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Featured Workout Plans
              </h2>
              <p className="text-muted mt-2">
                Expert-designed programs for every fitness level
              </p>
            </div>
            <Link
              href="/workouts"
              className="hidden md:inline-flex items-center text-primary font-bold hover:underline"
            >
              View All Plans
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredWorkouts.map((plan) => (
              <Link
                key={plan.id}
                href={`/workouts/${plan.id}`}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        plan.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : plan.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {plan.level}
                    </span>
                    <span className="text-sm text-muted">
                      {plan.daysPerWeek} days/week
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {plan.description}
                  </p>
                </div>
                <div className="p-4 flex items-center justify-between border-t border-border">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-sm font-bold">{plan.duration}</div>
                      <div className="text-xs text-muted">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">{plan.goal}</div>
                      <div className="text-xs text-muted">Goal</div>
                    </div>
                  </div>
                  <span className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                    View Plan &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Muscle Group Grid */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Train Every Muscle Group
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Explore exercises for each muscle group with detailed instructions
            and video demonstrations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Chest", exercises: "45+ exercises", gradient: "from-red-600 to-red-800" },
              { name: "Back", exercises: "52+ exercises", gradient: "from-blue-600 to-blue-800" },
              { name: "Shoulders", exercises: "38+ exercises", gradient: "from-purple-600 to-purple-800" },
              { name: "Arms", exercises: "40+ exercises", gradient: "from-green-600 to-green-800" },
              { name: "Legs", exercises: "55+ exercises", gradient: "from-orange-600 to-orange-800" },
              { name: "Core", exercises: "35+ exercises", gradient: "from-teal-600 to-teal-800" },
              { name: "Glutes", exercises: "28+ exercises", gradient: "from-pink-600 to-pink-800" },
              { name: "Full Body", exercises: "30+ exercises", gradient: "from-indigo-600 to-indigo-800" },
            ].map((group) => (
              <Link
                key={group.name}
                href="/exercises"
                className={`bg-gradient-to-br ${group.gradient} rounded-xl p-6 hover:scale-105 transition-transform`}
              >
                <h3 className="font-black text-xl mb-1">{group.name}</h3>
                <p className="text-white/70 text-sm">{group.exercises}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">Top Sellers</h2>
              <p className="text-muted mt-2">
                Premium supplements and gear trusted by athletes
              </p>
            </div>
            <Link
              href="/store"
              className="hidden md:inline-flex items-center text-primary font-bold hover:underline"
            >
              Shop All
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 relative">
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
                      {product.badge}
                    </span>
                  )}
                  <div className="w-20 h-20 mx-auto bg-white/50 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted uppercase tracking-wide mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-bold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400 text-xs">
                      {"★".repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-xs text-muted">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Transformation Stories
          </h2>
          <p className="text-muted text-center mb-10 max-w-2xl mx-auto">
            Real people, real results. Get inspired by our community&apos;s incredible
            transformations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredTransformations.map((story) => (
              <div
                key={story.id}
                className="bg-background border border-border rounded-xl overflow-hidden"
              >
                <div className="grid grid-cols-2">
                  <div className="bg-gray-300 dark:bg-gray-700 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black text-gray-500">
                        BEFORE
                      </div>
                      <div className="text-2xl font-bold text-gray-500 mt-2">
                        {story.beforeWeight}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-black text-primary">
                        AFTER
                      </div>
                      <div className="text-2xl font-bold mt-2">
                        {story.afterWeight}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {story.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold">{story.name}</div>
                      <div className="text-sm text-muted">
                        Age {story.age} | {story.duration} transformation
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-muted mb-3">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-muted">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/community"
              className="inline-flex items-center text-primary font-bold hover:underline"
            >
              View More Transformations
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join over 2 million members who have achieved their fitness goals
            with IronForge. Start your journey today — it&apos;s free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/plans"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="/workouts"
              className="bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

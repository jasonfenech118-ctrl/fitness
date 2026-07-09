import Link from "next/link";
import { workoutPlans } from "@/data/workouts";

export const metadata = {
  title: "Workout Plans | IronForge Fitness",
  description: "Browse expert-designed workout plans for every fitness level and goal.",
};

export default function WorkoutsPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Workout Plans
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Expert-designed training programs for every goal. Whether you&apos;re a
            beginner or advanced lifter, find the perfect plan to transform your
            physique.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-10">
            {["All", "Hypertrophy", "Strength", "Beginner", "Fat Loss"].map(
              (filter) => (
                <span
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-colors ${
                    filter === "All"
                      ? "bg-primary text-white"
                      : "bg-surface border border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {filter}
                </span>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workoutPlans.map((plan) => (
              <Link
                key={plan.id}
                href={`/workouts/${plan.id}`}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 min-h-[200px] flex flex-col justify-between">
                  <div>
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
                      <span className="text-xs font-semibold text-muted bg-surface-dark px-3 py-1 rounded-full">
                        {plan.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {plan.name}
                    </h2>
                    <p className="text-sm text-muted line-clamp-3">
                      {plan.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm font-bold">{plan.duration}</div>
                      <div className="text-xs text-muted">Duration</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">
                        {plan.daysPerWeek} days
                      </div>
                      <div className="text-xs text-muted">Per Week</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">{plan.split}</div>
                      <div className="text-xs text-muted">Split</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

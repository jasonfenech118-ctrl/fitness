import Link from "next/link";
import { notFound } from "next/navigation";
import { workoutPlans } from "@/data/workouts";

export function generateStaticParams() {
  return workoutPlans.map((plan) => ({ id: plan.id }));
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plan = workoutPlans.find((p) => p.id === id);

  if (!plan) {
    notFound();
  }

  return (
    <>
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/workouts"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Workout Plans
          </Link>
          <div className="flex flex-wrap items-start gap-3 mb-4">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                plan.level === "Beginner"
                  ? "bg-green-500/20 text-green-400"
                  : plan.level === "Intermediate"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {plan.level}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary">
              {plan.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">{plan.name}</h1>
          <p className="text-gray-400 text-lg max-w-3xl">{plan.description}</p>
        </div>
      </section>

      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-black text-primary">{plan.duration}</div>
              <div className="text-sm text-muted">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-primary">{plan.daysPerWeek} days</div>
              <div className="text-sm text-muted">Per Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-primary">{plan.split}</div>
              <div className="text-sm text-muted">Split Type</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-primary">{plan.goal}</div>
              <div className="text-sm text-muted">Goal</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-8">Training Schedule</h2>
          <div className="space-y-6">
            {plan.schedule.map((day) => (
              <div
                key={day.day}
                className="bg-surface border border-border rounded-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary/10 to-transparent px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-lg">
                      {day.day}
                    </span>
                    <h3 className="text-lg font-bold">{day.name}</h3>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border text-sm text-muted">
                        <th className="text-left px-6 py-3 font-semibold">Exercise</th>
                        <th className="text-center px-4 py-3 font-semibold">Sets</th>
                        <th className="text-center px-4 py-3 font-semibold">Reps</th>
                        <th className="text-center px-4 py-3 font-semibold">Rest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {day.exercises.map((exercise, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-border last:border-0 hover:bg-surface-dark transition-colors"
                        >
                          <td className="px-6 py-3 font-medium">
                            {exercise.name}
                          </td>
                          <td className="text-center px-4 py-3 font-bold text-primary">
                            {exercise.sets}
                          </td>
                          <td className="text-center px-4 py-3">
                            {exercise.reps}
                          </td>
                          <td className="text-center px-4 py-3 text-muted">
                            {exercise.rest}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white">
            <h3 className="text-2xl font-black mb-3">Ready to Start?</h3>
            <p className="text-white/80 mb-6 max-w-2xl">
              Download this workout plan, track your progress, and start building
              the body you&apos;ve always wanted. Free for all IronForge members.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-colors">
                Download PDF
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-lg font-bold transition-colors">
                Save to My Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

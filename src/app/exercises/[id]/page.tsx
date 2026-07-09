import Link from "next/link";
import { notFound } from "next/navigation";
import { exercises, getExercisesByMuscleGroup } from "@/data/exercises";

export function generateStaticParams() {
  return exercises.map((e) => ({ id: e.id }));
}

export default async function ExerciseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercise = exercises.find((e) => e.id === id);

  if (!exercise) {
    notFound();
  }

  const relatedExercises = getExercisesByMuscleGroup(exercise.muscleGroup)
    .filter((e) => e.id !== exercise.id)
    .slice(0, 3);

  return (
    <>
      <section className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/exercises"
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Exercises
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary uppercase">
              {exercise.muscleGroup}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                exercise.difficulty === "Beginner"
                  ? "bg-green-500/20 text-green-400"
                  : exercise.difficulty === "Intermediate"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {exercise.difficulty}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
              {exercise.type}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black">{exercise.name}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-muted">Exercise demonstration video</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-4">Instructions</h2>
                <ol className="space-y-3">
                  {exercise.instructions.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-4">Pro Tips</h2>
                <div className="bg-surface border border-border rounded-xl p-6 space-y-3">
                  {exercise.tips.map((tip, idx) => (
                    <div key={idx} className="flex gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Exercise Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted">Primary Muscle</span>
                    <span className="font-bold capitalize">{exercise.muscleGroup}</span>
                  </div>
                  <div className="border-t border-border" />
                  <div>
                    <span className="text-muted block mb-2">Secondary Muscles</span>
                    <div className="flex flex-wrap gap-1">
                      {exercise.secondaryMuscles.map((m) => (
                        <span key={m} className="text-xs bg-surface-dark px-2 py-1 rounded font-medium">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex justify-between">
                    <span className="text-muted">Equipment</span>
                    <span className="font-bold">{exercise.equipment}</span>
                  </div>
                  <div className="border-t border-border" />
                  <div className="flex justify-between">
                    <span className="text-muted">Type</span>
                    <span className="font-bold">{exercise.type}</span>
                  </div>
                  {exercise.sets && exercise.reps && (
                    <>
                      <div className="border-t border-border" />
                      <div className="flex justify-between">
                        <span className="text-muted">Recommended</span>
                        <span className="font-bold text-primary">
                          {exercise.sets} x {exercise.reps}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {relatedExercises.length > 0 && (
                <div className="bg-surface border border-border rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Related Exercises</h3>
                  <div className="space-y-3">
                    {relatedExercises.map((related) => (
                      <Link
                        key={related.id}
                        href={`/exercises/${related.id}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-dark transition-colors"
                      >
                        <div>
                          <div className="font-medium text-sm">
                            {related.name}
                          </div>
                          <div className="text-xs text-muted">
                            {related.difficulty} | {related.equipment}
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 text-muted"
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
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

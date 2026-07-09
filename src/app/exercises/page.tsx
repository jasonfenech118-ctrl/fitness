"use client";

import { useState } from "react";
import Link from "next/link";
import { exercises, muscleGroups } from "@/data/exercises";

export default function ExercisesPage() {
  const [selectedMuscle, setSelectedMuscle] = useState<string>("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExercises = exercises.filter((exercise) => {
    const matchesMuscle =
      selectedMuscle === "all" || exercise.muscleGroup === selectedMuscle;
    const matchesDifficulty =
      selectedDifficulty === "all" || exercise.difficulty === selectedDifficulty;
    const matchesSearch =
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.muscleGroup.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMuscle && matchesDifficulty && matchesSearch;
  });

  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Exercise Database
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Browse our comprehensive library of exercises with detailed
            instructions, tips, and recommended sets/reps.
          </p>
        </div>
      </section>

      <section id="by-muscle" className="py-10 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Browse by Muscle Group</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {muscleGroups.map((group) => (
              <button
                key={group.id}
                onClick={() =>
                  setSelectedMuscle(
                    selectedMuscle === group.id ? "all" : group.id
                  )
                }
                className={`p-3 rounded-xl text-center transition-all ${
                  selectedMuscle === group.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-background border border-border hover:border-primary"
                }`}
              >
                <div className="text-2xl mb-1">{group.icon}</div>
                <div className="text-sm font-bold">{group.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div className="flex gap-3">
              {["all", "Beginner", "Intermediate", "Advanced"].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                    selectedDifficulty === diff
                      ? "bg-primary text-white"
                      : "bg-surface border border-border hover:border-primary"
                  }`}
                >
                  {diff === "all" ? "All Levels" : diff}
                </button>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted mb-6">
            Showing {filteredExercises.length} exercises
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/exercises/${exercise.id}`}
                className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 flex items-center justify-center min-h-[140px]">
                  <svg
                    className="w-16 h-16 text-gray-300 dark:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary uppercase">
                      {exercise.muscleGroup}
                    </span>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        exercise.difficulty === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : exercise.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {exercise.difficulty}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {exercise.name}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {exercise.secondaryMuscles.slice(0, 3).map((muscle) => (
                      <span
                        key={muscle}
                        className="text-xs bg-surface-dark px-2 py-0.5 rounded"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>{exercise.equipment}</span>
                    {exercise.sets && exercise.reps && (
                      <span className="font-semibold">
                        {exercise.sets} x {exercise.reps}
                      </span>
                    )}
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

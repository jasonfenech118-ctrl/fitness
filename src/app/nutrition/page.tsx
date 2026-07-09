"use client";

import { useState } from "react";
import { mealPlans, recipes } from "@/data/nutrition";

export default function NutritionPage() {
  const [activeTab, setActiveTab] = useState<"meals" | "recipes" | "calculator">("meals");
  const [calories, setCalories] = useState<number | null>(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState("maintain");

  function calculateCalories() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!w || !h || !a) return;

    let bmr: number;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    let tdee = bmr * parseFloat(activity);
    if (goal === "lose") tdee -= 500;
    else if (goal === "gain") tdee += 500;

    setCalories(Math.round(tdee));
  }

  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Nutrition Center
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Fuel your gains with our expert meal plans, muscle-building recipes,
            and calorie calculator.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: "meals" as const, label: "Meal Plans" },
              { id: "recipes" as const, label: "Recipes" },
              { id: "calculator" as const, label: "Calorie Calculator" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {activeTab === "meals" && (
            <div className="space-y-8">
              {mealPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="bg-surface border border-border rounded-xl overflow-hidden"
                >
                  <div className="p-6 border-b border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase">
                          {plan.goal}
                        </span>
                        <h2 className="text-2xl font-black mt-1">
                          {plan.name}
                        </h2>
                        <p className="text-muted mt-2">{plan.description}</p>
                      </div>
                      <div className="flex gap-4 shrink-0">
                        <div className="text-center bg-surface-dark rounded-lg px-4 py-2">
                          <div className="text-xl font-black text-primary">
                            {plan.calories}
                          </div>
                          <div className="text-xs text-muted">Calories</div>
                        </div>
                        <div className="text-center bg-surface-dark rounded-lg px-4 py-2">
                          <div className="text-xl font-black text-blue-500">
                            {plan.protein}g
                          </div>
                          <div className="text-xs text-muted">Protein</div>
                        </div>
                        <div className="text-center bg-surface-dark rounded-lg px-4 py-2">
                          <div className="text-xl font-black text-green-500">
                            {plan.carbs}g
                          </div>
                          <div className="text-xs text-muted">Carbs</div>
                        </div>
                        <div className="text-center bg-surface-dark rounded-lg px-4 py-2">
                          <div className="text-xl font-black text-yellow-500">
                            {plan.fat}g
                          </div>
                          <div className="text-xs text-muted">Fat</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divide-y divide-border">
                    {plan.meals.map((meal) => (
                      <div key={meal.name} className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-lg">{meal.name}</h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-muted">{meal.time}</span>
                            <span className="font-bold text-primary">
                              {meal.totalCalories} cal
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {meal.foods.map((food) => (
                            <div
                              key={food.name}
                              className="bg-surface-dark rounded-lg p-3"
                            >
                              <div className="font-medium text-sm">
                                {food.name}
                              </div>
                              <div className="text-xs text-muted mt-1">
                                {food.amount}
                              </div>
                              <div className="text-xs mt-2 flex gap-2">
                                <span className="text-primary font-semibold">
                                  {food.calories} cal
                                </span>
                                <span className="text-blue-500">
                                  {food.protein}g P
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "recipes" && (
            <div id="recipes" className="grid md:grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-surface border border-border rounded-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 flex items-center justify-center">
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
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-primary uppercase">
                        {recipe.category}
                      </span>
                      <span className="text-xs text-muted">
                        {recipe.prepTime} prep | {recipe.cookTime} cook
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                    <p className="text-sm text-muted mb-4">
                      {recipe.description}
                    </p>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <div className="text-center bg-surface-dark rounded-lg p-2">
                        <div className="text-sm font-bold text-primary">
                          {recipe.calories}
                        </div>
                        <div className="text-xs text-muted">cal</div>
                      </div>
                      <div className="text-center bg-surface-dark rounded-lg p-2">
                        <div className="text-sm font-bold text-blue-500">
                          {recipe.protein}g
                        </div>
                        <div className="text-xs text-muted">protein</div>
                      </div>
                      <div className="text-center bg-surface-dark rounded-lg p-2">
                        <div className="text-sm font-bold text-green-500">
                          {recipe.carbs}g
                        </div>
                        <div className="text-xs text-muted">carbs</div>
                      </div>
                      <div className="text-center bg-surface-dark rounded-lg p-2">
                        <div className="text-sm font-bold text-yellow-500">
                          {recipe.fat}g
                        </div>
                        <div className="text-xs text-muted">fat</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-bold text-sm mb-2">Ingredients</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {recipe.ingredients.map((ing, idx) => (
                          <li key={idx} className="text-xs text-muted flex items-start gap-1">
                            <span className="text-primary mt-0.5">•</span> {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm mb-2">Instructions</h4>
                      <ol className="space-y-1">
                        {recipe.instructions.map((step, idx) => (
                          <li key={idx} className="text-xs text-muted flex gap-2">
                            <span className="text-primary font-bold">{idx + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "calculator" && (
            <div id="calculator" className="max-w-2xl mx-auto">
              <div className="bg-surface border border-border rounded-xl p-8">
                <h2 className="text-2xl font-black mb-6">
                  Calorie Calculator
                </h2>
                <p className="text-muted mb-6">
                  Calculate your daily caloric needs based on your body stats,
                  activity level, and goals using the Mifflin-St Jeor equation.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Gender
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Age (years)
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="25"
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="80"
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="180"
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Activity Level
                    </label>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="1.2">Sedentary (desk job)</option>
                      <option value="1.375">Light (1-3 days/week)</option>
                      <option value="1.55">Moderate (3-5 days/week)</option>
                      <option value="1.725">Active (6-7 days/week)</option>
                      <option value="1.9">Very Active (2x/day)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Goal
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="lose">Lose Weight (-500 cal)</option>
                      <option value="maintain">Maintain Weight</option>
                      <option value="gain">Gain Weight (+500 cal)</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={calculateCalories}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold text-lg transition-colors"
                >
                  Calculate
                </button>

                {calories && (
                  <div className="mt-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                    <div className="text-sm text-muted mb-2">
                      Your Daily Caloric Target
                    </div>
                    <div className="text-5xl font-black text-primary mb-2">
                      {calories}
                    </div>
                    <div className="text-lg font-medium">calories per day</div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-surface rounded-lg p-3">
                        <div className="text-xl font-bold text-blue-500">
                          {Math.round(calories * 0.3 / 4)}g
                        </div>
                        <div className="text-xs text-muted">Protein (30%)</div>
                      </div>
                      <div className="bg-surface rounded-lg p-3">
                        <div className="text-xl font-bold text-green-500">
                          {Math.round(calories * 0.45 / 4)}g
                        </div>
                        <div className="text-xs text-muted">Carbs (45%)</div>
                      </div>
                      <div className="bg-surface rounded-lg p-3">
                        <div className="text-xl font-bold text-yellow-500">
                          {Math.round(calories * 0.25 / 9)}g
                        </div>
                        <div className="text-xs text-muted">Fat (25%)</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

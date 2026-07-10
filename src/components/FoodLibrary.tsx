"use client";

import { useMemo, useState } from "react";
import { foods, foodCategories, type Food } from "@/data/foods";
import { GeminiError, geminiGenerate, getGeminiKey } from "@/lib/gemini";

const FOOD_LOOKUP_SCHEMA = {
  type: "OBJECT",
  required: ["found", "name", "serving", "calories", "protein", "carbs", "fat", "note"],
  properties: {
    found: {
      type: "BOOLEAN",
      description: "Whether the query is a recognizable food or drink",
    },
    name: { type: "STRING" },
    serving: { type: "STRING", description: "Typical serving, e.g. '100 g'" },
    calories: { type: "NUMBER" },
    protein: { type: "NUMBER" },
    carbs: { type: "NUMBER" },
    fat: { type: "NUMBER" },
    note: { type: "STRING", description: "One short sentence of context" },
  },
};

interface AiFood extends Food {
  note: string;
}

export default function FoodLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [aiResult, setAiResult] = useState<AiFood | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return foods.filter(
      (f) =>
        (category === "All" || f.category === category) &&
        (!q || f.name.toLowerCase().includes(q)),
    );
  }, [query, category]);

  async function askAi() {
    const q = query.trim();
    if (!q) return;
    setAiLoading(true);
    setAiError(null);
    setAiResult(null);
    try {
      const text = await geminiGenerate({
        prompt: `Give typical nutrition facts for: "${q}". Use a standard serving size and standard nutritional databases. If it is not a recognizable food or drink, set found to false.`,
        responseSchema: FOOD_LOOKUP_SCHEMA,
      });
      const parsed = JSON.parse(text);
      if (!parsed.found) {
        setAiError(`Couldn't find nutrition info for "${q}".`);
      } else {
        setAiResult({ ...parsed, category: "AI lookup" });
      }
    } catch (err) {
      if (err instanceof GeminiError && err.status === 401) {
        setAiError(
          "AI lookup isn't connected yet — set it up on the Nutrition page.",
        );
      } else if (err instanceof GeminiError && err.status === 429) {
        setAiError("The AI is busy right now — try again in a moment.");
      } else {
        setAiError("AI lookup failed. Try again.");
      }
    } finally {
      setAiLoading(false);
    }
  }

  const aiAvailable = typeof window === "undefined" || Boolean(getGeminiKey());

  return (
    <div>
      {/* Search + filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg
            className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setAiResult(null);
              setAiError(null);
            }}
            placeholder="Search foods…"
            className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-full text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {foodCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              category === cat
                ? "bg-primary text-white"
                : "bg-surface border border-border hover:border-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* AI lookup result */}
      {aiResult && (
        <div className="mb-6 bg-surface border-2 border-primary/30 rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wide bg-primary/10 text-primary px-3 py-1 rounded-full">
              AI lookup
            </span>
            <h3 className="font-bold">{aiResult.name}</h3>
            <span className="text-xs text-muted">({aiResult.serving})</span>
          </div>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-surface-dark rounded-2xl py-3">
              <div className="text-xl font-black text-primary">
                {Math.round(aiResult.calories)}
              </div>
              <div className="text-xs text-muted">calories</div>
            </div>
            <div className="bg-surface-dark rounded-2xl py-3">
              <div className="text-xl font-black">{Math.round(aiResult.protein)}g</div>
              <div className="text-xs text-muted">protein</div>
            </div>
            <div className="bg-surface-dark rounded-2xl py-3">
              <div className="text-xl font-black">{Math.round(aiResult.carbs)}g</div>
              <div className="text-xs text-muted">carbs</div>
            </div>
            <div className="bg-surface-dark rounded-2xl py-3">
              <div className="text-xl font-black">{Math.round(aiResult.fat)}g</div>
              <div className="text-xs text-muted">fat</div>
            </div>
          </div>
          {aiResult.note && (
            <p className="text-xs text-muted mt-3">{aiResult.note}</p>
          )}
        </div>
      )}

      {aiError && (
        <div className="mb-6 bg-surface border border-border rounded-2xl px-5 py-4 text-sm text-muted">
          {aiError}
        </div>
      )}

      {/* Results */}
      {filtered.length > 0 ? (
        <>
          <div className="text-sm text-muted mb-4">
            {filtered.length} food{filtered.length === 1 ? "" : "s"}
          </div>
          <div className="bg-surface border border-border rounded-3xl overflow-hidden">
            <div className="hidden md:grid grid-cols-[1fr_110px_80px_80px_80px_80px] gap-2 px-6 py-3 border-b border-border text-xs font-bold uppercase tracking-wide text-muted">
              <div>Food</div>
              <div>Serving</div>
              <div className="text-right">Cal</div>
              <div className="text-right">Protein</div>
              <div className="text-right">Carbs</div>
              <div className="text-right">Fat</div>
            </div>
            <div className="divide-y divide-border">
              {filtered.map((food) => (
                <div
                  key={food.name}
                  className="px-6 py-3 md:grid md:grid-cols-[1fr_110px_80px_80px_80px_80px] md:gap-2 md:items-center text-sm"
                >
                  <div>
                    <div className="font-semibold">{food.name}</div>
                    <div className="text-xs text-muted md:hidden">
                      {food.serving} · {food.calories} cal · P {food.protein}g · C{" "}
                      {food.carbs}g · F {food.fat}g
                    </div>
                  </div>
                  <div className="hidden md:block text-xs text-muted">
                    {food.serving}
                  </div>
                  <div className="hidden md:block text-right font-bold text-primary">
                    {food.calories}
                  </div>
                  <div className="hidden md:block text-right">{food.protein}g</div>
                  <div className="hidden md:block text-right">{food.carbs}g</div>
                  <div className="hidden md:block text-right">{food.fat}g</div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="bg-surface border border-border rounded-3xl p-10 text-center">
          <p className="text-muted mb-4">
            No match for &ldquo;{query}&rdquo; in the library.
          </p>
          {aiAvailable && (
            <button
              onClick={askAi}
              disabled={aiLoading}
              className="bg-primary hover:bg-primary-dark disabled:opacity-40 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              {aiLoading ? "Asking the AI…" : `Ask the AI about "${query.trim()}"`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

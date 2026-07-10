import FoodScanner from "@/components/FoodScanner";

export const metadata = {
  title: "Nutrition | Pulse",
};

export default function NutritionPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">
        Nutrition
      </h1>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-wide bg-primary/10 text-primary px-3 py-1 rounded-full">
            AI
          </span>
          <h2 className="text-xl font-bold">Food Scanner</h2>
        </div>
        <p className="text-muted text-sm mb-6 max-w-xl">
          Take a photo of your meal and get an instant estimate of its calories,
          protein, carbs, and fat.
        </p>
        <FoodScanner />
      </div>
    </section>
  );
}

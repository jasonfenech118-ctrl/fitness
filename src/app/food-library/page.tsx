import FoodLibrary from "@/components/FoodLibrary";

export const metadata = {
  title: "Food Library | Pulse",
};

export default function FoodLibraryPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight">
        Food Library
      </h1>
      <p className="text-muted mt-3 mb-10 max-w-xl">
        Nutrition facts for everyday foods. Search the library, or ask the AI
        about anything that isn&apos;t listed.
      </p>
      <FoodLibrary />
    </section>
  );
}

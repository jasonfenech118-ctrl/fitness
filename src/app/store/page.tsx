export const metadata = {
  title: "Supplement Store | IronForge Fitness",
  description: "Premium supplements, equipment, and accessories.",
};

export default function StorePage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Supplement Store
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Coming soon.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted text-lg">
            Our store is being updated. Check back soon for premium supplements,
            equipment, and accessories.
          </p>
        </div>
      </section>
    </>
  );
}

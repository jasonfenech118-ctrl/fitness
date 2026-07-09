import Link from "next/link";

export const metadata = {
  title: "Membership Plans | IronForge Fitness",
  description: "Choose the perfect membership plan to reach your fitness goals.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic access to workouts and exercises.",
    features: [
      "Basic workout plans",
      "Exercise database access",
      "Community forum access",
      "Calorie calculator",
      "5 saved workouts",
    ],
    notIncluded: [
      "Premium workout programs",
      "Custom meal plans",
      "Video exercise guides",
      "Progress tracking",
      "Personal coaching",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Everything you need to train like a pro and hit your goals.",
    features: [
      "All Free features",
      "500+ premium workout programs",
      "Custom meal plans & recipes",
      "HD video exercise guides",
      "Progress tracking & analytics",
      "Unlimited saved workouts",
      "Ad-free experience",
      "Supplement discount (10%)",
    ],
    notIncluded: ["1-on-1 coaching", "Custom program design"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Elite",
    price: "$29.99",
    period: "/month",
    description:
      "The ultimate fitness experience with personal coaching and custom programs.",
    features: [
      "All Pro features",
      "1-on-1 personal coaching",
      "Custom program design",
      "Monthly video check-ins",
      "Priority support",
      "Supplement discount (20%)",
      "Early access to new features",
      "Exclusive Elite community",
    ],
    notIncluded: [],
    cta: "Start Free Trial",
    popular: false,
  },
];

export default function PlansPage() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Choose Your Plan
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From free basic access to elite personal coaching — pick the plan
            that matches your ambition.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-surface border-2 border-primary shadow-xl shadow-primary/10 relative"
                    : "bg-surface border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h2 className="text-2xl font-black mb-2">{plan.name}</h2>
                  <p className="text-sm text-muted mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-muted">{plan.period}</span>
                  </div>
                  <Link
                    href="#"
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${
                      plan.popular
                        ? "bg-primary hover:bg-primary-dark text-white"
                        : "bg-surface-dark hover:bg-primary hover:text-white border border-border"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <div className="mt-8">
                    <div className="text-sm font-bold mb-4">
                      What&apos;s included:
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <svg
                            className="w-5 h-5 text-success flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <svg
                            className="w-5 h-5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel my subscription at any time?",
                a: "Yes, you can cancel your Pro or Elite subscription at any time. Your access will continue until the end of your current billing period.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! Both Pro and Elite plans come with a 7-day free trial. No credit card required to start.",
              },
              {
                q: "Can I switch between plans?",
                a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.",
              },
              {
                q: "Do you offer student or military discounts?",
                a: "Yes! We offer 25% off any paid plan for students and active military personnel. Contact support to verify your status.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-background border border-border rounded-xl p-6"
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

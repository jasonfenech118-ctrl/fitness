export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "gold-standard-whey",
    name: "Gold Standard 100% Whey",
    description:
      "The world's best-selling whey protein powder. 24g protein per serving, 5.5g BCAAs, and 4g glutamine.",
    price: 39.99,
    originalPrice: 54.99,
    category: "Protein",
    rating: 4.8,
    reviews: 12453,
    badge: "Best Seller",
    features: [
      "24g protein per serving",
      "5.5g BCAAs",
      "Low fat & sugar",
      "Multiple flavors",
    ],
  },
  {
    id: "creatine-mono",
    name: "Micronized Creatine Monohydrate",
    description:
      "Pure, pharmaceutical-grade creatine monohydrate. Micronized for better absorption and no bloating.",
    price: 19.99,
    category: "Performance",
    rating: 4.9,
    reviews: 8921,
    badge: "Top Rated",
    features: [
      "5g pure creatine per serving",
      "Micronized for absorption",
      "Unflavored & versatile",
      "80 servings per container",
    ],
  },
  {
    id: "pre-workout-extreme",
    name: "C4 Ultimate Pre-Workout",
    description:
      "Explosive pre-workout formula with 300mg caffeine, 6g citrulline, and 3.2g beta-alanine for maximum performance.",
    price: 44.99,
    originalPrice: 49.99,
    category: "Pre-Workout",
    rating: 4.6,
    reviews: 5632,
    features: [
      "300mg caffeine",
      "6g citrulline malate",
      "3.2g beta-alanine",
      "Enhanced focus blend",
    ],
  },
  {
    id: "mass-gainer",
    name: "Serious Mass Weight Gainer",
    description:
      "High-calorie mass gainer with 1,250 calories, 50g protein, and over 250g carbs per serving for hardgainers.",
    price: 49.99,
    originalPrice: 64.99,
    category: "Mass Gainer",
    rating: 4.4,
    reviews: 7234,
    badge: "Sale",
    features: [
      "1,250 calories per serving",
      "50g protein",
      "25 vitamins & minerals",
      "Creatine & glutamine added",
    ],
  },
  {
    id: "bcaa-recovery",
    name: "Xtend BCAA Recovery",
    description:
      "7g BCAAs in a 2:1:1 ratio with electrolytes and glutamine. Sugar-free and available in delicious flavors.",
    price: 24.99,
    category: "Recovery",
    rating: 4.5,
    reviews: 4125,
    features: [
      "7g BCAAs per serving",
      "Electrolyte blend",
      "Sugar-free formula",
      "30 servings per container",
    ],
  },
  {
    id: "fish-oil-premium",
    name: "Triple Strength Omega-3",
    description:
      "High-potency fish oil with 900mg EPA/DHA per softgel. Molecularly distilled for purity.",
    price: 22.99,
    category: "Health",
    rating: 4.7,
    reviews: 3421,
    features: [
      "900mg EPA/DHA",
      "Molecularly distilled",
      "No fishy aftertaste",
      "120 softgels",
    ],
  },
  {
    id: "lifting-belt",
    name: "Leather Powerlifting Belt",
    description:
      "10mm thick genuine leather belt with single prong buckle. Provides maximum core support during heavy lifts.",
    price: 69.99,
    originalPrice: 89.99,
    category: "Equipment",
    rating: 4.8,
    reviews: 2156,
    features: [
      "10mm genuine leather",
      "Single prong buckle",
      "IPF approved width",
      "Break-in period: 2-3 weeks",
    ],
  },
  {
    id: "wrist-wraps",
    name: "Competition Wrist Wraps",
    description:
      "18-inch heavy-duty wrist wraps with thumb loop. Essential support for pressing movements.",
    price: 14.99,
    category: "Equipment",
    rating: 4.6,
    reviews: 1893,
    features: [
      "18-inch length",
      "Heavy duty elastic",
      "Thumb loop design",
      "Velcro closure",
    ],
  },
  {
    id: "resistance-bands",
    name: "Resistance Band Set (5 Bands)",
    description:
      "Complete set of 5 resistance bands ranging from 5-125 lbs. Perfect for warm-ups, rehab, and accessory work.",
    price: 29.99,
    category: "Equipment",
    rating: 4.5,
    reviews: 3567,
    badge: "Popular",
    features: [
      "5 resistance levels",
      "Natural latex",
      "Includes carrying bag",
      "Door anchor included",
    ],
  },
  {
    id: "shaker-bottle",
    name: "BlenderBottle Pro Series",
    description:
      "28oz leak-proof shaker bottle with patented BlenderBall wire whisk and storage compartments.",
    price: 12.99,
    category: "Accessories",
    rating: 4.7,
    reviews: 9823,
    features: [
      "28oz capacity",
      "Leak-proof design",
      "BlenderBall included",
      "BPA-free plastic",
    ],
  },
  {
    id: "gym-bag",
    name: "Elite Training Duffel Bag",
    description:
      "Spacious gym duffel with shoe compartment, wet pocket, and ventilated design. Built to last.",
    price: 44.99,
    category: "Accessories",
    rating: 4.6,
    reviews: 2345,
    features: [
      "Shoe compartment",
      "Wet pocket",
      "Ventilated design",
      "Adjustable shoulder strap",
    ],
  },
  {
    id: "foam-roller",
    name: "Deep Tissue Foam Roller",
    description:
      "High-density foam roller with textured surface for myofascial release and muscle recovery.",
    price: 24.99,
    category: "Recovery",
    rating: 4.5,
    reviews: 4567,
    features: [
      "High-density EVA foam",
      "Textured surface",
      "18-inch length",
      "Includes exercise guide",
    ],
  },
];

export const storeCategories = [
  "All",
  "Protein",
  "Performance",
  "Pre-Workout",
  "Mass Gainer",
  "Recovery",
  "Health",
  "Equipment",
  "Accessories",
];

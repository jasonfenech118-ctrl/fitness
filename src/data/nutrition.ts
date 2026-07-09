export interface MealPlan {
  id: string;
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  goal: string;
  meals: Meal[];
}

export interface Meal {
  name: string;
  time: string;
  foods: FoodItem[];
  totalCalories: number;
  totalProtein: number;
}

export interface FoodItem {
  name: string;
  amount: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  category: string;
  ingredients: string[];
  instructions: string[];
}

export interface Supplement {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  dosage: string;
  timing: string;
  price: string;
  rating: number;
}

export const mealPlans: MealPlan[] = [
  {
    id: "bulking-3000",
    name: "Clean Bulk - 3000 Calories",
    description:
      "A high-protein clean bulking plan designed for building lean muscle mass with minimal fat gain.",
    calories: 3000,
    protein: 200,
    carbs: 350,
    fat: 85,
    goal: "Muscle Gain",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        totalCalories: 650,
        totalProtein: 45,
        foods: [
          { name: "Oatmeal", amount: "1 cup dry", calories: 300, protein: 10, carbs: 54, fat: 5 },
          { name: "Whole Eggs", amount: "3 large", calories: 210, protein: 18, carbs: 0, fat: 15 },
          { name: "Banana", amount: "1 large", calories: 105, protein: 1, carbs: 27, fat: 0 },
          { name: "Peanut Butter", amount: "1 tbsp", calories: 95, protein: 4, carbs: 3, fat: 8 },
        ],
      },
      {
        name: "Mid-Morning Snack",
        time: "10:00 AM",
        totalCalories: 400,
        totalProtein: 35,
        foods: [
          { name: "Greek Yogurt", amount: "1 cup", calories: 130, protein: 20, carbs: 9, fat: 0 },
          { name: "Mixed Berries", amount: "1 cup", calories: 85, protein: 1, carbs: 20, fat: 0 },
          { name: "Almonds", amount: "1 oz", calories: 165, protein: 6, carbs: 6, fat: 14 },
          { name: "Honey", amount: "1 tbsp", calories: 60, protein: 0, carbs: 17, fat: 0 },
        ],
      },
      {
        name: "Lunch",
        time: "1:00 PM",
        totalCalories: 700,
        totalProtein: 50,
        foods: [
          { name: "Chicken Breast", amount: "8 oz", calories: 280, protein: 52, carbs: 0, fat: 6 },
          { name: "Brown Rice", amount: "1.5 cups cooked", calories: 330, protein: 7, carbs: 68, fat: 3 },
          { name: "Broccoli", amount: "1 cup", calories: 55, protein: 4, carbs: 11, fat: 0 },
          { name: "Olive Oil", amount: "1 tbsp", calories: 120, protein: 0, carbs: 0, fat: 14 },
        ],
      },
      {
        name: "Pre-Workout",
        time: "4:00 PM",
        totalCalories: 350,
        totalProtein: 30,
        foods: [
          { name: "Whey Protein", amount: "1 scoop", calories: 120, protein: 25, carbs: 3, fat: 1 },
          { name: "Apple", amount: "1 medium", calories: 95, protein: 0, carbs: 25, fat: 0 },
          { name: "Rice Cakes", amount: "2 cakes", calories: 70, protein: 1, carbs: 15, fat: 0 },
          { name: "Peanut Butter", amount: "1 tbsp", calories: 95, protein: 4, carbs: 3, fat: 8 },
        ],
      },
      {
        name: "Dinner",
        time: "7:00 PM",
        totalCalories: 700,
        totalProtein: 45,
        foods: [
          { name: "Salmon", amount: "6 oz", calories: 310, protein: 34, carbs: 0, fat: 18 },
          { name: "Sweet Potato", amount: "1 large", calories: 180, protein: 4, carbs: 41, fat: 0 },
          { name: "Mixed Vegetables", amount: "1.5 cups", calories: 80, protein: 4, carbs: 16, fat: 0 },
          { name: "Avocado", amount: "1/2 medium", calories: 120, protein: 1, carbs: 6, fat: 11 },
        ],
      },
    ],
  },
  {
    id: "cutting-2000",
    name: "Lean Cut - 2000 Calories",
    description:
      "A high-protein cutting plan designed to preserve muscle while shedding body fat.",
    calories: 2000,
    protein: 200,
    carbs: 150,
    fat: 65,
    goal: "Fat Loss",
    meals: [
      {
        name: "Breakfast",
        time: "7:00 AM",
        totalCalories: 400,
        totalProtein: 40,
        foods: [
          { name: "Egg Whites", amount: "6 large", calories: 100, protein: 24, carbs: 0, fat: 0 },
          { name: "Whole Egg", amount: "1 large", calories: 70, protein: 6, carbs: 0, fat: 5 },
          { name: "Oatmeal", amount: "1/2 cup dry", calories: 150, protein: 5, carbs: 27, fat: 3 },
          { name: "Blueberries", amount: "1/2 cup", calories: 42, protein: 0, carbs: 11, fat: 0 },
        ],
      },
      {
        name: "Lunch",
        time: "12:00 PM",
        totalCalories: 500,
        totalProtein: 50,
        foods: [
          { name: "Chicken Breast", amount: "6 oz", calories: 210, protein: 39, carbs: 0, fat: 5 },
          { name: "Quinoa", amount: "1/2 cup cooked", calories: 110, protein: 4, carbs: 20, fat: 2 },
          { name: "Mixed Greens Salad", amount: "2 cups", calories: 20, protein: 2, carbs: 3, fat: 0 },
          { name: "Olive Oil Dressing", amount: "1 tbsp", calories: 120, protein: 0, carbs: 0, fat: 14 },
        ],
      },
      {
        name: "Pre-Workout",
        time: "3:30 PM",
        totalCalories: 250,
        totalProtein: 30,
        foods: [
          { name: "Whey Protein", amount: "1 scoop", calories: 120, protein: 25, carbs: 3, fat: 1 },
          { name: "Apple", amount: "1 small", calories: 77, protein: 0, carbs: 20, fat: 0 },
          { name: "Rice Cake", amount: "1 cake", calories: 35, protein: 0, carbs: 7, fat: 0 },
        ],
      },
      {
        name: "Dinner",
        time: "6:30 PM",
        totalCalories: 550,
        totalProtein: 45,
        foods: [
          { name: "Lean Ground Turkey", amount: "6 oz", calories: 240, protein: 36, carbs: 0, fat: 10 },
          { name: "Sweet Potato", amount: "1 medium", calories: 115, protein: 2, carbs: 27, fat: 0 },
          { name: "Asparagus", amount: "8 spears", calories: 25, protein: 3, carbs: 4, fat: 0 },
          { name: "Coconut Oil", amount: "1 tsp", calories: 40, protein: 0, carbs: 0, fat: 5 },
        ],
      },
    ],
  },
];

export const recipes: Recipe[] = [
  {
    id: "protein-pancakes",
    name: "High-Protein Banana Pancakes",
    description: "Fluffy protein-packed pancakes perfect for a muscle-building breakfast.",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 2,
    calories: 380,
    protein: 35,
    carbs: 42,
    fat: 8,
    category: "Breakfast",
    ingredients: [
      "1 scoop vanilla whey protein",
      "1 ripe banana",
      "2 whole eggs",
      "1/3 cup oats",
      "1/4 cup almond milk",
      "1/2 tsp baking powder",
      "1/2 tsp cinnamon",
      "Cooking spray",
    ],
    instructions: [
      "Blend all ingredients except cooking spray in a blender until smooth.",
      "Heat a non-stick pan over medium heat and spray with cooking spray.",
      "Pour 1/4 cup of batter per pancake onto the pan.",
      "Cook until bubbles form on top, about 2 minutes, then flip.",
      "Cook another 1-2 minutes until golden brown.",
      "Serve topped with fresh berries or sugar-free syrup.",
    ],
  },
  {
    id: "chicken-rice-bowl",
    name: "Teriyaki Chicken Rice Bowl",
    description: "A macro-friendly meal prep staple with tender chicken and perfectly seasoned rice.",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    calories: 450,
    protein: 42,
    carbs: 48,
    fat: 8,
    category: "Lunch",
    ingredients: [
      "1.5 lbs chicken breast, diced",
      "2 cups jasmine rice",
      "3 cups broccoli florets",
      "3 tbsp low-sodium soy sauce",
      "2 tbsp honey",
      "1 tbsp rice vinegar",
      "1 tsp garlic, minced",
      "1 tsp ginger, grated",
      "1 tbsp sesame oil",
      "Sesame seeds for garnish",
    ],
    instructions: [
      "Cook jasmine rice according to package directions.",
      "Mix soy sauce, honey, rice vinegar, garlic, and ginger for the sauce.",
      "Heat sesame oil in a large skillet over medium-high heat.",
      "Cook diced chicken for 6-7 minutes until golden and cooked through.",
      "Add broccoli and cook for 3-4 minutes until tender-crisp.",
      "Pour sauce over chicken and broccoli, cook 2 minutes until thickened.",
      "Serve over rice and garnish with sesame seeds.",
    ],
  },
  {
    id: "protein-smoothie",
    name: "Chocolate Peanut Butter Protein Smoothie",
    description: "A creamy, delicious post-workout shake packed with protein and healthy fats.",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: 1,
    calories: 420,
    protein: 40,
    carbs: 35,
    fat: 14,
    category: "Snack",
    ingredients: [
      "1 scoop chocolate whey protein",
      "1 tbsp natural peanut butter",
      "1 frozen banana",
      "1 cup unsweetened almond milk",
      "1 tbsp cocoa powder",
      "1/2 cup ice",
      "1 tsp honey (optional)",
    ],
    instructions: [
      "Add all ingredients to a blender.",
      "Blend on high for 60 seconds until smooth and creamy.",
      "Add more almond milk if needed for desired consistency.",
      "Pour into a glass and enjoy immediately.",
    ],
  },
  {
    id: "salmon-bowl",
    name: "Grilled Salmon Power Bowl",
    description: "Omega-3 rich salmon with wholesome grains and vegetables for a nutrient-dense dinner.",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: 2,
    calories: 520,
    protein: 40,
    carbs: 45,
    fat: 18,
    category: "Dinner",
    ingredients: [
      "2 salmon fillets (6 oz each)",
      "1 cup quinoa",
      "2 cups mixed greens",
      "1 avocado, sliced",
      "1 cup cherry tomatoes, halved",
      "1/2 cucumber, diced",
      "2 tbsp olive oil",
      "1 lemon, juiced",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook quinoa according to package directions and let cool slightly.",
      "Season salmon with olive oil, salt, pepper, and lemon juice.",
      "Grill salmon for 4-5 minutes per side until cooked through.",
      "Divide mixed greens between two bowls.",
      "Top with quinoa, cherry tomatoes, cucumber, and avocado.",
      "Place grilled salmon on top and drizzle with remaining lemon juice.",
    ],
  },
];

export const supplements: Supplement[] = [
  {
    id: "whey-protein",
    name: "Whey Protein Isolate",
    category: "Protein",
    description:
      "Fast-absorbing protein powder ideal for post-workout recovery. Contains all essential amino acids for optimal muscle protein synthesis.",
    benefits: [
      "Rapid amino acid delivery",
      "Supports muscle recovery",
      "High bioavailability",
      "Low in fat and carbs",
    ],
    dosage: "25-50g per serving",
    timing: "Post-workout or between meals",
    price: "$39.99",
    rating: 4.8,
  },
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    category: "Performance",
    description:
      "The most researched sports supplement available. Proven to increase strength, power output, and lean muscle mass.",
    benefits: [
      "Increased strength and power",
      "Enhanced muscle recovery",
      "Improved high-intensity performance",
      "Supports lean mass gains",
    ],
    dosage: "5g daily",
    timing: "Any time of day, consistency is key",
    price: "$19.99",
    rating: 4.9,
  },
  {
    id: "pre-workout",
    name: "Pre-Workout Complex",
    category: "Energy",
    description:
      "Scientifically formulated pre-workout blend with caffeine, beta-alanine, and citrulline for explosive energy and endurance.",
    benefits: [
      "Enhanced energy and focus",
      "Increased blood flow and pump",
      "Improved endurance",
      "Better mind-muscle connection",
    ],
    dosage: "1 scoop (10g)",
    timing: "20-30 minutes before training",
    price: "$34.99",
    rating: 4.6,
  },
  {
    id: "bcaa",
    name: "BCAA Powder",
    category: "Recovery",
    description:
      "Branched-chain amino acids (Leucine, Isoleucine, Valine) in a 2:1:1 ratio to support muscle recovery and reduce soreness.",
    benefits: [
      "Reduces muscle soreness",
      "Supports muscle preservation during cuts",
      "Improves recovery between sessions",
      "Can be used during fasted training",
    ],
    dosage: "5-10g per serving",
    timing: "During or after training",
    price: "$24.99",
    rating: 4.5,
  },
  {
    id: "fish-oil",
    name: "Omega-3 Fish Oil",
    category: "Health",
    description:
      "High-potency fish oil capsules providing EPA and DHA for joint health, cardiovascular support, and reduced inflammation.",
    benefits: [
      "Reduces joint inflammation",
      "Supports heart health",
      "Improves brain function",
      "Aids in recovery",
    ],
    dosage: "2-4 capsules daily",
    timing: "With meals",
    price: "$22.99",
    rating: 4.7,
  },
  {
    id: "multivitamin",
    name: "Athletic Multivitamin",
    category: "Health",
    description:
      "Complete daily multivitamin formulated for active individuals with enhanced B-vitamins, zinc, and magnesium.",
    benefits: [
      "Fills nutritional gaps",
      "Supports immune function",
      "Enhanced energy metabolism",
      "Optimized for athletes",
    ],
    dosage: "2 tablets daily",
    timing: "With breakfast",
    price: "$29.99",
    rating: 4.4,
  },
];

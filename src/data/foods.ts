export interface Food {
  name: string;
  category: string;
  serving: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export const foodCategories = [
  "All",
  "Protein",
  "Carbs & Grains",
  "Fruits",
  "Vegetables",
  "Dairy & Eggs",
  "Fats & Nuts",
  "Snacks & Drinks",
];

// Approximate values per 100 g (or per 100 ml for drinks) unless noted.
export const foods: Food[] = [
  // Protein
  { name: "Chicken Breast (cooked)", category: "Protein", serving: "100 g", calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { name: "Chicken Thigh (cooked)", category: "Protein", serving: "100 g", calories: 209, protein: 26, carbs: 0, fat: 11 },
  { name: "Lean Beef Mince 5% (cooked)", category: "Protein", serving: "100 g", calories: 171, protein: 26, carbs: 0, fat: 7 },
  { name: "Ribeye Steak (cooked)", category: "Protein", serving: "100 g", calories: 291, protein: 24, carbs: 0, fat: 21 },
  { name: "Pork Loin (cooked)", category: "Protein", serving: "100 g", calories: 197, protein: 27, carbs: 0, fat: 9 },
  { name: "Salmon (cooked)", category: "Protein", serving: "100 g", calories: 208, protein: 20, carbs: 0, fat: 13 },
  { name: "Tuna (canned in water)", category: "Protein", serving: "100 g", calories: 116, protein: 26, carbs: 0, fat: 1 },
  { name: "White Fish / Cod (cooked)", category: "Protein", serving: "100 g", calories: 105, protein: 23, carbs: 0, fat: 0.9 },
  { name: "Prawns (cooked)", category: "Protein", serving: "100 g", calories: 99, protein: 24, carbs: 0.2, fat: 0.3 },
  { name: "Turkey Breast (cooked)", category: "Protein", serving: "100 g", calories: 147, protein: 30, carbs: 0, fat: 2 },
  { name: "Tofu (firm)", category: "Protein", serving: "100 g", calories: 144, protein: 17, carbs: 3, fat: 9 },
  { name: "Whey Protein Powder", category: "Protein", serving: "1 scoop (30 g)", calories: 120, protein: 24, carbs: 3, fat: 1.5 },

  // Carbs & Grains
  { name: "White Rice (cooked)", category: "Carbs & Grains", serving: "100 g", calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
  { name: "Brown Rice (cooked)", category: "Carbs & Grains", serving: "100 g", calories: 112, protein: 2.6, carbs: 24, fat: 0.9 },
  { name: "Pasta (cooked)", category: "Carbs & Grains", serving: "100 g", calories: 158, protein: 6, carbs: 31, fat: 0.9 },
  { name: "Oats (dry)", category: "Carbs & Grains", serving: "100 g", calories: 389, protein: 17, carbs: 66, fat: 7 },
  { name: "Quinoa (cooked)", category: "Carbs & Grains", serving: "100 g", calories: 120, protein: 4.4, carbs: 21, fat: 1.9 },
  { name: "Potato (boiled)", category: "Carbs & Grains", serving: "100 g", calories: 87, protein: 1.9, carbs: 20, fat: 0.1 },
  { name: "Sweet Potato (baked)", category: "Carbs & Grains", serving: "100 g", calories: 90, protein: 2, carbs: 21, fat: 0.2 },
  { name: "Wholemeal Bread", category: "Carbs & Grains", serving: "1 slice (40 g)", calories: 98, protein: 4.5, carbs: 17, fat: 1.3 },
  { name: "White Bread", category: "Carbs & Grains", serving: "1 slice (40 g)", calories: 106, protein: 3.6, carbs: 20, fat: 1 },
  { name: "Couscous (cooked)", category: "Carbs & Grains", serving: "100 g", calories: 112, protein: 3.8, carbs: 23, fat: 0.2 },

  // Fruits
  { name: "Banana", category: "Fruits", serving: "1 medium (118 g)", calories: 105, protein: 1.3, carbs: 27, fat: 0.4 },
  { name: "Apple", category: "Fruits", serving: "1 medium (182 g)", calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
  { name: "Orange", category: "Fruits", serving: "1 medium (131 g)", calories: 62, protein: 1.2, carbs: 15, fat: 0.2 },
  { name: "Strawberries", category: "Fruits", serving: "100 g", calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
  { name: "Blueberries", category: "Fruits", serving: "100 g", calories: 57, protein: 0.7, carbs: 14, fat: 0.3 },
  { name: "Grapes", category: "Fruits", serving: "100 g", calories: 69, protein: 0.7, carbs: 18, fat: 0.2 },
  { name: "Watermelon", category: "Fruits", serving: "100 g", calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2 },
  { name: "Mango", category: "Fruits", serving: "100 g", calories: 60, protein: 0.8, carbs: 15, fat: 0.4 },

  // Vegetables
  { name: "Broccoli", category: "Vegetables", serving: "100 g", calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
  { name: "Spinach", category: "Vegetables", serving: "100 g", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
  { name: "Carrots", category: "Vegetables", serving: "100 g", calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
  { name: "Tomato", category: "Vegetables", serving: "100 g", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
  { name: "Cucumber", category: "Vegetables", serving: "100 g", calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1 },
  { name: "Bell Pepper", category: "Vegetables", serving: "100 g", calories: 31, protein: 1, carbs: 6, fat: 0.3 },
  { name: "Onion", category: "Vegetables", serving: "100 g", calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1 },
  { name: "Mushrooms", category: "Vegetables", serving: "100 g", calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },

  // Dairy & Eggs
  { name: "Whole Egg", category: "Dairy & Eggs", serving: "1 large (50 g)", calories: 72, protein: 6.3, carbs: 0.4, fat: 4.8 },
  { name: "Egg White", category: "Dairy & Eggs", serving: "1 large (33 g)", calories: 17, protein: 3.6, carbs: 0.2, fat: 0.1 },
  { name: "Greek Yogurt 0%", category: "Dairy & Eggs", serving: "100 g", calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
  { name: "Cottage Cheese", category: "Dairy & Eggs", serving: "100 g", calories: 98, protein: 11, carbs: 3.4, fat: 4.3 },
  { name: "Cheddar Cheese", category: "Dairy & Eggs", serving: "30 g", calories: 121, protein: 7.5, carbs: 0.4, fat: 10 },
  { name: "Whole Milk", category: "Dairy & Eggs", serving: "100 ml", calories: 61, protein: 3.2, carbs: 4.8, fat: 3.3 },
  { name: "Semi-Skimmed Milk", category: "Dairy & Eggs", serving: "100 ml", calories: 47, protein: 3.4, carbs: 4.8, fat: 1.7 },

  // Fats & Nuts
  { name: "Avocado", category: "Fats & Nuts", serving: "100 g", calories: 160, protein: 2, carbs: 9, fat: 15 },
  { name: "Almonds", category: "Fats & Nuts", serving: "30 g", calories: 174, protein: 6.4, carbs: 6.5, fat: 15 },
  { name: "Peanut Butter", category: "Fats & Nuts", serving: "1 tbsp (16 g)", calories: 94, protein: 4, carbs: 3.5, fat: 8 },
  { name: "Walnuts", category: "Fats & Nuts", serving: "30 g", calories: 196, protein: 4.6, carbs: 4.1, fat: 20 },
  { name: "Olive Oil", category: "Fats & Nuts", serving: "1 tbsp (14 g)", calories: 119, protein: 0, carbs: 0, fat: 14 },
  { name: "Butter", category: "Fats & Nuts", serving: "1 tbsp (14 g)", calories: 102, protein: 0.1, carbs: 0, fat: 12 },

  // Snacks & Drinks
  { name: "Dark Chocolate 70%", category: "Snacks & Drinks", serving: "30 g", calories: 170, protein: 2.2, carbs: 13, fat: 12 },
  { name: "Rice Cakes", category: "Snacks & Drinks", serving: "1 cake (9 g)", calories: 35, protein: 0.7, carbs: 7.3, fat: 0.3 },
  { name: "Crisps / Chips", category: "Snacks & Drinks", serving: "30 g", calories: 160, protein: 2, carbs: 15, fat: 10 },
  { name: "Cola", category: "Snacks & Drinks", serving: "330 ml can", calories: 139, protein: 0, carbs: 35, fat: 0 },
  { name: "Orange Juice", category: "Snacks & Drinks", serving: "250 ml", calories: 112, protein: 1.7, carbs: 26, fat: 0.5 },
  { name: "Beer", category: "Snacks & Drinks", serving: "330 ml", calories: 142, protein: 1.1, carbs: 11, fat: 0 },
];

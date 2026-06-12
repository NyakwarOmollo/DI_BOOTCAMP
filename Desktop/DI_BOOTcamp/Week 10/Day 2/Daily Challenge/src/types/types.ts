export interface RecipeItem {
  id: number;
  title: string;
  image?: string;
  readyInMinutes?: number;
  summary?: string;
}

export interface MealDbRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb?: string;
  strInstructions?: string;
}

export interface MealDbResponse {
  meals: MealDbRecipe[];
}

export interface SpoonacularResponse {
  recipes: RecipeItem[];
}

/// <reference types="vite/client" />

import type { MealDbResponse, SpoonacularResponse } from '../types/types';

const FALLBACK_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';

export async function fetchData<T>(endpoint = FALLBACK_ENDPOINT): Promise<T> {
  const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;
  const url = apiKey
    ? `${endpoint}${endpoint.includes('?') ? '&' : '?'}apiKey=${apiKey}`
    : endpoint;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Unable to fetch data from the API.');
  }

  return (await response.json()) as T;
}

export async function fetchRecipes() {
  const apiKey = import.meta.env.VITE_SPOONACULAR_KEY;

  if (apiKey) {
    const data = await fetchData<SpoonacularResponse>(
      'https://api.spoonacular.com/recipes/random?number=6',
    );

    return data.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      readyInMinutes: recipe.readyInMinutes,
      summary: recipe.summary,
    }));
  }

  const fallback = await fetchData<MealDbResponse>(FALLBACK_ENDPOINT);

  return fallback.meals.map((meal, index) => ({
    id: index + 1,
    title: meal.strMeal,
    image: meal.strMealThumb,
    summary: meal.strInstructions?.slice(0, 120),
  }));
}

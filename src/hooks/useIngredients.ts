import { ingredients, ingredientsByCategory, ingredientsBySlug } from '../data'
import type { IngredientCategory } from '../schema/ingredient.schema'

export function useAllIngredients() {
  return ingredients
}

export function useIngredientsByCategory(category: IngredientCategory) {
  return ingredientsByCategory[category]
}

export function useIngredientBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return ingredientsBySlug[slug]
}

import type { Ingredient, IngredientCategory } from '../schema/ingredient.schema'
import type { ComparisonGroup } from '../schema/comparison.schema'

/**
 * Aggregates every ingredient/comparison data file via import.meta.glob so
 * that new files just need to be dropped into the right folder — no shared
 * index file to edit, which keeps parallel content-authoring conflict-free.
 */
const ingredientModules = import.meta.glob<{ default: Ingredient }>('./ingredients/**/*.ts', {
  eager: true,
})
const comparisonModules = import.meta.glob<{ default: ComparisonGroup }>('./comparisons/**/*.ts', {
  eager: true,
})

export const ingredients: Ingredient[] = Object.values(ingredientModules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => a.inciName.localeCompare(b.inciName))

export const ingredientsBySlug: Record<string, Ingredient> = Object.fromEntries(
  ingredients.map((i) => [i.slug, i]),
)

export const ingredientsByCategory: Record<IngredientCategory, Ingredient[]> = {
  emulsifier: ingredients.filter((i) => i.category === 'emulsifier'),
  polymer: ingredients.filter((i) => i.category === 'polymer'),
}

export const comparisonGroups: ComparisonGroup[] = Object.values(comparisonModules)
  .map((m) => m.default)
  .filter(Boolean)

export const comparisonGroupsById: Record<string, ComparisonGroup> = Object.fromEntries(
  comparisonGroups.map((c) => [c.id, c]),
)

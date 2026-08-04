import { IngredientSchema, type Ingredient } from './ingredient.schema'

/**
 * Dev-friendly wrapper used by every ingredient data file. Warns (rather than
 * throws) on schema issues so a researcher can save a partially-filled entry
 * mid-work — strict enforcement happens in scripts/validate-data.ts, which is
 * the CI gate that actually blocks a broken entry from merging.
 */
export function defineIngredient(data: unknown): Ingredient {
  const result = IngredientSchema.safeParse(data)
  if (!result.success && import.meta.env?.DEV) {
    console.warn('[ingredient schema] issues in a data file:', result.error.issues)
  }
  return data as Ingredient
}

import { z } from 'zod'
import { IngredientCategorySchema, LocalizedTextSchema } from './ingredient.schema'

/**
 * Comparison groups reference ingredients by slug rather than duplicating
 * their data — the comparison page looks up each ingredient's already-typed
 * fields at render time. `extraDimensions` is for freeform commentary rows
 * that aren't part of the base Ingredient schema (e.g. "PEG-free?", cost tier).
 */
export const ComparisonExtraDimensionSchema = z.object({
  key: z.string().min(1),
  label: LocalizedTextSchema,
  valuesBySlug: z.record(z.string(), LocalizedTextSchema),
})

export const ComparisonGroupSchema = z.object({
  id: z.string().min(1),
  title: LocalizedTextSchema,
  category: IngredientCategorySchema,
  ingredientSlugs: z.array(z.string()).min(2),
  extraDimensions: z.array(ComparisonExtraDimensionSchema).optional(),
  summary: LocalizedTextSchema.optional(),
})

export type ComparisonGroup = z.infer<typeof ComparisonGroupSchema>

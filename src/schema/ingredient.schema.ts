import { z } from 'zod'

/** Bilingual text — every piece of prose content carries both languages. */
export const LocalizedTextSchema = z.object({
  zh: z.string().min(1),
  en: z.string().min(1),
})
export type LocalizedText = z.infer<typeof LocalizedTextSchema>

/** A single sourced fact. Every technical claim must trace back to one of these. */
export const CitationSchema = z.object({
  id: z.string().min(1),
  supplier: z.string().min(1),
  documentTitle: z.string().min(1),
  url: z.string().url().optional(),
  accessedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'accessedDate must be YYYY-MM-DD'),
  note: z.string().optional(),
})
export type Citation = z.infer<typeof CitationSchema>

export const RatingLevelSchema = z.enum(['low', 'medium', 'high', 'unknown'])
export type RatingLevel = z.infer<typeof RatingLevelSchema>

export const PerformanceSchema = z.object({
  skinFeel: LocalizedTextSchema,
  pillingTendency: RatingLevelSchema,
  pillingNotes: LocalizedTextSchema.optional(),
  emulsificationAbility: RatingLevelSchema,
  suspensionStabilization: RatingLevelSchema,
})
export type Performance = z.infer<typeof PerformanceSchema>

export const TradeNameSchema = z.object({
  name: z.string().min(1),
  supplier: z.string().min(1),
})

export const SuitableSystemSchema = z.object({
  system: LocalizedTextSchema,
  notes: LocalizedTextSchema.optional(),
})

export const DataCompletenessSchema = z.enum(['verified', 'partial', 'unverified-flagged'])

export const IngredientCategorySchema = z.enum(['emulsifier', 'polymer'])

export const IngredientSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, 'slug must be lowercase kebab-case'),
  category: IngredientCategorySchema,

  inciName: z.string().min(1),
  nameZh: z.string().min(1),
  tradeNames: z.array(TradeNameSchema).min(1),

  chemicalClass: LocalizedTextSchema.optional(),
  chemicalStructureSummary: LocalizedTextSchema,

  hlb: z
    .union([z.number(), z.object({ min: z.number(), max: z.number() })])
    .optional(),
  appearance: LocalizedTextSchema.optional(),

  performance: PerformanceSchema,

  strengths: z.array(LocalizedTextSchema).min(1),
  weaknesses: z.array(LocalizedTextSchema).min(1),

  suitableSystems: z.array(SuitableSystemSchema).min(1),

  typicalUseLevel: z
    .object({ min: z.number(), max: z.number(), unit: z.literal('%') })
    .optional(),

  regulatoryNotes: LocalizedTextSchema.optional(),

  relatedIngredientSlugs: z.array(z.string()),

  citations: z.array(CitationSchema),
  dataCompleteness: DataCompletenessSchema,
  flaggedFields: z.array(z.string()).optional(),

  lastUpdated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'lastUpdated must be YYYY-MM-DD'),
})

export type Ingredient = z.infer<typeof IngredientSchema>
export type IngredientCategory = z.infer<typeof IngredientCategorySchema>

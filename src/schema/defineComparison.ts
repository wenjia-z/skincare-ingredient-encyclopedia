import { ComparisonGroupSchema, type ComparisonGroup } from './comparison.schema'

export function defineComparison(data: unknown): ComparisonGroup {
  const result = ComparisonGroupSchema.safeParse(data)
  if (!result.success && import.meta.env?.DEV) {
    console.warn('[comparison schema] issues in a data file:', result.error.issues)
  }
  return data as ComparisonGroup
}

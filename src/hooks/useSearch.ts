import { useDeferredValue, useMemo } from 'react'
import Fuse from 'fuse.js'
import type { Ingredient } from '../schema/ingredient.schema'

const FUSE_OPTIONS: ConstructorParameters<typeof Fuse<Ingredient>>[1] = {
  keys: [
    { name: 'inciName', weight: 2 },
    { name: 'nameZh', weight: 2 },
    { name: 'tradeNames.name', weight: 1.5 },
    { name: 'chemicalClass.zh', weight: 0.5 },
    { name: 'chemicalClass.en', weight: 0.5 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
}

export function useSearch(ingredients: Ingredient[], query: string): Ingredient[] {
  const deferredQuery = useDeferredValue(query)

  const fuse = useMemo(() => new Fuse(ingredients, FUSE_OPTIONS), [ingredients])

  return useMemo(() => {
    const trimmed = deferredQuery.trim()
    if (!trimmed) return ingredients
    return fuse.search(trimmed).map((result) => result.item)
  }, [fuse, ingredients, deferredQuery])
}

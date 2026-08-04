import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useSearch } from './useSearch'
import type { Ingredient } from '../schema/ingredient.schema'

function makeIngredient(overrides: Partial<Ingredient>): Ingredient {
  return {
    slug: 'test-ingredient',
    category: 'emulsifier',
    inciName: 'Polysorbate 60',
    nameZh: '聚山梨醇酯60',
    tradeNames: [{ name: 'Crillet 3', supplier: 'Croda' }],
    chemicalStructureSummary: { zh: '测试', en: 'test' },
    performance: {
      skinFeel: { zh: '测试', en: 'test' },
      pillingTendency: 'low',
      emulsificationAbility: 'high',
      suspensionStabilization: 'low',
    },
    strengths: [{ zh: '测试', en: 'test' }],
    weaknesses: [{ zh: '测试', en: 'test' }],
    suitableSystems: [{ system: { zh: '测试', en: 'test' } }],
    relatedIngredientSlugs: [],
    citations: [],
    dataCompleteness: 'verified',
    lastUpdated: '2026-01-01',
    ...overrides,
  }
}

describe('useSearch', () => {
  const ingredients = [
    makeIngredient({ slug: 'polysorbate-60', inciName: 'Polysorbate 60', nameZh: '聚山梨醇酯60' }),
    makeIngredient({ slug: 'carbomer', inciName: 'Carbomer', nameZh: '卡波姆' }),
  ]

  it('returns all ingredients for an empty query', () => {
    const { result } = renderHook(() => useSearch(ingredients, ''))
    expect(result.current).toHaveLength(2)
  })

  it('matches by INCI name', () => {
    const { result } = renderHook(() => useSearch(ingredients, 'Polysorbate'))
    expect(result.current.map((i) => i.slug)).toContain('polysorbate-60')
    expect(result.current.map((i) => i.slug)).not.toContain('carbomer')
  })

  it('matches by Chinese name', () => {
    const { result } = renderHook(() => useSearch(ingredients, '卡波姆'))
    expect(result.current.map((i) => i.slug)).toContain('carbomer')
  })
})

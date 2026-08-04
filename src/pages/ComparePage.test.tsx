import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '../i18n/LanguageContext'
import { ComparePage } from './ComparePage'
import type { Ingredient } from '../schema/ingredient.schema'

function makeIngredient(overrides: Partial<Ingredient>): Ingredient {
  return {
    slug: 'a',
    category: 'emulsifier',
    inciName: 'Ingredient A',
    nameZh: '原料甲',
    tradeNames: [{ name: 'Trade A', supplier: 'Supplier A' }],
    chemicalStructureSummary: { zh: '测试', en: 'test' },
    structureFunctionAnalysis: [{ aspect: { zh: '测试', en: 'test' }, explanation: { zh: '测试', en: 'test' } }],
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

vi.mock('../data', () => {
  const a = makeIngredient({ slug: 'a', inciName: 'Ingredient A', nameZh: '原料甲' })
  const b = makeIngredient({ slug: 'b', inciName: 'Ingredient B', nameZh: '原料乙' })
  return {
    ingredientsBySlug: { a, b },
    comparisonGroupsById: {},
  }
})

describe('ComparePage', () => {
  it('renders one column per requested slug from the query string', () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/compare?ids=a,b']}>
          <Routes>
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </MemoryRouter>
      </LanguageProvider>,
    )

    expect(screen.getByText('Ingredient A')).toBeInTheDocument()
    expect(screen.getByText('Ingredient B')).toBeInTheDocument()
  })
})

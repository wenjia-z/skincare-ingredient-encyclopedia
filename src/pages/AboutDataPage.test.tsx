import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '../i18n/LanguageContext'
import { AboutDataPage } from './AboutDataPage'
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
  const a = makeIngredient({ slug: 'a', dataCompleteness: 'verified' })
  const b = makeIngredient({ slug: 'b', dataCompleteness: 'partial' })
  const c = makeIngredient({ slug: 'c', dataCompleteness: 'partial' })
  const d = makeIngredient({ slug: 'd', dataCompleteness: 'unverified-flagged' })
  return { ingredients: [a, b, c, d] }
})

describe('AboutDataPage', () => {
  it('renders the three data-completeness badges with live counts', () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <AboutDataPage />
        </MemoryRouter>
      </LanguageProvider>,
    )

    expect(screen.getByText('数据已核实')).toBeInTheDocument()
    expect(screen.getByText('部分数据待核实')).toBeInTheDocument()
    expect(screen.getByText('数据未核实，谨慎参考')).toBeInTheDocument()
    // verified=1 and unverified-flagged=1 both render "1 / 4 个词条"; partial=2 renders "2 / 4 个词条"
    expect(screen.getAllByText('1 / 4 个词条')).toHaveLength(2)
    expect(screen.getByText('2 / 4 个词条')).toBeInTheDocument()
  })

  it('lists supplier sources', () => {
    render(
      <LanguageProvider>
        <MemoryRouter>
          <AboutDataPage />
        </MemoryRouter>
      </LanguageProvider>,
    )

    expect(screen.getAllByText(/Croda/).length).toBeGreaterThan(0)
  })
})

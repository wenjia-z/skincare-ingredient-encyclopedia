import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '../i18n/LanguageContext'
import { ingredients } from '../data'
import { IngredientDetailPage } from './IngredientDetailPage'

/**
 * Content QA gate: shallow-renders every real ingredient data file through
 * the detail page. Catches malformed content (e.g. a bad LocalizedText
 * shape) that would otherwise only surface as a runtime crash in production.
 */
describe('IngredientDetailPage content smoke test', () => {
  it.each(ingredients.map((i) => [i.slug, i] as const))('renders %s without crashing', (slug) => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={[`/ingredient/${slug}`]}>
          <Routes>
            <Route path="/ingredient/:slug" element={<IngredientDetailPage />} />
          </Routes>
        </MemoryRouter>
      </LanguageProvider>,
    )
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  if (ingredients.length === 0) {
    it.todo('no ingredient data files exist yet — this gate activates once seed content is added')
  }
})

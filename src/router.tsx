import { Routes, Route } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { IngredientDetailPage } from './pages/IngredientDetailPage'
import { ComparePage } from './pages/ComparePage'
import { NotFoundPage } from './pages/NotFoundPage'

export function AppRouter() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/emulsifiers" element={<CategoryPage category="emulsifier" />} />
        <Route path="/polymers" element={<CategoryPage category="polymer" />} />
        <Route path="/ingredient/:slug" element={<IngredientDetailPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/compare/:comparisonId" element={<ComparePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ingredientsByCategory } from '../data'
import { useSearch } from '../hooks/useSearch'
import { SearchBar } from '../components/search/SearchBar'
import { DataFlagBadge } from '../components/common/DataFlagBadge'
import type { IngredientCategory } from '../schema/ingredient.schema'

function formatHlb(hlb: number | { min: number; max: number } | undefined): string {
  if (hlb == null) return '—'
  return typeof hlb === 'number' ? String(hlb) : `${hlb.min}–${hlb.max}`
}

export function CategoryPage({ category }: { category: IngredientCategory }) {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const items = ingredientsByCategory[category]
  const results = useSearch(items, query)

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-ink-950">
          {t(category === 'emulsifier' ? 'navEmulsifiers' : 'navPolymers')}
        </h1>
        <p className="text-sm text-ink-500">{items.length}</p>
      </div>
      <SearchBar value={query} onChange={setQuery} />
      <div className="overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface-alt text-left">
              <th className="px-4 py-3 font-medium text-ink-500">{t('colInciName')}</th>
              <th className="px-4 py-3 font-medium text-ink-500">{t('colNameZh')}</th>
              <th className="px-4 py-3 font-medium text-ink-500">{t('colTradeName')}</th>
              <th className="px-4 py-3 font-medium text-ink-500">{t('colHlb')}</th>
              <th className="px-4 py-3 font-medium text-ink-500" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {results.map((ing) => (
              <tr key={ing.slug} className="hover:bg-surface-alt">
                <td className="px-4 py-3">
                  <Link to={`/ingredient/${ing.slug}`} className="font-medium text-ink-950 hover:text-accent-500">
                    {ing.inciName}
                  </Link>
                </td>
                <td className="px-4 py-3 text-ink-700">{ing.nameZh}</td>
                <td className="px-4 py-3 text-ink-700">{ing.tradeNames.map((tn) => tn.name).join(' · ')}</td>
                <td className="px-4 py-3 text-ink-700">{formatHlb(ing.hlb)}</td>
                <td className="px-4 py-3">
                  <DataFlagBadge dataCompleteness={ing.dataCompleteness} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {results.length === 0 && <p className="px-4 py-8 text-center text-ink-500">{t('searchNoResults')}</p>}
      </div>
    </div>
  )
}

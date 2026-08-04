import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { ingredientsBySlug, comparisonGroupsById } from '../data'
import { ComparisonTable } from '../components/detail/ComparisonTable'
import { NotFoundPage } from './NotFoundPage'

export function ComparePage() {
  const { comparisonId } = useParams<{ comparisonId: string }>()
  const [searchParams] = useSearchParams()
  const { t, L } = useLanguage()

  const group = comparisonId ? comparisonGroupsById[comparisonId] : undefined

  const adHocSlugs = useMemo(
    () => (searchParams.get('ids') ?? '').split(',').filter(Boolean),
    [searchParams],
  )

  const slugs = group?.ingredientSlugs ?? adHocSlugs
  const ingredients = slugs.map((s) => ingredientsBySlug[s]).filter(Boolean)

  if (ingredients.length < 2) return <NotFoundPage />

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-navy-950 dark:text-white">
        {group ? L(group.title) : t('sectionComparison')}
      </h1>
      {group?.summary && <p className="text-sm text-gray-600 dark:text-gray-300">{L(group.summary)}</p>}
      <ComparisonTable ingredients={ingredients} extraDimensions={group?.extraDimensions} />
    </div>
  )
}

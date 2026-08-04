import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'
import { DataFlagBadge } from '../common/DataFlagBadge'

export function IngredientCard({ ingredient }: { ingredient: Ingredient }) {
  const { lang, L } = useLanguage()
  const primaryName = lang === 'zh' ? ingredient.nameZh : ingredient.inciName
  const secondaryName = lang === 'zh' ? ingredient.inciName : ingredient.nameZh

  return (
    <Link
      to={`/ingredient/${ingredient.slug}`}
      className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-500 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-ink-950">{primaryName}</p>
          <p className="text-xs text-ink-500">{secondaryName}</p>
        </div>
        <DataFlagBadge dataCompleteness={ingredient.dataCompleteness} />
      </div>
      <p className="text-xs text-ink-500">{ingredient.tradeNames.map((t) => t.name).join(' · ')}</p>
      <p className="line-clamp-2 text-sm text-ink-700">{L(ingredient.chemicalStructureSummary)}</p>
    </Link>
  )
}

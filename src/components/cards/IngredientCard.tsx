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
      className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-accent-500 hover:shadow-md dark:border-white/10 dark:bg-navy-900"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-navy-950 dark:text-white">{primaryName}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{secondaryName}</p>
        </div>
        <DataFlagBadge dataCompleteness={ingredient.dataCompleteness} />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {ingredient.tradeNames.map((t) => t.name).join(' · ')}
      </p>
      <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
        {L(ingredient.chemicalStructureSummary)}
      </p>
    </Link>
  )
}

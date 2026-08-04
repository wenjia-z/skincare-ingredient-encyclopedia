import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'
import { Badge } from '../common/Badge'
import { DataFlagBadge } from '../common/DataFlagBadge'

function formatHlb(hlb: Ingredient['hlb']): string | null {
  if (hlb == null) return null
  return typeof hlb === 'number' ? `HLB ${hlb}` : `HLB ${hlb.min}–${hlb.max}`
}

export function IngredientDetailHeader({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()
  const hlbLabel = formatHlb(ingredient.hlb)

  return (
    <header className="flex flex-col gap-3 border-b border-gray-200 pb-6 dark:border-white/10">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="neutral">{t(ingredient.category === 'emulsifier' ? 'categoryEmulsifier' : 'categoryPolymer')}</Badge>
        <DataFlagBadge dataCompleteness={ingredient.dataCompleteness} />
        {hlbLabel && <Badge tone="accent">{hlbLabel}</Badge>}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-navy-950 dark:text-white">{ingredient.nameZh}</h1>
        <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">{ingredient.inciName}</p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {ingredient.tradeNames.map((tn) => `${tn.name}（${tn.supplier}）`).join(' · ')}
      </p>
      {ingredient.chemicalClass && (
        <p className="text-sm italic text-gray-500 dark:text-gray-400">{L(ingredient.chemicalClass)}</p>
      )}
    </header>
  )
}

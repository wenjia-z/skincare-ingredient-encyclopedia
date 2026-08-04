import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'
import { suppliersByName } from '../../data/suppliers'
import { Badge } from '../common/Badge'
import { DataFlagBadge } from '../common/DataFlagBadge'

function formatHlb(hlb: Ingredient['hlb']): string | null {
  if (hlb == null) return null
  return typeof hlb === 'number' ? `HLB ${hlb}` : `HLB ${hlb.min}–${hlb.max}`
}

export function IngredientDetailHeader({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()
  const hlbLabel = formatHlb(ingredient.hlb)
  const fallbackUrl = ingredient.citations.find((c) => c.url)?.url

  return (
    <header className="flex flex-col gap-3 border-b border-border pb-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="neutral">{t(ingredient.category === 'emulsifier' ? 'categoryEmulsifier' : 'categoryPolymer')}</Badge>
        <DataFlagBadge dataCompleteness={ingredient.dataCompleteness} />
        {hlbLabel && <Badge tone="accent">{hlbLabel}</Badge>}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-ink-950">{ingredient.nameZh}</h1>
        <p className="mt-1 text-lg text-ink-700">{ingredient.inciName}</p>
      </div>
      <p className="text-sm text-ink-500">
        {ingredient.tradeNames.map((tn, i) => {
          const url = suppliersByName[tn.supplier]?.url ?? fallbackUrl
          return (
            <span key={tn.name}>
              {i > 0 && ' · '}
              {tn.name}（
              {url ? (
                <a href={url} target="_blank" rel="noreferrer" className="underline decoration-dotted hover:text-accent-500">
                  {tn.supplier}
                </a>
              ) : (
                tn.supplier
              )}
              ）
            </span>
          )
        })}
      </p>
      {ingredient.chemicalClass && <p className="text-sm italic text-ink-500">{L(ingredient.chemicalClass)}</p>}
    </header>
  )
}

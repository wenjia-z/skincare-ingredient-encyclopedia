import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'

export function StructureFunctionAnalysis({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionStructureFunction')}</h2>
      <div className="space-y-3">
        {ingredient.structureFunctionAnalysis.map((point, i) => (
          <div key={i} className="rounded-lg border border-accent-400/30 bg-accent-400/5 p-4">
            <p className="mb-1 text-sm font-semibold text-accent-500">{L(point.aspect)}</p>
            <p className="text-sm leading-relaxed text-ink-700">{L(point.explanation)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

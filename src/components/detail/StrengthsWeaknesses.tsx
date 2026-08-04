import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'

export function StrengthsWeaknesses({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionStrengthsWeaknesses')}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-4">
          <h3 className="mb-2 text-sm font-semibold text-emerald-800">{t('sectionStrengths')}</h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-emerald-900">
            {ingredient.strengths.map((s, i) => (
              <li key={i}>{L(s)}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4">
          <h3 className="mb-2 text-sm font-semibold text-amber-800">{t('sectionWeaknesses')}</h3>
          <ul className="list-inside list-disc space-y-1 text-sm text-amber-900">
            {ingredient.weaknesses.map((w, i) => (
              <li key={i}>{L(w)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

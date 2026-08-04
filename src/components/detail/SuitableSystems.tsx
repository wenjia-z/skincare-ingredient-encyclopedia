import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'

export function SuitableSystems({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionSuitableSystems')}</h2>
      <ul className="space-y-2">
        {ingredient.suitableSystems.map((s, i) => (
          <li key={i} className="rounded-lg border border-border bg-surface px-4 py-2.5 text-sm">
            <span className="font-medium text-ink-950">{L(s.system)}</span>
            {s.notes && <span className="ml-2 text-ink-500">{L(s.notes)}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'

export function SuitableSystems({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-navy-950 dark:text-white">{t('sectionSuitableSystems')}</h2>
      <ul className="space-y-2">
        {ingredient.suitableSystems.map((s, i) => (
          <li
            key={i}
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm dark:border-white/10"
          >
            <span className="font-medium text-navy-950 dark:text-white">{L(s.system)}</span>
            {s.notes && <span className="ml-2 text-gray-500 dark:text-gray-400">{L(s.notes)}</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}

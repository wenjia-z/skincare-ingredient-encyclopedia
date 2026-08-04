import { useLanguage } from '../../i18n/LanguageContext'
import type { Citation } from '../../schema/ingredient.schema'

export function CitationList({ citations }: { citations: Citation[] }) {
  const { t } = useLanguage()
  if (citations.length === 0) return null

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-navy-950 dark:text-white">{t('sectionCitations')}</h2>
      <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {citations.map((c) => (
          <li key={c.id} className="border-l-2 border-gray-200 pl-3 dark:border-white/10">
            <span className="font-medium text-navy-950 dark:text-white">{c.supplier}</span>
            {' — '}
            {c.url ? (
              <a href={c.url} target="_blank" rel="noreferrer" className="underline hover:text-accent-500">
                {c.documentTitle}
              </a>
            ) : (
              c.documentTitle
            )}
            <span className="ml-2 text-gray-400 dark:text-gray-500">({c.accessedDate})</span>
            {c.note && <p className="mt-0.5 text-gray-500 dark:text-gray-400">{c.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  )
}

import { useLanguage } from '../../i18n/LanguageContext'
import type { Citation } from '../../schema/ingredient.schema'

export function CitationList({ citations }: { citations: Citation[] }) {
  const { t } = useLanguage()
  if (citations.length === 0) return null

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionCitations')}</h2>
      <ol className="space-y-3 text-sm text-ink-700">
        {citations.map((c) => (
          <li key={c.id} className="rounded-lg border border-border bg-surface p-3">
            <span className="font-medium text-ink-950">{c.supplier}</span>
            {' — '}
            {c.url ? (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="text-accent-500 underline decoration-dotted hover:opacity-75"
              >
                {c.documentTitle} ↗
              </a>
            ) : (
              c.documentTitle
            )}
            <span className="ml-2 text-ink-500">({c.accessedDate})</span>
            {c.note && <p className="mt-1 text-ink-500">{c.note}</p>}
          </li>
        ))}
      </ol>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { ingredientsBySlug } from '../../data'

export function RelatedIngredients({ currentSlug, slugs }: { currentSlug: string; slugs: string[] }) {
  const { t, lang } = useLanguage()
  const related = slugs.map((s) => ingredientsBySlug[s]).filter(Boolean)
  if (related.length === 0) return null

  const query = [currentSlug, ...slugs].join(',')

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionRelated')}</h2>
      <div className="flex flex-wrap items-center gap-2">
        {related.map((r) => (
          <Link
            key={r.slug}
            to={`/ingredient/${r.slug}`}
            className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-ink-700 hover:border-accent-500 hover:text-accent-500"
          >
            {lang === 'zh' ? r.nameZh : r.inciName}
          </Link>
        ))}
        <Link
          to={`/compare?ids=${query}`}
          className="ml-2 rounded-full bg-accent-500 px-3 py-1 text-sm font-medium text-white hover:bg-accent-500/90"
        >
          {t('compareCta')}
        </Link>
      </div>
    </section>
  )
}

import { useLanguage } from '../i18n/LanguageContext'
import { ingredients } from '../data'
import { suppliers } from '../data/suppliers'
import { DataFlagBadge } from '../components/common/DataFlagBadge'
import type { Ingredient } from '../schema/ingredient.schema'

const METHODOLOGY_STEPS = [
  ['aboutMethodologyStep1Title', 'aboutMethodologyStep1Body'],
  ['aboutMethodologyStep2Title', 'aboutMethodologyStep2Body'],
  ['aboutMethodologyStep3Title', 'aboutMethodologyStep3Body'],
  ['aboutMethodologyStep4Title', 'aboutMethodologyStep4Body'],
  ['aboutMethodologyStep5Title', 'aboutMethodologyStep5Body'],
] as const

const BADGE_LEVELS: { level: Ingredient['dataCompleteness']; descKey: 'aboutBadgeVerifiedDesc' | 'aboutBadgePartialDesc' | 'aboutBadgeUnverifiedDesc' }[] = [
  { level: 'verified', descKey: 'aboutBadgeVerifiedDesc' },
  { level: 'partial', descKey: 'aboutBadgePartialDesc' },
  { level: 'unverified-flagged', descKey: 'aboutBadgeUnverifiedDesc' },
]

export function AboutDataPage() {
  const { t, L } = useLanguage()

  const total = ingredients.length
  const countsByLevel = ingredients.reduce<Record<string, number>>((acc, ing) => {
    acc[ing.dataCompleteness] = (acc[ing.dataCompleteness] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="mx-auto max-w-3xl space-y-10 pb-16">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold text-ink-950">{t('aboutTitle')}</h1>
        <p className="text-ink-700">{t('aboutIntro')}</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink-950">{t('aboutMethodologyTitle')}</h2>
        <ol className="space-y-4">
          {METHODOLOGY_STEPS.map(([titleKey, bodyKey]) => (
            <li key={titleKey} className="rounded-lg border border-border bg-surface p-4">
              <h3 className="font-medium text-ink-950">{t(titleKey)}</h3>
              <p className="mt-1 text-sm text-ink-700">{t(bodyKey)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-ink-950">{t('aboutBadgesTitle')}</h2>
        <ul className="space-y-3">
          {BADGE_LEVELS.map(({ level, descKey }) => (
            <li key={level} className="rounded-lg border border-border bg-surface p-4">
              <div className="flex items-center justify-between gap-3">
                <DataFlagBadge dataCompleteness={level} />
                <span className="text-xs text-ink-500">
                  {t('aboutBadgeCount').replace('{n}', String(countsByLevel[level] ?? 0)).replace('{total}', String(total))}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-700">{t(descKey)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-ink-950">{t('aboutSourcesTitle')}</h2>
        <p className="text-sm text-ink-700">{t('aboutSourcesSuppliersIntro')}</p>
        <ul className="flex flex-wrap gap-2">
          {suppliers.map((s) => (
            <li key={s.name}>
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-ink-700 hover:text-accent-500"
                >
                  {s.name} <span className="text-ink-500">({s.country})</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-ink-700">
                  {s.name} <span className="text-ink-500">({s.country})</span>
                </span>
              )}
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-700">{t('aboutSourcesFallbackIntro')}</p>
      </section>

      <section className="space-y-2 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <h2 className="text-lg font-semibold text-ink-950">{t('aboutLimitationsTitle')}</h2>
        <p className="text-sm text-ink-700">{t('aboutLimitationsBody')}</p>
      </section>

      <p className="text-xs text-ink-500">
        {L({ zh: `本页数据统计基于站内 ${total} 个原料词条，随内容更新自动重新计算。`, en: `Counts above are computed live from the ${total} ingredient entries on this site and update automatically as content is added.` })}
      </p>
    </div>
  )
}

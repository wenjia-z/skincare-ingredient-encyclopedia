import type { ReactNode } from 'react'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'
import { RatingBadge } from '../common/RatingBadge'

export function PropertyTable({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()
  const { performance } = ingredient

  const rows: Array<{ label: string; value: ReactNode; notes?: string }> = [
    { label: t('perfSkinFeel'), value: L(performance.skinFeel) },
    {
      label: t('perfPilling'),
      value: <RatingBadge level={performance.pillingTendency} />,
      notes: performance.pillingNotes ? L(performance.pillingNotes) : undefined,
    },
    { label: t('perfEmulsification'), value: <RatingBadge level={performance.emulsificationAbility} /> },
    { label: t('perfSuspension'), value: <RatingBadge level={performance.suspensionStabilization} /> },
  ]

  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionPerformance')}</h2>
      <dl className="divide-y divide-border rounded-lg border border-border bg-surface">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
            <dt className="w-40 shrink-0 text-sm font-medium text-ink-500">{row.label}</dt>
            <dd className="flex-1 text-sm text-ink-950">
              {row.value}
              {row.notes && <span className="ml-2 text-ink-500">{row.notes}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

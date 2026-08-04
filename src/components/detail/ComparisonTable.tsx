import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'
import type { ComparisonGroup } from '../../schema/comparison.schema'
import { RatingBadge } from '../common/RatingBadge'

function formatHlb(hlb: Ingredient['hlb']): string {
  if (hlb == null) return '—'
  return typeof hlb === 'number' ? String(hlb) : `${hlb.min}–${hlb.max}`
}

export function ComparisonTable({
  ingredients,
  extraDimensions,
}: {
  ingredients: Ingredient[]
  extraDimensions?: ComparisonGroup['extraDimensions']
}) {
  const { t, lang, L } = useLanguage()

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-surface">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-surface-alt">
            <th className="sticky left-0 bg-surface-alt px-4 py-3 text-left font-medium text-ink-500">{' '}</th>
            {ingredients.map((ing) => (
              <th key={ing.slug} className="px-4 py-3 text-left font-semibold text-ink-950">
                {lang === 'zh' ? ing.nameZh : ing.inciName}
                <div className="text-xs font-normal text-ink-500">
                  {lang === 'zh' ? ing.inciName : ing.nameZh}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          <tr>
            <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">{t('colHlb')}</td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5 text-ink-950">
                {formatHlb(ing.hlb)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">{t('perfSkinFeel')}</td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5 text-ink-950">
                {L(ing.performance.skinFeel)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">{t('perfPilling')}</td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5">
                <RatingBadge level={ing.performance.pillingTendency} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">
              {t('perfEmulsification')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5">
                <RatingBadge level={ing.performance.emulsificationAbility} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">{t('perfSuspension')}</td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5">
                <RatingBadge level={ing.performance.suspensionStabilization} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">
              {t('sectionSuitableSystems')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5 text-ink-950">
                {ing.suitableSystems.map((s) => L(s.system)).join('、')}
              </td>
            ))}
          </tr>
          {extraDimensions?.map((dim) => (
            <tr key={dim.key}>
              <td className="sticky left-0 bg-surface px-4 py-2.5 font-medium text-ink-500">{L(dim.label)}</td>
              {ingredients.map((ing) => (
                <td key={ing.slug} className="px-4 py-2.5 text-ink-950">
                  {dim.valuesBySlug[ing.slug] ? L(dim.valuesBySlug[ing.slug]) : '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

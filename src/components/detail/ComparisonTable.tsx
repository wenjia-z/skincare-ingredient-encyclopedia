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
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-white/10">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className="bg-gray-50 dark:bg-navy-900">
            <th className="sticky left-0 bg-gray-50 px-4 py-3 text-left font-medium text-gray-500 dark:bg-navy-900 dark:text-gray-400">
              {' '}
            </th>
            {ingredients.map((ing) => (
              <th key={ing.slug} className="px-4 py-3 text-left font-semibold text-navy-950 dark:text-white">
                {lang === 'zh' ? ing.nameZh : ing.inciName}
                <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                  {lang === 'zh' ? ing.inciName : ing.nameZh}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
          <tr>
            <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
              {t('colHlb')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5 text-navy-950 dark:text-white">
                {formatHlb(ing.hlb)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
              {t('perfSkinFeel')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5 text-navy-950 dark:text-white">
                {L(ing.performance.skinFeel)}
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
              {t('perfPilling')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5">
                <RatingBadge level={ing.performance.pillingTendency} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
              {t('perfEmulsification')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5">
                <RatingBadge level={ing.performance.emulsificationAbility} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
              {t('perfSuspension')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5">
                <RatingBadge level={ing.performance.suspensionStabilization} />
              </td>
            ))}
          </tr>
          <tr>
            <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
              {t('sectionSuitableSystems')}
            </td>
            {ingredients.map((ing) => (
              <td key={ing.slug} className="px-4 py-2.5 text-navy-950 dark:text-white">
                {ing.suitableSystems.map((s) => L(s.system)).join('、')}
              </td>
            ))}
          </tr>
          {extraDimensions?.map((dim) => (
            <tr key={dim.key}>
              <td className="sticky left-0 bg-white px-4 py-2.5 font-medium text-gray-500 dark:bg-navy-950 dark:text-gray-400">
                {L(dim.label)}
              </td>
              {ingredients.map((ing) => (
                <td key={ing.slug} className="px-4 py-2.5 text-navy-950 dark:text-white">
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

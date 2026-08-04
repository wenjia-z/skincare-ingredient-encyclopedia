import { useLanguage } from '../../i18n/LanguageContext'
import type { Ingredient } from '../../schema/ingredient.schema'

export function ChemicalStructureSection({ ingredient }: { ingredient: Ingredient }) {
  const { t, L } = useLanguage()
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-ink-950">{t('sectionChemicalStructure')}</h2>
      <p className="rounded-lg border border-border bg-surface p-4 text-sm leading-relaxed text-ink-700">
        {L(ingredient.chemicalStructureSummary)}
      </p>
    </section>
  )
}

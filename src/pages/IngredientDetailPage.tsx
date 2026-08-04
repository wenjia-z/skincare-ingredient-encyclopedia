import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { useIngredientBySlug } from '../hooks/useIngredients'
import { IngredientDetailHeader } from '../components/detail/IngredientDetailHeader'
import { ChemicalStructureSection } from '../components/detail/ChemicalStructureSection'
import { StructureFunctionAnalysis } from '../components/detail/StructureFunctionAnalysis'
import { PropertyTable } from '../components/detail/PropertyTable'
import { StrengthsWeaknesses } from '../components/detail/StrengthsWeaknesses'
import { SuitableSystems } from '../components/detail/SuitableSystems'
import { RelatedIngredients } from '../components/detail/RelatedIngredients'
import { CitationList } from '../components/detail/CitationList'
import { NotFoundPage } from './NotFoundPage'

export function IngredientDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const ingredient = useIngredientBySlug(slug)
  const { t } = useLanguage()

  if (!ingredient) return <NotFoundPage />

  return (
    <div className="space-y-8">
      <Link to="/" className="text-sm text-ink-500 hover:text-accent-500">
        ← {t('backToList')}
      </Link>
      <IngredientDetailHeader ingredient={ingredient} />
      <ChemicalStructureSection ingredient={ingredient} />
      <StructureFunctionAnalysis ingredient={ingredient} />
      <PropertyTable ingredient={ingredient} />
      <StrengthsWeaknesses ingredient={ingredient} />
      <SuitableSystems ingredient={ingredient} />
      <RelatedIngredients currentSlug={ingredient.slug} slugs={ingredient.relatedIngredientSlugs} />
      <CitationList citations={ingredient.citations} />
    </div>
  )
}

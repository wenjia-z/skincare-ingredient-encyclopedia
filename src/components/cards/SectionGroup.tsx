import type { Ingredient } from '../../schema/ingredient.schema'
import { IngredientCard } from './IngredientCard'

export function SectionGroup({ letter, ingredients }: { letter: string; ingredients: Ingredient[] }) {
  return (
    <section id={`letter-${letter}`} className="scroll-mt-20">
      <h2 className="mb-3 inline-block rounded bg-accent-500 px-2 py-0.5 text-sm font-bold text-white">
        {letter}
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.slug} ingredient={ingredient} />
        ))}
      </div>
    </section>
  )
}

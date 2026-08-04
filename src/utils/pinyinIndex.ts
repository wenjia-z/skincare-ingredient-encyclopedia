import { pinyin } from 'pinyin-pro'
import type { Ingredient } from '../schema/ingredient.schema'
import type { Lang } from '../i18n/LanguageContext'

const FALLBACK_BUCKET = '#'

/**
 * The alphabet-index bucket an ingredient sorts under. In Chinese mode this
 * is the pinyin initial of `nameZh` (matches how Chinese dictionary/glossary
 * apps index bilingual terms); in English mode it's the INCI first letter.
 */
export function indexLetterFor(ingredient: Ingredient, lang: Lang): string {
  const source = lang === 'zh' ? ingredient.nameZh : ingredient.inciName
  const letter =
    lang === 'zh'
      ? pinyin(source.charAt(0), { pattern: 'first', toneType: 'none' }).trim().charAt(0)
      : source.trim().charAt(0)

  const upper = letter.toUpperCase()
  return /^[A-Z]$/.test(upper) ? upper : FALLBACK_BUCKET
}

export function groupByIndexLetter(
  ingredients: Ingredient[],
  lang: Lang,
): Map<string, Ingredient[]> {
  const groups = new Map<string, Ingredient[]>()
  for (const ingredient of ingredients) {
    const letter = indexLetterFor(ingredient, lang)
    const bucket = groups.get(letter)
    if (bucket) bucket.push(ingredient)
    else groups.set(letter, [ingredient])
  }
  return new Map([...groups.entries()].sort(([a], [b]) => a.localeCompare(b)))
}

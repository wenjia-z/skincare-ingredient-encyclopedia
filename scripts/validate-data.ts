import { readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import { z } from 'zod'
import { IngredientSchema, type Ingredient } from '../src/schema/ingredient.schema'
import { ComparisonGroupSchema, type ComparisonGroup } from '../src/schema/comparison.schema'

const ROOT = new URL('..', import.meta.url).pathname
const INGREDIENTS_DIR = join(ROOT, 'src/data/ingredients')
const COMPARISONS_DIR = join(ROOT, 'src/data/comparisons')

function walkTsFiles(dir: string): string[] {
  const out: string[] = []
  let entries: ReturnType<typeof readdirSync>
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkTsFiles(full))
    else if (entry.name.endsWith('.ts')) out.push(full)
  }
  return out
}

interface Problem {
  file: string
  message: string
}

async function main() {
  const problems: Problem[] = []

  // --- Ingredients ---
  const ingredientFiles = walkTsFiles(INGREDIENTS_DIR)
  const ingredients: Array<{ file: string; data: Ingredient }> = []

  for (const file of ingredientFiles) {
    const mod = await import(pathToFileURL(file).href)
    const rel = relative(ROOT, file)
    const result = IngredientSchema.safeParse(mod.default)
    if (!result.success) {
      const tree = z.treeifyError(result.error)
      problems.push({ file: rel, message: JSON.stringify(tree) })
      continue
    }
    const ingredient = result.data

    const expectedCategoryFolder = ingredient.category === 'emulsifier' ? 'emulsifiers' : 'polymers'
    if (!rel.includes(`ingredients/${expectedCategoryFolder}/`)) {
      problems.push({
        file: rel,
        message: `category "${ingredient.category}" does not match folder (expected under ingredients/${expectedCategoryFolder}/)`,
      })
    }

    const expectedFilename = `${ingredient.slug}.ts`
    if (!file.endsWith(`/${expectedFilename}`)) {
      problems.push({ file: rel, message: `slug "${ingredient.slug}" does not match filename` })
    }

    if (ingredient.citations.length === 0 && ingredient.dataCompleteness !== 'unverified-flagged') {
      problems.push({
        file: rel,
        message: `no citations present but dataCompleteness is "${ingredient.dataCompleteness}" (expected "unverified-flagged" or at least one citation)`,
      })
    }

    ingredients.push({ file: rel, data: ingredient })
  }

  // slug uniqueness
  const slugCounts = new Map<string, string[]>()
  for (const { file, data } of ingredients) {
    const files = slugCounts.get(data.slug) ?? []
    files.push(file)
    slugCounts.set(data.slug, files)
  }
  for (const [slug, files] of slugCounts) {
    if (files.length > 1) {
      problems.push({ file: files.join(', '), message: `duplicate slug "${slug}"` })
    }
  }

  const knownSlugs = new Set(ingredients.map((i) => i.data.slug))

  // referential integrity: relatedIngredientSlugs
  for (const { file, data } of ingredients) {
    for (const related of data.relatedIngredientSlugs) {
      if (!knownSlugs.has(related)) {
        problems.push({ file, message: `relatedIngredientSlugs references unknown slug "${related}"` })
      }
    }
  }

  // --- Comparisons ---
  const comparisonFiles = walkTsFiles(COMPARISONS_DIR)
  const comparisons: Array<{ file: string; data: ComparisonGroup }> = []

  for (const file of comparisonFiles) {
    const mod = await import(pathToFileURL(file).href)
    const rel = relative(ROOT, file)
    const result = ComparisonGroupSchema.safeParse(mod.default)
    if (!result.success) {
      const tree = z.treeifyError(result.error)
      problems.push({ file: rel, message: JSON.stringify(tree) })
      continue
    }
    comparisons.push({ file: rel, data: result.data })
  }

  for (const { file, data } of comparisons) {
    for (const slug of data.ingredientSlugs) {
      if (!knownSlugs.has(slug)) {
        problems.push({ file, message: `ingredientSlugs references unknown slug "${slug}"` })
      }
    }
  }

  // comparison id uniqueness
  const comparisonIdCounts = new Map<string, string[]>()
  for (const { file, data } of comparisons) {
    const files = comparisonIdCounts.get(data.id) ?? []
    files.push(file)
    comparisonIdCounts.set(data.id, files)
  }
  for (const [id, files] of comparisonIdCounts) {
    if (files.length > 1) problems.push({ file: files.join(', '), message: `duplicate comparison id "${id}"` })
  }

  // --- lastUpdated not in the future ---
  const today = new Date().toISOString().slice(0, 10)
  for (const { file, data } of ingredients) {
    if (data.lastUpdated > today) {
      problems.push({ file, message: `lastUpdated "${data.lastUpdated}" is in the future` })
    }
  }

  console.log(`Checked ${ingredients.length} ingredient(s), ${comparisons.length} comparison group(s).`)

  if (problems.length > 0) {
    console.error(`\n${problems.length} problem(s) found:\n`)
    for (const p of problems) {
      console.error(`  ${p.file}: ${p.message}`)
    }
    process.exit(1)
  }

  console.log('All data files are valid.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

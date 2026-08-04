import { readdirSync } from 'node:fs'
import { join, relative } from 'node:path'
import { pathToFileURL } from 'node:url'
import type { Ingredient } from '../src/schema/ingredient.schema'

const ROOT = new URL('..', import.meta.url).pathname
const INGREDIENTS_DIR = join(ROOT, 'src/data/ingredients')
const TIMEOUT_MS = 8000

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

async function checkUrl(url: string): Promise<{ ok: boolean; status?: number; error?: string }> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller.signal })
    return { ok: res.ok, status: res.status }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) }
  } finally {
    clearTimeout(timeout)
  }
}

async function main() {
  const files = walkTsFiles(INGREDIENTS_DIR)
  const failures: string[] = []
  let checked = 0

  for (const file of files) {
    const mod = await import(pathToFileURL(file).href)
    const ingredient = mod.default as Ingredient
    const rel = relative(ROOT, file)

    for (const citation of ingredient.citations ?? []) {
      if (!citation.url) continue
      checked++
      const result = await checkUrl(citation.url)
      if (!result.ok) {
        failures.push(
          `${rel}: ${citation.url} — ${result.status ?? result.error ?? 'unreachable'}`,
        )
      }
    }
  }

  console.log(`Checked ${checked} citation URL(s).`)
  if (failures.length > 0) {
    console.warn(`\n${failures.length} link(s) failed (non-blocking):\n`)
    for (const f of failures) console.warn(`  ${f}`)
  } else {
    console.log('All citation links reachable.')
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

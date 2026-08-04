# 护肤原料百科 / Skincare Ingredient Encyclopedia

A bilingual (Chinese / English) technical encyclopedia of cosmetic formulation ingredients, focused on **emulsifiers** and **polymers** used in serum and cream formulation. Combines supplier technical data with structural-chemistry-informed formulation analysis.

Live site: https://wenjia-z.github.io/skincare-ingredient-encyclopedia/

## What's here

Each ingredient entry includes: Chinese name, trade name(s) + supplier, INCI name, a brief chemical structure summary, performance characteristics (skin feel, pilling tendency, emulsification ability, suspension/stabilization), structural strengths/weaknesses, suitable formulation systems, related-ingredient comparisons, and source citations.

**Data integrity:** technical claims are sourced from real supplier TDS/spec sheets, CosIng, or established cosmetic-chemistry literature — never fabricated. Every entry carries a `dataCompleteness` flag (`verified` / `partial` / `unverified-flagged`); anything not solidly cited is visibly flagged in the UI rather than presented as fact. See [`docs/RESEARCH_WORKFLOW.md`](docs/RESEARCH_WORKFLOW.md) for the citation process and content backlog.

## Development

```bash
npm install
npm run dev            # start dev server
npm run test            # run tests
npm run validate-data   # validate all ingredient/comparison data files
npm run lint             # lint + typecheck
npm run build            # production build
```

## Adding an ingredient

Add a new file under `src/data/ingredients/emulsifiers/` or `src/data/ingredients/polymers/`, named `<slug>.ts`, exporting a `defineIngredient({...})` call matching the `Ingredient` schema in `src/schema/ingredient.schema.ts`. It's picked up automatically — no index file to edit. Run `npm run validate-data` to check it.

## Stack

Vite + React + TypeScript, Tailwind CSS v4, react-router-dom (HashRouter), Fuse.js for search, zod for schema validation, pinyin-pro for the bilingual alphabet index. No backend — all data is bundled at build time and deployed as a static site via GitHub Actions → GitHub Pages.

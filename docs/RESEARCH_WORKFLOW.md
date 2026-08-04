# Content Research Workflow

This project's core value is trustworthy technical data. **No fabricated numbers or claims** — every technical fact must trace back to a real, cited source.

## Required: structure–function analysis

Every entry's `structureFunctionAnalysis` array must explicitly connect a molecular-structure feature to the resulting property (why does *this* structure give *this* emulsification/suspension/skin-feel/pilling behavior?) — not just describe the structure and the property separately. Aim for one point per major performance property. This is general structure-function chemistry reasoning grounded in the same structural facts already in `chemicalStructureSummary`/citations — it doesn't need its own separate citation, but should not introduce new factual claims (numbers, supplier claims) that aren't already sourced elsewhere in the entry.

## Per-ingredient procedure

1. **Search** for the official manufacturer TDS/product page. Query pattern: `"<INCI name>" OR "<trade name>" technical data sheet`. Major suppliers (Croda, Seppic, BASF, Evonik, Ashland, Clariant, Lubrizol, Dow) have public ingredient-finder tools. **Check both English and Chinese-language supplier sites** — Chinese-domestic suppliers (e.g. Sino Lion) often have more complete data on their Chinese site than their English one.
2. **Fetch** the page/PDF and extract: INCI name, HLB, appearance, recommended use level, solubility/compatibility notes, applications.
3. **Record every fact with a citation** — `supplier`, `documentTitle`, `url` (if available), `accessedDate` (the actual date you looked it up), and an optional `note` (e.g. "p.2, HLB value").
4. **If the primary TDS is gated** (many require a "request sample" login), fall back to: the supplier's public description page, [CosIng](https://ec.europa.eu/growth/tools-databases/cosing/) for INCI/regulatory confirmation, or established literature (e.g. *Harry's Cosmeticology*, published cosmetic-chemistry reviews). Mark `dataCompleteness: 'partial'`.
5. **If no public data exists at all** (common for newer/emerging or Chinese-domestic ingredients) — still write the entry, but set `dataCompleteness: 'unverified-flagged'` and list the affected fields in `flaggedFields`. **Never invent a number to fill a gap.**
6. Chemical-structure explanations and general strengths/weaknesses may draw on established structure-function cosmetic chemistry (general science, not a proprietary supplier claim) — but cite a textbook/review where feasible rather than presenting it as supplier-sourced.

## Realistic expectations

Producing entries with genuine per-field citations typically takes several search/fetch round-trips per ingredient to find a fetchable, non-gated source. A meaningful fraction — especially emerging and Chinese-domestic ingredients — will legitimately land as `partial` or `unverified-flagged` on the first pass. That's the honest outcome, not a bug to paper over.

## Parallelizing bulk research

Batch ~4-5 ingredients per research pass, one category folder at a time (`src/data/ingredients/emulsifiers/` or `.../polymers/`). Because each ingredient is its own file, parallel batches never touch the same file — no merge conflicts. After a batch lands, run `npm run validate-data` before merging.

## Starter candidate backlog

Drawn from general domain knowledge — **unverified until researched**. Confirm/correct every detail during the actual research pass; this list is a worklist, not a source of truth.

### Emulsifiers (~18-20)

Polysorbate 60 / 80 (Croda Crillet), PEG-100 Stearate & Glyceryl Stearate blend, Cetearyl Alcohol + Ceteareth-20 (Croda Polawax), Glyceryl Stearate SE, Sorbitan Olivate & Cetearyl Olivate (Seppic/Hallstar Olivem 1000), Cetearyl Glucoside (BASF Emulgade / Seppic Montanov 68), C14-22 Alcohols & C12-20 Alkyl Glucoside (Seppic Montanov 202), Polyglyceryl-3 Methylglucose Distearate (Evonik Tego Care 450), Sucrose Stearate, Lecithin / Hydrogenated Lecithin, Polyglyceryl-4 Caprate, Cetyl PEG/PPG-10/1 Dimethicone (Evonik Abil EM 90), Sodium Stearoyl Glutamate, Glyceryl Stearate Citrate, Emulium Delta / Kappa (Gattefossé, cold-process), Ritamulse SCG, Xyliance, Sucragel-type mild emulsifiers, plus 1-2 Chinese-domestic alkyl-glucoside emulsifiers (e.g. Sino Lion).

### Polymers (~18-20)

Carbomer 940 / 980 (Lubrizol Carbopol Ultrez), Xanthan Gum (incl. Deosen, a Chinese producer), Hydroxyethylcellulose (Ashland Natrosol), Sodium CMC, Sclerotium Gum, Sepimax ZEN, Sepinov EMT 10 (Seppic), Aristoflex AVC / Velvet (Clariant), Pemulen TR-1 / TR-2 (Lubrizol), Structure XL / Plus (Ashland), Simulgel EG / NS (Seppic), Hydroxypropyl Starch Phosphate, Konjac Glucomannan, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Polyacrylate, Sepiplus 400, plus 1-2 Chinese-domestic acrylate/rheology-modifier lines.

## Citation format reference

```ts
{
  id: 'croda-crillet3-tds',
  supplier: 'Croda',
  documentTitle: 'Crillet 3 Technical Data Sheet',
  url: 'https://...',        // optional if gated/unavailable
  accessedDate: '2026-08-04', // real date, YYYY-MM-DD
  note: 'p.2, HLB value',     // optional
}
```

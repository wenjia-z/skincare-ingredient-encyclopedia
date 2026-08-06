import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'glucate-ss',
  category: 'emulsifier',
  inciName: 'Methyl Glucose Sesquistearate',
  nameZh: '倍半硬脂酸甲基葡糖苷酯',
  tradeNames: [{ name: 'Glucate SS', supplier: 'Lubrizol' }],
  chemicalClass: {
    zh: '糖类衍生物类非离子W/O乳化剂（甲基葡糖苷脂肪酸酯）',
    en: 'Sugar-derived non-ionic W/O emulsifier (methyl glucoside fatty-acid ester)',
  },
  chemicalStructureSummary: {
    zh: '由甲基葡糖苷（葡萄糖的甲基缩醛，保留多个游离羟基的糖环）与硬脂酸以约1.5:1（"倍半"）摩尔比酯化而成：亲水的糖环头基连同部分未酯化的游离羟基保留水合能力，疏水的C18硬脂酸酯尾链提供油溶性。据检索到的经销商数据摘要，其为类白色薄片状固体，气味温和，熔程约48-55°C，羟值约270-305 mg/g（反映较多游离羟基未被酯化），皂化值约125-140 mg/g，碘值0-1（饱和脂肪酸链，不含双键）。CAS号68936-95-8。',
    en: 'Formed by esterifying methyl glucoside (the methyl acetal of glucose — a sugar ring retaining multiple free hydroxyl groups) with stearic acid at roughly a 1.5:1 ("sesqui-") molar ratio: the hydrophilic sugar-ring head group, together with the hydroxyls left unesterified, retains hydration capacity, while the hydrophobic C18 stearate ester tail provides oil solubility. Per an indexed distributor data summary, it is an off-white flaked solid with a mild odor, a melt range of approx. 48-55°C, a hydroxyl value of approx. 270-305 mg/g (reflecting the substantial fraction of free, unesterified hydroxyls), a saponification value of approx. 125-140 mg/g, and an iodine value of 0-1 (a saturated fatty-acid chain, no double bonds). CAS 68936-95-8.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: 'W/O乳化能力从何而来', en: 'Where the W/O emulsification comes from' },
      explanation: {
        zh: '糖环上仅约1.5个羟基与硬脂酸发生酯化，分子保留体积较大、亲水性中等的糖环头基，同时携带一条占主导地位的疏水C18酯尾——这种偏亲油的结构与该原料约5-7的低HLB相符，也正是其作为水包油/油包水判定中偏向"油包水（W/O）"乳化剂的结构基础：较大的疏水部分更倾向于包裹分散在连续油相中的水滴界面。',
        en: "Because only ~1.5 of the sugar ring's several hydroxyls are esterified with stearic acid, the molecule retains a bulky, moderately hydrophilic sugar head next to a single dominant lipophilic C18 tail — a lipophilic-leaning structure consistent with the low HLB (~5-7) reported for the ingredient, and the structural reason it functions as a water-in-oil emulsifier: the bulkier lipophilic portion favors curving around water droplets dispersed in a continuous oil phase.",
      },
    },
    {
      aspect: { zh: '低眼部/皮肤刺激性从何而来', en: 'Where the low eye/skin irritation profile comes from' },
      explanation: {
        zh: '分子的亲水部分是依靠氢键水合的非离子糖环，而非离子型或聚氧乙烯型头基，因此与皮肤及眼粘膜蛋白的相互作用比同等HLB的离子型或PEG型乳化剂更温和，这与糖酯类原料普遍报告的低眼刺激性一致。',
        en: 'Because the hydrophilic portion of the molecule is a non-ionic sugar ring that hydrates via hydrogen bonding rather than an ionic or ethoxylated head group, it interacts less aggressively with skin and ocular proteins than ionic or PEG-based emulsifiers of comparable HLB — consistent with the generally low eye-irritation profile reported for sugar-derived esters.',
      },
    },
    {
      aspect: { zh: 'O/W体系中的粘度稳定辅助作用从何而来', en: 'Where the viscosity-stabilizing behavior in O/W systems comes from' },
      explanation: {
        zh: '部分酯化后糖环上残留的游离羟基（对应较高的羟值）使该分子在作为O/W体系中的辅助成分使用时，仍可通过氢键与水相相互作用，有助于稳定液滴界面与体系粘度——尽管其主要分类仍是W/O乳化剂。',
        en: 'The free hydroxyls remaining on the partially esterified sugar ring (reflected in the relatively high hydroxyl value) allow the molecule to also hydrogen-bond into the aqueous phase when used as a secondary/auxiliary ingredient in an O/W emulsion, helping stabilize droplet interfaces and viscosity even though its primary classification is as a W/O emulsifier.',
      },
    },
  ],
  hlb: { min: 5, max: 7 },
  appearance: {
    zh: '类白色薄片状固体，气味温和',
    en: 'off-white flaked solid, mild odor',
  },
  performance: {
    skinFeel: {
      zh: '蜡状固体，乳化后肤感顺滑，供应商数据称其眼刺激性极低',
      en: 'a waxy solid that gives a smooth skin feel once emulsified; supplier data describes an extremely low eye-irritation score',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'medium',
  },
  strengths: [
    {
      zh: '糖类来源、100%活性物的非离子W/O乳化剂，供应商数据称其眼刺激性极低',
      en: 'a naturally sugar-derived, 100%-active non-ionic W/O emulsifier with an extremely low reported eye-irritation score (supplier data)',
    },
    {
      zh: '获Halal及RSPO大宗平衡认证，并标注中国合规（供应商列表）',
      en: 'Halal and RSPO Mass Balance certified, and listed as China-compliant (supplier listing)',
    },
    {
      zh: 'HLB约5-7，适合稳定油包水体系（止汗产品、丰润乳霜等），无需依赖聚氧乙烯（PEG）型乳化剂',
      en: 'an HLB of approx. 5-7 makes it well suited to stabilizing water-in-oil systems (antiperspirants, rich creams) without relying on an ethoxylated (PEG-type) emulsifier',
    },
  ],
  weaknesses: [
    {
      zh: '为熔程48-55°C的蜡状薄片固体，需加热才能并入配方（热法乳化），与其他蜡酯类乳化剂类似',
      en: 'a waxy flake solid with a 48-55°C melt range that requires heating for incorporation (hot-process emulsification), similar to other wax-ester emulsifiers',
    },
    {
      zh: '本次研究可访问的信息源中未查得明确的推荐用量百分比——Lubrizol产品查找器及Knowde页面在本次抓取中均未返回可读内容，故此条目不臆造具体数字',
      en: 'no explicit recommended use-level percentage was found in the sources accessible during this research pass — the Lubrizol product-finder and Knowde pages both returned no retrievable content on direct fetch, so no percentage figure is invented here',
    },
    {
      zh: '作为偏W/O型乳化剂，单独用于轻薄型O/W配方时效果有限，通常需与主O/W乳化剂复配，或用于专门的W/O体系',
      en: 'as a W/O-leaning emulsifier, it is less suited on its own to lightweight O/W formats; it is typically paired with a primary O/W emulsifier or used in dedicated W/O systems',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'W/O乳化体系', en: 'W/O emulsion systems' },
      notes: {
        zh: '止汗/除臭产品、丰润型身体乳/面霜/啫喱（供应商应用列表）',
        en: 'antiperspirant/deodorant, rich body lotions/creams/gels (per supplier application list)',
      },
    },
    {
      system: { zh: '彩妆及湿巾', en: 'color cosmetics and wipes' },
      notes: {
        zh: '眼部、面部、手足、唇部及防晒护理场景（供应商应用列表）',
        en: 'eye, facial, hand/foot, lip, and sun-care use cases (per supplier application list)',
      },
    },
  ],
  relatedIngredientSlugs: ['glyceryl-stearate-se'],
  citations: [
    {
      id: 'specialchem-glucate-ss-tds',
      supplier: 'Lubrizol (via SpecialChem)',
      documentTitle: 'Glucate™ SS emulsifier by Lubrizol - Technical Datasheet',
      url: 'https://www.specialchem.com/cosmetics/product/lubrizol-glucate-ss-emulsifier',
      accessedDate: '2026-08-06',
      note: 'Direct fetch of this page returned HTTP 403; chemical composition (methyl glucose esterified with stearic acid), HLB (5.0-7.0), W/O emulsifier classification, appearance, melt range, ash/hydroxyl/iodine/saponification values, applications, and certifications were captured via a search-engine-indexed summary of the page — not independently confirmed first-hand. See flaggedFields.',
    },
    {
      id: 'knowde-glucate-ss-listing',
      supplier: 'Lubrizol Life Science (via Knowde)',
      documentTitle: 'Glucate SS emulsifier — Lubrizol Life Science product listing',
      url: 'https://www.knowde.com/stores/lubrizol-life-science/products/glucate-ss-emulsifier',
      accessedDate: '2026-08-06',
      note: 'Direct fetch returned no retrievable page content in this session (likely JS-rendered). Listing confirmed present via search-result title, including CAS 68936-95-8 and Halal certification.',
    },
    {
      id: 'goodscents-methylglucosesesquistearate-data',
      supplier: 'The Good Scents Company',
      documentTitle: 'methyl glucose sesquistearate, 68936-95-8 — ingredient data',
      url: 'http://www.thegoodscentscompany.com/data/rw1306861.html',
      accessedDate: '2026-08-06',
      note: 'Independent (non-Lubrizol) ingredient database used to cross-check CAS number and general chemical/INCI description.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['nameZh', 'hlb', 'appearance'],
  lastUpdated: '2026-08-06',
})

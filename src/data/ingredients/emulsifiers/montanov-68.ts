import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'montanov-68',
  category: 'emulsifier',
  inciName: 'Cetearyl Alcohol (and) Cetearyl Glucoside',
  nameZh: '鲸蜡硬脂醇（和）鲸蜡硬脂基葡糖苷',
  tradeNames: [{ name: 'Montanov 68', supplier: 'Seppic' }],
  chemicalClass: {
    zh: '烷基糖苷（APG）类非离子乳化剂',
    en: 'Alkyl polyglucoside (APG) non-ionic emulsifier',
  },
  chemicalStructureSummary: {
    zh: '由鲸蜡硬脂醇（C16-18脂肪醇，结构性/助稳定组分）与鲸蜡硬脂基葡糖苷（同一脂肪醇与葡萄糖缩合而成的糖苷，亲水头基来自糖环而非聚氧乙烯链）复配而成。糖苷型亲水头基使其在水中与脂肪醇共结晶形成层状液晶网络，结构上被描述为"模拟细胞膜脂质双分子层"的液晶促进剂。',
    en: 'A blend of Cetearyl Alcohol (a C16-18 fatty alcohol, providing structure/co-stabilization) and Cetearyl Glucoside (the same fatty alcohol condensed with glucose — a sugar-based, non-ethoxylated hydrophilic head group). The glucoside head group co-crystallizes with the fatty alcohol in water to form a lamellar liquid-crystal network, marketed as biomimicking the lipid bilayer of cell membranes.',
  },
  hlb: 10,
  appearance: { zh: '白色薄片状固体', en: 'white flakes/solid' },
  performance: {
    skinFeel: {
      zh: '柔软丰润、略带乳脂感，铺展性好，长效保湿感明显',
      en: 'soft, rich, slightly creamy skin feel with good spreadability and a long-lasting moisturized feel',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '糖苷型非离子乳化剂，不含PEG/聚氧乙烯链，天然来源（可再生植物原料），易生物降解',
      en: 'PEG-free, non-ethoxylated glucoside-type non-ionic emulsifier, from renewable plant sources and readily biodegradable',
    },
    {
      zh: '液晶促进剂特性带来良好的乳液稳定性与皮肤屏障修饰效果（供应商资料称可降低经皮水分流失TEWL）',
      en: 'liquid-crystal-promoting behavior supports emulsion stability and a barrier-modifying effect (supplier data cites reduced TEWL)',
    },
    {
      zh: 'pH稳定范围宽（3-12），配方兼容性好',
      en: 'broad pH stability range (3-12), good formulation compatibility',
    },
  ],
  weaknesses: [
    {
      zh: '固体蜡片状，需加热至约76°C进行热法乳化，工艺能耗较高',
      en: 'a solid flake requiring hot-process emulsification (~76°C), more energy-intensive than cold-process alternatives',
    },
    {
      zh: '肤感偏丰润，用于强调清爽感的配方时需谨慎控制用量',
      en: 'the rich skin feel requires careful dosing in formulas aiming for a light, non-greasy finish',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 乳霜 / 乳液', en: 'O/W cream / lotion' },
      notes: {
        zh: '可乳化多种油相（酯类、矿物油、植物油、硅油），油相占比可达40-60%',
        en: 'emulsifies a wide range of oil types (esters, mineral oil, vegetable oil, silicones); supports 40-60% oil phase',
      },
    },
    { system: { zh: '防晒产品', en: 'sun care' }, notes: { zh: '常见于配合有机防晒剂的配方', en: 'commonly used with organic UV filters' } },
  ],
  typicalUseLevel: { min: 1, max: 5, unit: '%' },
  relatedIngredientSlugs: ['olivem-1000'],
  citations: [
    {
      id: 'knowde-montanov68-tds',
      supplier: 'Seppic (via Knowde)',
      documentTitle: 'MONTANOV 68 MB — Product Technical Data',
      url: 'https://www.knowde.com/stores/seppic-inc/products/montanov-68-mb',
      accessedDate: '2026-08-04',
      note: 'Knowde hosts Seppic-supplied product data; used for INCI, appearance, skin-feel/performance claims, and applications. Seppic\'s own product page (seppic.com) rendered no content when fetched directly (JS-rendered SPA).',
    },
    {
      id: 'search-montanov68-hlb',
      supplier: 'SpecialChem (indexed excerpt)',
      documentTitle: 'MONTANOV 68 MB — Technical Datasheet',
      url: 'https://www.specialchem.com/cosmetics/product/seppic-montanov-68-mb',
      accessedDate: '2026-08-04',
      note: 'HLB=10, pH range 3-12, and use-level figures found via web search snippet of this page; direct fetch was blocked (HTTP 403), so not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb'],
  lastUpdated: '2026-08-04',
})

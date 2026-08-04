import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'polysorbate-60',
  category: 'emulsifier',
  inciName: 'Polysorbate 60',
  nameZh: '聚山梨醇酯60',
  tradeNames: [
    { name: 'Crillet 3', supplier: 'Croda' },
    { name: 'Tween 60', supplier: 'Croda (legacy trade name)' },
  ],
  chemicalClass: {
    zh: '聚氧乙烯化失水山梨醇脂肪酸酯（PEG型非离子表面活性剂）',
    en: 'Ethoxylated sorbitan fatty acid ester (PEG-type non-ionic surfactant)',
  },
  chemicalStructureSummary: {
    zh: '化学上为聚氧乙烯(20)失水山梨醇单硬脂酸酯：以失水山梨醇（山梨醇脱水环化产物）为骨架，一端酯化连接硬脂酸（亲油尾链），另一端接枝约20个环氧乙烷单元形成聚氧乙烯链（强亲水头基）。相较于不带PEG链的Span型失水山梨醇酯（如Sorbitan Stearate），聚氧乙烯链大幅提升了亲水性，使其HLB值达到约14.9，属于高HLB、水包油(O/W)型乳化剂，通常需与低HLB的油溶性乳化剂（如鲸蜡醇、失水山梨醇硬脂酸酯）复配构建完整乳化体系。',
    en: 'Chemically polyoxyethylene(20) sorbitan monostearate: a sorbitan (dehydrated sorbitol) backbone esterified at one position with stearic acid (the lipophilic tail), with roughly 20 ethylene oxide units grafted on to form a polyoxyethylene chain (the strongly hydrophilic head). Compared with the non-ethoxylated Span-type sorbitan esters (e.g. Sorbitan Stearate), the PEG chain substantially raises hydrophilicity, giving an HLB of ~14.9 — a high-HLB, O/W-type emulsifier that typically needs to be paired with a low-HLB, oil-soluble co-emulsifier (e.g. cetyl alcohol, sorbitan stearate) to build a complete emulsification system.',
  },
  hlb: 14.9,
  appearance: {
    zh: '常温下为黄棕色粘稠液体，气味微弱或无',
    en: 'yellow-brownish viscous liquid at room temperature, no or weak odor',
  },
  performance: {
    skinFeel: {
      zh: '单独使用时肤感偏水感，部分配方中可能带来轻微皂感/粘腻残留，常需与其他乳化剂复配改善肤感',
      en: 'watery skin feel on its own; some formulations report a mild soapy or slightly tacky residue, often improved by pairing with other emulsifiers',
    },
    pillingTendency: 'medium',
    emulsificationAbility: 'high',
    suspensionStabilization: 'low',
  },
  strengths: [
    {
      zh: '高HLB值使其成为经典的水包油(O/W)主乳化剂，与低HLB油溶性乳化剂复配灵活构建HLB体系',
      en: 'high HLB makes it a classic O/W primary emulsifier, flexibly paired with low-HLB oil-soluble co-emulsifiers to build a blended-HLB system',
    },
    {
      zh: '同时具有增溶能力，可用于增溶精油/香精等油溶性成分于水相中',
      en: 'also functions as a solubilizer for oil-soluble components (e.g. essential oils, fragrance) into the water phase',
    },
    {
      zh: '技术成熟、成本较低、供应稳定，配方经验数据丰富',
      en: 'mature, low-cost, widely available with extensive formulation track record',
    },
  ],
  weaknesses: [
    {
      zh: 'PEG型（聚氧乙烯化）结构，制造过程涉及环氧乙烷，成品可能含微量1,4-二噁烷残留，部分配方（尤其是标榜"PEG-free"或对该类残留敏感的品类）会主动规避',
      en: 'as a PEG-type (ethoxylated) surfactant, manufacture involves ethylene oxide and finished product may carry trace 1,4-dioxane — a reason some formulations (especially "PEG-free" positioned products) deliberately avoid this ingredient class',
    },
    {
      zh: '悬浮/稳定能力较弱，通常需要额外的增稠剂/流变改性剂配合以稳定体系',
      en: 'weak suspension/stabilization ability on its own, usually needs an additional thickener/rheology modifier to stabilize the system',
    },
    {
      zh: '单独使用时肤感和乳液细腻度不及现代复配型或聚合物乳化剂，配方灵活性相对较低',
      en: 'skin feel and emulsion fineness on its own lag behind modern blended or polymeric emulsifiers, giving comparatively less formulation flexibility',
    },
  ],
  suitableSystems: [
    {
      system: { zh: 'O/W 乳液/乳霜（经典HLB复配体系）', en: 'O/W lotion/cream (classic blended-HLB system)' },
      notes: { zh: '常与鲸蜡醇、失水山梨醇硬脂酸酯等低HLB乳化剂复配', en: 'commonly paired with cetyl alcohol, sorbitan stearate, or similar low-HLB co-emulsifiers' },
    },
    {
      system: { zh: '精油/香精增溶体系', en: 'essential-oil / fragrance solubilizing systems' },
    },
  ],
  typicalUseLevel: { min: 1, max: 10, unit: '%' },
  relatedIngredientSlugs: ['olivem-1000', 'montanov-68'],
  citations: [
    {
      id: 'makingcosmetics-ps60-tds',
      supplier: 'MakingCosmetics',
      documentTitle: 'Polysorbate 60 — Technical Data',
      url: 'https://www.makingcosmetics.com/EMF-PS60-01.html?lang=en_US',
      accessedDate: '2026-08-04',
      note: 'Used for INCI, HLB, appearance, use level, chemical description, and the 1,4-dioxane/ethylene-oxide note.',
    },
    {
      id: 'matangi-polysorbate-hlb',
      supplier: 'Matangi Industries (industry technical article)',
      documentTitle: 'HLB Values of Polysorbate 20, 40, 60 & 80 — Formulator Guide',
      url: 'https://www.matangiindustries.com/blog/hlb-values-polysorbate-20-40-60-80-formulator-guide',
      accessedDate: '2026-08-04',
      note: 'Used to cross-check HLB value and physical form; general technical article, not a primary supplier TDS.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['performance.skinFeel'],
  lastUpdated: '2026-08-04',
})

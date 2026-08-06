import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'plantasens-natural-emulsifier-cp40',
  category: 'emulsifier',
  inciName: 'Polyglyceryl-3 Polyricinoleate (and) Sorbitan Oleate',
  nameZh: '聚甘油-3聚蓖麻醇酸酯（和）失水山梨醇油酸酯',
  tradeNames: [{ name: 'Plantasens® Natural Emulsifier CP40', supplier: 'Clariant' }],
  chemicalClass: {
    zh: '聚甘油聚蓖麻醇酸酯/失水山梨醇酯类非离子W/O乳化剂复配体系',
    en: 'Polyglyceryl polyricinoleate / sorbitan ester non-ionic W/O emulsifier blend',
  },
  chemicalStructureSummary: {
    zh: '为两种天然来源酯类原料的复配体系：聚甘油-3聚蓖麻醇酸酯（PGPR，三聚甘油与蓖麻油衍生的聚蓖麻醇酸缩聚而成的大分子酯，具有柔性长链、多分支结构）与失水山梨醇油酸酯（失水山梨醇与油酸的单酯，Span型亲油乳化剂）。两者均为强亲油性非离子表面活性剂，供应商数据显示原料含棕榈来源成分、通过ISO 16128天然指数评估并获Ecocert等认证，专为高颜料负载的W/O体系（如防水防晒、彩妆）设计。',
    en: 'A blend of two naturally-derived ester ingredients: Polyglyceryl-3 Polyricinoleate (PGPR — a large, flexible, multiply-branched ester built from triglycerol condensed with polyricinoleic acid derived from castor oil) and Sorbitan Oleate (a mono-ester of sorbitan with oleic acid, a Span-type lipophilic emulsifier). Both are strongly lipophilic non-ionic surfactants; per supplier data the raw materials include palm-derived content, are assessed under the ISO 16128 natural-origin index, and carry certifications such as Ecocert — the blend is purpose-built for high-pigment-load W/O systems such as waterproof suncare and color cosmetics.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '高颜料负载W/O乳液的稳定能力从何而来', en: 'Where the ability to stabilize high-pigment-load W/O emulsions comes from' },
      explanation: {
        zh: 'PGPR分子具有柔性、多分支的聚蓖麻醇酸长链，能在颜料颗粒表面形成较厚的空间位阻层，通过物理阻隔而非静电排斥来防止颜料颗粒及水滴的聚集/絮凝；这一空间稳定机制不受电解质、UV滤剂等极性添加物干扰，是其被广泛用作高颜料/高UV滤剂负载防水彩妆及防晒乳化体系稳定剂的结构基础。',
        en: 'PGPR\'s flexible, multiply-branched polyricinoleic-acid chains form a relatively thick steric-hindrance layer on the surface of pigment particles, preventing particle/droplet aggregation and flocculation through physical steric bulk rather than electrostatic repulsion; this steric-stabilization mechanism is not disrupted by electrolytes or polar additives like UV filters — the structural basis for PGPR\'s wide use as a stabilizer in high-pigment/high-UV-filter-load waterproof color cosmetics and suncare emulsions.',
      },
    },
    {
      aspect: { zh: 'W/O乳化取向从何而来', en: 'Where the W/O emulsification orientation comes from' },
      explanation: {
        zh: 'PGPR与失水山梨醇油酸酯均为亲水头基很小、疏水尾链庞大的分子（PGPR的聚蓖麻醇酸链、失水山梨醇酯的油酸尾链），复配后整体HLB处于低值区间，符合Bancroft规则中"低HLB乳化剂更易稳定W/O乳液"的一般规律，因此该复配体系天然适配油包水（W/O）体系而非O/W体系。',
        en: 'Both PGPR and sorbitan oleate are molecules with small hydrophilic head groups and bulky hydrophobic tails (PGPR\'s polyricinoleic-acid chain; sorbitan oleate\'s oleic-acid tail), so the blend\'s overall HLB sits in the low range — consistent with the general Bancroft-rule pattern that low-HLB emulsifiers more readily stabilize W/O emulsions — which is why this blend is naturally suited to water-in-oil (W/O) rather than oil-in-water (O/W) systems.',
      },
    },
    {
      aspect: { zh: '滋润丰厚肤感从何而来', en: 'Where the rich, nourishing skin feel comes from' },
      explanation: {
        zh: '失水山梨醇油酸酯的油酸不饱和尾链在室温下不易紧密结晶，铺展性较好；与PGPR的柔性长链共同作用后，在皮肤表面留下的膜层偏柔软、油润而非刚性蜡质，这与供应商描述其"滋润丰厚后感"、适合干性/成熟/敏感肌配方的定位相符。',
        en: 'Sorbitan oleate\'s unsaturated oleic-acid tail does not pack into a tight crystal lattice at room temperature, giving good spreadability; combined with PGPR\'s flexible long chains, the residual film left on skin tends to be soft and oily rather than rigid and waxy — consistent with the supplier\'s description of a "rich, caring after-feel" suited to dry, mature, and sensitive-skin formulas.',
      },
    },
  ],
  appearance: {
    zh: '供应商资料未提供具体外观描述，暂标记为待确认',
    en: 'supplier documentation does not provide a specific appearance description — flagged as unconfirmed',
  },
  performance: {
    skinFeel: {
      zh: '供应商数据：肤感丰润、具滋养感，适合干性、成熟及敏感肌配方',
      en: 'per supplier data: rich, nourishing skin feel, suited to dry, mature, and sensitive-skin formulas',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: '供应商数据：可冷法加工，无需额外稳定剂，简化生产工艺',
      en: 'per supplier data: cold-processable without the need for additional stabilizers, simplifying manufacturing',
    },
    {
      zh: '与醇类、电解质、极性及非极性油、无机UV滤剂兼容性好，油相负载可达20-40%（供应商数据）',
      en: 'good compatibility with alcohol, electrolytes, polar and non-polar oils, and inorganic UV filters, supporting an oil-phase load of 20-40% (supplier data)',
    },
    {
      zh: '获Ecocert认证、ISO 16128天然指数评估、素食（Vegan）认证，并列入Whole Foods化妆品基准/优选成分名单，可再生碳指数（Renewable Carbon Index）100%（供应商数据）',
      en: 'Ecocert-certified, ISO 16128 natural-index assessed, Vegan-certified, and listed on Whole Foods Baseline/Premium ingredient standards; Renewable Carbon Index of 100% (supplier data)',
    },
  ],
  weaknesses: [
    {
      zh: '定位为W/O乳化剂，不适合追求清爽O/W质地的配方',
      en: 'positioned as a W/O emulsifier, not suited to formulas targeting a lighter O/W texture',
    },
    {
      zh: '供应商数据显示原料含棕榈来源成分，主打"天然"但非严格意义上的无棕榈产品，品牌方如强调无棕榈需另行确认',
      en: 'per supplier data the raw material includes palm-derived content; while marketed as "natural," it is not a strictly palm-free product, so brands emphasizing palm-free claims should verify separately',
    },
    {
      zh: '公开可查资料未提供HLB数值、推荐用量及外观描述，Clariant官方产品页与SpecialChem等页面在本次研究中多次遇到访问限制（403），数据完整度标记为partial',
      en: 'publicly available material does not provide an HLB value, recommended use level, or appearance description; the official Clariant product page and pages such as SpecialChem repeatedly returned access restrictions (403) during this research pass — data completeness is marked partial',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '天然定位防水防晒配方', en: 'natural-positioned waterproof suncare formulas' },
      notes: { zh: '与无机UV滤剂兼容性佳，供应商核心推荐场景之一', en: 'good compatibility with inorganic UV filters; one of the supplier\'s core recommended use cases' },
    },
    {
      system: { zh: '高颜料负载彩妆（防水型）', en: 'high-pigment-load color cosmetics (waterproof types)' },
    },
    {
      system: { zh: '干性/成熟/敏感肌滋润型乳霜、乳液及湿巾', en: 'rich creams, lotions, and wet wipes for dry, mature, and sensitive skin' },
    },
  ],
  typicalUseLevel: { min: 2, max: 8, unit: '%' },
  relatedIngredientSlugs: [],
  citations: [
    {
      id: 'clariant-plantasens-cp40-specialchem-summary',
      supplier: 'SpecialChem (cosmetics ingredient index, via web search)',
      documentTitle: 'Plantasens Natural Emulsifier CP40 - Clariant - Technical Datasheet listing',
      url: 'https://cosmetics.specialchem.com/product/i-clariant-plantasens-natural-emulsifier-cp40',
      accessedDate: '2026-08-06',
      note: 'Used for INCI name (Polyglyceryl-3 Polyricinoleate and Sorbitan Oleate), W/O functional positioning, cold-processability, compatibility (alcohol, electrolytes, polar/non-polar oils, oil load 20-40%), target skin types, and shelf life (2 years). Content retrieved via a search-engine indexed summary; direct WebFetch of this page returned HTTP 403 (bot protection).',
    },
    {
      id: 'clariant-official-plantasens-cp40',
      supplier: 'Clariant',
      documentTitle: 'Plantasens Emulsifier CP40 — Official Product Page',
      url: 'https://www.clariant.com/en/Solutions/Products/2014/11/27/16/53/Plantasens-Emulsifier-CP40',
      accessedDate: '2026-08-06',
      note: 'Directly fetched official Clariant product page. Used to confirm INCI name, W/O emulsifier function for high-pigment-load formulations, applications (natural suncare, waterproof formulations, creams/lotions), certifications (Ecocert Detergents, ISO 16128, Vegan, Whole Foods Baseline/Premium), Renewable Carbon Index (100%), and palm-derived content note. Page did not provide HLB, appearance, or a recommended use level.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['appearance', 'typicalUseLevel', 'performance.pillingTendency'],
  lastUpdated: '2026-08-06',
})

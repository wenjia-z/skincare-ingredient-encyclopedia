import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'emulsogen-hco-040',
  category: 'emulsifier',
  inciName: 'PEG-40 Hydrogenated Castor Oil',
  nameZh: 'PEG-40氢化蓖麻油',
  tradeNames: [{ name: 'Emulsogen® HCO 040', supplier: 'Clariant' }],
  chemicalClass: {
    zh: '乙氧基化氢化蓖麻油类非离子乳化剂/增溶剂',
    en: 'Ethoxylated hydrogenated castor oil non-ionic emulsifier / solubilizer',
  },
  chemicalStructureSummary: {
    zh: '以氢化蓖麻油（蓖麻油中不饱和的蓖麻油酸经氢化转变为饱和的12-羟基硬脂酸甘油三酯，呈蜡状固体）为原料，再经环氧乙烷（EO）加成反应，在其游离羟基上引入约40个环氧乙烷单元（PEG-40）而成。乙氧基化在原本疏水的氢化蓖麻油三酯骨架上"嫁接"出长而亲水的聚氧乙烯链，使分子同时具备疏水的脂肪酸三酯核心与亲水的PEG链臂，形成非离子表面活性剂结构。',
    en: 'Made from hydrogenated castor oil (castor oil\'s unsaturated ricinoleic acid triglyceride, hydrogenated into the saturated 12-hydroxystearic acid triglyceride — a waxy solid), which is then reacted with ethylene oxide (EO) to graft roughly 40 EO units (PEG-40) onto its free hydroxyl groups. This ethoxylation grafts long, hydrophilic polyoxyethylene chains onto the otherwise hydrophobic hydrogenated-castor-oil triester backbone, giving the molecule both a hydrophobic fatty-triester core and hydrophilic PEG arms — a classic non-ionic surfactant architecture.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '增溶能力从何而来', en: 'Where the solubilizing ability comes from' },
      explanation: {
        zh: '约40个环氧乙烷单元构成的长聚氧乙烯链在水中卷曲、包裹疏水性的氢化蓖麻油三酯核心，形成胶束状聚集体；胶束内部的疏水核可容纳香精、精油等小分子油溶性成分，外部的PEG链则维持整体在水中的分散性，这正是Clariant将其定位为"香精油、精油及活性油"增溶剂的结构基础。',
        en: 'The long polyoxyethylene chain built from roughly 40 EO units coils in water and wraps around the hydrophobic hydrogenated-castor-oil triester core, forming micelle-like aggregates; the hydrophobic core can accommodate small oil-soluble molecules such as fragrance and essential oils, while the outer PEG chains keep the whole aggregate dispersed in water — the structural basis for Clariant positioning it as a solubilizer for "active, essential and perfume oils."',
      },
    },
    {
      aspect: { zh: 'O/W乳化能力从何而来', en: 'Where the O/W emulsifying ability comes from' },
      explanation: {
        zh: '除增溶小分子油外，该分子也能在较大油滴的油水界面上排列：疏水三酯核心插入油相，庞大的PEG-40链段则伸展入水相，凭借聚氧乙烯链的位阻与水合作用降低界面张力、阻碍油滴聚并，因此除增溶剂功能外，Clariant也将其列为"特殊乳液的O/W乳化剂"。',
        en: 'Beyond solubilizing small oil molecules, the molecule can also orient at the oil-water interface of larger oil droplets: the hydrophobic triester core inserts into the oil phase while the bulky PEG-40 segment extends into the water phase, lowering interfacial tension and hindering droplet coalescence through the steric bulk and hydration of the polyoxyethylene chain — which is why, beyond its solubilizer role, Clariant also lists it as an "O/W emulsifier for special emulsions."',
      },
    },
    {
      aspect: { zh: '水-醇体系中的稳定性从何而来', en: 'Where the stability in water-alcohol systems comes from' },
      explanation: {
        zh: '聚氧乙烯链本身具有良好的水合能力，且不依赖离子电荷维持分散（非离子表面活性剂），因此在含醇的水溶液中不易因电荷屏蔽或pH变化而失效，这与供应商所述其"在水-醇溶液中稳定"的应用特性相符，也是其被用于免洗湿巾、液体皂等含醇配方的结构原因。',
        en: 'The polyoxyethylene chain hydrates well and, being a non-ionic surfactant, does not rely on ionic charge to stay dispersed, so it is less prone to failure from charge screening or pH shifts in alcohol-containing aqueous solutions — consistent with the supplier-described "stable in water-alcoholic solutions" application trait, and the structural reason it is used in leave-on wet wipes, liquid soaps, and other alcohol-containing formulas.',
      },
    },
  ],
  appearance: {
    zh: '蜡状外观',
    en: 'waxy appearance',
  },
  performance: {
    skinFeel: {
      zh: '供应商资料未提供具体肤感触感描述，暂标记为待确认',
      en: 'supplier documentation does not provide a specific tactile skin-feel description — flagged as unconfirmed',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'medium',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '兼具增溶剂与O/W乳化剂双重功能，尤其适合增溶香精、精油、活性油等少量油溶性成分',
      en: 'combines solubilizer and O/W emulsifier functions in one ingredient, particularly suited to solubilizing small amounts of oil-soluble ingredients such as fragrance, essential oils, and active oils',
    },
    {
      zh: '非离子结构，在水-醇溶液中稳定，且与大多数化妆品配方成分兼容（供应商数据）',
      en: 'non-ionic structure that is stable in water-alcoholic solutions and compatible with most other cosmetic formula ingredients (supplier data)',
    },
    {
      zh: '可再生碳指数（Renewable Carbon Index）约42%，活性物含量约100%（供应商数据），适用于淋浴产品、液体皂、洗发水、湿巾、护发素等多品类',
      en: 'Renewable Carbon Index of approximately 42% and active-substance content of approximately 100% (supplier data); suitable across shower products, liquid soap, shampoo, wet wipes, and hair conditioner categories',
    },
  ],
  weaknesses: [
    {
      zh: 'PEG类乙氧基化结构，与主打PEG-free定位的天然/洁净配方不兼容',
      en: 'a PEG-type ethoxylated structure, incompatible with natural/clean formulas positioned as PEG-free',
    },
    {
      zh: '公开可查的Clariant官方资料未列出具体HLB值与推荐用量，多数已发布的第三方数据表页面在本次研究中无法访问（付费墙/防爬虫拦截），数据完整度标记为partial',
      en: 'publicly available official Clariant material does not list a specific HLB value or recommended use level, and most third-party TDS-hosting pages were inaccessible in this research pass (paywalled/bot-blocked) — data completeness is marked partial',
    },
    {
      zh: '蜡状外观，室温下可能需要加热处理以便计量与分散，具体熔点未见公开数据',
      en: 'waxy in appearance; may require heating for metering and dispersion at room temperature, though a specific melting point is not documented in public sources',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '淋浴产品/液体皂', en: 'shower products / liquid soap' },
      notes: { zh: '供应商列出的核心应用场景之一', en: 'one of the core applications listed by the supplier' },
    },
    {
      system: { zh: '洗发水/护发素', en: 'shampoo / hair conditioner' },
    },
    {
      system: { zh: '免洗湿巾', en: 'wet wipes' },
      notes: { zh: '水-醇体系中的稳定性使其适合含醇湿巾配方', en: 'stability in water-alcohol systems suits alcohol-containing wet-wipe formulas' },
    },
  ],
  relatedIngredientSlugs: [],
  citations: [
    {
      id: 'clariant-emulsogen-hco040-official',
      supplier: 'Clariant',
      documentTitle: 'Emulsogen HCO 040 — Official Product Page',
      url: 'https://www.clariant.com/en/Solutions/Products/2013/12/09/18/26/Emulsogen-HCO-040',
      accessedDate: '2026-08-06',
      note: 'Directly fetched official Clariant product page. Used for INCI name (PEG-40 Hydrogenated Castor Oil), appearance ("waxy"), functions (O/W emulsifier for special emulsions; solubilizer for active/essential/perfume oils), applications (shower/liquid soap, shampoo, wet wipe, hair conditioner), Renewable Carbon Index (~42%), and active-substance content (~100%). Page did not list HLB or a recommended use level.',
    },
    {
      id: 'clariant-emulsogen-hco040-sgvita',
      supplier: 'Clariant',
      documentTitle: 'Emulsogen HCO 040 SG Vita — Official Product Page',
      url: 'https://www.clariant.com/en/Solutions/Products/2022/01/17/09/29/Emulsogen-HCO-040-SG-Vita',
      accessedDate: '2026-08-06',
      note: 'Directly fetched official Clariant page for a related segregated/bio-based supply-chain grade sharing the same INCI and functions; used to cross-check applications and functional description. This grade lists Renewable Carbon Index 100% (vs. 42% for the base grade above) — a supply-chain sourcing difference, not a structural difference, so the two are not treated as separate ingredient entries.',
    },
    {
      id: 'specialchem-emulsogen-search-summary',
      supplier: 'SpecialChem (cosmetics ingredient index, via web search)',
      documentTitle: 'Emulsogen® HCO 040 (Emulsifier) - Clariant - Technical Datasheet listing',
      url: 'https://www.specialchem.com/cosmetics/product/clariant-emulsogen-hco-040',
      accessedDate: '2026-08-06',
      note: 'Corroborating summary (INCI, O/W emulsifier + solubilizer function, target applications) found via search-engine indexing; direct WebFetch of the page returned HTTP 403 (bot protection), so this source was not independently opened.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'typicalUseLevel', 'performance.skinFeel', 'performance.pillingTendency', 'performance.suspensionStabilization'],
  lastUpdated: '2026-08-06',
})

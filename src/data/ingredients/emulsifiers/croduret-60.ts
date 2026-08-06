import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'croduret-60',
  category: 'emulsifier',
  inciName: 'PEG-60 Hydrogenated Castor Oil',
  nameZh: 'PEG-60氢化蓖麻油',
  tradeNames: [{ name: 'Croduret 60', supplier: 'Croda' }],
  chemicalClass: {
    zh: '氢化蓖麻油乙氧基化衍生物类非离子乳化剂/增溶剂',
    en: 'Ethoxylated hydrogenated castor oil non-ionic emulsifier/solubilizer',
  },
  chemicalStructureSummary: {
    zh: 'Croduret 60以氢化蓖麻油（蓖麻油甘油三酯中蓖麻油酸链上的不饱和双键经氢化饱和处理，成为蜡状、化学性质更稳定、无色无味的甘油三酯，区别于Etocas系列所用的未氢化液态蓖麻油）为起始原料，接枝约60摩尔环氧乙烷，形成一个PEG链/甘油三酯疏水锚比例远高于低摩尔数等级（如Croduret 40）或未氢化Etocas系列的多臂型非离子表活剂。',
    en: 'Croduret 60 starts from hydrogenated castor oil — a castor-oil triglyceride whose ricinoleic-acid double bonds have been saturated by hydrogenation, giving a waxy, more chemically stable, colorless/odorless triglyceride, unlike the unhydrogenated liquid castor oil used for the Etocas range — and grafts roughly 60 moles of ethylene oxide onto it. This gives a multi-armed nonionic surfactant with a much higher PEG-chain-to-triglyceride-anchor ratio than lower-mole grades (e.g. Croduret 40) or the unhydrogenated Etocas series.',
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '为何在如此高的乙氧基化度下选用氢化蓖麻油而非普通蓖麻油', en: 'Why hydrogenated castor oil (rather than plain castor oil) is used at this high ethoxylation level' },
      explanation: {
        zh: '氢化处理饱和了蓖麻油酸链上的双键，消除了易被氧化的反应位点，得到色泽、气味更稳定的蜡状甘油三酯锚；在60摩尔这样的高乙氧基化等级下，成品主要用作香精、精油等敏感活性物的增溶剂，若使用未氢化的疏水锚，其不饱和双键更易在储存期间氧化并带来酸败气味，影响所增溶活性物的气味稳定性——这是选用氢化原料的结构依据。',
        en: 'Hydrogenation saturates the double bonds along the ricinoleic-acid chain, removing oxidation-prone reactive sites and giving a color- and odor-stable waxy triglyceride anchor. At a high ethoxylation level like 60 moles, the finished molecule is mainly used as a solubilizer for sensitive actives (perfumes, essential oils); an unhydrogenated anchor would be more prone to oxidizing and developing rancid off-notes over shelf life, which would compromise the fragrance stability of the solubilized actives — the structural rationale for using the hydrogenated feedstock.',
      },
    },
    {
      aspect: { zh: '高HLB与强O/W增溶能力从何而来', en: 'Where the high HLB and strong O/W solubilizing power come from' },
      explanation: {
        zh: '约60摩尔的环氧乙烷接枝使亲水PEG链的质量远超疏水的氢化甘油三酯锚，将HLB推高至非离子表活剂中偏高的区间（二手数据库来源报告约16，未经Croda官方数据直接核实，见flaggedFields），这与其被确认可作为强效O/W乳化剂，在含醇量很低的体系中仍能有效增溶香精、精油及亲脂性活性物的功能相符。',
        en: 'With roughly 60 moles of ethylene oxide grafted on, the hydrophilic PEG mass far exceeds the lipophilic hydrogenated-triglyceride anchor, pushing HLB into the high end of the nonionic-surfactant range (a secondary database reports ~16, not independently confirmed via Croda\'s own published data — see flaggedFields). This is consistent with its confirmed role as a strong O/W emulsifier able to effectively solubilize perfumes, essential oils, and lipophilic actives even in systems with very little alcohol content.',
      },
    },
    {
      aspect: { zh: '与阴离子/阳离子/两性表活剂广泛相容从何而来', en: 'Where the broad compatibility across anionic/cationic/amphoteric surfactants comes from' },
      explanation: {
        zh: '整个分子（PEG链与酯键）均不带固定电荷，属完全非离子结构，因而不会与阴离子、阳离子或两性表活剂发生电荷层面的相互作用或沉淀，这是其被描述为在盐性、酸性或碱性表活剂体系中均具良好相容性的结构基础。',
        en: 'The entire molecule (PEG chains and ester linkages) carries no fixed charge — it is fully nonionic — so it does not undergo charge-based interaction or precipitation with anionic, cationic, or amphoteric surfactants. This is the structural basis for its described compatibility across salty, acidic, or alkaline surfactant systems.',
      },
    },
  ],
  hlb: 16,
  appearance: {
    zh: '类白色蜡状固体（25°C），5%水溶液pH约3.5-6.1（来自另一供应商同INCI产品的交叉参考，未经Croda官方数据直接核实，见flaggedFields）',
    en: 'off-white waxy solid at 25°C; a 5% aqueous solution has a pH of approximately 3.5-6.1 (cross-referenced from a different supplier\'s product of the same INCI, not independently confirmed against Croda\'s own data — see flaggedFields)',
  },
  performance: {
    skinFeel: {
      zh: '水溶性，具润肤/调理性能；主要作为增溶剂使用，肤感偏清爽',
      en: 'water-soluble, with emollient/conditioning character; used mainly as a solubilizer, giving a light, non-greasy skin feel',
    },
    pillingTendency: 'unknown',
    emulsificationAbility: 'high',
    suspensionStabilization: 'unknown',
  },
  strengths: [
    {
      zh: '对香精、精油及亲脂性活性物具强效增溶能力，即使在含醇量很低的体系中也适用',
      en: 'strong solubilizing power for perfumes, essential oils, and lipophilic actives, even in systems with very little alcohol content',
    },
    {
      zh: '完全非离子结构，与阴离子、阳离子、两性表活剂及盐性/酸性/碱性体系均具广泛相容性',
      en: 'a fully nonionic structure gives broad compatibility with anionic, cationic, and amphoteric surfactants across salty, acidic, or alkaline systems',
    },
    {
      zh: '预期具固有生物降解性，并标注清真认证',
      en: 'expected to be inherently biodegradable, and listed as Halal-certified',
    },
  ],
  weaknesses: [
    {
      zh: 'HLB处于非离子表活剂中偏高的区间，作为单一主乳化剂难以稳定高油相含量的丰润型膏霜，通常需低HLB脂溶性乳化剂复配',
      en: 'its comparatively high HLB makes it a poor stand-alone primary emulsifier for rich, high-oil-phase creams, which typically need a low-HLB lipophilic co-emulsifier',
    },
    {
      zh: '作为PEG型乙氧基化蓖麻油衍生物，与该类原料整体一样，需关注生产工艺中环氧乙烷/1,4-二噁烷等痕量杂质的合规控制（该类原料的通用监管化学考量，非Croda专属数据）',
      en: 'as a PEG-type ethoxylated castor-oil derivative, it shares the class-wide need to control trace ethylene-oxide/1,4-dioxane process impurities (a general regulatory-chemistry consideration for this ingredient class, not Croda-specific data)',
    },
    {
      zh: '精确熔点及Croda官方发布的HLB数值等完整数据未能通过公开渠道直接核实（Croda官方技术数据表需登录访问）',
      en: 'the precise melting point and Croda\'s own officially published HLB value could not be independently confirmed via public sources (Croda\'s official technical data sheet requires account login)',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '香精、精油及亲脂性活性物增溶体系', en: 'fragrance, essential-oil, and lipophilic-active solubilization systems' },
      notes: { zh: '尤其适用于含醇量低的体系', en: 'especially suited to systems with low alcohol content' },
    },
    {
      system: { zh: '沐浴/淋浴、香皂、洗发水及洁面产品', en: 'bath/shower, soap, shampoo, and facial-cleanser products' },
    },
    {
      system: { zh: '洗涤剂体系（增脂剂）及造型蜡润湿剂', en: 'detergent systems (superfatting agent) and styling-wax wetting agent' },
    },
  ],
  typicalUseLevel: { min: 1, max: 5, unit: '%' },
  relatedIngredientSlugs: ['etocas-30', 'polysorbate-80'],
  citations: [
    {
      id: 'crodabeauty-croduret-60-product-page',
      supplier: 'Croda Beauty',
      documentTitle: 'Croduret™ 60 | Croda Beauty (product page)',
      url: 'https://www.crodabeauty.com/en-gb/products/product/201-croduret_1_60',
      accessedDate: '2026-08-06',
      note: 'Directly fetched. Used for INCI name, chemical family (alkoxylated alcohols), functions (solubilizer, emulsifier), applications list (O/W emulsifier; perfume/essential-oil/lipophilic-active solubilizer; superfatting agent in detergent systems; wetting agent for styling waxes; bath/shower/soap, body care, facial cleansers, shampoos), biodegradability, and regional availability (Asia).',
    },
    {
      id: 'goodscentscompany-peg60-hco',
      supplier: 'The Good Scents Company (ingredient database)',
      documentTitle: 'peg-60 hydrogenated castor oil, CAS 61788-85-0 — data page',
      url: 'https://www.thegoodscentscompany.com/data/rw1305651.html',
      accessedDate: '2026-08-06',
      note: 'Directly fetched. Used for HLB (~16), assay range, and broad surfactant-compatibility description (works with nonionic/cationic/anionic surfactants; effective in salty, acidic, or alkaline systems). This is a general ingredient database entry for the INCI substance, not Croda\'s own Croduret 60 TDS, so figures are not guaranteed Croda-specific — see flaggedFields.',
    },
    {
      id: 'makingcosmetics-peg60-hco-crossref',
      supplier: 'MakingCosmetics',
      documentTitle: 'PEG-60 Hydrogenated Castor Oil — Product Data',
      url: 'https://www.makingcosmetics.com/Z-EMF-PEG60HYDCAST-01.html?lang=default',
      accessedDate: '2026-08-06',
      note: 'Directly fetched. Used for appearance ("off-white waxy solid"), pH of a 5% aqueous solution (3.5-6.1), and use-level cross-check (1-5%, consistent with the Croda applications-derived figure below). This is a different supplier\'s PEG-60 Hydrogenated Castor Oil product (same INCI, not Croda\'s own Croduret 60), used here only as a same-INCI cross-reference — see flaggedFields.',
    },
    {
      id: 'croduret60-aggregated-uselevel',
      supplier: 'Croda (aggregated via web-search summary of Croda applications data)',
      documentTitle: 'Croduret 60 — aggregated use-level and manufacturing data',
      accessedDate: '2026-08-06',
      note: 'The manufacturing description (obtained by reacting hydrogenated castor oil with ethylene oxide) and 1-5% recommended use level were found via a web-search summary of Croda application data; not independently confirmed by a direct fetch of a Croda-hosted numeric TDS in this session.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'appearance'],
  lastUpdated: '2026-08-06',
})

import { defineIngredient } from '../../../schema/defineIngredient'

export default defineIngredient({
  slug: 'cetearyl-glucoside-emulgade',
  category: 'emulsifier',
  inciName: 'Cetearyl Glucoside (and) Cetearyl Alcohol',
  nameZh: '鲸蜡硬脂基葡糖苷（和）鲸蜡硬脂醇',
  tradeNames: [{ name: 'Emulgade PL 68/50', supplier: 'BASF' }],
  chemicalClass: {
    zh: '烷基糖苷（APG）类非离子乳化剂',
    en: 'Alkyl polyglucoside (APG) non-ionic emulsifier',
  },
  chemicalStructureSummary: {
    zh: 'BASF的APG（烷基聚糖苷）自乳化蜡基体系，由鲸蜡硬脂基葡糖苷（C16-18脂肪醇与葡萄糖缩合而成的糖苷）与鲸蜡硬脂醇（同系脂肪醇，结构/助稳定组分）复配而成——与Seppic Montanov 68同属"脂肪醇+同链长糖苷"这一乳化剂家族，化学本质相近，但BASF版本的脂肪醇含量规格为45-50%，熔点约60-70°C，略低于Montanov 68。两者在水中共结晶形成层状液晶网络，是仿生细胞膜脂质排列的乳化蜡基。',
    en: "BASF's APG (alkyl polyglucoside) self-emulsifying wax system, blending Cetearyl Glucoside (a C16-18 fatty alcohol condensed with glucose) with Cetearyl Alcohol (the same-chain-length fatty alcohol, a structural/co-stabilizing component) — chemically the same emulsifier family as Seppic's Montanov 68 (fatty alcohol + same-chain-length glucoside), though BASF's version specifies a 45-50% fatty-alcohol content and a somewhat lower melting point (approx. 60-70°C) than Montanov 68. The two components co-crystallize in water into a lamellar liquid-crystal network, forming a biomimetic emulsifying wax base that resembles cell-membrane lipid organization.",
  },
  structureFunctionAnalysis: [
    {
      aspect: { zh: '乳化能力从何而来', en: 'Where the emulsification ability comes from' },
      explanation: {
        zh: '鲸蜡硬脂基葡糖苷的C16-18烷基尾链插入油相，葡萄糖头基通过多个羟基与水强烈氢键结合，界面张力显著下降；糖苷头基不依赖聚氧乙烯链而是靠糖环多羟基提供亲水性，复配后HLB约11，处于中高区间，赋予其较强的水包油乳化能力，与Montanov 68（HLB约10）非常接近但略偏亲水。',
        en: "Cetearyl Glucoside's C16-18 alkyl tail inserts into the oil phase while the glucose head hydrates strongly through multiple hydroxyl-driven hydrogen bonds, sharply lowering interfacial tension. Because the glucoside head's hydrophilicity comes from the sugar ring's multiple hydroxyls rather than an ethoxylate chain, the blend's HLB lands at roughly 11 — moderately high, and slightly more hydrophilic than Montanov 68 (HLB ~10) — giving it strong O/W emulsification ability.",
      },
    },
    {
      aspect: { zh: '稳定性与柔和肤感从何而来', en: 'Where the stability and mild skin feel come from' },
      explanation: {
        zh: '鲸蜡硬脂醇与鲸蜡硬脂基葡糖苷共用同一烷基链长，在水中共结晶排列成层状液晶（凝胶网络），该网络具屈服应力，物理性抑制油滴聚并，因此乳化剂本身兼具增稠/稳定功能；层状结构与皮肤脂质排列相似，被BASF定位为"极温和"的乳化蜡基，适合婴儿及敏感肌配方。',
        en: 'Cetearyl Alcohol and Cetearyl Glucoside share the same alkyl chain length, so they co-crystallize in water into a lamellar liquid-crystal gel network with intrinsic yield stress that physically suppresses droplet coalescence — giving the emulsifier itself a built-in thickening/stabilizing function. The lamellar structure resembling skin lipid organization is why BASF positions this as a "very mild" emulsifying wax base suited to baby and sensitive-skin formulas.',
      },
    },
    {
      aspect: { zh: '需热法乳化的原因', en: 'Why hot-process emulsification is required' },
      explanation: {
        zh: '产品以蜡状薄片/颗粒形式供应，熔点约60-70°C，只有加热使脂肪醇/糖苷组分完全熔融、两相温度匹配后才能在冷却过程中正确共结晶为层状液晶网络；若冷法添加，糖苷与脂肪醇无法充分共排列，乳化及稳定效果会明显下降。',
        en: 'The product is supplied as a waxy flake/pellet with a melting point of approximately 60-70°C. Only when both phases are heated until the fatty-alcohol/glucoside components fully melt and are temperature-matched can the correct lamellar liquid-crystal co-crystallization occur on cooling; added cold, the glucoside and fatty alcohol cannot co-align properly, and both emulsification and stability drop noticeably.',
      },
    },
  ],
  hlb: 11,
  appearance: {
    zh: '象牙色蜡状薄片/颗粒，熔点约60-70°C',
    en: 'ivory-colored waxy flakes/pellets, melting point approx. 60-70°C',
  },
  performance: {
    skinFeel: {
      zh: '柔和、丝滑，涂抹后肤感清爽不厚重，适合追求温和感的配方',
      en: 'mild and silky skin feel, comfortable rather than heavy on application, suited to formulas emphasizing gentleness',
    },
    pillingTendency: 'low',
    emulsificationAbility: 'high',
    suspensionStabilization: 'high',
  },
  strengths: [
    {
      zh: 'PEG-free、非离子APG乳化剂，天然可再生原料来源，通过COSMOS、NATRUE、ECOCERT、BDIH等天然认证',
      en: 'PEG-free, non-ionic APG emulsifier from natural renewable feedstocks; approved under COSMOS, NATRUE, ECOCERT, and BDIH natural certifications',
    },
    {
      zh: '定位"极温和"自乳化蜡基，可不含防腐剂配方使用，广泛用于婴儿护理、敏感肌及面部护理产品',
      en: 'positioned as a "very mild" self-emulsifying wax base, usable in preservative-free systems; widely used in baby care, sensitive-skin, and facial care products',
    },
    {
      zh: '与Seppic Montanov 68同属脂肪醇+糖苷体系，配方师可视供应链情况互为替代或组合验证',
      en: 'belongs to the same fatty-alcohol + glucoside chemistry family as Seppic Montanov 68, giving formulators a supply-chain-flexible alternative or cross-validation option',
    },
  ],
  weaknesses: [
    {
      zh: '蜡状固体，需加热两相进行热法乳化，工艺能耗高于液态或冷法乳化剂',
      en: 'a waxy solid requiring hot-process emulsification for both phases, more energy-intensive than liquid or cold-process alternatives',
    },
    {
      zh: 'HLB及熔点等关键参数目前仅能通过第二手数据（经销商页面/搜索摘要）确认，未能直接抓取BASF官方TDS原文核实',
      en: 'key parameters such as HLB and melting point are currently confirmed only via secondary sources (distributor pages/search summaries); the official BASF TDS itself could not be directly fetched for first-hand verification',
    },
    {
      zh: '与Montanov 68高度相近，配方切换时仍需小试验证黏度、稳定性等实际表现差异',
      en: 'very close in chemistry to Montanov 68, but bench testing is still needed when switching between the two to confirm real-world differences in viscosity and stability',
    },
  ],
  suitableSystems: [
    {
      system: { zh: '防晒产品', en: 'sun care (protection, after-sun, self-tanning)' },
      notes: { zh: 'BASF官方应用清单中的重点场景之一', en: 'a key listed application in BASF\'s own applications list' },
    },
    {
      system: { zh: '面部/身体/婴儿护理乳霜与乳液', en: 'facial / body / baby care creams and lotions' },
      notes: {
        zh: '推荐用量3-6%，也用于抗老及敏感肌配方',
        en: 'recommended use level 3-6%; also used in anti-aging and sensitive-skin formulas',
      },
    },
  ],
  typicalUseLevel: { min: 3, max: 6, unit: '%' },
  relatedIngredientSlugs: ['montanov-68', 'olivem-1000', 'montanov-202'],
  citations: [
    {
      id: 'basf-care360-emulgadepl6850',
      supplier: 'BASF',
      documentTitle: 'Emulgade PL 68/50 — Product Finder Page (Care 360°)',
      url: 'https://care360.basf.com/global/en/Product-Finder/30527866',
      accessedDate: '2026-08-05',
      note: 'BASF\'s own product-finder page confirmed INCI order (Cetearyl Glucoside (and) Cetearyl Alcohol) and product type; the full technical data sheet (HLB, melting point, hydroxyl number) requires Care 360° portal login and was not accessible.',
    },
    {
      id: 'trulux-emulgadepl6850',
      supplier: 'Trulux',
      documentTitle: 'Emulgade PL 68/50 — Product Page',
      url: 'https://trulux.com/products/emulgade-pl-68-50/',
      accessedDate: '2026-08-05',
      note: 'Distributor page used to confirm use level (3-6%), applications (sun/face/body/baby care, decorative cosmetics), and performance descriptors (mildness, preservative-free, softness).',
    },
    {
      id: 'search-emulgadepl6850-hlb',
      supplier: 'SpecialChem / UL Prospector (indexed excerpts)',
      documentTitle: 'Emulgade PL 68/50 — Technical Datasheet (search-indexed summary)',
      url: 'https://www.specialchem.com/cosmetics/product/basf-emulgade-pl-68-50',
      accessedDate: '2026-08-05',
      note: 'HLB=11, melting point 60-70°C, fatty alcohol content 45-50%, and hydroxyl number 380-430 found via web search indexing of SpecialChem/UL Prospector pages; direct fetch of both pages returned HTTP 403, so these figures are not independently confirmed first-hand — see flaggedFields.',
    },
  ],
  dataCompleteness: 'partial',
  flaggedFields: ['hlb', 'appearance'],
  lastUpdated: '2026-08-05',
})
